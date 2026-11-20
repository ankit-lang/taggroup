'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { createClient, syncAuthCookie } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
import type { Session } from '@supabase/supabase-js';

const NOT_AUTHORIZED = 'This account is not authorized for the admin panel. Ask a Super Admin to give you access.';

/** Is the signed-in account on the staff allow-list? (The server checks again on every request.) */
async function isAuthorizedStaff(supabase: ReturnType<typeof createClient>, session: Session) {
  const email = session.user.email?.toLowerCase();
  if (!email) return false;
  const { data, error } = await supabase.from('admin_users').select('active').eq('email', email).maybeSingle();
  if (error) {
    // Allow-list table not created yet (migration 07 pending) → previous rule.
    if (error.code === 'PGRST205' || /admin_users/.test(error.message)) {
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).maybeSingle();
      return !(profile && profile.role?.toLowerCase() === 'user');
    }
    return false;
  }
  return !!data?.active;
}

const input: React.CSSProperties = { width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #e4e8ee', borderRadius: '4px', color: '#1a2332', outline: 'none', fontSize: '14px' };
const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a2332', marginBottom: '8px' };
const primaryBtn = (busy: boolean): React.CSSProperties => ({ width: '100%', padding: '12px', backgroundColor: '#c9a84c', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.7 : 1, fontSize: '14px' });
const linkBtn: React.CSSProperties = { background: 'none', border: 'none', padding: 0, color: '#a8823a', fontSize: '13px', fontWeight: 600, cursor: 'pointer' };

function AdminLoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<'signin' | 'forgot'>('signin');
  const [notice, setNotice] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/admin';

  const supabase = createClient();

  async function finishSignIn(session: Session) {
    if (!(await isAuthorizedStaff(supabase, session))) {
      await supabase.auth.signOut();
      syncAuthCookie(null);
      setNotice(NOT_AUTHORIZED);
      setIsLoading(false);
      return;
    }
    syncAuthCookie(session);
    try { sessionStorage.removeItem('tag_login_hops'); } catch {}
    window.location.href = next;
  }

  useEffect(() => {
    // Handles: an existing session, and being sent back here by the server because access was denied/revoked.
    (async () => {
      if (searchParams.get('logged_out')) {
        await supabase.auth.signOut();
        syncAuthCookie(null);
        try { sessionStorage.removeItem('tag_login_hops'); } catch {}
        return;
      }
      if (searchParams.get('denied')) {
        await supabase.auth.signOut();
        syncAuthCookie(null);
        setNotice(NOT_AUTHORIZED);
        return;
      }

      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (!session) return;

      // Loop guard: if the server keeps bouncing us back here, sign out and show the form.
      let hops: number[] = [];
      try { hops = JSON.parse(sessionStorage.getItem('tag_login_hops') || '[]'); } catch {}
      hops = hops.filter((t: number) => Date.now() - t < 15000);
      if (hops.length >= 2) {
        sessionStorage.removeItem('tag_login_hops');
        await supabase.auth.signOut();
        syncAuthCookie(null);
        toast.error('Your session expired. Please sign in again.');
        return;
      }
      try { sessionStorage.setItem('tag_login_hops', JSON.stringify([...hops, Date.now()])); } catch {}

      setIsLoading(true);
      await finishSignIn(session);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handlePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setNotice(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) {
      toast.error(error?.message || 'Sign-in failed.');
      setIsLoading(false);
      return;
    }
    await finishSignIn(data.session);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });
    setIsLoading(false);
    // Same message whether or not the account exists (doesn't reveal who has an account).
    if (error && !/rate|seconds/i.test(error.message)) console.error(error);
    if (error && /rate|seconds/i.test(error.message)) { toast.error(error.message); return; }
    toast.success('If that e-mail has a password login, a reset link is on its way.');
    setView('signin');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif', padding: '16px' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '40px', backgroundColor: '#ffffff', border: '1px solid #e4e8ee', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', backgroundColor: '#c9a84c', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', borderRadius: '6px', letterSpacing: '1px' }}>TAG</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a2332', margin: 0 }}>Admin Portal</h1>
          <p style={{ color: '#7a8898', fontSize: '0.875rem', marginTop: '8px' }}>
            {view === 'signin' ? 'Sign in to access the dashboard' : 'Reset your password'}
          </p>
        </div>

        {notice && (
          <div style={{ marginBottom: '20px', padding: '12px 14px', borderRadius: '6px', background: '#fdf0f0', border: '1px solid #f5d0d0', color: '#9b2c2c', fontSize: '13px', lineHeight: 1.5 }}>{notice}</div>
        )}

        {view === 'signin' ? (
          <>
            <form onSubmit={handlePassword} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Admin Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isLoading} style={input} placeholder="admin@taggroup.in" autoComplete="username" />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <label style={labelStyle}>Password</label>
                  <button type="button" style={linkBtn} onClick={() => { setView('forgot'); setNotice(null); }}>Forgot password?</button>
                </div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={isLoading} style={input} placeholder="••••••••" autoComplete="current-password" />
              </div>
              <button type="submit" disabled={isLoading || !email || !password} style={primaryBtn(isLoading)}>
                {isLoading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>
          </>
        ) : (
          <form onSubmit={handleForgot} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={labelStyle}>Your admin e-mail</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isLoading} style={input} placeholder="admin@taggroup.in" />
            </div>
            <button type="submit" disabled={isLoading || !email} style={primaryBtn(isLoading)}>
              {isLoading ? 'Sending…' : 'Email me a reset link'}
            </button>
            <button type="button" style={{ ...linkBtn, alignSelf: 'center' }} onClick={() => setView('signin')}>← Back to sign in</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
      <AdminLoginContent />
    </Suspense>
  );
}
