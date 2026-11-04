import { createClient as createSupabaseClient, type Session } from '@supabase/supabase-js'

let client: any = null;

export function createClient() {
  if (client) return client;
  client = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return client;
}

/**
 * The browser session lives in localStorage (auto-refreshed), but the server
 * admin layout only sees the `tag_access_token` cookie. Keep that cookie in
 * sync with the current access token so the two never disagree — when they
 * did, /admin and /admin/login redirected to each other forever.
 */
export function syncAuthCookie(session: Session | null) {
  if (typeof document === 'undefined') return;
  if (session?.access_token) {
    const maxAge = Math.max(60, (session.expires_at ?? 0) - Math.floor(Date.now() / 1000)) || 3600;
    document.cookie = `tag_access_token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax`;
  } else {
    document.cookie = 'tag_access_token=; path=/; max-age=0; SameSite=Lax';
  }
}
