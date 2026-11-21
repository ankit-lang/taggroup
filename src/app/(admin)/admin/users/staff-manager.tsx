'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { KeyRound, Loader2, Lock, ShieldCheck, UserPlus } from 'lucide-react'
import { addStaff, removeStaff, setStaffActive, setStaffPassword, setStaffRole, type StaffMember } from '@/actions/admin-users.actions'
import { ensureAuthCookie } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Role = StaffMember['role']
const ROLE_INFO: Record<Role, { label: string; desc: string }> = {
  super_admin: { label: 'Super Admin', desc: 'Everything, including contact inquiries, subscribers, newsletters, users and the activity log.' },
  editor: { label: 'Editor', desc: 'Create, edit, schedule and publish articles, publications and daily briefings.' },
}

/** Random 14-character password (letters + digits, no look-alike characters). */
function generatePassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  const bytes = crypto.getRandomValues(new Uint32Array(14))
  let out = Array.from(bytes, b => chars[b % chars.length]).join('')
  if (!/\d/.test(out)) out = out.slice(0, 13) + '7'
  return out
}

function PasswordInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="flex gap-2">
      <Input required type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} autoComplete="new-password" className="bg-white font-mono" />
      <Button type="button" variant="outline" onClick={() => onChange(generatePassword())} className="shrink-0">Generate</Button>
    </div>
  )
}

