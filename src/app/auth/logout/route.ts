import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const supabase = await createClient()

  // Sign out the current user
  await supabase.auth.signOut()

  // Clear the server auth cookie; `logged_out=1` tells the login page to also
  // clear the browser (localStorage) session instead of redirecting back in.
  const res = NextResponse.redirect(`${origin}/admin/login?logged_out=1`)
  res.cookies.set('tag_access_token', '', { path: '/', maxAge: 0 })
  return res
}
