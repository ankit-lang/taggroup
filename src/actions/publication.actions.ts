'use server'

import { requireAdmin } from '@/lib/auth/admin'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { deleteCloudinaryFile } from '@/lib/cloudinary'

export async function getPublications({ search = '', category = '', sort = 'desc' }) {
  const supabase = await createClient()
  
  let query = supabase.from('publications').select('*').eq('status', 'published')
  
  if (search) {
    query = query.ilike('title', `%${search}%`)
  }
  
  if (category && category !== 'All') {
    query = query.eq('category', category)
  }

  query = query.order('created_at', { ascending: sort === 'asc' })

  const { data, error } = await query
  if (error) {
    console.error('Error fetching publications:', error.message || error)
    return []
  }
  return data
}

export async function getPublicationBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('publications').select('*').eq('slug', slug).single()
  
  if (error) {
    console.error('Error fetching publication:', error)
    return null
  }
  return data
}

export async function createPublication(formData: FormData) {
  const auth = await requireAdmin('editor')
  if ('error' in auth) return { success: false, error: auth.error }
  const { supabase, userId } = auth
  const user = { id: userId }

  // Extract data
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string || 'General'
  const status = formData.get('status') as string || 'published'
  const image_url = formData.get('image_url') as string || null
  const pdf_url = formData.get('pdf_url') as string || null
  const meta_title = formData.get('meta_title') as string || title
  const meta_description = formData.get('meta_description') as string || ''
  const meta_keywords = formData.get('meta_keywords') as string || ''
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  if (!title || !content) return { success: false, error: 'Title and content are required.' }

  // Insert. If the database is missing an optional column (e.g. pdf_url before
  // supabase/migrations/04_publications_pdf_url.sql is run), save without it
  // instead of failing, and warn the admin.
  const row: Record<string, unknown> = {
    title,
    slug,
    content,
    category,
    image_url,
    pdf_url,
    meta_title,
    meta_description,
    meta_keywords,
    author_id: user.id,
    status,
  }
  const OPTIONAL = ['pdf_url', 'image_url', 'meta_title', 'meta_description', 'meta_keywords']
  const dropped: string[] = []
  let data = null
  let error = null
  for (let attempt = 0; attempt <= OPTIONAL.length; attempt++) {
    ;({ data, error } = await supabase.from('publications').insert([row]).select('*'))
    const missing = error?.message.match(/Could not find the '(\w+)' column/)?.[1]
    if (!missing || !OPTIONAL.includes(missing) || !(missing in row)) break
    delete row[missing]
    dropped.push(missing)
  }

  if (error) {
    console.error(error)
    return { success: false, error: error.message }
  }

  revalidatePath('/publications')
  revalidatePath('/admin/publications')

  const warning = dropped.length
    ? `Published, but the database has no ${dropped.join(', ')} column, so ${dropped.includes('pdf_url') ? 'the PDF link was' : 'those fields were'} not saved. Run supabase/migrations/04_publications_pdf_url.sql in Supabase, then edit the publication to add it.`
    : undefined
  return { success: true, data, warning }
}

export async function deletePublication(id: string) {
  const auth = await requireAdmin('editor')
  if ('error' in auth) return { success: false, error: auth.error }
  const supabase = auth.supabase

  // Remember the files before the row is gone
  const { data: existing } = await supabase.from('publications').select('image_url, pdf_url').eq('id', id).maybeSingle()

  const { error } = await supabase.from('publications').delete().eq('id', id)
  if (error) return { success: false, error: error.message }

  revalidatePath('/publications')
  revalidatePath('/admin/publications')

  // Then remove its PDF and cover image from Cloudinary (only after the delete succeeded)
  const files = [existing?.pdf_url, existing?.image_url].filter(Boolean) as string[]
  const results = await Promise.all(files.map(f => deleteCloudinaryFile(f)))
  const failed = results.filter(r => !r.ok)
  if (failed.length) {
    console.error('Cloudinary cleanup failed:', failed)
    return { success: true, warning: `Publication deleted, but ${failed.length} file(s) could not be removed from Cloudinary (${failed.map(f => f.error).join('; ')}). Delete them manually in the Media Library.` }
  }

  return { success: true }
}
