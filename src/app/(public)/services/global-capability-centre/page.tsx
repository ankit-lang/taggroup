"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/global.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.gcc.breadcrumb.home')}</a> / <a href="/services">{t('services.gcc.breadcrumb.services')}</a> / <span>{t('services.gcc.hero.title')}</span></div>
          <span className="eyebrow">{t('services.gcc.hero.eyebrow')}</span>
          <h1>{t('services.gcc.hero.title')}</h1>
          <p>{t('services.gcc.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.gcc.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.gcc.nav.proposition')}</a>
              <a href="#situations">{t('services.gcc.nav.situations')}</a>
              <a href="#who">{t('services.gcc.nav.who')}</a>
              <a href="#scope">{t('services.gcc.nav.scope')}</a>
              <a href="#approach">{t('services.gcc.nav.approach')}</a>
              <a href="#engagement">{t('services.gcc.nav.engagement')}</a>
              <a href="#deliverables">{t('services.gcc.nav.deliverables')}</a>
              <a href="#industries">{t('services.gcc.nav.industries')}</a>
              <a href="#clients">{t('services.gcc.nav.clients')}</a>
              <a href="#credentials">{t('services.gcc.nav.experience')}</a>
              <a href="#gain">{t('services.gcc.nav.gain')}</a>
              <a href="#tools">{t('services.gcc.nav.tools')}</a>
              <a href="#connected">{t('services.gcc.nav.connected')}</a>
              <a href="#cta">{t('services.gcc.nav.enquire')}</a>
              
              <div className="side-card" style={{ marginTop: "26px" }}>
                <h5>{t('services.gcc.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.gcc.nav.lead_partners_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.gcc.partners.gaurav.name')}</strong><span>{t('services.gcc.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>{t('services.gcc.partners.vishnu.name')}</strong><span>{t('services.gcc.partners.vishnu.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                
                <a className="btn btn-primary" href="/contact?service=Global%20Capability%20Centre" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.gcc.nav.enquire')}
                </a>
              </div>
              
              <div className="side-card" style={{ marginTop: "18px" }}>
                <h5>{t('services.gcc.nav.portfolio_pdf')}</h5>
                <p className="lead-note">{t('services.gcc.nav.portfolio_pdf_note')}</p>
                <a className="btn btn-ghost" href="/api/generate-pdf?service=gcc" target="_blank" style={{ width: "100%", justifyContent: "flex-start" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.gcc.nav.download_pdf')}
                </a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">{t('services.gcc.nav.proposition')}</a>
              <a href="#situations">{t('services.gcc.nav.situations')}</a>
              <a href="#who">{t('services.gcc.nav.who')}</a>
              <a href="#scope">{t('services.gcc.nav.scope')}</a>
              <a href="#approach">{t('services.gcc.nav.approach')}</a>
              <a href="#engagement">{t('services.gcc.nav.engagement')}</a>
              <a href="#deliverables">{t('services.gcc.nav.deliverables')}</a>
              <a href="#industries">{t('services.gcc.nav.industries')}</a>
              <a href="#clients">{t('services.gcc.nav.clients')}</a>
              <a href="#credentials">{t('services.gcc.nav.experience')}</a>
              <a href="#gain">{t('services.gcc.nav.gain')}</a>
              <a href="#tools">{t('services.gcc.nav.tools')}</a>
              <a href="#connected">{t('services.gcc.nav.connected')}</a>
              <a href="#cta">{t('services.gcc.nav.enquire')}</a>
            </nav>
            
            <div>
              <div style={{ marginBottom: "34px" }}>
                <figure className="photo r219 " style={{ backgroundImage: "url('/assets/img/plates/meeting.svg')" }}>
                  <img src="/assets/photos/services/global-capability-centre.jpg" alt="Global Capability Centre" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>{t('services.gcc.hero.short_title')}</strong><span>{t('services.gcc.hero.eyebrow')}</span></figcaption>
                </figure>
              </div>

              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.gcc.prop.title')}</h2>
                <p className="lead" style={{ color: "var(--charcoal-700)" }}>
                  {t('services.gcc.prop.desc')}
                </p>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.gcc.sit.title')}</h2>
                <ul className="check-list">
                  {Array.from({length: 6}).map((_, i) => (
                    <li key={i}>{t(`services.gcc.sit.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.gcc.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(`services.gcc.who.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.gcc.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h1_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h2_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h3_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 5}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h4_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h5')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 3}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h5_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h6')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(`services.gcc.scope.h6_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.gcc.approach.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 4}).map((_, i) => (
                    <div key={i} className="phase">
                      <div className="pn">0{i+1}</div>
                      <h4>{t(`services.gcc.approach.a${i+1}_t`)}</h4>
                      <p>{t(`services.gcc.approach.a${i+1}_d`)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="engagement">
                <h2><span className="n">+</span>{t('services.gcc.engage.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="phase">
                      <div className="pn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg></div>
                      <h4>{t(`services.gcc.engage.e${i+1}`)}</h4>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">7</span>{t('services.gcc.deliv.title')}</h2>
                <div className="deliverables">
                  {Array.from({length: 8}).map((_, i) => (
                    <div key={i} className="deliverable">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      <span>{t(`services.gcc.deliv.d${i+1}`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">8</span>{t('services.gcc.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(`services.gcc.industries.i${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="clients">
                <h2>{t('services.gcc.client.title')}</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "14px" }}>
                  {t('services.gcc.client.desc')}
                </p>
                <div className="chips">
                  {Array.from({length: 8}).map((_, i) => (
                    <span key={i} className="chip accent">{t(`services.gcc.client.c${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">9</span>{t('services.gcc.cred.title')}</h2>
                <div className="callout">
                  {t('services.gcc.cred.desc')}
                </div>
                <div className="logo-band" style={{ padding: "34px 0 0" }}>
                  <p className="eyebrow">{t('services.gcc.cred.clients')}</p>
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

              <section className="svc-block" id="gain">
                <h2>{t('services.gcc.gain.title')}</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "14px" }}>
                  {t('services.gcc.gain.desc')}
                </p>
                <ul className="check-list two">
                  {Array.from({length: 6}).map((_, i) => (
                    <li key={i}>{t(`services.gcc.gain.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="tools">
                <h2>{t('services.gcc.tools.title')}</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "14px" }}>
                  {t('services.gcc.tools.desc')}
                </p>
                <div className="chips">
                  {Array.from({length: 7}).map((_, i) => (
                    <span key={i} className="chip">{t(`services.gcc.tools.t${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="connected">
                <h2><span className="n">10</span>{t('services.gcc.connected.title')}</h2>
                <div className="connected">
                  <a href="/services/global-transfer-pricing"><strong>{t('services.gcc.connected.c1_t')}</strong><span>{t('services.gcc.connected.c1_d')}</span></a>
                  <a href="/services/cfo-finance-transformation"><strong>{t('services.gcc.connected.c2_t')}</strong><span>{t('services.gcc.connected.c2_d')}</span></a>
                  <a href="/services/international-business"><strong>{t('services.gcc.connected.c3_t')}</strong><span>{t('services.gcc.connected.c3_d')}</span></a>
                  <a href="/services/tax-cross-border"><strong>{t('services.gcc.connected.c4_t')}</strong><span>{t('services.gcc.connected.c4_d')}</span></a>
                </div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.gcc.cta.title')}</h2>
                  <p>{t('services.gcc.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Global%20Capability%20Centre"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.gcc.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.gcc.cta.btn2')}</a>
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
