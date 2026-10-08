
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.sushil.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.sushil.breadcrumb.leadership')}</a> / <span>{t('people_pages.sushil.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/sushil.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SS</div>
      <div>
        <span className="eyebrow">{t('people_pages.sushil.title')}</span>
        <h1>{t('people_pages.sushil.name')}</h1>
        <p>{t('people_pages.sushil.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.sushil.chips.c1')}</span><span className="chip">{t('people_pages.sushil.chips.c2')}</span><span className="chip">{t('people_pages.sushil.chips.c3')}</span><span className="chip">{t('people_pages.sushil.chips.c4')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.sushil.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.sushil.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.sushil.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.sushil.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.sushil.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.sushil.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:sushil@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.sushil.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/sushil.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.sushil.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.sushil.nav.overview')}</a><a href="#expertise">{t('people_pages.sushil.nav.expertise')}</a><a href="#experience">{t('people_pages.sushil.nav.experience')}</a><a href="#credentials">{t('people_pages.sushil.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.sushil.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.sushil.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>20+ yrs</em></div><div className="lbl">Infrastructure experience</div></div><div className="stat"><div className="val"><em>End-to-end</em></div><div className="lbl">Planning to operations</div></div><div className="stat"><div className="val"><em>Enterprise</em></div><div className="lbl">Networks, security & cloud</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.sushil.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.sushil.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.sushil.expertise.h1_l3')}</li><li>Cloud, virtualisation and enterprise collaboration</li><li>Disaster recovery, backups and capacity planning</li></ul></div><div className="xp-col"><h4>{t('people_pages.sushil.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.sushil.expertise.h2_l3')}</li><li>Firewall and endpoint-security environments</li><li>IT general controls and operating governance</li></ul></div><div className="xp-col"><h4>{t('people_pages.sushil.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.sushil.expertise.h3_l3')}</li><li>Vendor governance and SLAs</li><li>Business-systems and process improvement</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.sushil.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.sushil.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.sushil.experience.r1')}</strong><p>{t('people_pages.sushil.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.sushil.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.sushil.experience.r2')}</strong><p>{t('people_pages.sushil.experience.d2')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.sushil.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.sushil.cred.c5')}</li><li>Certified Internal Auditor</li><li>ITIL V3 Foundation</li><li>VMware & Microsoft certified</li><li>20+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.sushil.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.sushil.cred.s3')}</span><span className="chip">Manufacturing</span><span className="chip">Corporate & shared services</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.sushil.cta.title')}</h2>
            <p>{t('people_pages.sushil.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:sushil@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> sushil@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.sushil.cta.btn')}</a>
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
