'use server'

import { headers } from 'next/headers'
import { getAdmin } from '@/lib/auth/admin'
import { logSecurityEvent } from '@/lib/auth/audit'

/** Called by the browser after a successful sign-in / own password change. Verified server-side. */
export async function recordAuthEvent(kind: 'signed in' | 'changed own password' | 'reset own password') {
  const admin = await getAdmin()
  if (!admin) return
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0].trim() || h.get('x-real-ip') || null
  await logSecurityEvent(admin.email, kind, admin.email, { ip, userAgent: h.get('user-agent')?.slice(0, 160) ?? null })
}
