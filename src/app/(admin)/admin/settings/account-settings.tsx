'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { KeyRound, Loader2, ShieldCheck } from 'lucide-react'
import { createClient, syncAuthCookie } from '@/lib/supabase/client'
import { passwordProblem } from '@/lib/auth/password'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AccountSettings({ email, role, isOwner }: { email: string; role: string; isOwner: boolean }) {
  const supabase = createClient()
  const [current, setCurrent] = React.useState('')
  const [next, setNext] = React.useState('')
  const [confirm, setConfirm] = React.useState('')
  const [busy, setBusy] = React.useState<'change' | 'reset' | null>(null)

  async function changePassword(e: React.FormEvent) {
    e.preventDefault()
    const problem = passwordProblem(next, confirm)
    if (problem) return toast.error(problem)
    if (next === current) return toast.error('The new password must be different.')
    setBusy('change')
    // Re-check the current password before allowing a change.
    const { data: verified, error: verifyError } = await supabase.auth.signInWithPassword({ email, password: current })
    if (verifyError || !verified.session) {
      setBusy(null)
      return toast.error('Your current password is incorrect. Forgot it? Use “Email me a reset link” below.')
    }
    const { error } = await supabase.auth.updateUser({ password: next })
    const { data: s } = await supabase.auth.getSession()
    syncAuthCookie(s.session)
    setBusy(null)
    if (error) return toast.error(error.message)
    setCurrent(''); setNext(''); setConfirm('')
    toast.success('Password changed.')
  }

  async function sendReset() {
    setBusy('reset')
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/admin/reset-password` })
    setBusy(null)
    if (error) return toast.error(error.message)
    toast.success(`Reset link sent to ${email}.`)
  }

  return (
    <div className="max-w-2xl space-y-6 text-slate-900">
      <h1 className="text-3xl font-bold tracking-tight">My Account</h1>

      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-1">
        <div className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4 text-emerald-600" /> {email}</div>
        <p className="text-sm text-slate-500">Role: <strong>{role}</strong>{isOwner ? ' · Owner (permanent, protected)' : ''}</p>
        <p className="text-xs text-slate-400">You sign in at /admin/login with this e-mail and your password.</p>
      </div>

      <form onSubmit={changePassword} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <h2 className="flex items-center gap-2 font-semibold"><KeyRound className="h-4 w-4 text-amber-600" /> Change password</h2>
        <Input type="password" value={current} onChange={e => setCurrent(e.target.value)} placeholder="Current password" autoComplete="current-password" required className="bg-white" />
        <Input type="password" value={next} onChange={e => setNext(e.target.value)} placeholder="New password (min. 10 characters, letters + numbers)" autoComplete="new-password" required className="bg-white" />
        <Input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat new password" autoComplete="new-password" required className="bg-white" />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={busy !== null} className="bg-amber-500 hover:bg-amber-600 text-white">
            {busy === 'change' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Change password
          </Button>
          <Button type="button" variant="outline" disabled={busy !== null} onClick={sendReset}>
            {busy === 'reset' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Email me a reset link
          </Button>
        </div>
        <p className="text-xs text-slate-400">Passwords are stored securely (hashed) by Supabase Auth — never in the website code or database tables.</p>
      </form>
    </div>
  )
}
