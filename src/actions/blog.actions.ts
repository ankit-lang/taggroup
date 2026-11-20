'use server'

import { createClient } from '@/lib/supabase/server'
import { requireAdmin, type AdminRole } from '@/lib/auth/admin'
import { revalidatePath } from 'next/cache'
import { blogStatus, fromIstInputValue, slugify, type BlogStatus } from '@/lib/blog-schedule'

const MIGRATION_HINT = ' — run supabase/migrations/06_blog_editing_scheduling.sql in the Supabase SQL editor.'

type Supabase = Awaited<ReturnType<typeof createClient>>

export type BlogSaveResult =
  | { success: true; message: string; data: { id: string; slug: string; status: BlogStatus; published_at: string | null } }
  | { success: false; error: string }

/* ------------------------------------------------------------------ */
/* Public reads — only published articles whose date has arrived.     */
/* ------------------------------------------------------------------ */

/**
 * Visibility levels, newest schema first. If a migration hasn't been applied yet the
 * query fails on the missing column and we retry with the previous level, so the
 * public blog never goes blank during a rollout.
 *  2 = not trashed + date reached (06 + 07)   1 = date reached (06)   0 = legacy
 */
type Level = 0 | 1 | 2
function missingColumn(error: { message?: string } | null) {
  return !!error?.message && /published_at|deleted_at/i.test(error.message)
}

async function withFallback<T>(run: (level: Level) => PromiseLike<{ data: T; error: { message?: string } | null }>) {
  let level: Level = 2
  let res = await run(level)
  while (missingColumn(res.error) && level > 0) {
    level = (level - 1) as Level
    res = await run(level)
  }
  return res
}

export async function getBlogs({ search = '', category = '', sort = 'desc' }) {
  const supabase = await createClient()

  const { data, error } = await withFallback((level) => {
    let query = supabase.from('blogs').select(`*, profiles(role)`).eq('status', 'published')
    if (level >= 1) query = query.lte('published_at', new Date().toISOString())
    if (level >= 2) query = query.is('deleted_at', null)
    if (search) query = query.ilike('title', `%${search}%`)
    if (category && category !== 'All') query = query.eq('category', category)
    return query.order(level >= 1 ? 'published_at' : 'created_at', { ascending: sort === 'asc' })
  })
  if (error) {
    console.error('Error fetching blogs:', error.message || error)
    return []
  }
  return data ?? []
}

export async function getBlogBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await withFallback((level) => {
    let q = supabase.from('blogs').select('*').eq('slug', slug).eq('status', 'published')
    if (level >= 1) q = q.lte('published_at', new Date().toISOString())
    if (level >= 2) q = q.is('deleted_at', null)
    return q.maybeSingle()
  })

  if (error) {
    console.error('Error fetching blog:', error)
    return null
  }
  return data
}

/** Current slug for an article whose URL was changed (old slug → new), or null. */
export async function getBlogRedirectSlug(oldSlug: string): Promise<string | null> {
  const supabase = await createClient()
  const { data: redirect } = await supabase.from('blog_redirects').select('blog_id').eq('old_slug', oldSlug).maybeSingle()
  if (!redirect) return null
  const { data: blog } = await supabase
    .from('blogs')
    .select('slug')
    .eq('id', redirect.blog_id)
    .is('deleted_at', null)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .maybeSingle()
  return blog?.slug && blog.slug !== oldSlug ? blog.slug : null
}

/* ------------------------------------------------------------------ */
/* Admin                                                               */
/* ------------------------------------------------------------------ */

async function requireStaff(min: AdminRole = 'editor'): Promise<{ supabase: Supabase; userId: string; email: string } | { error: string }> {
  const admin = await requireAdmin(min)
  if ('error' in admin) return admin
  return { supabase: admin.supabase, userId: admin.userId, email: admin.email }
}

export async function getBlogForEdit(id: string) {
  const auth = await requireStaff()
  if ('error' in auth) return { blog: null, error: auth.error }
  const { data, error } = await auth.supabase.from('blogs').select('*').eq('id', id).maybeSingle()
  if (error) return { blog: null, error: error.message }
  return { blog: data, error: data ? null : 'Article not found.' }
}

