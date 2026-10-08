
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.awen.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.awen.breadcrumb.leadership')}</a> / <span>{t('people_pages.awen.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/awen.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />AL</div>
      <div>
        <span className="eyebrow">{t('people_pages.awen.title')}</span>
        <h1>{t('people_pages.awen.name')}</h1>
        <p>{t('people_pages.awen.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.awen.chips.c1')}</span><span className="chip">{t('people_pages.awen.chips.c2')}</span><span className="chip">{t('people_pages.awen.chips.c3')}</span><span className="chip">{t('people_pages.awen.chips.c4')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.awen.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.awen.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.awen.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.awen.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.awen.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.awen.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:awen@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.awen.nav.email')}</a><a className="btn btn-ghost" href="https://www.saconsultingsg.com/team-4-1" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg> External profile</a>
            <a className="btn btn-ghost" href="/assets/profiles/awen.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.awen.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.awen.nav.overview')}</a><a href="#expertise">{t('people_pages.awen.nav.expertise')}</a><a href="#experience">{t('people_pages.awen.nav.experience')}</a><a href="#credentials">{t('people_pages.awen.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.awen.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.awen.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>10+ yrs</em></div><div className="lbl">Professional experience</div></div><div className="stat"><div className="val"><em>Singapore</em></div><div className="lbl">Corporate & regulatory</div></div><div className="stat"><div className="val"><em>Malaysia</em></div><div className="lbl">Coordinating contact</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.awen.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.awen.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.awen.expertise.h1_l3')}</li><li>Ongoing corporate compliance</li><li>Regulatory coordination with Singapore authorities</li></ul></div><div className="xp-col"><h4>{t('people_pages.awen.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.awen.expertise.h2_l3')}</li><li>Payroll and employment administration</li><li>Support for investment managers and SMEs</li></ul></div><div className="xp-col"><h4>{t('people_pages.awen.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.awen.expertise.h3_l3')}</li><li>Coordinating contact for Malaysia</li><li>Cross-border coordination with India</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.awen.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.awen.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.awen.experience.r1')}</strong><p>{t('people_pages.awen.experience.d1')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.awen.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.awen.cred.c4')}</li><li>ISCA member</li><li>Singapore Chartered Tax Professional</li><li>BSc Commerce (Accounting)</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.awen.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.awen.cred.s3')}</span><span className="chip">Investment management</span><span className="chip">SMEs</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.awen.cta.title')}</h2>
            <p>{t('people_pages.awen.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:awen@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> awen@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.awen.cta.btn')}</a>
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
