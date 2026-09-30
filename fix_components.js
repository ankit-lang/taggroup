const fs = require('fs');
const path = require('path');

const publicDir = '/home/ankit/Desktop/tag/src/app/(public)';
const files = [
  'page.tsx',
  'about/page.tsx',
  'contact/page.tsx',
  'insights/page.tsx'
];

let headerJsx = '';
let footerJsx = '';
let headerExtracted = false;

for (const file of files) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  if (!headerExtracted) {
    const headerMatch = content.match(/<header className="site-header">[\s\S]*?<\/header>/);
    const footerMatch = content.match(/<footer className="site-footer">[\s\S]*?<\/footer>/);
    if (headerMatch) headerJsx = headerMatch[0];
    if (footerMatch) footerJsx = footerMatch[0];
    headerExtracted = true;
  }

  // Remove header and footer from all pages
  content = content.replace(/<header className="site-header">[\s\S]*?<\/header>/g, '');
  content = content.replace(/<footer className="site-footer">[\s\S]*?<\/footer>/g, '');

  // Also remove mobile-menu and newsletter-modal if they are global (they are in every page)
  content = content.replace(/<nav className="m-actions" aria-label="Quick actions">[\s\S]*?<\/nav>/g, '');
  content = content.replace(/<div className="modal" id="newsletter-modal" hidden>[\s\S]*?<\/form>\s*<\/div>\s*<\/div>/g, '');

  fs.writeFileSync(filePath, content);
}

// Write Navbar.tsx
const navbarPath = '/home/ankit/Desktop/tag/src/components/public/navbar.tsx';
const navbarContent = `
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: \`\${window.location.origin}/auth/callback\`,
      },
    });
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  return (
    <>
      ${headerJsx.replace(
  /<div className="nav-cta">([\s\S]*?)<\/div>/,
  `<div className="nav-cta">
          $1
          {user ? (
            <div className="flex items-center gap-3 ml-4" style={{display: 'flex', alignItems: 'center', marginLeft: '16px'}}>
              <img src={user.user_metadata?.avatar_url || '/assets/img/default-avatar.png'} alt="avatar" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
              <div style={{display: 'flex', flexDirection: 'column', fontSize: '12px'}}>
                <span style={{fontWeight: 'bold', color: 'var(--text)'}}>{user.user_metadata?.full_name || 'User'}</span>
                <span style={{color: 'var(--text-muted)'}}>{user.email}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-ghost" style={{padding: '4px 8px', fontSize: '12px'}}>Logout</button>
            </div>
          ) : (
            <button onClick={handleLogin} className="btn btn-light" style={{marginLeft: '12px'}}>Login</button>
          )}
        </div>`
)}
      <nav className="m-actions" aria-label="Quick actions">
        <a href="tel:+918860716777"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" /></svg><span>Call</span></a>
        <a href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg><span>Email</span></a>
        <button type="button" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg><span>Newsletter</span></button>
        <a className="m-primary" href="/contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg><span>Enquire</span></a>
      </nav>
    </>
  );
}
`;
fs.writeFileSync(navbarPath, navbarContent);

// Write Footer.tsx
const footerPath = '/home/ankit/Desktop/tag/src/components/public/footer.tsx';
const footerContent = `
"use client";
import React from 'react';

export function Footer() {
  return (
    <>
      ${footerJsx}
    </>
  );
}
`;
fs.writeFileSync(footerPath, footerContent);

console.log('Fixed components');
