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

/**
 * Call right before a server action. getSession() renews an expired access
 * token using the stored refresh token, and the cookie is re-synced, so a form
 * that sat open past the 1-hour token lifetime (or a backgrounded tab that
 * missed the auto-refresh) doesn't fail with "session has expired".
 */
export async function ensureAuthCookie() {
  const supabase = createClient()
  let { data } = await supabase.auth.getSession()
  let session = data?.session ?? null
  // Refresh a little early so the token can't expire mid-request.
  if (session?.expires_at && session.expires_at - Math.floor(Date.now() / 1000) < 60) {
    const refreshed = await supabase.auth.refreshSession()
    session = refreshed.data?.session ?? session
  }
  syncAuthCookie(session)
  return session
}

/**
 * Make every server action (`Next-Action` header) and client-side navigation
 * (`RSC` header) carry a fresh access token. Without this, any admin action
 * fired after the 1-hour token lifetime — in a backgrounded tab, or a form left
 * open — reached the server with a stale cookie and failed with
 * "session has expired". Installed once from the admin Header.
 */
let fetchGuardInstalled = false
export function installAuthFetchGuard() {
  if (typeof window === 'undefined' || fetchGuardInstalled) return
  fetchGuardInstalled = true
  const originalFetch = window.fetch.bind(window)
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    try {
      const headers = new Headers(init?.headers ?? (input instanceof Request ? input.headers : undefined))
      if (headers.has('Next-Action') || headers.has('RSC')) {
        await ensureAuthCookie()
      }
    } catch {
      // Never block the request because of the guard itself.
    }
    return originalFetch(input, init)
  }
}
