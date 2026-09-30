
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }: { data: { user: any } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  return (
    <>
      <header className="site-header">
        <div className="container container-wide nav">
          <Link className="logo" href="/" aria-label="TAG Group home">
            <img className="logo-img" src="/assets/img/tag-logo.png" alt="TAG Group logo" />
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li><Link href="/about">About</Link></li>
              <li className="has-dropdown">
                <Link href="/services">Services <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown dropdown-wide"><Link href="/services/tax-cross-border"><strong>Tax & Cross-Border Advisory</strong><span>Corporate, international and indirect tax</span></Link><Link href="/services/global-transfer-pricing"><strong>Global Transfer Pricing</strong><span>Documentation delivered from India</span></Link><Link href="/services/global-capability-centre"><strong>Global Capability Centre</strong><span>TP & Finance/Accounting delivery hub</span></Link><Link href="/services/cfo-finance-transformation"><strong>CFO & Finance Transformation</strong><span>Virtual CFO, controllership, reporting</span></Link><Link href="/services/risk-internal-audit"><strong>Risk, Internal Audit & Controls</strong><span>Internal audit, ICFR, SOX, forensics</span></Link><Link href="/services/deals-valuation"><strong>Deals, Valuation & Transaction Support</strong><span>M&A, due diligence, valuation</span></Link><Link href="/services/corporate-legal-fema"><strong>Corporate, Legal, FEMA & Regulatory</strong><span>Entity, secretarial, FEMA, disputes</span></Link><Link href="/services/india-entry"><strong>India Entry: One-Stop Business Establishment</strong><span>Setup, finance, HR, IT, premises</span></Link><Link href="/services/human-capital-hr"><strong>Human Capital & HR Advisory</strong><span>Recruitment, L&D, HR operations</span></Link><Link href="/services/international-business"><strong>International Business</strong><span>Outbound expansion & cross-border</span></Link></div>
              </li>
              <li className="has-dropdown">
                <Link href="/international">Global <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown"><Link href="/international"><strong>International Desk</strong><span>Overview of all desks</span></Link><Link href="/desks/uae"><strong>🇦🇪 UAE Desk</strong><span>Dedicated country desk</span></Link><Link href="/desks/singapore-malaysia"><strong>🇸🇬 Singapore &amp; Malaysia Desk</strong><span>Dedicated country desk</span></Link><Link href="/desks/mauritius"><strong>🇲🇺 Mauritius Desk</strong><span>Dedicated country desk</span></Link><Link href="/desks/united-states"><strong>🇺🇸 US Desk</strong><span>Coming soon</span></Link></div>
              </li>
              <li className="has-dropdown">
                <Link href="/insights">Insights &amp; Media <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown">
                  <Link href="/insights"><strong>Insights &amp; Publications</strong><span>Thought leadership & articles</span></Link>
                  <Link href="/blog"><strong>Blog</strong><span>Latest updates & CMS content</span></Link>
                </div>
              </li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li className="has-dropdown">
                <Link href="/careers">Careers <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown"><Link href="/careers#why-tag"><strong>Why TAG</strong></Link><Link href="/careers#open-positions"><strong>Open Positions</strong></Link><Link href="/careers#life-at-tag"><strong>Life at TAG</strong></Link></div>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">

            <button className="btn btn-ghost nl-btn" data-newsletter type="button" aria-haspopup="dialog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg><span>Newsletter</span></button>
            <Link className="btn btn-primary" href="/contact">Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            <button className="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>

            {user && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px', flexShrink: 0 }}>
                <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 12px 4px 6px', backgroundColor: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.2s' }}>
                  <img
                    src={user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                    alt="avatar"
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>{user.user_metadata?.full_name?.split(' ')[0] || 'Admin'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  style={{ padding: '8px', borderRadius: '50%', backgroundColor: '#fff1f2', color: '#e11d48', border: '1px solid #ffe4e6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mobile-menu" data-lenis-prevent>
          <Link href="/about">About</Link>
          <details><summary>Services</summary><div className="m-sub"><Link href="/services">All services</Link><Link href="/services/tax-cross-border">Tax & Cross-Border Advisory</Link><Link href="/services/global-transfer-pricing">Global Transfer Pricing</Link><Link href="/services/global-capability-centre">Global Capability Centre</Link><Link href="/services/cfo-finance-transformation">CFO & Finance Transformation</Link><Link href="/services/risk-internal-audit">Risk, Internal Audit & Controls</Link><Link href="/services/deals-valuation">Deals, Valuation & Transaction Support</Link><Link href="/services/corporate-legal-fema">Corporate, Legal, FEMA & Regulatory</Link><Link href="/services/india-entry">India Entry: One-Stop Business Establishment</Link><Link href="/services/human-capital-hr">Human Capital & HR Advisory</Link><Link href="/services/international-business">International Business</Link></div></details>
          <details><summary>Global</summary><div className="m-sub"><Link href="/international">Overview</Link><Link href="/desks/uae">UAE Desk</Link><Link href="/desks/singapore-malaysia">Singapore &amp; Malaysia Desk</Link><Link href="/desks/mauritius">Mauritius Desk</Link><Link href="/desks/united-states">US Desk</Link></div></details>
          <Link href="/insights">Insights &amp; Media</Link>
          <Link href="/leadership">Leadership</Link>
          <details><summary>Careers</summary><div className="m-sub"><Link href="/careers">Careers overview</Link><Link href="/careers#why-tag">Why TAG</Link><Link href="/careers#open-positions">Open Positions</Link><Link href="/careers#life-at-tag">Life at TAG</Link></div></details>
          <Link href="/contact">Contact</Link>
          <button className="btn btn-ghost" data-newsletter type="button" style={{ "marginTop": "26px", "width": "100%", "justifyContent": "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg> Subscribe to our newsletters</button>
          <Link className="btn btn-primary" href="/contact" style={{ "marginTop": "10px" }}>Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          <div className="m-contact">
            <a href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> info@taggroup.in</a>
            <a href="tel:+918860716777"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" /></svg> +91 88607 16777</a>
          </div>
        </div>
      </header>
      <nav className="m-actions" aria-label="Quick actions">
        <a href="tel:+918860716777"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" /></svg><span>Call</span></a>
        <a href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg><span>Email</span></a>
        <button type="button" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg><span>Newsletter</span></button>
        <Link className="m-primary" href="/contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg><span>Enquire</span></Link>
      </nav>
    </>
  );
}