/** Picks a slug not used by another article (or reserved as another article's old URL). */
async function uniqueSlug(supabase: Supabase, wanted: string, ownId?: string) {
  const base = wanted || `article-${Date.now()}`
  for (let n = 1; n < 50; n++) {
    const candidate = n === 1 ? base : `${base}-${n}`
    let q = supabase.from('blogs').select('id').eq('slug', candidate)
    if (ownId) q = q.neq('id', ownId)
    const { data: taken } = await q.limit(1)
    if (taken?.length) continue
    const { data: redirect } = await supabase.from('blog_redirects').select('blog_id').eq('old_slug', candidate).maybeSingle()
    if (redirect && redirect.blog_id !== ownId) continue
    return candidate
  }
  return `${base}-${Date.now()}`
}

function readForm(formData: FormData) {
  const get = (k: string) => ((formData.get(k) as string | null) ?? '').trim()
  return {
    title: get('title'),
    slug: slugify(get('slug')),
    content: (formData.get('content') as string | null) ?? '',
    category: get('category') || 'General',
    image_url: get('image_url') || null,
    excerpt: get('excerpt') || null,
    seo_title: get('seo_title') || null,
    meta_description: get('meta_description') || null,
    tags: [...new Set(get('tags').split(',').map((t) => t.trim()).filter(Boolean))].slice(0, 20),
    intent: get('intent') === 'draft' ? 'draft' : 'publish',
    mode: get('publish_mode') === 'schedule' ? 'schedule' : 'now',
    scheduleAt: get('published_at'),
  }
}

/**
 * Works out status + published_at.
 *  - Publish now: now (an already-live article keeps its original date when edited).
 *  - Schedule:    the chosen IST date — future → scheduled, past → live immediately, dated in the past.
 *  - Draft:       keeps the chosen / existing date for later.
 */
function resolvePublishing(
  f: ReturnType<typeof readForm>,
  existing?: { status?: string | null; published_at?: string | null }
): { status: 'draft' | 'published'; published_at: string | null } | { error: string } {
  const now = new Date()
  let chosen: string | null = null
  if (f.mode === 'schedule') {
    chosen = fromIstInputValue(f.scheduleAt)
    if (!chosen) return { error: 'Pick a valid publishing date and time.' }
  }

  if (f.intent === 'draft') return { status: 'draft', published_at: chosen ?? existing?.published_at ?? null }

  if (chosen) return { status: 'published', published_at: chosen }
  const wasLive = existing && blogStatus(existing, now) === 'published'
  return { status: 'published', published_at: wasLive && existing?.published_at ? existing.published_at : now.toISOString() }
}

function describe(status: BlogStatus) {
  return status === 'scheduled' ? 'scheduled' : status === 'published' ? 'published' : 'saved as draft'
}

function revalidateBlog(...slugs: (string | null | undefined)[]) {
  revalidatePath('/blog')
  revalidatePath('/insights')
  revalidatePath('/admin/blog')
  for (const s of slugs) if (s) revalidatePath(`/blog/${s}`)
}

function dbError(message: string, _trash = false) {
  if (/deleted_at|deleted_by/i.test(message)) return message + ' — run supabase/migrations/07_admin_access_control.sql in the Supabase SQL editor.'
  return /published_at|excerpt|seo_title|meta_description|tags|updated_at|blog_redirects/i.test(message)
    ? message + MIGRATION_HINT
    : message
}

export async function createBlogPost(formData: FormData): Promise<BlogSaveResult> {
  const auth = await requireStaff()
  if ('error' in auth) return { success: false, error: auth.error }
  const { supabase, userId } = auth

  const f = readForm(formData)
  if (!f.title || !f.content || f.content === '<p></p>') return { success: false, error: 'Title and content are required.' }

  const pub = resolvePublishing(f)
  if ('error' in pub) return { success: false, error: pub.error }

  const slug = await uniqueSlug(supabase, f.slug || slugify(f.title))

  const { data, error } = await supabase
    .from('blogs')
    .insert([{
      title: f.title, slug, content: f.content, category: f.category, image_url: f.image_url,
      excerpt: f.excerpt, seo_title: f.seo_title, meta_description: f.meta_description, tags: f.tags,
      author_id: userId, status: pub.status, published_at: pub.published_at,
    }])
    .select('id, slug, status, published_at')
    .single()

  if (error || !data) {
    console.error(error)
    return { success: false, error: dbError(error?.message || 'Could not save the article.') }
  }

  revalidateBlog(slug)
  const status = blogStatus(data)
  return { success: true, message: `Article ${describe(status)}.`, data: { ...data, status } }
}

