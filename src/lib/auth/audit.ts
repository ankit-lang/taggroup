import { createAdminClient } from '@/lib/supabase/admin'

/**
 * Writes a security event (sign-in, password change…) to the activity log.
 * Uses the server-only service key because the log is not writable by users.
 * Never throws — logging must not break the action being logged.
 */
export async function logSecurityEvent(actorEmail: string, action: string, targetEmail: string, details?: Record<string, unknown>) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return
  try {
    await createAdminClient().from('activity_log').insert({
      actor_email: actorEmail,
      action,
      entity_type: 'auth',
      entity_id: targetEmail,
      entity_title: targetEmail,
      details: details ?? null,
    })
  } catch (e) {
    console.error('activity log write failed:', e)
  }
}
