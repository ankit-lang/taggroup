import { redirect } from 'next/navigation'
import { createClient, getServerUser } from '@/lib/supabase/server'

/**
 * Admin access control — the single server-side gate for every admin page and action.
 *
 * Access comes ONLY from an active row in public.admin_users (matched on the login
 * e-mail). Being signed in to Supabase grants nothing. The same rules are enforced
 * again inside the database (RLS policies use public.is_staff() / is_super_admin()),
 * so a request that skips this code still cannot read or change protected data.
 */
export type AdminRole = 'super_admin' | 'editor'

export type AdminContext = {
  supabase: Awaited<ReturnType<typeof createClient>>
  userId: string
  email: string
  role: AdminRole
  isOwner: boolean
  displayName: string | null
  /** true while migration 07 hasn't been applied (legacy profile-role check in use) */
  legacy: boolean
}

export const ROLE_LABEL: Record<AdminRole, string> = { super_admin: 'Super Admin', editor: 'Editor' }
export const SESSION_ERROR = 'Your session has expired. Please sign out and sign in again.'
export const FORBIDDEN_ERROR = 'You do not have permission to do this. Ask a Super Admin for access.'

const rank: Record<AdminRole, number> = { editor: 1, super_admin: 2 }

export async function getAdmin(): Promise<AdminContext | null> {
  const supabase = await createClient()
  const user = await getServerUser(supabase)
  if (!user?.email) return null
  const email = user.email.toLowerCase()

  const { data, error } = await supabase
    .from('admin_users')
    .select('role, is_owner, active, display_name')
    .eq('email', email)
    .maybeSingle()

  if (error) {
    // Migration 07 not applied yet → keep the previous behaviour so nobody is locked out.
    if (error.code === 'PGRST205' || /admin_users/.test(error.message)) {
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
      // Same rule the site used before (missing profile or any role except 'user').
      if (profile && profile.role?.toLowerCase() === 'user') return null
      return { supabase, userId: user.id, email, role: 'super_admin', isOwner: false, displayName: null, legacy: true }
    }
    console.error('admin_users lookup failed:', error)
    return null
  }
  if (!data || !data.active) return null

  return {
    supabase,
    userId: user.id,
    email,
    role: data.role as AdminRole,
    isOwner: !!data.is_owner,
    displayName: data.display_name ?? null,
    legacy: false,
  }
}

export function hasRole(admin: Pick<AdminContext, 'role'> | null, min: AdminRole) {
  return !!admin && rank[admin.role] >= rank[min]
}

/** For server actions: returns the admin context, or an error message to show. */
export async function requireAdmin(min: AdminRole = 'editor'): Promise<AdminContext | { error: string }> {
  const admin = await getAdmin()
  if (!admin) return { error: SESSION_ERROR }
  if (!hasRole(admin, min)) return { error: FORBIDDEN_ERROR }
  return admin
}

/** For admin pages: redirects instead of rendering when access is missing. */
export async function requireAdminPage(min: AdminRole = 'editor'): Promise<AdminContext> {
  const admin = await getAdmin()
  if (!admin) redirect('/admin/login')
  if (!hasRole(admin, min)) redirect('/admin?denied=1')
  return admin
}
