'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

function AdminLoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/admin';

  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        window.location.href = next;
      }
    });
  }, [supabase, next]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // We use standard password auth for admins, or could use Google OAuth restricted by domain
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    // Role verification check
    const { data: profileData } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .maybeSingle();

    if (profileData && profileData.role?.toLowerCase() === 'user') {
      await supabase.auth.signOut();
      toast.error('Access Denied: This account does not have administrative privileges.');
      setIsLoading(false);
      return;
    }

    // Set a resilient, non-chunked backup cookie to bypass Vercel SSR chunking edge cases
    if (data.session) {
      document.cookie = `tag_access_token=${data.session.access_token}; path=/; max-age=3600; Secure; SameSite=Lax`;
    }

    toast.success('Admin login successful.');
    window.location.href = next;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '40px', backgroundColor: '#ffffff', border: '1px solid #e4e8ee', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              width: '48px', height: '48px',
              margin: '0 auto 16px',
              backgroundColor: '#c9a84c',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              borderRadius: '6px',
              letterSpacing: '1px'
            }}
          >
            TAG
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a2332', margin: 0 }}>Admin Portal</h1>
          <p style={{ color: '#7a8898', fontSize: '0.875rem', marginTop: '8px' }}>Sign in to access the dashboard</p>
        </div>
        
        <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>Admin Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              disabled={isLoading}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #e4e8ee', borderRadius: '4px', color: '#1a2332', outline: 'none', transition: 'border-color 0.2s', fontSize: '14px' }} 
              placeholder="admin@taggroup.in" 
              onFocus={(e) => e.target.style.borderColor = '#c9a84c'}
              onBlur={(e) => e.target.style.borderColor = '#e4e8ee'}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              disabled={isLoading}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #e4e8ee', borderRadius: '4px', color: '#1a2332', outline: 'none', transition: 'border-color 0.2s', fontSize: '14px' }} 
              placeholder="••••••••" 
              onFocus={(e) => e.target.style.borderColor = '#c9a84c'}
              onBlur={(e) => e.target.style.borderColor = '#e4e8ee'}
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading || !email || !password}
            style={{ 
              width: '100%', 
              padding: '12px', 
              backgroundColor: '#c9a84c', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              fontWeight: 600, 
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              marginTop: '10px',
              fontSize: '14px'
            }}
          >
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
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
