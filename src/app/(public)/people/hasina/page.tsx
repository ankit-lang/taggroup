
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { HASINA_FIDECO } from '@/data/people/hasina-fideco';

export default function Page() {
  const { t, locale } = useI18n();
  const c = HASINA_FIDECO[locale === 'ko' ? 'ko' : 'en'];
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people_pages.hasina.breadcrumb.home')}</a> / <a href="/leadership">{t('people_pages.hasina.breadcrumb.leadership')}</a> / <span>{t('people_pages.hasina.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/hasina.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />HB</div>
      <div>
        <span className="eyebrow">{t('people_pages.hasina.title')}</span>
        <h1>{t('people_pages.hasina.name')}</h1>
        <p>{t('people_pages.hasina.subtitle')}</p>
        <div className="pill-row" style={ {"marginTop":"14px"} }><span className="chip">{t('people_pages.hasina.chips.c1')}</span><span className="chip">{t('people_pages.hasina.chips.c2')}</span><span className="chip">{t('people_pages.hasina.chips.c3')}</span><span className="chip">{t('people_pages.hasina.chips.c4')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people_pages.hasina.nav.profile')}</h5>
        <a href="#summary">{t('people_pages.hasina.nav.overview')}</a>
        <a href="#expertise">{t('people_pages.hasina.nav.expertise')}</a>
        <a href="#experience">{t('people_pages.hasina.nav.experience')}</a>
        <a href="#credentials">{t('people_pages.hasina.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people_pages.hasina.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:hasina@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people_pages.hasina.nav.email')}</a><a className="btn btn-ghost" href="https://www.linkedin.com/in/hasina-bahemia-cams-5078b52a/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg> {c.externalProfile}</a>
            <a className="btn btn-ghost" href="/assets/profiles/hasina.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people_pages.hasina.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people_pages.hasina.nav.overview')}</a><a href="#expertise">{t('people_pages.hasina.nav.expertise')}</a><a href="#experience">{t('people_pages.hasina.nav.experience')}</a><a href="#credentials">{t('people_pages.hasina.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people_pages.hasina.overview.title')}</h2>
          <p className="lead" style={ {"color":"var(--charcoal-700)"} }>{t('people_pages.hasina.overview.desc')}</p>
          <div className="partner-panel">
            <span className="partner-eyebrow">{c.panel.eyebrow}</span>
            <h3 className="partner-name">{c.panel.name}</h3>
            {c.panel.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people_pages.hasina.expertise.title')}</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '-6px', marginBottom: '18px' }}>{c.expertiseIntro}</p>
          <div className="xp-grid">
            {c.groups.map(g => (
              <div className="xp-col" key={g.title}>
                <h4>{g.title}</h4>
                <ul className="check-list">{g.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people_pages.hasina.experience.title')}</h2>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-period">{t('people_pages.hasina.experience.p1')}</div>
              <div className="tl-body">
                <strong>{c.experience.role}</strong>
                <p>{c.experience.desc}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people_pages.hasina.cred.title')}</h2>
          <ul className="check-list two">{c.credentials.map(item => <li key={item}>{item}</li>)}</ul>
          <h4 style={{ margin: '26px 0 12px', color: 'var(--accent)' }}>{t('people_pages.hasina.cred.sector')}</h4>
          <div className="chips">{c.sectors.map(x => <span className="chip" key={x}>{x}</span>)}</div>
          <h4 style={{ margin: '22px 0 12px', color: 'var(--accent)' }}>{c.marketsTitle}</h4>
          <div className="chips">{c.markets.map(x => <span className="chip" key={x}>{x}</span>)}</div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people_pages.hasina.cta.title')}</h2>
            <p>{t('people_pages.hasina.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:hasina@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> hasina@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people_pages.hasina.cta.btn')}</a>
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
