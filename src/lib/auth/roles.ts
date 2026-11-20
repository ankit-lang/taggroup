import { getAdmin } from '@/lib/auth/admin'

/** The signed-in staff member's role ('super_admin' | 'editor'), or null if not on the staff list. */
export async function getUserRole() {
  const admin = await getAdmin()
  return admin?.role ?? null
}
