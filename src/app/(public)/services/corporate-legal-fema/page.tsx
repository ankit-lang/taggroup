"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/audit.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.legal.breadcrumb.home')}</a> / <a href="/services">{t('services.legal.breadcrumb.services')}</a> / <span>{t('services.legal.hero.title')}</span></div>
          <span className="eyebrow">{t('services.legal.hero.eyebrow')}</span>
          <h1>{t('services.legal.hero.title')}</h1>
          <p>{t('services.legal.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.legal.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.legal.nav.proposition')}</a>
              <a href="#situations">{t('services.legal.nav.situations')}</a>
              <a href="#who">{t('services.legal.nav.who')}</a>
              <a href="#scope">{t('services.legal.nav.scope')}</a>
              <a href="#approach">{t('services.legal.nav.approach')}</a>
              <a href="#deliverables">{t('services.legal.nav.deliverables')}</a>
              <a href="#industries">{t('services.legal.nav.industries')}</a>
              <a href="#credentials">{t('services.legal.nav.experience')}</a>
              <a href="#connected">{t('services.legal.nav.connected')}</a>
              <a href="#cta">{t('services.legal.nav.enquire')}</a>
              
              <div className="side-card" style={{ marginTop: "26px" }}>
                <h5>{t('services.legal.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.legal.nav.lead_partners_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.legal.partners.gaurav.name')}</strong><span>{t('services.legal.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/mr-pradip">
                  <span className="pmini-av"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</span>
                  <span className="pmini-info"><strong>{t('services.legal.partners.pradip.name')}</strong><span>{t('services.legal.partners.pradip.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                
                <a className="btn btn-primary" href="/contact?service=Corporate,%20Legal,%20FEMA%20&%20Regulatory" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.legal.nav.enquire')}
                </a>
              </div>
              
              <div className="side-card" style={{ marginTop: "18px" }}>
                <h5>{t('services.legal.nav.portfolio_pdf')}</h5>
                <p className="lead-note">{t('services.legal.nav.portfolio_pdf_note')}</p>
                <a className="btn btn-ghost" href="/api/generate-pdf?service=legal" target="_blank" style={{ width: "100%", justifyContent: "flex-start" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.legal.nav.download_pdf')}
                </a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">{t('services.legal.nav.proposition')}</a>
              <a href="#situations">{t('services.legal.nav.situations')}</a>
              <a href="#who">{t('services.legal.nav.who')}</a>
              <a href="#scope">{t('services.legal.nav.scope')}</a>
              <a href="#approach">{t('services.legal.nav.approach')}</a>
              <a href="#deliverables">{t('services.legal.nav.deliverables')}</a>
              <a href="#industries">{t('services.legal.nav.industries')}</a>
              <a href="#credentials">{t('services.legal.nav.experience')}</a>
              <a href="#connected">{t('services.legal.nav.connected')}</a>
              <a href="#cta">{t('services.legal.nav.enquire')}</a>
            </nav>
            
            <div>
              <div style={{ marginBottom: "34px" }}>
                <figure className="photo r219 " style={{ backgroundImage: "url('/assets/img/plates/article.svg')" }}>
                  <img src="/assets/photos/services/corporate-legal-fema.jpg" alt="Corporate, Legal, FEMA & Regulatory" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>{t('services.legal.hero.short_title')}</strong><span>{t('services.legal.hero.eyebrow')}</span></figcaption>
                </figure>
              </div>

              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.legal.prop.title')}</h2>
                <p className="lead" style={{ color: "var(--charcoal-700)" }}>
                  {t('services.legal.prop.desc')}
                </p>
                <div className="excl-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg>
                  <span>{t('services.legal.prop.note')}</span>
                </div>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.legal.sit.title')}</h2>
                <ul className="check-list">
                  {Array.from({length: 6}).map((_, i) => (
                    <li key={i}>{t(`services.legal.sit.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.legal.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(`services.legal.who.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.legal.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.legal.scope.h1_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.legal.scope.h2_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.legal.scope.h3_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.legal.scope.h4_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.legal.approach.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 4}).map((_, i) => (
                    <div key={i} className="phase">
                      <div className="pn">0{i+1}</div>
                      <h4>{t(`services.legal.approach.a${i+1}_t`)}</h4>
                      <p>{t(`services.legal.approach.a${i+1}_d`)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.legal.deliv.title')}</h2>
                <div className="deliverables">
                  {Array.from({length: 6}).map((_, i) => (
                    <div key={i} className="deliverable">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      <span>{t(`services.legal.deliv.d${i+1}`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.legal.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(`services.legal.industries.i${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.legal.cred.title')}</h2>
                <div className="callout">
                  {t('services.legal.cred.desc')}
                </div>
                <div className="logo-band" style={{ padding: "34px 0 0" }}>
                  <p className="eyebrow">{t('services.legal.cred.clients')}</p>
                  <div className="logo-marquee" aria-label="Selected clients">
                    <div className="logo-track">
                      <div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>{t('services.legal.connected.title')}</h2>
                <div className="connected">
                  <a href="/services/tax-cross-border"><strong>{t('services.legal.connected.c1_t')}</strong><span>{t('services.legal.connected.c1_d')}</span></a>
                  <a href="/services/deals-valuation"><strong>{t('services.legal.connected.c2_t')}</strong><span>{t('services.legal.connected.c2_d')}</span></a>
                  <a href="/services/india-entry"><strong>{t('services.legal.connected.c3_t')}</strong><span>{t('services.legal.connected.c3_d')}</span></a>
                  <a href="/services/international-business"><strong>{t('services.legal.connected.c4_t')}</strong><span>{t('services.legal.connected.c4_d')}</span></a>
                </div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.legal.cta.title')}</h2>
                  <p>{t('services.legal.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Corporate,%20Legal,%20FEMA%20&%20Regulatory"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.legal.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.legal.cta.btn2')}</a>
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