export function StaffManager({ staff, me, meIsOwner = false, error }: { staff: StaffMember[]; me: string; meIsOwner?: boolean; error?: string }) {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [role, setRole] = React.useState<Role>('editor')
  const [password, setPassword] = React.useState('')
  const [pwFor, setPwFor] = React.useState<string | null>(null)
  const [newPw, setNewPw] = React.useState('')
  const [busy, setBusy] = React.useState<string | null>(null)

  async function run(key: string, fn: () => Promise<{ success: boolean; message?: string; error?: string }>) {
    setBusy(key)
    await ensureAuthCookie().catch(() => null)
    const res = await fn()
    setBusy(null)
    if (res.success) {
      toast.success(res.message)
      router.refresh()
      return true
    }
    toast.error(res.error)
    return false
  }

  const active = staff.filter(s => s.active)
  const revoked = staff.filter(s => !s.active)

  return (
    <div className="space-y-6 text-slate-900 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users &amp; Access</h1>
        <p className="text-sm text-slate-500 mt-1">
          Only people on this list can open the admin panel. Staff sign in at <strong>/admin/login</strong> with their e-mail and the password you set here.
          Revoking access locks the person out immediately.
        </p>
      </div>

      {error && <div className="p-3 rounded-md text-sm border bg-rose-50 border-rose-200 text-rose-600">{error}</div>}

      {/* Add */}
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <h2 className="flex items-center gap-2 font-semibold"><UserPlus className="h-4 w-4 text-amber-600" /> Give someone access</h2>
        <form
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_auto_auto]"
          onSubmit={async (e) => {
            e.preventDefault()
            const ok = await run('add', () => addStaff(email, role, name, password))
            if (ok) { setEmail(''); setName(''); setPassword('') }
          }}
        >
          <Input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail, e.g. name@taggroup.in" className="bg-white" />
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name (optional)" className="bg-white" />
          <PasswordInput value={password} onChange={setPassword} placeholder="Password (min. 10, letters + numbers)" />
          <select value={role} onChange={e => setRole(e.target.value as Role)} className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm">
            <option value="editor">Editor</option>
            <option value="super_admin">Super Admin</option>
          </select>
          <Button type="submit" disabled={busy === 'add'} className="bg-amber-500 hover:bg-amber-600 text-white">
            {busy === 'add' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Add
          </Button>
        </form>
        <p className="text-xs text-slate-500"><strong>{ROLE_INFO[role].label}:</strong> {ROLE_INFO[role].desc}</p>
        <p className="text-xs text-slate-400">Share the password with them privately (not by group chat). They can change it later in My Account.</p>
      </div>

      {/* Active staff */}
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-100 font-semibold">Active staff ({active.length})</div>
        <ul className="divide-y divide-slate-100">
          {active.map(s => {
            const isMe = s.email === me
            const locked = s.is_owner || isMe
            return (
              <li key={s.email} className="flex flex-wrap items-center gap-3 px-5 py-3">
                <div className="flex-1 min-w-[220px]">
                  <div className="font-medium flex items-center gap-2">
                    {s.display_name || s.email}
                    {s.is_owner && <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] font-semibold text-amber-700"><Lock className="h-3 w-3" /> Owner</span>}
                    {isMe && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">You</span>}
                  </div>
                  {s.display_name && <div className="text-xs text-slate-500">{s.email}</div>}
                  {!s.is_owner && s.added_by && <div className="text-xs text-slate-400">Added by {s.added_by}</div>}
                </div>

                {locked ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-600"><ShieldCheck className="h-4 w-4 text-emerald-600" /> {ROLE_INFO[s.role].label}</span>
                ) : (
                  <select
                    value={s.role}
                    disabled={busy === s.email}
                    onChange={e => run(s.email, () => setStaffRole(s.email, e.target.value as Role))}
                    className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm"
                  >
                    <option value="editor">Editor</option>
                    <option value="super_admin">Super Admin</option>
                  </select>
                )}

                {!locked && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline" size="sm" disabled={busy === s.email}
                      onClick={() => { setPwFor(pwFor === s.email ? null : s.email); setNewPw('') }}
                    >
                      <KeyRound className="mr-1.5 h-3.5 w-3.5" /> Set password
                    </Button>
                    <Button
                      variant="outline" size="sm" disabled={busy === s.email}
                      className="border-amber-200 text-amber-700 hover:bg-amber-50"
                      onClick={() => confirm(`Revoke access for ${s.email}? They will be locked out immediately.`) && run(s.email, () => setStaffActive(s.email, false))}
                    >
                      Revoke
                    </Button>
                  </div>
                )}
                {s.is_owner && !isMe && meIsOwner && (
                  <Button variant="outline" size="sm" disabled={busy === s.email} onClick={() => { setPwFor(pwFor === s.email ? null : s.email); setNewPw('') }}>
                    <KeyRound className="mr-1.5 h-3.5 w-3.5" /> Set password
                  </Button>
                )}
                {s.is_owner && <span className="text-xs text-slate-400 w-full md:w-auto">{meIsOwner && !isMe ? 'Protected — only owners can set this password' : 'Protected — can only be changed in Supabase'}</span>}
                {pwFor === s.email && (
                  <form
                    className="w-full flex flex-wrap gap-2 pt-1"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const ok = await run(s.email, () => setStaffPassword(s.email, newPw))
                      if (ok) { setPwFor(null); setNewPw('') }
                    }}
                  >
                    <div className="flex-1 min-w-[260px]"><PasswordInput value={newPw} onChange={setNewPw} placeholder={`New password for ${s.email}`} /></div>
                    <Button type="submit" disabled={busy === s.email} className="bg-amber-500 hover:bg-amber-600 text-white">Save password</Button>
                    <Button type="button" variant="ghost" onClick={() => setPwFor(null)}>Cancel</Button>
                  </form>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Revoked */}
      {revoked.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-100 font-semibold text-slate-600">Revoked ({revoked.length})</div>
          <ul className="divide-y divide-slate-100">
            {revoked.map(s => (
              <li key={s.email} className="flex flex-wrap items-center gap-3 px-5 py-3">
                <div className="flex-1 min-w-[220px] text-slate-500">
                  <div className="font-medium line-through">{s.display_name || s.email}</div>
                  {s.display_name && <div className="text-xs">{s.email}</div>}
                </div>
                <span className="text-sm text-slate-400">{ROLE_INFO[s.role].label}</span>
                <Button variant="outline" size="sm" disabled={busy === s.email} onClick={() => run(s.email, () => setStaffActive(s.email, true))}>Restore access</Button>
                <Button
                  variant="destructive" size="sm" disabled={busy === s.email}
                  onClick={() => confirm(`Remove ${s.email} from the list completely?`) && run(s.email, () => removeStaff(s.email))}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
