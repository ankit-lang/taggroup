
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.manuj.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.manuj.breadcrumb.leadership')}</a> / <span>{t('people_pages.manuj.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/manuj.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MS</div>
      <div>
        <span className="eyebrow">{t('people_pages.manuj.title')}</span>
        <h1>{t('people_pages.manuj.name')}</h1>
        <p>{t('people_pages.manuj.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.manuj.chips.c1')}</span><span className="chip">{t('people_pages.manuj.chips.c2')}</span><span className="chip">{t('people_pages.manuj.chips.c3')}</span><span className="chip">{t('people_pages.manuj.chips.c4')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.manuj.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.manuj.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.manuj.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.manuj.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.manuj.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.manuj.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:manuj@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.manuj.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/manuj.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.manuj.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.manuj.nav.overview')}</a><a href="#expertise">{t('people_pages.manuj.nav.expertise')}</a><a href="#experience">{t('people_pages.manuj.nav.experience')}</a><a href="#credentials">{t('people_pages.manuj.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.manuj.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.manuj.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>15+ yrs</em></div><div className="lbl">Valuation experience</div></div><div className="stat"><div className="val"><em>50+</em></div><div className="lbl">Team leadership</div></div><div className="stat"><div className="val"><em>CFA · FRM · RV</em></div><div className="lbl">Core credentials</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.manuj.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.manuj.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.manuj.expertise.h1_l3')}</li><li>Portfolio, transaction and financial-reporting valuations</li><li>Strategic models supported by industry analysis</li></ul></div><div className="xp-col"><h4>{t('people_pages.manuj.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.manuj.expertise.h2_l3')}</li><li>Purchase price allocation (PPA) and intangibles</li><li>ESOP structuring and valuation</li></ul></div><div className="xp-col"><h4>{t('people_pages.manuj.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.manuj.expertise.h3_l3')}</li><li>Scenario and sensitivity modelling</li><li>Global client and adviser support</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.manuj.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.manuj.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.manuj.experience.r1')}</strong><p>{t('people_pages.manuj.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.manuj.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.manuj.experience.r2')}</strong><p>{t('people_pages.manuj.experience.d2')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.manuj.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.manuj.cred.c5')}</li><li>Financial Risk Manager (FRM)</li><li>Registered Valuer (IBBI)</li><li>MBA Finance & B.Tech</li><li>15+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.manuj.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.manuj.cred.s4')}</span><span className="chip">Technology</span><span className="chip">Manufacturing</span><span className="chip">Real estate</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.manuj.cta.title')}</h2>
            <p>{t('people_pages.manuj.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:manuj@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> manuj@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.manuj.cta.btn')}</a>
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
