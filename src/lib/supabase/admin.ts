import { createClient } from '@supabase/supabase-js'

/**
 * Service-role Supabase client for trusted server-only jobs (cron, unsubscribe)
 * that run without a logged-in user. Never import this from client components.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set')
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}
