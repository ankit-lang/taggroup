"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people.gaurav.breadcrumb.home')}</a> / <a href="/leadership">{t('people.gaurav.breadcrumb.leadership')}</a> / <span>{t('people.gaurav.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</div>
      <div>
        <span className="eyebrow">{t('people.gaurav.title')}</span>
        <h1>{t('people.gaurav.name')}</h1>
        <p>{t('people.gaurav.subtitle')}</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">{t('people.gaurav.chips.c1')}</span><span className="chip">{t('people.gaurav.chips.c2')}</span><span className="chip">{t('people.gaurav.chips.c3')}</span><span className="chip">{t('people.gaurav.chips.c4')}</span><span className="chip">{t('people.gaurav.chips.c5')}</span><span className="chip">{t('people.gaurav.chips.c6')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people.gaurav.nav.profile')}</h5>
        <a href="#summary">{t('people.gaurav.nav.overview')}</a>
        <a href="#expertise">{t('people.gaurav.nav.expertise')}</a>
        <a href="#experience">{t('people.gaurav.nav.experience')}</a>
        <a href="#credentials">{t('people.gaurav.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people.gaurav.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people.gaurav.nav.email')}</a><a className="btn btn-ghost" href="tel:+918860716777"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z"/></svg> +91 88607 16777</a>
            <a className="btn btn-ghost" href="/api/generate-pdf?service=gaurav" target="_blank"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people.gaurav.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people.gaurav.nav.overview')}</a><a href="#expertise">{t('people.gaurav.nav.expertise')}</a><a href="#experience">{t('people.gaurav.nav.experience')}</a><a href="#credentials">{t('people.gaurav.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people.gaurav.overview.title')}</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>{t('people.gaurav.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>$102M</em></div><div className="lbl">{t('people.gaurav.overview.s1')}</div></div><div className="stat"><div className="val"><em>$10.7M</em></div><div className="lbl">{t('people.gaurav.overview.s2')}</div></div><div className="stat"><div className="val"><em>30+</em></div><div className="lbl">{t('people.gaurav.overview.s3')}</div></div><div className="stat"><div className="val"><em>800+</em></div><div className="lbl">{t('people.gaurav.overview.s4')}</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people.gaurav.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people.gaurav.expertise.h1')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h1_l1')}</li><li>{t('people.gaurav.expertise.h1_l2')}</li><li>{t('people.gaurav.expertise.h1_l3')}</li><li>{t('people.gaurav.expertise.h1_l4')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h2')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h2_l1')}</li><li>{t('people.gaurav.expertise.h2_l2')}</li><li>{t('people.gaurav.expertise.h2_l3')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h3')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h3_l1')}</li><li>{t('people.gaurav.expertise.h3_l2')}</li><li>{t('people.gaurav.expertise.h3_l3')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h4')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h4_l1')}</li><li>{t('people.gaurav.expertise.h4_l2')}</li><li>{t('people.gaurav.expertise.h4_l3')}</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people.gaurav.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p1')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r1')}</strong><p>{t('people.gaurav.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p2')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r2')}</strong><p>{t('people.gaurav.experience.d2')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p3')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r3')}</strong><p>{t('people.gaurav.experience.d3')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p4')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r4')}</strong><p>{t('people.gaurav.experience.d4')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p5')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r5')}</strong><p>{t('people.gaurav.experience.d5')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people.gaurav.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people.gaurav.cred.c1')}</li><li>{t('people.gaurav.cred.c2')}</li><li>{t('people.gaurav.cred.c3')}</li><li>{t('people.gaurav.cred.c4')}</li><li>{t('people.gaurav.cred.c5')}</li><li>{t('people.gaurav.cred.c6')}</li><li>{t('people.gaurav.cred.c7')}</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people.gaurav.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people.gaurav.cred.s1')}</span><span className="chip">{t('people.gaurav.cred.s2')}</span><span className="chip">{t('people.gaurav.cred.s3')}</span><span className="chip">{t('people.gaurav.cred.s4')}</span><span className="chip">{t('people.gaurav.cred.s5')}</span><span className="chip">{t('people.gaurav.cred.s6')}</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people.gaurav.cta.title')}</h2>
            <p>{t('people.gaurav.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> gaurav@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people.gaurav.cta.btn')}</a>
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
