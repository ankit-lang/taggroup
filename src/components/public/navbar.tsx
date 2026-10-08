
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { LanguageToggle } from './language-toggle';
import { useI18n } from '@/lib/i18n';

export function Navbar() {
  const { t } = useI18n();
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
              <li><Link href="/about">{t('header.about')}</Link></li>
              <li className="has-dropdown">
                <Link href="/services">{t('header.services')} <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown dropdown-wide"><Link href="/services/tax-cross-border"><strong>{t('header.services_dropdown.tax.title')}</strong><span>{t('header.services_dropdown.tax.desc')}</span></Link><Link href="/services/global-transfer-pricing"><strong>{t('header.services_dropdown.tp.title')}</strong><span>{t('header.services_dropdown.tp.desc')}</span></Link><Link href="/services/global-capability-centre"><strong>{t('header.services_dropdown.gcc.title')}</strong><span>{t('header.services_dropdown.gcc.desc')}</span></Link><Link href="/services/cfo-finance-transformation"><strong>{t('header.services_dropdown.cfo.title')}</strong><span>{t('header.services_dropdown.cfo.desc')}</span></Link><Link href="/services/risk-internal-audit"><strong>{t('header.services_dropdown.risk.title')}</strong><span>{t('header.services_dropdown.risk.desc')}</span></Link><Link href="/services/deals-valuation"><strong>{t('header.services_dropdown.deals.title')}</strong><span>{t('header.services_dropdown.deals.desc')}</span></Link><Link href="/services/corporate-legal-fema"><strong>{t('header.services_dropdown.corp.title')}</strong><span>{t('header.services_dropdown.corp.desc')}</span></Link><Link href="/services/india-entry"><strong>{t('header.services_dropdown.india.title')}</strong><span>{t('header.services_dropdown.india.desc')}</span></Link><Link href="/services/human-capital-hr"><strong>{t('header.services_dropdown.hr.title')}</strong><span>{t('header.services_dropdown.hr.desc')}</span></Link><Link href="/services/international-business"><strong>{t('header.services_dropdown.intl.title')}</strong><span>{t('header.services_dropdown.intl.desc')}</span></Link></div>
              </li>
              <li className="has-dropdown">
                <Link href="/international">{t('header.global')} <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown"><Link href="/international"><strong>{t('header.global_dropdown.intl.title')}</strong><span>{t('header.global_dropdown.intl.desc')}</span></Link><Link href="/desks/uae"><strong>{t('header.global_dropdown.uae.title')}</strong><span>{t('header.global_dropdown.uae.desc')}</span></Link><Link href="/desks/singapore-malaysia"><strong>{t('header.global_dropdown.sg.title')}</strong><span>{t('header.global_dropdown.sg.desc')}</span></Link><Link href="/desks/mauritius"><strong>{t('header.global_dropdown.mu.title')}</strong><span>{t('header.global_dropdown.mu.desc')}</span></Link><Link href="/desks/united-states"><strong>{t('header.global_dropdown.us.title')}</strong><span>{t('header.global_dropdown.us.desc')}</span></Link></div>
              </li>
              <li className="has-dropdown">
                <Link href="/insights">{t('header.insights')} <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown">
                  <Link href="/insights"><strong>{t('header.insights_dropdown.pubs.title')}</strong><span>{t('header.insights_dropdown.pubs.desc')}</span></Link>
                  <Link href="/blog"><strong>{t('header.insights_dropdown.blog.title')}</strong><span>{t('header.insights_dropdown.blog.desc')}</span></Link>
                </div>
              </li>
              <li><Link href="/leadership">{t('header.leadership')}</Link></li>
              <li className="has-dropdown">
                <Link href="/careers">{t('header.careers')} <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg></Link>
                <div className="dropdown"><Link href="/careers#why-tag"><strong>{t('header.careers_dropdown.why')}</strong></Link><Link href="/careers#open-positions"><strong>{t('header.careers_dropdown.open')}</strong></Link><Link href="/careers#life-at-tag"><strong>{t('header.careers_dropdown.life')}</strong></Link></div>
              </li>
              <li><Link href="/contact">{t('header.contact')}</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">

            <button className="btn btn-ghost nl-btn" data-newsletter type="button" aria-haspopup="dialog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg><span>{t('header.newsletter')}</span></button>
            <Link className="btn btn-primary" href="/contact">{t('header.enquire')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
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
            
            <LanguageToggle />
          </div>
        </div>
        <div className="mobile-menu" data-lenis-prevent>
          <Link href="/about">{t('header.about')}</Link>
          <details><summary>{t('header.services')}</summary><div className="m-sub"><Link href="/services">All services</Link><Link href="/services/tax-cross-border">{t('header.services_dropdown.tax.title')}</Link><Link href="/services/global-transfer-pricing">{t('header.services_dropdown.tp.title')}</Link><Link href="/services/global-capability-centre">{t('header.services_dropdown.gcc.title')}</Link><Link href="/services/cfo-finance-transformation">{t('header.services_dropdown.cfo.title')}</Link><Link href="/services/risk-internal-audit">{t('header.services_dropdown.risk.title')}</Link><Link href="/services/deals-valuation">{t('header.services_dropdown.deals.title')}</Link><Link href="/services/corporate-legal-fema">{t('header.services_dropdown.corp.title')}</Link><Link href="/services/india-entry">{t('header.services_dropdown.india.title')}</Link><Link href="/services/human-capital-hr">{t('header.services_dropdown.hr.title')}</Link><Link href="/services/international-business">{t('header.services_dropdown.intl.title')}</Link></div></details>
          <details><summary>{t('header.global')}</summary><div className="m-sub"><Link href="/international">Overview</Link><Link href="/desks/uae">{t('header.global_dropdown.uae.title')}</Link><Link href="/desks/singapore-malaysia">{t('header.global_dropdown.sg.title')}</Link><Link href="/desks/mauritius">{t('header.global_dropdown.mu.title')}</Link><Link href="/desks/united-states">{t('header.global_dropdown.us.title')}</Link></div></details>
          <Link href="/insights">{t('header.insights')}</Link>
          <Link href="/leadership">{t('header.leadership')}</Link>
          <details><summary>{t('header.careers')}</summary><div className="m-sub"><Link href="/careers">Careers overview</Link><Link href="/careers#why-tag">{t('header.careers_dropdown.why')}</Link><Link href="/careers#open-positions">{t('header.careers_dropdown.open')}</Link><Link href="/careers#life-at-tag">{t('header.careers_dropdown.life')}</Link></div></details>
          <Link href="/contact">{t('header.contact')}</Link>
          <button className="btn btn-ghost" data-newsletter type="button" style={{ "marginTop": "26px", "width": "100%", "justifyContent": "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg> {t('header.subscribe')}</button>
          <Link className="btn btn-primary" href="/contact" style={{ "marginTop": "10px" }}>{t('header.enquire')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
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
