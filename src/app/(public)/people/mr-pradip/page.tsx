"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('mr_pradip.breadcrumb.home')}</a> / <a href="/leadership">{t('mr_pradip.breadcrumb.leadership')}</a> / <span>{t('mr_pradip.breadcrumb.name')}</span></div>
          <div className="prof-head">
            <div className="prof-av"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</div>
            <div>
              <span className="eyebrow">{t('mr_pradip.hero.role')}</span>
              <h1>{t('mr_pradip.hero.name')}</h1>
              <p>{t('mr_pradip.hero.desc')}</p>
              <div className="pill-row" style={{"marginTop":"14px"}}>
                <span className="chip">{t('mr_pradip.tags[0]')}</span>
                <span className="chip">{t('mr_pradip.tags[1]')}</span>
                <span className="chip">{t('mr_pradip.tags[2]')}</span>
                <span className="chip">{t('mr_pradip.tags[3]')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('mr_pradip.nav.profile')}</h5>
              <a href="#summary">{t('mr_pradip.nav.overview')}</a>
              <a href="#expertise">{t('mr_pradip.nav.expertise')}</a>
              <a href="#experience">{t('mr_pradip.nav.experience')}</a>
              <a href="#credentials">{t('mr_pradip.nav.credentials')}</a>
              <div className="side-card" style={{"marginTop":"26px"}}>
                <h5>{t('mr_pradip.nav.get_in_touch')}</h5>
                <div className="side-actions">
                  <a className="btn btn-primary" href="mailto:pradip@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('mr_pradip.nav.email')}</a>
                  <a className="btn btn-ghost" href="/assets/profiles/mr-pradip.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('mr_pradip.nav.download')}</a>
                </div>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page">
              <a href="#summary">{t('mr_pradip.nav.overview')}</a>
              <a href="#expertise">{t('mr_pradip.nav.expertise')}</a>
              <a href="#experience">{t('mr_pradip.nav.experience')}</a>
              <a href="#credentials">{t('mr_pradip.nav.credentials')}</a>
            </nav>
            <div>
              <section className="svc-block" id="summary">
                <h2>{t('mr_pradip.overview.title')}</h2>
                <p className="lead" style={{"color":"var(--charcoal-700)"}}>{t('mr_pradip.overview.desc')}</p>
                <div className="stats" style={{"marginTop":"8px"}}>
                  <div className="stat"><div className="val"><em>{t('mr_pradip.overview.stats[0].val')}</em></div><div className="lbl">{t('mr_pradip.overview.stats[0].lbl')}</div></div>
                  <div className="stat"><div className="val"><em>{t('mr_pradip.overview.stats[1].val')}</em></div><div className="lbl">{t('mr_pradip.overview.stats[1].lbl')}</div></div>
                  <div className="stat"><div className="val"><em>{t('mr_pradip.overview.stats[2].val')}</em></div><div className="lbl">{t('mr_pradip.overview.stats[2].lbl')}</div></div>
                </div>
              </section>
              <section className="svc-block" id="expertise">
                <h2>{t('mr_pradip.expertise.title')}</h2>
                <div className="xp-grid">
                  <div className="xp-col">
                    <h4>{t('mr_pradip.expertise.areas[0].title')}</h4>
                    <ul className="check-list">
                      <li>{t('mr_pradip.expertise.areas[0].items[0]')}</li>
                      <li>{t('mr_pradip.expertise.areas[0].items[1]')}</li>
                      <li>{t('mr_pradip.expertise.areas[0].items[2]')}</li>
                    </ul>
                  </div>
                  <div className="xp-col">
                    <h4>{t('mr_pradip.expertise.areas[1].title')}</h4>
                    <ul className="check-list">
                      <li>{t('mr_pradip.expertise.areas[1].items[0]')}</li>
                      <li>{t('mr_pradip.expertise.areas[1].items[1]')}</li>
                      <li>{t('mr_pradip.expertise.areas[1].items[2]')}</li>
                    </ul>
                  </div>
                  <div className="xp-col">
                    <h4>{t('mr_pradip.expertise.areas[2].title')}</h4>
                    <ul className="check-list">
                      <li>{t('mr_pradip.expertise.areas[2].items[0]')}</li>
                      <li>{t('mr_pradip.expertise.areas[2].items[1]')}</li>
                      <li>{t('mr_pradip.expertise.areas[2].items[2]')}</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="svc-block" id="experience">
                <h2>{t('mr_pradip.experience.title')}</h2>
                <div className="timeline">
                  <div className="tl-item">
                    <div className="tl-period">{t('mr_pradip.experience.timeline[0].period')}</div>
                    <div className="tl-body">
                      <strong>{t('mr_pradip.experience.timeline[0].role')}</strong>
                      <p>{t('mr_pradip.experience.timeline[0].desc')}</p>
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-period">{t('mr_pradip.experience.timeline[1].period')}</div>
                    <div className="tl-body">
                      <strong>{t('mr_pradip.experience.timeline[1].role')}</strong>
                      <p>{t('mr_pradip.experience.timeline[1].desc')}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="svc-block" id="credentials">
                <h2>{t('mr_pradip.credentials.title')}</h2>
                <ul className="check-list two">
                  <li>{t('mr_pradip.credentials.list[0]')}</li>
                  <li>{t('mr_pradip.credentials.list[1]')}</li>
                  <li>{t('mr_pradip.credentials.list[2]')}</li>
                  <li>{t('mr_pradip.credentials.list[3]')}</li>
                </ul>
                <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('mr_pradip.credentials.sector_title')}</h4>
                <div className="chips">
                  <span className="chip">{t('mr_pradip.credentials.sectors[0]')}</span>
                  <span className="chip">{t('mr_pradip.credentials.sectors[1]')}</span>
                  <span className="chip">{t('mr_pradip.credentials.sectors[2]')}</span>
                  <span className="chip">{t('mr_pradip.credentials.sectors[3]')}</span>
                </div>
              </section>
              <section className="svc-block">
                <div className="cta-band">
                  <h2>{t('mr_pradip.cta.title')}</h2>
                  <p>{t('mr_pradip.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="mailto:pradip@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('mr_pradip.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('mr_pradip.cta.btn2')}</a>
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
