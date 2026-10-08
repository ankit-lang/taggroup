"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{backgroundImage:"url('/assets/img/hero/life.svg')"}}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('careers_page.breadcrumb.home')}</a> / <span>{t('careers_page.breadcrumb.careers')}</span></div>
          <span className="eyebrow">{t('careers_page.breadcrumb.careers')}</span>
          <h1>{t('careers_page.hero.title')}</h1>
          <p>{t('careers_page.hero.desc')}<a href="mailto:careers@taggroup.in" style={{color:"var(--emerald-300)"}}>careers@taggroup.in</a>.</p>
        </div>
      </section>
      
      <div className="subtabs">
        <div className="container">
          <a href="#why-tag">{t('careers_page.tabs.why')}</a>
          <a href="#open-positions">{t('careers_page.tabs.open')}</a>
          <a href="#life-at-tag">{t('careers_page.tabs.life')}</a>
        </div>
      </div>

      <section className="section" id="why-tag">
        <div className="container">
          <div className="center measure mx-auto">
            <span className="eyebrow" style={{justifyContent:"center"}}>{t('careers_page.why.eyebrow')}</span>
            <h2>{t('careers_page.why.title')}</h2>
            <p className="lead">{t('careers_page.why.desc')}</p>
          </div>
          <div className="grid g-2" style={{marginTop:"44px"}}>
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className="feature reveal">
                <div className="fx">
                  {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg>}
                  {i === 4 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M6 20V10M12 20V4M18 20v-7"/></svg>}
                  {i === 5 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg>}
                </div>
                <div>
                  <h4>{t(`careers_page.why.cards[${i}].title`)}</h4>
                  <p>{t(`careers_page.why.cards[${i}].desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="open-positions">
        <div className="container">
          <div className="center measure mx-auto">
            <span className="eyebrow" style={{justifyContent:"center"}}>{t('careers_page.open.eyebrow')}</span>
            <h2>{t('careers_page.open.title')}</h2>
            <p className="lead">{t('careers_page.open.desc')}</p>
          </div>
          <div className="joblist" style={{marginTop:"40px"}}>
            {Array.from({length: 5}).map((_, i) => (
              <div key={i} className="jobrow reveal">
                <div>
                  <h4>{t(`careers_page.open.jobs[${i}].title`)}</h4>
                  <span className="job-loc">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg> {t(`careers_page.open.jobs[${i}].loc`)}
                  </span>
                  <p>{t(`careers_page.open.jobs[${i}].desc`)}</p>
                </div>
                <a className="btn btn-ghost" href="mailto:careers@taggroup.in">
                  {t('careers_page.open.apply')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            ))}
          </div>
          <div className="center" style={{marginTop:"30px"}}>
            <a className="btn btn-primary" href="mailto:careers@taggroup.in?subject=General%20application">
              {t('careers_page.open.send_cv')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="life-at-tag">
        <div className="container">
          <div className="center measure mx-auto">
            <span className="eyebrow" style={{justifyContent:"center"}}>{t('careers_page.life.eyebrow')}</span>
            <h2>{t('careers_page.life.title')}</h2>
            <p className="lead">{t('careers_page.life.desc')}</p>
          </div>
          <div className="photogrid" style={{marginTop:"44px"}}>
            <figure className="photo r43 " style={{backgroundImage:"url('/assets/img/plates/culture.svg')"}}><img src="/assets/photos/careers/life-01.jpg" alt="The team at work" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t('careers_page.life.eyebrow')} Group</strong></figcaption></figure>
            <figure className="photo r11 " style={{backgroundImage:"url('/assets/img/plates/team.svg')"}}><img src="/assets/photos/careers/life-02.jpg" alt="Colleagues collaborating" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
            <figure className="photo r11 " style={{backgroundImage:"url('/assets/img/plates/office.svg')"}}><img src="/assets/photos/careers/life-03.jpg" alt="Our workspace" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
            <figure className="photo r11 " style={{backgroundImage:"url('/assets/img/plates/meeting.svg')"}}><img src="/assets/photos/careers/life-04.jpg" alt="A team session" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
            <figure className="photo r11 " style={{backgroundImage:"url('/assets/img/plates/advisory.svg')"}}><img src="/assets/photos/careers/life-05.jpg" alt="Learning and development" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
          </div>
          <div className="grid g-3" style={{marginTop:"44px"}}>
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className="card reveal">
                <div className="card-icon">
                  {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M6 20V10M12 20V4M18 20v-7"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.5-9.5-9A5 5 0 0112 5a5 5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg>}
                  {i === 4 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>}
                  {i === 5 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg>}
                </div>
                <h3>{t(`careers_page.life.cards[${i}].title`)}</h3>
                <p>{t(`careers_page.life.cards[${i}].desc`)}</p>
              </div>
            ))}
          </div>
          <div className="cta-band" style={{marginTop:"48px"}}>
            <h2>{t('careers_page.life.cta_title')}</h2>
            <p>{t('careers_page.life.cta_desc')}</p>
            <div className="hero-actions"><a className="btn btn-white" href="mailto:careers@taggroup.in?subject=I%20would%20like%20to%20join%20TAG%20Group"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> careers@taggroup.in</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
