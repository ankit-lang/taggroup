'use server'

import { revalidatePath } from 'next/cache'
import { requireAdmin, type AdminRole } from '@/lib/auth/admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { passwordProblem } from '@/lib/auth/password'

export type StaffMember = {
  email: string
  role: AdminRole
  is_owner: boolean
  active: boolean
  display_name: string | null
  added_by: string | null
  created_at: string
  updated_at: string
}

type Result = { success: true; message: string } | { success: false; error: string }

const ROLES: AdminRole[] = ['super_admin', 'editor']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Super Admin gate + loads the target row so owners and self-changes can be refused with a clear message. */
type Guarded = { error: string } | { error?: undefined; auth: Exclude<Awaited<ReturnType<typeof requireAdmin>>, { error: string }>; target: StaffMember | null }

async function guard(targetEmail?: string): Promise<Guarded> {
  const auth = await requireAdmin('super_admin')
  if ('error' in auth) return { error: auth.error }
  if (auth.legacy) return { error: 'Run supabase/migrations/07_admin_access_control.sql in the Supabase SQL editor first.' }
  if (!targetEmail) return { auth, target: null }

  const email = targetEmail.trim().toLowerCase()
  const { data: target, error } = await auth.supabase.from('admin_users').select('*').eq('email', email).maybeSingle()
  if (error) return { error: error.message }
  if (!target) return { error: 'That person is not on the staff list.' }
  if (target.is_owner) return { error: 'Owner accounts are protected and cannot be changed from the admin panel.' }
  return { auth, target: target as StaffMember }
}


const NO_SERVICE_KEY =
  'Server is missing SUPABASE_SERVICE_ROLE_KEY (Supabase → Project Settings → API keys → service_role / secret key). Add it to .env.local and to Vercel, then restart.'

/** Service-role client for creating logins / setting passwords. Server-only; never sent to the browser. */
function authAdmin() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return null
  return createAdminClient().auth.admin
}

/** Finds the Supabase login for an e-mail (paged scan; staff lists are small). */
async function findAuthUser(admin: NonNullable<ReturnType<typeof authAdmin>>, email: string) {
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.listUsers({ page, perPage: 200 })
    if (error) throw error
    const hit = data.users.find(u => u.email?.toLowerCase() === email)
    if (hit) return hit
    if (data.users.length < 200) return null
  }
  return null
}

/** Creates the login (or updates the existing one) with this password, confirmed and un-blocked. */
async function upsertLogin(email: string, password: string, displayName?: string | null) {
  const admin = authAdmin()
  if (!admin) throw new Error(NO_SERVICE_KEY)
  const existing = await findAuthUser(admin, email)
  if (existing) {
    const { error } = await admin.updateUserById(existing.id, { password, email_confirm: true, ban_duration: 'none' })
    if (error) throw error
    return { id: existing.id, created: false }
  }
  const { data, error } = await admin.createUser({
    email, password, email_confirm: true,
    user_metadata: displayName ? { full_name: displayName } : undefined,
  })
  if (error || !data.user) throw error || new Error('Could not create the login.')
  return { id: data.user.id, created: true }
}

/** Blocks / unblocks password sign-in for a removed / restored person (the allow-list already denies access). */
async function setLoginBlocked(email: string, blocked: boolean) {
  const admin = authAdmin()
  if (!admin) return
  const user = await findAuthUser(admin, email).catch(() => null)
  if (user) await admin.updateUserById(user.id, { ban_duration: blocked ? '876000h' : 'none' })
}

function errText(e: unknown) {
  return e instanceof Error ? e.message : typeof e === 'object' && e && 'message' in e ? String((e as { message: unknown }).message) : String(e)
}

function done() {
  revalidatePath('/admin/users')
  revalidatePath('/admin/activity')
}

export async function listStaff(): Promise<{ staff: StaffMember[]; error?: string }> {
  const g = await guard()
  if (g.error !== undefined) return { staff: [], error: g.error }
  const { data, error } = await g.auth.supabase
    .from('admin_users')
    .select('*')
    .order('is_owner', { ascending: false })
    .order('created_at', { ascending: true })
  if (error) return { staff: [], error: error.message }
  return { staff: (data || []) as StaffMember[] }
}

