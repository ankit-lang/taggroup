'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { generateBriefing } from '@/lib/briefing/generate'
import { BriefingRow, BriefingSchema } from '@/lib/briefing/schema'
import { briefingPath, nextRef, saveBriefing, sendBriefing, todayIST } from '@/lib/briefing/service'
import { renderBriefingEmail, siteUrl } from '@/lib/briefing/email-template'
import { sendEmail } from '@/lib/email'
import { BUNDLED_BRIEFINGS } from '@/data/briefings'

type Result<T = undefined> = { success: true; message?: string; data?: T } | { success: false; error: string }

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { supabase, error: 'Unauthorized' }
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile && profile.role?.toLowerCase() === 'user') return { supabase, error: 'Forbidden' }
  return { supabase, error: null }
}

function errMsg(e: unknown) {
  return e instanceof Error ? e.message : String(e)
}

function revalidate(slug?: string) {
  revalidatePath('/admin/briefings')
  revalidatePath('/insights/briefings')
  revalidatePath('/insights')
  if (slug) revalidatePath(briefingPath(slug))
}

// ── Public reads (RLS limits these to published rows for visitors) ─────────

export async function getPublishedBriefings(limit = 60) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('briefings')
    .select('id, slug, ref, briefing_date, title, content')
    .eq('status', 'published')
    .order('briefing_date', { ascending: false })
    .limit(limit)
  if (error) console.error('getPublishedBriefings:', error.message)

  // Merge DB rows with the bundled issues; the DB wins on the same date.
  const rows = (data ?? []) as Pick<BriefingRow, 'id' | 'slug' | 'ref' | 'briefing_date' | 'title' | 'content'>[]
  const slugs = new Set(rows.map(r => r.slug))
  return [...rows, ...BUNDLED_BRIEFINGS.filter(b => !slugs.has(b.slug))]
    .sort((a, b) => b.briefing_date.localeCompare(a.briefing_date))
    .slice(0, limit)
}

export async function getPublishedBriefing(slug: string) {
  const supabase = await createClient()
  const { data } = await supabase.from('briefings').select('*').eq('slug', slug).eq('status', 'published').maybeSingle()
  return (data as BriefingRow) ?? BUNDLED_BRIEFINGS.find(b => b.slug === slug) ?? null
}

// ── Admin ───────────────────────────────────────────────────────────────────

export async function listBriefings(): Promise<BriefingRow[]> {
  const { supabase, error } = await requireStaff()
  if (error) return []
  const { data } = await supabase.from('briefings').select('*').order('briefing_date', { ascending: false }).limit(100)
  return (data as BriefingRow[]) ?? []
}

export async function getSuggestedRef(date: string) {
  const { supabase, error } = await requireStaff()
  if (error) return ''
  return nextRef(supabase, date)
}

/** Runs the AI pipeline for a date and saves the result as a draft. */
export async function generateBriefingDraft(date?: string): Promise<Result<BriefingRow>> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  try {
    const d = date || todayIST()
    const { data: existing } = await supabase.from('briefings').select('ref, sent_at').eq('slug', d).maybeSingle()
    if (existing?.sent_at) return { success: false, error: `The briefing for ${d} has already been sent.` }
    const ref = existing?.ref || (await nextRef(supabase, d))
    const briefing = await generateBriefing({ date: d, ref })
    const row = await saveBriefing(supabase, briefing, { status: 'draft', source: 'ai' })
    revalidate(row.slug)
    return { success: true, message: `Draft generated for ${d}. Review it before publishing.`, data: row }
  } catch (e) {
    return { success: false, error: errMsg(e) }
  }
}

/** Saves a briefing from JSON (manual import or edits to an AI draft). Keeps the current status. */
export async function saveBriefingJson(json: string, status: 'draft' | 'published' = 'draft'): Promise<Result<BriefingRow>> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  let parsed
  try {
    parsed = BriefingSchema.safeParse(JSON.parse(json))
  } catch (e) {
    return { success: false, error: `Invalid JSON: ${errMsg(e)}` }
  }
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join('\n') }
  }
  try {
    const row = await saveBriefing(supabase, parsed.data, { status, source: 'manual' })
    revalidate(row.slug)
    return { success: true, message: 'Saved.', data: row }
  } catch (e) {
    return { success: false, error: errMsg(e) }
  }
}

export async function setBriefingStatus(id: string, status: 'draft' | 'published'): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const { data, error: dbError } = await supabase.from('briefings').update({ status }).eq('id', id).select('slug').single()
  if (dbError) return { success: false, error: dbError.message }
  revalidate(data.slug)
  return { success: true, message: status === 'published' ? 'Published on the website.' : 'Unpublished.' }
}

/** Publishes (if needed) and e-mails the briefing to all active subscribers. */
export async function publishAndSendBriefing(id: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const { data: row, error: dbError } = await supabase.from('briefings').select('*').eq('id', id).single()
  if (dbError || !row) return { success: false, error: dbError?.message || 'Not found' }
  if (row.sent_at) return { success: false, error: 'This briefing has already been sent.' }

  if (row.status !== 'published') {
    await supabase.from('briefings').update({ status: 'published' }).eq('id', id)
    row.status = 'published'
  }
  try {
    const result = await sendBriefing(supabase, row as BriefingRow)
    revalidate(row.slug)
    if (result.sent === 0 && result.failed === 0) return { success: false, error: 'Published, but there are no active subscribers.' }
    return {
      success: true,
      message: `Published and sent to ${result.sent} subscriber(s)${result.failed ? `, ${result.failed} failed` : ''}.`,
    }
  } catch (e) {
    return { success: false, error: errMsg(e) }
  }
}

export async function sendTestBriefing(id: string, to: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const { data: row } = await supabase.from('briefings').select('*').eq('id', id).single()
  if (!row) return { success: false, error: 'Not found' }
  const res = await sendEmail({
    to,
    subject: `[TEST] ${row.title}`,
    html: renderBriefingEmail(row.content, { webUrl: `${siteUrl()}${briefingPath(row.slug)}`, unsubscribeUrl: null }),
  })
  return res.success ? { success: true, message: `Test sent to ${to}.` } : { success: false, error: 'Failed to send test e-mail.' }
}

export async function deleteBriefing(id: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const { data, error: dbError } = await supabase.from('briefings').delete().eq('id', id).select('slug').single()
  if (dbError) return { success: false, error: dbError.message }
  revalidate(data.slug)
  return { success: true, message: 'Deleted.' }
}

/** E-mail HTML for the admin preview iframe. */
export async function previewBriefingHtml(json: string): Promise<Result<string>> {
  const { error } = await requireStaff()
  if (error) return { success: false, error }
  try {
    const parsed = BriefingSchema.parse(JSON.parse(json))
    return { success: true, data: renderBriefingEmail(parsed, { webUrl: '#', unsubscribeUrl: '#' }) }
  } catch (e) {
    return { success: false, error: errMsg(e) }
  }
}
