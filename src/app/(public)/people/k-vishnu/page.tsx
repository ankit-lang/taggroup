
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.k_vishnu.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.k_vishnu.breadcrumb.leadership')}</a> / <span>{t('people_pages.k_vishnu.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</div>
      <div>
        <span className="eyebrow">{t('people_pages.k_vishnu.title')}</span>
        <h1>{t('people_pages.k_vishnu.name')}</h1>
        <p>{t('people_pages.k_vishnu.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.k_vishnu.chips.c1')}</span><span className="chip">{t('people_pages.k_vishnu.chips.c2')}</span><span className="chip">{t('people_pages.k_vishnu.chips.c3')}</span><span className="chip">{t('people_pages.k_vishnu.chips.c4')}</span><span className="chip">{t('people_pages.k_vishnu.chips.c5')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.k_vishnu.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.k_vishnu.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.k_vishnu.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.k_vishnu.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.k_vishnu.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.k_vishnu.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:k.vishnu@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.k_vishnu.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/k-vishnu.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.k_vishnu.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.k_vishnu.nav.overview')}</a><a href="#expertise">{t('people_pages.k_vishnu.nav.expertise')}</a><a href="#experience">{t('people_pages.k_vishnu.nav.experience')}</a><a href="#credentials">{t('people_pages.k_vishnu.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.k_vishnu.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.k_vishnu.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>2 days</em></div><div className="lbl">SG&A close-cycle reduction</div></div><div className="stat"><div className="val"><em>50%</em></div><div className="lbl">Reduction in manual journals</div></div><div className="stat"><div className="val"><em>290</em></div><div className="lbl">Controls governed (SOX / Companies Act)</div></div><div className="stat"><div className="val"><em>100+</em></div><div className="lbl">Subsidiaries consolidated</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.k_vishnu.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.k_vishnu.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.k_vishnu.expertise.h1_l3')}</li><li>Consolidation and management reporting across 100+ subsidiaries</li><li>Ind AS, IFRS, US GAAP and UK GAAP reporting</li></ul></div><div className="xp-col"><h4>{t('people_pages.k_vishnu.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.k_vishnu.expertise.h2_l3')}</li><li>Statutory and external audit management to clean outcomes</li><li>Governed 290 controls under SOX and the Companies Act</li></ul></div><div className="xp-col"><h4>{t('people_pages.k_vishnu.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.k_vishnu.expertise.h3_l3')}</li><li>68 automation and digital-transformation projects delivered</li><li>Shared-service (FSSC/BPO) governance</li></ul></div><div className="xp-col"><h4>{t('people_pages.k_vishnu.expertise.h4')}</h4><ul className="check-list"><li>{t('people_pages.k_vishnu.expertise.h4_l3')}</li><li>Budgeting, forecasting and KPI monitoring</li><li>Finance-team structuring and capability building</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.k_vishnu.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.k_vishnu.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.k_vishnu.experience.r1')}</strong><p>{t('people_pages.k_vishnu.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.k_vishnu.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.k_vishnu.experience.r2')}</strong><p>{t('people_pages.k_vishnu.experience.d2')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.k_vishnu.experience.p3')}</div><div className="tl-body"><strong>{t('people_pages.k_vishnu.experience.r3')}</strong><p>{t('people_pages.k_vishnu.experience.d3')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.k_vishnu.experience.p4')}</div><div className="tl-body"><strong>{t('people_pages.k_vishnu.experience.r4')}</strong><p>{t('people_pages.k_vishnu.experience.d4')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.k_vishnu.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.k_vishnu.cred.c5')}</li><li>B.Com. (Hons.), Delhi University</li><li>14+ years' experience</li><li>SAP S/4HANA, Oracle & Hyperion</li><li>VBA-certified (automation & reporting)</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.k_vishnu.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.k_vishnu.cred.s4')}</span><span className="chip">Electronics & technology</span><span className="chip">Consumer durables</span><span className="chip">Automotive & manufacturing</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.k_vishnu.cta.title')}</h2>
            <p>{t('people_pages.k_vishnu.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:k.vishnu@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> k.vishnu@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.k_vishnu.cta.btn')}</a>
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
