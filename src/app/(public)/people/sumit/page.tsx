
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.sumit.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.sumit.breadcrumb.leadership')}</a> / <span>{t('people_pages.sumit.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</div>
      <div>
        <span className="eyebrow">{t('people_pages.sumit.title')}</span>
        <h1>{t('people_pages.sumit.name')}</h1>
        <p>{t('people_pages.sumit.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.sumit.chips.c1')}</span><span className="chip">{t('people_pages.sumit.chips.c2')}</span><span className="chip">{t('people_pages.sumit.chips.c3')}</span><span className="chip">{t('people_pages.sumit.chips.c4')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.sumit.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.sumit.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.sumit.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.sumit.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.sumit.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.sumit.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:sumit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.sumit.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/sumit.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.sumit.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.sumit.nav.overview')}</a><a href="#expertise">{t('people_pages.sumit.nav.expertise')}</a><a href="#experience">{t('people_pages.sumit.nav.experience')}</a><a href="#credentials">{t('people_pages.sumit.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.sumit.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.sumit.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>GST</em></div><div className="lbl">Primary advisory focus</div></div><div className="stat"><div className="val"><em>Audit</em></div><div className="lbl">Departmental-audit support</div></div><div className="stat"><div className="val"><em>Forensic</em></div><div className="lbl">Fraud & controls perspective</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.sumit.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.sumit.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.sumit.expertise.h1_l3')}</li><li>Registrations, reconciliations and refunds</li><li>Transaction and business-model impact analysis</li></ul></div><div className="xp-col"><h4>{t('people_pages.sumit.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.sumit.expertise.h2_l3')}</li><li>Litigation support and representation</li><li>Compliance advisory for complex positions</li></ul></div><div className="xp-col"><h4>{t('people_pages.sumit.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.sumit.expertise.h3_l3')}</li><li>Fraud detection and diagnostic review</li><li>Process and compliance strengthening</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.sumit.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.sumit.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.sumit.experience.r1')}</strong><p>{t('people_pages.sumit.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.sumit.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.sumit.experience.r2')}</strong><p>{t('people_pages.sumit.experience.d2')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.sumit.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.sumit.cred.c4')}</li><li>ICAI Certificate — Forensic Accounting & Fraud Detection</li><li>13+ years in indirect tax</li><li>Pursuing DISA & Concurrent Audit</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.sumit.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.sumit.cred.s4')}</span><span className="chip">Services</span><span className="chip">Infrastructure</span><span className="chip">Retail & FMCG</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.sumit.cta.title')}</h2>
            <p>{t('people_pages.sumit.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:sumit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> sumit@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.sumit.cta.btn')}</a>
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
