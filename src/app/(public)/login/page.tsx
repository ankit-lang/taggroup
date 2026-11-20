import { redirect } from 'next/navigation'

// The old public sign-in page let anyone create an account. Staff sign in at /admin/login.
export default function LoginRedirect() {
  redirect('/admin/login')
}
