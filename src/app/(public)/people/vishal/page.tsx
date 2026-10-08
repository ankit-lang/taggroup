
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.vishal.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.vishal.breadcrumb.leadership')}</a> / <span>{t('people_pages.vishal.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/vishal.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />VT</div>
      <div>
        <span className="eyebrow">{t('people_pages.vishal.title')}</span>
        <h1>{t('people_pages.vishal.name')}</h1>
        <p>{t('people_pages.vishal.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.vishal.chips.c1')}</span><span className="chip">{t('people_pages.vishal.chips.c2')}</span><span className="chip">{t('people_pages.vishal.chips.c3')}</span><span className="chip">{t('people_pages.vishal.chips.c4')}</span><span className="chip">{t('people_pages.vishal.chips.c5')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.vishal.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.vishal.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.vishal.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.vishal.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.vishal.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.vishal.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:vishal@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.vishal.nav.email')}</a><a className="btn btn-ghost" href="https://www.linkedin.com/in/vishal-tayal-aa702835/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg> External profile</a>
            <a className="btn btn-ghost" href="/assets/profiles/vishal.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.vishal.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.vishal.nav.overview')}</a><a href="#expertise">{t('people_pages.vishal.nav.expertise')}</a><a href="#experience">{t('people_pages.vishal.nav.experience')}</a><a href="#credentials">{t('people_pages.vishal.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.vishal.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.vishal.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>India + UAE</em></div><div className="lbl">Jurisdictional coverage</div></div><div className="stat"><div className="val"><em>ICAI</em></div><div className="lbl">Professional faculty</div></div><div className="stat"><div className="val"><em>SME → F100</em></div><div className="lbl">Client spectrum</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.vishal.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.vishal.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.vishal.expertise.h1_l3')}</li><li>Tax-efficient transaction structuring</li><li>Diagnostic reviews, litigation and compliance controls</li></ul></div><div className="xp-col"><h4>{t('people_pages.vishal.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.vishal.expertise.h2_l3')}</li><li>Cross-border India–UAE structuring</li><li>Tax process, controls and compliance design</li></ul></div><div className="xp-col"><h4>{t('people_pages.vishal.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.vishal.expertise.h3_l3')}</li><li>Clients from SMEs to Fortune 100 global organisations</li><li>Sector exposure across infrastructure, engineering, hospitality and transport</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.vishal.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.vishal.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.vishal.experience.r1')}</strong><p>{t('people_pages.vishal.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.vishal.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.vishal.experience.r2')}</strong><p>{t('people_pages.vishal.experience.d2')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.vishal.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.vishal.cred.c4')}</li><li>ICAI faculty on GST</li><li>Director, Taxepolis International FZCO (UAE)</li><li>India & UAE exposure</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.vishal.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.vishal.cred.s4')}</span><span className="chip">Engineering</span><span className="chip">Hospitality</span><span className="chip">Transport & logistics</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.vishal.cta.title')}</h2>
            <p>{t('people_pages.vishal.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:vishal@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> vishal@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.vishal.cta.btn')}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
