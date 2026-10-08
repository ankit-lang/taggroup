
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.ishita.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.ishita.breadcrumb.leadership')}</a> / <span>{t('people_pages.ishita.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/ishita.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />IS</div>
      <div>
        <span className="eyebrow">{t('people_pages.ishita.title')}</span>
        <h1>{t('people_pages.ishita.name')}</h1>
        <p>{t('people_pages.ishita.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.ishita.chips.c1')}</span><span className="chip">{t('people_pages.ishita.chips.c2')}</span><span className="chip">{t('people_pages.ishita.chips.c3')}</span><span className="chip">{t('people_pages.ishita.chips.c4')}</span><span className="chip">{t('people_pages.ishita.chips.c5')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.ishita.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.ishita.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.ishita.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.ishita.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.ishita.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.ishita.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:ishita@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.ishita.nav.email')}</a>
            <a className="btn btn-ghost" href="/assets/profiles/ishita.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.ishita.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.ishita.nav.overview')}</a><a href="#expertise">{t('people_pages.ishita.nav.expertise')}</a><a href="#experience">{t('people_pages.ishita.nav.experience')}</a><a href="#credentials">{t('people_pages.ishita.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.ishita.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.ishita.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>95%</em></div><div className="lbl">Mandatory-training compliance</div></div><div className="stat"><div className="val"><em>85%</em></div><div className="lbl">L&D plan adherence</div></div><div className="stat"><div className="val"><em>75%</em></div><div className="lbl">Open-role closure rate</div></div><div className="stat"><div className="val"><em>4.3/5</em></div><div className="lbl">Learner satisfaction</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.ishita.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people_pages.ishita.expertise.h1')}</h4><ul className="check-list"><li>{t('people_pages.ishita.expertise.h1_l3')}</li><li>Learning-management-system implementation and adoption</li><li>Effectiveness tracking via scorecards, surveys and dashboards</li></ul></div><div className="xp-col"><h4>{t('people_pages.ishita.expertise.h2')}</h4><ul className="check-list"><li>{t('people_pages.ishita.expertise.h2_l3')}</li><li>Leadership and critical-role hiring</li><li>Recruitment vendor governance and diversity pipelines</li></ul></div><div className="xp-col"><h4>{t('people_pages.ishita.expertise.h3')}</h4><ul className="check-list"><li>{t('people_pages.ishita.expertise.h3_l3')}</li><li>HR policies, handbooks and process documentation</li><li>Statutory HR compliance and audit readiness</li></ul></div><div className="xp-col"><h4>{t('people_pages.ishita.expertise.h4')}</h4><ul className="check-list"><li>{t('people_pages.ishita.expertise.h4_l3')}</li><li>HR analytics and management dashboards (Power BI)</li><li>Employee engagement, rewards and recognition</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.ishita.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people_pages.ishita.experience.p1')}</div><div className="tl-body"><strong>{t('people_pages.ishita.experience.r1')}</strong><p>{t('people_pages.ishita.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.ishita.experience.p2')}</div><div className="tl-body"><strong>{t('people_pages.ishita.experience.r2')}</strong><p>{t('people_pages.ishita.experience.d2')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people_pages.ishita.experience.p3')}</div><div className="tl-body"><strong>{t('people_pages.ishita.experience.r3')}</strong><p>{t('people_pages.ishita.experience.d3')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.ishita.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people_pages.ishita.cred.c4')}</li><li>B.Sc. (Hons.) Biotechnology</li><li>ISO Internal Auditor</li><li>15+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people_pages.ishita.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people_pages.ishita.cred.s3')}</span><span className="chip">Logistics</span><span className="chip">Corporate & shared services</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.ishita.cta.title')}</h2>
            <p>{t('people_pages.ishita.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:ishita@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> ishita@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.ishita.cta.btn')}</a>
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
