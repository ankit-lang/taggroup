'use server'

import { requireAdmin } from '@/lib/auth/admin'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { hasGroup, LANGUAGE_GROUPS, NEWSLETTER_GROUPS, mergeGroups, normaliseGroup, parseEmailList, toGroupList } from '@/lib/subscriber-groups'

export type Subscriber = {
  id: string
  email: string
  status: string
  groups: string[]
  created_at: string | null
}

export type GroupSummary = { name: string; active: number; total: number }

type Result = { success: true; message: string } | { success: false; error: string }

async function requireStaff() {
  // Subscribers are personal data → Super Admins only.
  const auth = await requireAdmin('super_admin')
  if ('error' in auth) return { supabase: await createClient(), error: auth.error }
  return { supabase: auth.supabase, error: null }
}

const PERMISSION_ERROR = 'The database refused the change. Run supabase/migrations/03_subscriber_groups.sql in Supabase so admins can edit subscribers.'

/** Updates one subscriber's groups; reports RLS-blocked (0-row) updates as errors. */
async function setGroups(supabase: Awaited<ReturnType<typeof createClient>>, id: string, categories: string[]) {
  const { data, error } = await supabase.from('subscribers').update({ categories }).eq('id', id).select('id')
  if (error) return error.message
  if (!data?.length) return PERMISSION_ERROR
  return null
}

function done() {
  revalidatePath('/admin/subscribers')
  revalidatePath('/admin/newsletter')
}

/** All subscribers plus a per-group summary (language groups always listed). */
export async function getSubscribersOverview(): Promise<{ subscribers: Subscriber[]; groups: GroupSummary[]; error?: string }> {
  const { supabase, error } = await requireStaff()
  if (error) return { subscribers: [], groups: [], error }

  const { data, error: dbError } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5000)
  if (dbError) return { subscribers: [], groups: [], error: dbError.message }

  const subscribers: Subscriber[] = (data || []).map((r: Record<string, unknown>) => ({
    id: String(r.id),
    email: String(r.email),
    status: String(r.status || 'active'),
    groups: toGroupList(r.categories),
    created_at: (r.created_at as string) ?? null,
  }))

  const map = new Map<string, GroupSummary>()
  // Built-in groups are always listed, even before anyone joins them.
  for (const name of [...Object.values(LANGUAGE_GROUPS), ...NEWSLETTER_GROUPS]) map.set(name.toLowerCase(), { name, active: 0, total: 0 })
  for (const s of subscribers) {
    for (const g of s.groups) {
      const k = g.toLowerCase()
      const entry = map.get(k) ?? { name: g, active: 0, total: 0 }
      entry.total++
      if (s.status === 'active') entry.active++
      map.set(k, entry)
    }
  }
  // Order: language groups, then the sign-up newsletters (form order), then custom groups A–Z.
  const builtIn = [...Object.values(LANGUAGE_GROUPS), ...NEWSLETTER_GROUPS].map(n => n.toLowerCase())
  const rank = (n: string) => {
    const i = builtIn.indexOf(n.toLowerCase())
    return i === -1 ? builtIn.length : i
  }
  const groups = [...map.values()].sort((a, b) => rank(a.name) - rank(b.name) || a.name.localeCompare(b.name))
  return { subscribers, groups }
}

/**
 * Adds e-mails to a group. Unknown addresses are created as active
 * subscribers; existing ones keep their other groups.
 */
export async function addEmailsToGroup(emailsText: string, groupName: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const group = normaliseGroup(groupName)
  if (!group) return { success: false, error: 'Enter a group name.' }
  const emails = parseEmailList(emailsText)
  if (!emails.length) return { success: false, error: 'No valid e-mail addresses found.' }

  const { data: existing, error: dbError } = await supabase.from('subscribers').select('id, email, categories').in('email', emails)
  if (dbError) return { success: false, error: dbError.message }

  let updated = 0, created = 0
  const failures: string[] = []
  for (const row of existing || []) {
    if (hasGroup(row.categories, group)) continue
    const e = await setGroups(supabase, row.id, mergeGroups(row.categories, [group]))
    if (e) failures.push(`${row.email}: ${e}`)
    else updated++
  }
  const known = new Set((existing || []).map(r => String(r.email).toLowerCase()))
  const fresh = emails.filter(e => !known.has(e))
  if (fresh.length) {
    const { error: e } = await supabase
      .from('subscribers')
      .insert(fresh.map(email => ({ email, categories: [group], status: 'active' })))
    if (e) failures.push(`new subscribers: ${e.message}`)
    else created = fresh.length
  }
  done()
  if (failures.length) return { success: false, error: `Some changes failed:\n${failures.join('\n')}` }
  const already = emails.length - updated - created
  return {
    success: true,
    message: `“${group}”: ${created} new subscriber(s) created, ${updated} existing added${already ? `, ${already} already in the group` : ''}.`,
  }
}

export async function removeFromGroup(ids: string[], groupName: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const group = normaliseGroup(groupName)
  const { data, error: dbError } = await supabase.from('subscribers').select('id, categories').in('id', ids)
  if (dbError) return { success: false, error: dbError.message }
  let n = 0
  for (const row of data || []) {
    if (!hasGroup(row.categories, group)) continue
    const next = toGroupList(row.categories).filter(g => g.toLowerCase() !== group.toLowerCase())
    const e = await setGroups(supabase, row.id, next)
    if (e) return { success: false, error: e }
    n++
  }
  done()
  return { success: true, message: `Removed ${n} subscriber(s) from “${group}”.` }
}

export async function addIdsToGroup(ids: string[], groupName: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const group = normaliseGroup(groupName)
  if (!group) return { success: false, error: 'Enter a group name.' }
  const { data, error: dbError } = await supabase.from('subscribers').select('id, categories').in('id', ids)
  if (dbError) return { success: false, error: dbError.message }
  let n = 0
  for (const row of data || []) {
    if (hasGroup(row.categories, group)) continue
    const e = await setGroups(supabase, row.id, mergeGroups(row.categories, [group]))
    if (e) return { success: false, error: e }
    n++
  }
  done()
  return { success: true, message: `Added ${n} subscriber(s) to “${group}”.` }
}

export async function setSubscribersStatus(ids: string[], status: 'active' | 'unsubscribed'): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const { data, error: dbError } = await supabase.from('subscribers').update({ status }).in('id', ids).select('id')
  if (dbError) return { success: false, error: dbError.message }
  if (!data?.length) return { success: false, error: PERMISSION_ERROR }
  done()
  return { success: true, message: `${data.length} subscriber(s) marked ${status}.` }
}

/** Renames a group (or deletes it when newName is empty) for every subscriber. */
export async function renameGroup(oldName: string, newName: string): Promise<Result> {
  const { supabase, error } = await requireStaff()
  if (error) return { success: false, error }
  const from = normaliseGroup(oldName)
  const to = normaliseGroup(newName)
  const { data, error: dbError } = await supabase.from('subscribers').select('id, categories')
  if (dbError) return { success: false, error: dbError.message }
  let n = 0
  for (const row of data || []) {
    if (!hasGroup(row.categories, from)) continue
    let next = toGroupList(row.categories).filter(g => g.toLowerCase() !== from.toLowerCase())
    if (to) next = mergeGroups(next, [to])
    const e = await setGroups(supabase, row.id, next)
    if (e) return { success: false, error: e }
    n++
  }
  done()
  return { success: true, message: to ? `Renamed “${from}” to “${to}” for ${n} subscriber(s).` : `Deleted group “${from}” (${n} subscriber(s) kept, just untagged).` }
}