export async function updateBlogPost(id: string, formData: FormData): Promise<BlogSaveResult> {
  const auth = await requireStaff()
  if ('error' in auth) return { success: false, error: auth.error }
  const { supabase } = auth

  const { data: existing, error: loadError } = await supabase
    .from('blogs')
    .select('id, slug, status, published_at')
    .eq('id', id)
    .maybeSingle()
  if (loadError) return { success: false, error: dbError(loadError.message) }
  if (!existing) return { success: false, error: 'Article not found (it may have been deleted).' }

  const f = readForm(formData)
  if (!f.title || !f.content || f.content === '<p></p>') return { success: false, error: 'Title and content are required.' }

  const pub = resolvePublishing(f, existing)
  if ('error' in pub) return { success: false, error: pub.error }

  const wanted = f.slug || existing.slug || slugify(f.title)
  const slug = wanted === existing.slug ? existing.slug : await uniqueSlug(supabase, wanted, id)

  const { data, error } = await supabase
    .from('blogs')
    .update({
      title: f.title, slug, content: f.content, category: f.category, image_url: f.image_url,
      excerpt: f.excerpt, seo_title: f.seo_title, meta_description: f.meta_description, tags: f.tags,
      status: pub.status, published_at: pub.published_at, updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select('id, slug, status, published_at')
    .maybeSingle()

  if (error) return { success: false, error: dbError(error.message) }
  if (!data) return { success: false, error: 'The database did not allow this change' + MIGRATION_HINT }

  // URL changed: keep the old link working (301 → new URL). Also free the new slug
  // if it was itself an old URL of this article (renaming back).
  if (existing.slug && existing.slug !== slug) {
    await supabase.from('blog_redirects').delete().eq('old_slug', slug)
    const { error: redirectError } = await supabase
      .from('blog_redirects')
      .upsert({ old_slug: existing.slug, blog_id: id }, { onConflict: 'old_slug' })
    if (redirectError) {
      console.error('Blog redirect not saved:', redirectError)
      revalidateBlog(existing.slug, slug)
      const status = blogStatus(data)
      return {
        success: true,
        message: `Article ${describe(status)}, but the old URL could not be redirected: ${dbError(redirectError.message)}`,
        data: { ...data, status },
      }
    }
  }

  revalidateBlog(existing.slug, slug)
  const status = blogStatus(data)
  const urlNote = existing.slug !== slug ? ` New URL: /blog/${slug} (the old URL redirects to it).` : ''
  return { success: true, message: `Article updated and ${describe(status)}.${urlNote}`, data: { ...data, status } }
}

/** "Delete" moves an article to the Trash (any staff). It disappears from the site but can be restored. */
export async function deleteBlogPost(id: string, _formData?: FormData) {
  const auth = await requireStaff('editor')
  if ('error' in auth) return { success: false, error: auth.error }

  const { data, error } = await auth.supabase
    .from('blogs')
    .update({ deleted_at: new Date().toISOString(), deleted_by: auth.email })
    .eq('id', id)
    .select('slug')
    .maybeSingle()
  if (error) return { success: false, error: dbError(error.message, true) }
  if (!data) return { success: false, error: 'Article not found, or you do not have permission.' }

  revalidateBlog(data.slug)
  return { success: true }
}

export async function restoreBlogPost(id: string, _formData?: FormData) {
  const auth = await requireStaff('editor')
  if ('error' in auth) return { success: false, error: auth.error }

  const { data, error } = await auth.supabase
    .from('blogs')
    .update({ deleted_at: null, deleted_by: null })
    .eq('id', id)
    .select('slug')
    .maybeSingle()
  if (error) return { success: false, error: dbError(error.message, true) }
  if (!data) return { success: false, error: 'Article not found, or you do not have permission.' }

  revalidateBlog(data.slug)
  return { success: true }
}

/** Permanent delete — Super Admins only, and only from the Trash. */
export async function deleteBlogPermanently(id: string, _formData?: FormData) {
  const auth = await requireStaff('super_admin')
  if ('error' in auth) return { success: false, error: auth.error }

  const { data, error } = await auth.supabase
    .from('blogs')
    .delete()
    .eq('id', id)
    .not('deleted_at', 'is', null)
    .select('id')
  if (error) return { success: false, error: error.message }
  if (!data?.length) return { success: false, error: 'Only articles in the Trash can be deleted permanently.' }

  revalidateBlog()
  return { success: true }
}
