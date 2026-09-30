import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Fetch session fast from JWT cookies without blocking network DB calls in middleware
  const { data: { session } } = await supabase.auth.getSession()
  const user = session?.user

  // Helper to construct redirects while preserving updated auth cookies
  const createRedirect = (path: string, paramKey?: string, paramVal?: string) => {
    const url = request.nextUrl.clone()
    url.pathname = path
    if (paramKey && paramVal) {
      url.searchParams.set(paramKey, paramVal)
    }
    const redirectResponse = NextResponse.redirect(url)
    supabaseResponse.cookies.getAll().forEach((c) => {
      redirectResponse.cookies.set(c.name, c.value, c)
    })
    return redirectResponse
  }

  // Protect Admin Routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow public access to /admin/login
    if (request.nextUrl.pathname === '/admin/login') {
      if (user) {
        return createRedirect('/admin')
      }
      return supabaseResponse
    }

    // Require authenticated user session for all protected /admin routes
    if (!user) {
      return createRedirect('/admin/login', 'redirect', request.nextUrl.pathname)
    }
  }

  return supabaseResponse
}
