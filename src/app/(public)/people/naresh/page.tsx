
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.naresh.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.naresh.breadcrumb.leadership')}</a> / <span>{t('people_pages.naresh.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/naresh.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />NG</div>
      <div>
        <span className="eyebrow">{t('people_pages.naresh.title')}</span>
        <h1>{t('people_pages.naresh.name')}</h1>
        <p>{t('people_pages.naresh.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.naresh.chips.c1')}</span><span className="chip">{t('people_pages.naresh.chips.c2')}</span><span className="chip">{t('people_pages.naresh.chips.c3')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.naresh.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.naresh.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.naresh.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.naresh.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.naresh.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.naresh.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:naresh@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.naresh.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/naresh.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.naresh.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.naresh.nav.overview')}</a><a href="#expertise">{t('people_pages.naresh.nav.expertise')}</a><a href="#experience">{t('people_pages.naresh.nav.experience')}</a><a href="#credentials">{t('people_pages.naresh.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.naresh.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.naresh.overview.desc')}</p>
          
          <div className="excl-note" style={{"marginTop":"18px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/></svg><span>This profile is provisional; verified credentials and experience will be added before external circulation.</span></div>
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.naresh.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.naresh.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.naresh.expertise.h1_l3')}</li><li>Internal financial controls (IFC)</li><li>Reporting and compliance reviews</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.naresh.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.naresh.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.naresh.experience.r1')}</strong><p>{t('people_pages.naresh.experience.d1')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.naresh.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.naresh.cred.c2')}</li><li>Internal controls & reporting reviews</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.naresh.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.naresh.cred.s2')}</span><span className="chip">Services</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.naresh.cta.title')}</h2>
            <p>{t('people_pages.naresh.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:naresh@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> naresh@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.naresh.cta.btn')}</a>
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
