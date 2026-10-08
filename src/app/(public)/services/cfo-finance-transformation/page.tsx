"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/cfo.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.cfo.breadcrumb.home')}</a> / <a href="/services">{t('services.cfo.breadcrumb.services')}</a> / <span>{t('services.cfo.hero.title')}</span></div>
          <span className="eyebrow">{t('services.cfo.hero.eyebrow')}</span>
          <h1>{t('services.cfo.hero.title')}</h1>
          <p>{t('services.cfo.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.cfo.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.cfo.nav.proposition')}</a>
              <a href="#situations">{t('services.cfo.nav.situations')}</a>
              <a href="#who">{t('services.cfo.nav.who')}</a>
              <a href="#scope">{t('services.cfo.nav.scope')}</a>
              <a href="#approach">{t('services.cfo.nav.approach')}</a>
              <a href="#deliverables">{t('services.cfo.nav.deliverables')}</a>
              <a href="#industries">{t('services.cfo.nav.industries')}</a>
              <a href="#credentials">{t('services.cfo.nav.experience')}</a>
              <a href="#connected">{t('services.cfo.nav.connected')}</a>
              <a href="#cta">{t('services.cfo.nav.enquire')}</a>
              
              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>{t('services.cfo.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.cfo.nav.lead_partners_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="Gaurav Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.cfo.partners.gaurav.name')}</strong><span>{t('services.cfo.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="K. Vishnu Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>{t('services.cfo.partners.vishnu.name')}</strong><span>{t('services.cfo.partners.vishnu.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=CFO%20&%20Finance%20Transformation" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.cfo.nav.enquire')}</a>
              </div>
              
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>{t('services.cfo.nav.portfolio_pdf')}</h5>
                <p className="lead-note">{t('services.cfo.nav.portfolio_pdf_note')}</p>
                <a className="btn btn-ghost" href="/api/generate-pdf?service=cfo" target="_blank" style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.cfo.nav.download_pdf')}</a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">{t('services.cfo.nav.proposition')}</a>
              <a href="#situations">{t('services.cfo.nav.situations')}</a>
              <a href="#who">{t('services.cfo.nav.who')}</a>
              <a href="#scope">{t('services.cfo.nav.scope')}</a>
              <a href="#approach">{t('services.cfo.nav.approach')}</a>
              <a href="#deliverables">{t('services.cfo.nav.deliverables')}</a>
              <a href="#industries">{t('services.cfo.nav.industries')}</a>
              <a href="#credentials">{t('services.cfo.nav.experience')}</a>
              <a href="#connected">{t('services.cfo.nav.connected')}</a>
              <a href="#cta">{t('services.cfo.nav.enquire')}</a>
            </nav>
            
            <div>
              <div style={{ "marginBottom": "34px" }}>
                <figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/advisory.svg')" }}>
                  <img src="/assets/photos/services/cfo-finance-transformation.jpg" alt="CFO & Finance Transformation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>{t('services.cfo.hero.title')}</strong><span>{t('services.cfo.hero.eyebrow')}</span></figcaption>
                </figure>
              </div>

              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.cfo.prop.title')}</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>
                  {t('services.cfo.prop.desc')}
                </p>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.cfo.sit.title')}</h2>
                <ul className="check-list">
                  <li>{t('services.cfo.sit.l1')}</li>
                  <li>{t('services.cfo.sit.l2')}</li>
                  <li>{t('services.cfo.sit.l3')}</li>
                  <li>{t('services.cfo.sit.l4')}</li>
                  <li>{t('services.cfo.sit.l5')}</li>
                  <li>{t('services.cfo.sit.l6')}</li>
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.cfo.who.title')}</h2>
                <ul className="check-list two">
                  <li>{t('services.cfo.who.l1')}</li>
                  <li>{t('services.cfo.who.l2')}</li>
                  <li>{t('services.cfo.who.l3')}</li>
                  <li>{t('services.cfo.who.l4')}</li>
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.cfo.scope.title')}</h2>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.cfo.scope.h1')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.cfo.scope.h1_l1')}</li>
                    <li>{t('services.cfo.scope.h1_l2')}</li>
                    <li>{t('services.cfo.scope.h1_l3')}</li>
                  </ul>
                </div>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.cfo.scope.h2')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.cfo.scope.h2_l1')}</li>
                    <li>{t('services.cfo.scope.h2_l2')}</li>
                    <li>{t('services.cfo.scope.h2_l3')}</li>
                    <li>{t('services.cfo.scope.h2_l4')}</li>
                    <li>{t('services.cfo.scope.h2_l5')}</li>
                  </ul>
                </div>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.cfo.scope.h3')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.cfo.scope.h3_l1')}</li>
                    <li>{t('services.cfo.scope.h3_l2')}</li>
                    <li>{t('services.cfo.scope.h3_l3')}</li>
                    <li>{t('services.cfo.scope.h3_l4')}</li>
                  </ul>
                </div>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.cfo.scope.h4')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.cfo.scope.h4_l1')}</li>
                    <li>{t('services.cfo.scope.h4_l2')}</li>
                    <li>{t('services.cfo.scope.h4_l3')}</li>
                  </ul>
                </div>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.cfo.scope.h5')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.cfo.scope.h5_l1')}</li>
                    <li>{t('services.cfo.scope.h5_l2')}</li>
                    <li>{t('services.cfo.scope.h5_l3')}</li>
                  </ul>
                </div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.cfo.approach.title')}</h2>
                <div className="phase-grid">
                  <div className="phase"><div className="pn">01</div><h4>{t('services.cfo.approach.a1_t')}</h4><p>{t('services.cfo.approach.a1_d')}</p></div>
                  <div className="phase"><div className="pn">02</div><h4>{t('services.cfo.approach.a2_t')}</h4><p>{t('services.cfo.approach.a2_d')}</p></div>
                  <div className="phase"><div className="pn">03</div><h4>{t('services.cfo.approach.a3_t')}</h4><p>{t('services.cfo.approach.a3_d')}</p></div>
                  <div className="phase"><div className="pn">04</div><h4>{t('services.cfo.approach.a4_t')}</h4><p>{t('services.cfo.approach.a4_d')}</p></div>
                </div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.cfo.deliv.title')}</h2>
                <div className="deliverables">
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d1')}</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d2')}</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d3')}</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d4')}</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d5')}</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.cfo.deliv.d6')}</span></div>
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.cfo.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(`services.cfo.industries.i${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.cfo.cred.title')}</h2>
                <div className="callout">
                  {t('services.cfo.cred.desc')}
                </div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">{t('services.cfo.cred.clients')}</p>
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
                <h2><span className="n">9</span>{t('services.cfo.connected.title')}</h2>
                <div className="connected">
                  <a href="/services/global-capability-centre"><strong>{t('services.cfo.connected.c1_t')}</strong><span>{t('services.cfo.connected.c1_d')}</span></a>
                  <a href="/services/risk-internal-audit"><strong>{t('services.cfo.connected.c2_t')}</strong><span>{t('services.cfo.connected.c2_d')}</span></a>
                  <a href="/services/tax-cross-border"><strong>{t('services.cfo.connected.c3_t')}</strong><span>{t('services.cfo.connected.c3_d')}</span></a>
                  <a href="/services/deals-valuation"><strong>{t('services.cfo.connected.c4_t')}</strong><span>{t('services.cfo.connected.c4_d')}</span></a>
                </div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.cfo.cta.title')}</h2>
                  <p>{t('services.cfo.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=CFO%20&%20Finance%20Transformation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.cfo.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.cfo.cta.btn2')}</a>
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
