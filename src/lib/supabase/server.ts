import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tag_access_token')?.value;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      },
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch (error) {
            // Ignored
          }
        },
      },
    }
  )
}

/**
 * The signed-in user for server actions / server components.
 *
 * The browser keeps the Supabase session in localStorage, so the server only
 * receives it through the `tag_access_token` cookie. A bare `auth.getUser()`
 * ignores that cookie (it looks for sb-* session cookies that never exist
 * here) and returns no user — every admin action then failed with
 * "Unauthorized". Validating the token explicitly fixes that.
 */
export async function getServerUser(supabase?: Awaited<ReturnType<typeof createClient>>) {
  const client = supabase ?? (await createClient())
  const token = (await cookies()).get('tag_access_token')?.value
  if (token) {
    const { data, error } = await client.auth.getUser(token)
    if (data.user) return data.user
    console.warn('tag_access_token rejected by Supabase:', error?.message)
  }
  const { data } = await client.auth.getUser()
  return data.user ?? null
}
