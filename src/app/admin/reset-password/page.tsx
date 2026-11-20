'use client';

import React, { useEffect, useState } from 'react';
import { createClient, syncAuthCookie } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { passwordProblem } from '@/lib/auth/password';

const input: React.CSSProperties = { width: '100%', padding: '10px 14px', border: '1px solid #e4e8ee', borderRadius: '4px', color: '#1a2332', fontSize: '14px', outline: 'none' };

/** Landing page of the "Forgot password" e-mail link: lets the person choose a new password. */
export default function ResetPasswordPage() {
  const supabase = createClient();
  const [ready, setReady] = useState<'checking' | 'ok' | 'invalid'>('checking');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    // The link signs the person in temporarily (tokens in the URL); supabase-js picks them up.
    const { data: sub } = supabase.auth.onAuthStateChange((event: string) => {
      if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') setReady('ok');
    });
    supabase.auth.getSession().then(({ data }: { data: { session: unknown } }) => {
      if (data.session) setReady('ok');
      else setTimeout(() => setReady((r) => (r === 'checking' ? 'invalid' : r)), 2500);
    });
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const problem = passwordProblem(password, confirm);
    if (problem) { toast.error(problem); return; }
    setBusy(true);
    const { data, error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    const { data: s } = await supabase.auth.getSession();
    syncAuthCookie(s.session);
    toast.success('Password changed.');
    window.location.href = data.user ? '/admin' : '/admin/login';
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f2f5', fontFamily: 'sans-serif', padding: '16px' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '40px', background: '#fff', border: '1px solid #e4e8ee', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a2332', margin: '0 0 8px' }}>Choose a new password</h1>
        {ready === 'checking' && <p style={{ color: '#7a8898', fontSize: '14px' }}>Checking your reset link…</p>}
        {ready === 'invalid' && (
          <p style={{ color: '#9b2c2c', fontSize: '14px', lineHeight: 1.5 }}>
            This reset link is invalid or has expired. <a href="/admin/login" style={{ color: '#a8823a', fontWeight: 600 }}>Request a new one</a>.
          </p>
        )}
        {ready === 'ok' && (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            <input type="password" placeholder="New password (min. 10 characters)" value={password} onChange={(e) => setPassword(e.target.value)} style={input} autoComplete="new-password" required />
            <input type="password" placeholder="Repeat new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={input} autoComplete="new-password" required />
            <button type="submit" disabled={busy} style={{ padding: '12px', background: '#c9a84c', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer', opacity: busy ? 0.7 : 1 }}>
              {busy ? 'Saving…' : 'Save new password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