/** Adds a staff member with an e-mail + password login (no Google needed). */
export async function addStaff(emailInput: string, role: AdminRole, displayName: string | undefined, password: string): Promise<Result> {
  const g = await guard()
  if (g.error !== undefined) return { success: false, error: g.error }
  const email = emailInput.trim().toLowerCase()
  if (!EMAIL_RE.test(email)) return { success: false, error: 'Enter a valid e-mail address.' }
  if (!ROLES.includes(role)) return { success: false, error: 'Choose a role.' }
  const problem = passwordProblem(password)
  if (problem) return { success: false, error: `Password: ${problem}` }

  const { data: existing } = await g.auth.supabase.from('admin_users').select('email, active, is_owner').eq('email', email).maybeSingle()
  if (existing?.is_owner) return { success: false, error: 'That is an owner account — it already has full access.' }
  if (existing?.active) return { success: false, error: 'This person already has access. Use “Set password” or change their role in the list.' }

  // 1. Login with password.
  let login: { id: string; created: boolean }
  try {
    login = await upsertLogin(email, password, displayName?.trim() || null)
  } catch (e) {
    return { success: false, error: errText(e) }
  }

  // 2. Allow-list entry (done with the Super Admin's own session, so it is logged as them).
  const row = { email, role, active: true, display_name: displayName?.trim() || null, added_by: g.auth.email }
  const { error } = existing
    ? await g.auth.supabase.from('admin_users').update(row).eq('email', email)
    : await g.auth.supabase.from('admin_users').insert(row)
  if (error) {
    if (login.created) await authAdmin()?.deleteUser(login.id).catch(() => null)
    return { success: false, error: error.message }
  }

  done()
  return {
    success: true,
    message: `${email} can now sign in at /admin/login with the password you set, as ${role === 'super_admin' ? 'Super Admin' : 'Editor'}. Share it with them privately.`,
  }
}

/** Sets a new password for a staff member (not owners, not yourself — use My Account for that). */
export async function setStaffPassword(email: string, password: string): Promise<Result> {
  const g = await guard(email)
  if (g.error !== undefined) return { success: false, error: g.error }
  if (!g.target) return { success: false, error: 'Not found.' }
  if (g.target.email === g.auth.email) return { success: false, error: 'Change your own password in My Account.' }
  const problem = passwordProblem(password)
  if (problem) return { success: false, error: `Password: ${problem}` }

  try {
    await upsertLogin(g.target.email, password, g.target.display_name)
  } catch (e) {
    return { success: false, error: errText(e) }
  }
  done()
  return { success: true, message: `New password set for ${g.target.email}. Share it with them privately.` }
}

export async function setStaffRole(email: string, role: AdminRole): Promise<Result> {
  const g = await guard(email)
  if (g.error !== undefined) return { success: false, error: g.error }
  if (!g.target) return { success: false, error: 'Not found.' }
  if (g.target.email === g.auth.email) return { success: false, error: 'You cannot change your own role.' }
  if (!ROLES.includes(role)) return { success: false, error: 'Unknown role.' }

  const { error } = await g.auth.supabase.from('admin_users').update({ role }).eq('email', g.target.email)
  if (error) return { success: false, error: error.message }
  done()
  return { success: true, message: `${g.target.email} is now ${role === 'super_admin' ? 'a Super Admin' : 'an Editor'}.` }
}

/** Revoke (active=false) or restore access. Revoked people are locked out on their next request. */
export async function setStaffActive(email: string, active: boolean): Promise<Result> {
  const g = await guard(email)
  if (g.error !== undefined) return { success: false, error: g.error }
  if (!g.target) return { success: false, error: 'Not found.' }
  if (g.target.email === g.auth.email) return { success: false, error: 'You cannot revoke your own access.' }

  const { error } = await g.auth.supabase.from('admin_users').update({ active }).eq('email', g.target.email)
  if (error) return { success: false, error: error.message }
  await setLoginBlocked(g.target.email, !active)
  done()
  return { success: true, message: active ? `Access restored for ${g.target.email}.` : `Access revoked for ${g.target.email}. They are locked out immediately.` }
}

export async function removeStaff(email: string): Promise<Result> {
  const g = await guard(email)
  if (g.error !== undefined) return { success: false, error: g.error }
  if (!g.target) return { success: false, error: 'Not found.' }
  if (g.target.email === g.auth.email) return { success: false, error: 'You cannot remove yourself.' }

  const { error } = await g.auth.supabase.from('admin_users').delete().eq('email', g.target.email)
  if (error) return { success: false, error: error.message }
  await setLoginBlocked(g.target.email, true)
  done()
  return { success: true, message: `${g.target.email} was removed from the staff list.` }
}

export type ActivityEntry = {
  id: number
  created_at: string
  actor_email: string | null
  action: string
  entity_type: string
  entity_id: string | null
  entity_title: string | null
  details: Record<string, unknown> | null
}

export async function listActivity(limit = 300): Promise<{ entries: ActivityEntry[]; error?: string }> {
  const g = await guard()
  if (g.error !== undefined) return { entries: [], error: g.error }
  const { data, error } = await g.auth.supabase
    .from('activity_log')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) return { entries: [], error: error.message }
  return { entries: (data || []) as ActivityEntry[] }
}
