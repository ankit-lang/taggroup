import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const supabase = await createClient()

  // Sign out the current user
  await supabase.auth.signOut()

  // Redirect to login page
  return NextResponse.redirect(`${origin}/admin/login`)
}
