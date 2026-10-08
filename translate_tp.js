const fs = require('fs');

let pageContent = `"use client";
import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = (t('services.tp.faqs') as any as {q: string, a: string}[]);

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/tp.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.tp.breadcrumb.home')}</a> / <a href="/services">{t('services.tp.breadcrumb.services')}</a> / <span>{t('services.tp.hero.title')}</span></div>
          <span className="eyebrow">{t('services.tp.hero.eyebrow')}</span>
          <h1>{t('services.tp.hero.title')}</h1>
          <p>{t('services.tp.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.tp.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.tp.nav.proposition')}</a>
              <a href="#lifecycle">{t('services.tp.nav.lifecycle')}</a>
              <a href="#situations">{t('services.tp.nav.situations')}</a>
              <a href="#who">{t('services.tp.nav.who')}</a>
              <a href="#scope">{t('services.tp.nav.scope')}</a>
              <a href="#jurisdictions">{t('services.tp.nav.jurisdictions')}</a>
              <a href="#approach">{t('services.tp.nav.approach')}</a>
              <a href="#engagement">{t('services.tp.nav.engagement')}</a>
              <a href="#tools">{t('services.tp.nav.tools')}</a>
              <a href="#deliverables">{t('services.tp.nav.deliverables')}</a>
              <a href="#credentials">{t('services.tp.nav.experience')}</a>
              <a href="#faqs">{t('services.tp.nav.faqs')}</a>
              <a href="#pdf-portfolio">{t('services.tp.nav.portfolio')}</a>
              <a href="#contacts">{t('services.tp.nav.contacts')}</a>
              <a href="#cta">{t('services.tp.nav.enquire')}</a>

              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>{t('services.tp.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.tp.nav.lead_partners_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="Gaurav Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.tp.partners.gaurav.name')}</strong><span>{t('services.tp.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="K. Vishnu Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>{t('services.tp.partners.vishnu.name')}</strong><span>{t('services.tp.partners.vishnu.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Global%20Transfer%20Pricing" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.tp.nav.enquire')}</a>
              </div>
              
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>{t('services.tp.nav.portfolio_pdf')}</h5>
                <p className="lead-note">{t('services.tp.nav.portfolio_pdf_note')}</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/global-transfer-pricing.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.tp.nav.download_pdf')}</a>
                <a href="#pdf-portfolio" style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.84rem', color: 'var(--accent)', textDecoration: 'underline' }}>{t('services.tp.nav.view_embedded')}</a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">{t('services.tp.nav.proposition')}</a>
              <a href="#lifecycle">{t('services.tp.nav.lifecycle')}</a>
              <a href="#situations">{t('services.tp.nav.situations')}</a>
              <a href="#who">{t('services.tp.nav.who')}</a>
              <a href="#scope">{t('services.tp.nav.scope')}</a>
              <a href="#jurisdictions">{t('services.tp.nav.jurisdictions')}</a>
              <a href="#approach">{t('services.tp.nav.approach')}</a>
              <a href="#engagement">{t('services.tp.nav.engagement')}</a>
              <a href="#tools">{t('services.tp.nav.tools')}</a>
              <a href="#deliverables">{t('services.tp.nav.deliverables')}</a>
              <a href="#credentials">{t('services.tp.nav.experience')}</a>
              <a href="#faqs">{t('services.tp.nav.faqs')}</a>
              <a href="#pdf-portfolio">{t('services.tp.nav.portfolio')}</a>
              <a href="#contacts">{t('services.tp.nav.contacts')}</a>
              <a href="#cta">{t('services.tp.nav.enquire')}</a>
            </nav>
            
            <div>
              <div style={{ "marginBottom": "34px" }}>
                <figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/advisory.svg')" }}>
                  <img src="/assets/photos/services/global-transfer-pricing.jpg" alt="Global Transfer Pricing" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>{t('services.tp.hero.title')}</strong><span>{t('services.tp.hero.flagship')}</span></figcaption>
                </figure>
              </div>

              {/* Section 1: Service Proposition */}
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.tp.prop.title')}</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>
                  {t('services.tp.prop.desc')}
                </p>
                <div className="excl-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg>
                  <span>{t('services.tp.prop.note')}</span>
                </div>
              </section>

              {/* Section 2: One Lifecycle - Eight Services */}
              <section className="svc-block" id="lifecycle">
                <h2><span className="n">2</span>{t('services.tp.lifecycle.title')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  
                  {Array.from({length: 8}).map((_, i) => {
                    const num = i + 1;
                    return (
                      <div key={num} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                        <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>0{num}</div>
                        <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>{t(\`services.tp.lifecycle.i\${num}_t\`)}</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                          {t(\`services.tp.lifecycle.i\${num}_d\`)}
                        </p>
                      </div>
                    )
                  })}

                </div>
              </section>

              {/* Section 3: Business Situations */}
              <section className="svc-block" id="situations">
                <h2><span className="n">3</span>{t('services.tp.sit.title')}</h2>
                <ul className="check-list">
                  <li>{t('services.tp.sit.l1')}</li>
                  <li>{t('services.tp.sit.l2')}</li>
                  <li>{t('services.tp.sit.l3')}</li>
                  <li>{t('services.tp.sit.l4')}</li>
                  <li>{t('services.tp.sit.l5')}</li>
                  <li>{t('services.tp.sit.l6')}</li>
                  <li>{t('services.tp.sit.l7')}</li>
                </ul>
              </section>

              {/* Section 4: Who this service is for */}
              <section className="svc-block" id="who">
                <h2><span className="n">4</span>{t('services.tp.who.title')}</h2>
                <ul className="check-list two">
                  <li>{t('services.tp.who.l1')}</li>
                  <li>{t('services.tp.who.l2')}</li>
                  <li>{t('services.tp.who.l3')}</li>
                </ul>
              </section>

              {/* Section 5: Detailed scope of assistance */}
              <section className="svc-block" id="scope">
                <h2><span className="n">5</span>{t('services.tp.scope.title')}</h2>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tp.scope.h1')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.tp.scope.h1_l1')}</li>
                    <li>{t('services.tp.scope.h1_l2')}</li>
                    <li>{t('services.tp.scope.h1_l3')}</li>
                    <li>{t('services.tp.scope.h1_l4')}</li>
                    <li>{t('services.tp.scope.h1_l5')}</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tp.scope.h2')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.tp.scope.h2_l1')}</li>
                    <li>{t('services.tp.scope.h2_l2')}</li>
                    <li>{t('services.tp.scope.h2_l3')}</li>
                    <li>{t('services.tp.scope.h2_l4')}</li>
                    <li>{t('services.tp.scope.h2_l5')}</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tp.scope.h3')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.tp.scope.h3_l1')}</li>
                    <li>{t('services.tp.scope.h3_l2')}</li>
                    <li>{t('services.tp.scope.h3_l3')}</li>
                    <li>{t('services.tp.scope.h3_l4')}</li>
                    <li>{t('services.tp.scope.h3_l5')}</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tp.scope.h4')}</h4>
                  <ul className="check-list two">
                    <li>{t('services.tp.scope.h4_l1')}</li>
                    <li>{t('services.tp.scope.h4_l2')}</li>
                    <li>{t('services.tp.scope.h4_l3')}</li>
                    <li>{t('services.tp.scope.h4_l4')}</li>
                    <li>{t('services.tp.scope.h4_l5')}</li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Jurisdictional focus */}
              <section className="svc-block" id="jurisdictions">
                <h2><span className="n">6</span>{t('services.tp.juris.title')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  
                  {Array.from({length: 3}).map((_, i) => {
                    const num = i + 1;
                    return (
                      <div key={num} style={{ background: 'var(--mist-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '1.08rem', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>{t(\`services.tp.juris.j\${num}_t\`)}</h4>
                        <ul className="check-list">
                          <li>{t(\`services.tp.juris.j\${num}_l1\`)}</li>
                          <li>{t(\`services.tp.juris.j\${num}_l2\`)}</li>
                          <li>{t(\`services.tp.juris.j\${num}_l3\`)}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Section 7: Engagement approach */}
              <section className="svc-block" id="approach">
                <h2><span className="n">7</span>{t('services.tp.approach.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 6}).map((_, i) => {
                    const num = i + 1;
                    return (
                      <div key={num} className="phase">
                        <div className="pn">0{num}</div>
                        <h4>{t(\`services.tp.approach.a\${num}_t\`)}</h4>
                        <p>{t(\`services.tp.approach.a\${num}_d\`)}</p>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Section 8: Engagement models */}
              <section className="svc-block" id="engagement">
                <h2><span className="n">8</span>{t('services.tp.models.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 4}).map((_, i) => {
                    const num = i + 1;
                    return (
                      <div key={num} className="phase">
                        <div className="pn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>
                        </div>
                        <h4>{t(\`services.tp.models.m\${num}_t\`)}</h4>
                        <p>{t(\`services.tp.models.m\${num}_d\`)}</p>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Section 9: Databases & Tools */}
              <section className="svc-block" id="tools">
                <h2><span className="n">9</span>{t('services.tp.tools.title')}</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>{t('services.tp.tools.desc')}</p>
                <div className="chips">
                  {Array.from({length: 7}).map((_, i) => (
                    <span key={i} className="chip accent">{t(\`services.tp.tools.t\${i+1}\`)}</span>
                  ))}
                </div>
              </section>

              {/* Section 10: Typical deliverables */}
              <section className="svc-block" id="deliverables">
                <h2><span className="n">10</span>{t('services.tp.deliv.title')}</h2>
                <div className="deliverables">
                  {Array.from({length: 8}).map((_, i) => (
                    <div key={i} className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t(\`services.tp.deliv.d\${i+1}\`)}</span></div>
                  ))}
                </div>
              </section>

              {/* Section 11: Selected experience & credentials */}
              <section className="svc-block" id="credentials">
                <h2><span className="n">11</span>{t('services.tp.cred.title')}</h2>
                <div className="callout">
                  {t('services.tp.cred.desc')}
                </div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">{t('services.tp.cred.clients')}</p>
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

              {/* Section 12: Frequently Asked Questions */}
              <section className="svc-block" id="faqs">
                <h2><span className="n">12</span>{t('services.tp.faq.title')}</h2>
                <div style={{ display: 'grid', gap: '14px', marginTop: '20px' }}>
                  {faqs && faqs.map((faq: any, idx: number) => (
                    <div 
                      key={idx} 
                      style={{ 
                        background: '#fff', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius)', 
                        overflow: 'hidden',
                        transition: 'all 0.2s ease' 
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '18px 22px',
                          background: 'none',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: 'var(--heading)'
                        }}
                      >
                        <span>{faq.q}</span>
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0,
                            marginLeft: '12px',
                            color: 'var(--accent)'
                          }}
                        >
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </button>
                      {openFaq === idx && (
                        <div style={{ padding: '0 22px 20px', color: 'var(--charcoal-700)', fontSize: '0.93rem', lineHeight: 1.6, borderTop: '1px solid var(--mist-100)', paddingTop: '14px' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Embedded PDF Portfolio Viewer */}
              <section className="svc-block" id="pdf-portfolio">
                <h2><span className="n">13</span>{t('services.tp.pdf.title')}</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>
                  {t('services.tp.pdf.desc')}
                </p>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  background: '#fff'
                }}>
                  <div style={{
                    padding: '16px 20px',
                    background: 'var(--mist-50)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                        <path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/>
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--heading)' }}>{t('services.tp.pdf.doc_name')}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('services.tp.pdf.doc_meta')}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <a 
                        className="btn btn-ghost" 
                        href="/assets/service-pdfs/global-transfer-pricing.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 6 }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        {t('services.tp.pdf.open')}
                      </a>
                      <a 
                        className="btn btn-primary" 
                        href="/assets/service-pdfs/global-transfer-pricing.pdf" 
                        download
                        style={{ padding: '8px 16px', fontSize: '0.86rem' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 6 }}>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        {t('services.tp.pdf.download')}
                      </a>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '750px', background: '#eef2f5' }}>
                    <iframe
                      src="/assets/service-pdfs/global-transfer-pricing.pdf"
                      title="Global Transfer Pricing Service Portfolio PDF"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                </div>
              </section>

              {/* Section 14: Key Contacts */}
              <section className="svc-block" id="contacts">
                <h2><span className="n">14</span>{t('services.tp.contacts.title')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--mist-100)', overflow: 'hidden', flexShrink: 0 }}>
                      <img src="/assets/photos/people/gaurav.jpg" alt="Gaurav Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.02rem', color: 'var(--heading)' }}>{t('services.tp.partners.gaurav.name')}</h4>
                      <p style={{ margin: '2px 0 6px', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500 }}>{t('services.tp.partners.gaurav.title')}</p>
                      <a href="mailto:gaurav@taggroup.in" style={{ fontSize: '0.86rem', color: 'var(--charcoal-700)', display: 'block' }}>gaurav@taggroup.in</a>
                      <a href="tel:+918860716777" style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>+91 88607 16777</a>
                    </div>
                  </div>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--mist-100)', overflow: 'hidden', flexShrink: 0 }}>
                      <img src="/assets/photos/people/k-vishnu.jpg" alt="K. Vishnu Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.02rem', color: 'var(--heading)' }}>{t('services.tp.partners.vishnu.name')}</h4>
                      <p style={{ margin: '2px 0 6px', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500 }}>{t('services.tp.partners.vishnu.title')}</p>
                      <a href="mailto:k.vishnu@taggroup.in" style={{ fontSize: '0.86rem', color: 'var(--charcoal-700)', display: 'block' }}>k.vishnu@taggroup.in</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15: Connected Services */}
              <section className="svc-block" id="connected">
                <h2><span className="n">15</span>{t('services.tp.connected.title')}</h2>
                <div className="connected">
                  <a href="/services/tax-cross-border"><strong>{t('services.tp.connected.c1_t')}</strong><span>{t('services.tp.connected.c1_d')}</span></a>
                  <a href="/services/international-business"><strong>{t('services.tp.connected.c2_t')}</strong><span>{t('services.tp.connected.c2_d')}</span></a>
                  <a href="/services/deals-valuation"><strong>{t('services.tp.connected.c3_t')}</strong><span>{t('services.tp.connected.c3_d')}</span></a>
                </div>
              </section>

              {/* Section 16: CTA */}
              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.tp.cta.title')}</h2>
                  <p>{t('services.tp.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Global%20Transfer%20Pricing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.tp.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.tp.cta.btn2')}</a>
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
`;

fs.writeFileSync('src/app/(public)/services/global-transfer-pricing/page.tsx', pageContent);

const enTpKeys = `
      tp: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: { eyebrow: "Service Portfolio · Flagship capability", title: "Global Transfer Pricing", desc: "The complete transfer pricing lifecycle — from first health check to audit defence — delivered from India for multinational groups and the advisory firms that serve them.", flagship: "Flagship capability" },
        nav: { on_this_page: "On this page", proposition: "Service proposition", lifecycle: "8 Core services", situations: "When it's needed", who: "Who it's for", scope: "Scope of assistance", jurisdictions: "Jurisdictional focus", approach: "Our approach", engagement: "Engagement options", tools: "Databases & tools", deliverables: "Typical deliverables", experience: "Experience & credentials", faqs: "FAQs", portfolio: "PDF Portfolio", contacts: "Key contacts", enquire: "Enquire", lead_partners: "Lead partners", lead_partners_note: "Speak directly with the partners who lead this practice.", portfolio_pdf: "Service portfolio PDF", portfolio_pdf_note: "Download or view the official 4-page portfolio document.", download_pdf: "Download PDF", view_embedded: "View embedded PDF below" },
        partners: { gaurav: { name: "Gaurav Sharma", title: "Managing Partner" }, vishnu: { name: "K. Vishnu Sharma", title: "Partner" } },
        prop: { title: "Service proposition", desc: "Transfer pricing is no longer an annual documentation exercise. Tax administrations in India, the UAE, Europe and Asia now test the substance behind every intercompany price, and multinational groups need policies, agreements, analysis and files that tell one consistent story. TAG Group covers the full lifecycle in one team: we assess where you stand, design the policy, run the economics, document it in every jurisdiction, file what is due, and stand behind the work when it is examined. Delivery runs from our India-based Centre of Excellence with partner-led review, common information requests and defined milestones — direct to corporate groups, co-sourced with in-house teams, or as confidential white-label support for overseas tax, legal and consulting firms.", note: "APA and MAP remain excluded, and TAG does not issue Form 3CEB certification; documentation and technical support are provided. Delivery is coordinated with local advisers where required, with a defined review process and secure information handling." },
        lifecycle: { title: "One lifecycle — eight services", i1_t: "TP Health Check & Impact Assessment", i1_d: "Map intercompany flows, profile each entity, test current pricing at a high level and size the exposure — with a prioritised roadmap.", i2_t: "Policy Design & Structuring", i2_d: "Group TP policy, pricing models, SOPs and governance, aligned to the value chain and the commercial plan.", i3_t: "Functional & Economic Analysis", i3_d: "FAR analysis, choice of the most appropriate method, tested-party selection and arm's length ranges from global databases.", i4_t: "Intercompany Agreements", i4_d: "Drafting and refreshing agreements so that contracts, conduct and pricing say the same thing.", i5_t: "Documentation", i5_d: "Master File, Local File and multi-country files to a common standard, adapted to each jurisdiction.", i6_t: "Compliance & Filings", i6_d: "Accountant's-report documentation, Master File and CbCR forms in India, the UAE TP disclosure, and CbCR notifications and reports.", i7_t: "Financial Transactions & Intangibles", i7_d: "Loans, guarantees, cash pooling, royalties and IP — with valuation support from our Valuation practice.", i8_t: "Audit Defence & Dispute Support", i8_d: "Pre-audit readiness, responses to TP queries and assessments, and support through APA and appeal processes." },
        sit: { title: "Business situations that trigger the need", l1: "You have intercompany transactions but no written TP policy or agreements", l2: "A new jurisdiction, restructuring, financing or IP transfer changes how value moves in the group", l3: "UAE Corporate Tax has brought your UAE entities into the transfer pricing net", l4: "Documentation, disclosures and CbCR must be produced consistently across several countries", l5: "A tax administration has opened a TP query, audit or assessment", l6: "An advisory firm needs reliable, confidential TP delivery capacity without adding headcount", l7: "In-house tax teams that need surge capacity, deputation or a second review" },
        who: { title: "Who this service is for", l1: "Multinational groups with entities in India, the UAE, Europe, Asia or Australia", l2: "Indian groups with outbound subsidiaries and cross-border service, IP or financing flows", l3: "Overseas tax, legal and consulting firms seeking an India-based delivery partner" },
        scope: { title: "Detailed scope of assistance", h1: "Planning & policy", h1_l1: "TP health check and risk exposure assessment", h1_l2: "Group TP policy, pricing models and SOPs", h1_l3: "Cross-border transaction structuring and business restructurings", h1_l4: "Intercompany agreements — drafting, review and annual refresh", h1_l5: "Year-end true-ups and pricing adjustments", h2: "Analysis & benchmarking", h2_l1: "Functional, asset and risk (FAR) analysis", h2_l2: "Most appropriate method and tested-party selection", h2_l3: "Comparable searches, screening and arm's length ranges", h2_l4: "Royalty, interest-rate and guarantee-fee benchmarking", h2_l5: "Remuneration benchmarking for connected persons", h3: "Documentation & compliance", h3_l1: "Master File and Local File, contemporaneous and audit-ready", h3_l2: "Multi-country documentation coordinated from one hub", h3_l3: "India: accountant's-report documentation, Master File and CbCR forms", h3_l4: "UAE: TP disclosure form, Local / Master File and CbCR", h3_l5: "Deputation and second-review support for in-house teams", h4: "Controversy & specialist areas", h4_l1: "Pre-audit health check and documentation alignment", h4_l2: "Responses to TP queries, audits and assessments", h4_l3: "Support with unilateral and bilateral APA applications", h4_l4: "Support through appeals, working with our tax practice", h4_l5: "Financial transactions, intangibles and TP-related valuations" },
        juris: { title: "Jurisdictional focus", j1_t: "India", j1_l1: "Accountant's report (Form 3CEB) documentation support", j1_l2: "Master File (Form 3CEAA) and CbCR (Forms 3CEAC / 3CEAD)", j1_l3: "Safe-harbour evaluation and TP assessments", j2_t: "UAE", j2_l1: "Arm's length compliance under UAE Corporate Tax", j2_l2: "TP disclosure form, Local File and Master File", j2_l3: "Connected-person remuneration — via our UAE Desk", j3_t: "Europe, Asia & Australia", j3_l1: "Netherlands, Luxembourg, Singapore and Australia files", j3_l2: "OECD-aligned Local and Master Files", j3_l3: "Coordination with local advisers where required" },
        approach: { title: "Engagement approach & phases", a1_t: "Diagnose", a1_d: "Map transactions and entities; assess the current position and the exposure.", a2_t: "Design", a2_d: "Set or refine the policy, method and agreements that the analysis will support.", a3_t: "Analyse", a3_d: "Run FAR, benchmarking and financial analysis to establish arm's length outcomes.", a4_t: "Document & file", a4_d: "Prepare files and disclosures to a common standard, on the local calendar.", a5_t: "Implement", a5_d: "Embed pricing in systems, SOPs and year-end adjustments; train finance teams.", a6_t: "Defend", a6_d: "Stand behind the work through queries, audits, APAs and appeals." },
        models: { title: "Engagement models", m1_t: "Direct engagements", m1_d: "Direct engagements with corporate groups managing multi-country transfer pricing.", m2_t: "Co-sourced delivery", m2_d: "Co-sourced delivery alongside in-house tax teams, including deputation.", m3_t: "White-label support", m3_d: "Confidential white-label support for overseas tax, legal and consulting firms.", m4_t: "Annual TP retainers", m4_d: "Annual retainers covering policy, documentation, filings and year-round queries." },
        tools: { title: "Databases & tools", desc: "We utilize tier-one global financial, benchmarking and transaction databases for economic analysis:", t1: "TP Catalyst", t2: "Orbis", t3: "S&P Capital IQ", t4: "RoyaltyStat / RoyaltyRange", t5: "Loan Connector", t6: "Refinitiv Eikon", t7: "Prowess & Capitaline" },
        deliv: { title: "Typical deliverables", d1: "TP health-check report and roadmap", d2: "Group TP policy, pricing models and SOPs", d3: "Intercompany agreements", d4: "Benchmarking studies and economic analysis", d5: "Master File, Local File and multi-country files", d6: "Statutory TP forms, disclosures and CbCR", d7: "Audit-response and APA submissions", d8: "Management training and year-end true-up memos" },
        cred: { title: "Selected experience & credentials", desc: "TAG Group has transfer pricing experience across the Netherlands, Luxembourg, Singapore, UAE, Australia, India and many others. Our partners have led transfer pricing and international tax at Big Four firms and headed tax for multinational groups across India and Asia-Pacific — serving multinational groups directly and acting as the back-end delivery partner for overseas advisory firms.", clients: "Selected clients" },
        faq: { title: "Frequently asked questions" },
        faqs: [
          { q: "Do we need transfer pricing support if our intercompany transactions are small?", a: "Most jurisdictions apply the arm's length principle to every related-party transaction, while documentation and filing obligations depend on local thresholds. A health check confirms what applies to you and keeps the effort proportionate." },
          { q: "How often should benchmarking be refreshed?", a: "Financial data should be updated annually, with a fresh comparable search typically every few years — or sooner when the business, the transaction or the market changes materially." },
          { q: "What is the difference between a TP policy and an intercompany agreement?", a: "The policy sets the method and pricing logic for the group; the agreement is the legal contract between two entities that puts that logic into effect. Both should match how the entities actually operate." },
          { q: "Can you work behind our firm's brand?", a: "Yes. We provide confidential, white-label delivery for tax, legal and consulting firms, integrating with your templates, review process and client timelines." },
          { q: "Which jurisdictions do you cover?", a: "We prepare documentation for India, the UAE, the Netherlands, Luxembourg, Singapore, Australia and many others from our India-based hub, coordinating with local advisers where local sign-off is required." }
        ],
        pdf: { title: "Service portfolio document", desc: "View or download the official 4-page Global Transfer Pricing portfolio overview document below.", doc_name: "Global Transfer Pricing Portfolio.pdf", doc_meta: "4 Pages · Official Service Portfolio Document", open: "Open full screen", download: "Download PDF" },
        contacts: { title: "Key contacts" },
        connected: { title: "Connected services", c1_t: "Tax & Cross-Border Advisory", c1_d: "Related capability", c2_t: "International Business", c2_d: "Related capability", c3_t: "Deals, Valuation & Transaction Support", c3_d: "Related capability" },
        cta: { title: "Discuss Global Transfer Pricing with our team", desc: "Tell us your situation and we'll map the right scope, team and approach for your business.", btn1: "Enquire — contact@taggroup.in", btn2: "Contact page" }
      },
`;

const koTpKeys = `
      tp: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: { eyebrow: "서비스 포트폴리오 · 주요 역량", title: "글로벌 이전 가격", desc: "초기 상태 점검부터 감사 방어까지 전체 이전 가격 라이프사이클 — 다국적 기업 그룹과 그들을 지원하는 자문 회사를 위해 인도에서 제공됩니다.", flagship: "주요 역량" },
        nav: { on_this_page: "이 페이지에서", proposition: "서비스 제안", lifecycle: "8대 핵심 서비스", situations: "필요한 경우", who: "서비스 대상", scope: "지원 범위", jurisdictions: "관할권 초점", approach: "우리의 접근 방식", engagement: "참여 옵션", tools: "데이터베이스 및 도구", deliverables: "주요 결과물", experience: "경험 및 자격", faqs: "자주 묻는 질문", portfolio: "PDF 포트폴리오", contacts: "주요 연락처", enquire: "문의하기", lead_partners: "대표 파트너", lead_partners_note: "이 실무를 이끄는 파트너와 직접 상담하세요.", portfolio_pdf: "서비스 포트폴리오 PDF", portfolio_pdf_note: "공식 4페이지 포트폴리오 문서를 다운로드하거나 봅니다.", download_pdf: "PDF 다운로드", view_embedded: "아래 내장된 PDF 보기" },
        partners: { gaurav: { name: "가우라브 샤르마", title: "대표 파트너" }, vishnu: { name: "K. 비슈누 샤르마", title: "파트너" } },
        prop: { title: "서비스 제안", desc: "이전 가격은 더 이상 연례적인 문서화 작업이 아닙니다. 인도, UAE, 유럽 및 아시아의 세무 당국은 이제 모든 회사 간 가격 뒤에 있는 실체를 테스트하며, 다국적 그룹은 일관된 이야기를 전달하는 정책, 계약, 분석 및 파일이 필요합니다. TAG Group은 한 팀에서 전체 라이프사이클을 다룹니다: 우리는 귀하의 현재 위치를 평가하고, 정책을 설계하고, 경제 분석을 실행하고, 모든 관할권에서 문서화하고, 납부할 금액을 신고하고, 조사를 받을 때 작업을 변호합니다. 기업 그룹에 직접 제공하거나 사내 팀과 공동 조달하거나 해외 세금, 법률 및 컨설팅 회사를 위한 기밀 화이트 레이블 지원으로 파트너 주도 검토, 공통 정보 요청 및 정의된 마일스톤과 함께 인도에 위치한 우수 센터에서 배송이 실행됩니다.", note: "APA 및 MAP는 여전히 제외되며 TAG는 양식 3CEB 인증을 발급하지 않습니다. 문서화 및 기술 지원이 제공됩니다. 배송은 필요한 경우 지역 자문 위원과 조정되며 정의된 검토 프로세스 및 안전한 정보 처리가 이루어집니다." },
        lifecycle: { title: "하나의 라이프사이클 — 8가지 서비스", i1_t: "TP 상태 점검 및 영향 평가", i1_d: "회사 간 흐름을 매핑하고, 각 엔터티의 프로필을 작성하고, 현재 가격을 높은 수준에서 테스트하고, 우선 순위가 지정된 로드맵으로 노출 규모를 파악합니다.", i2_t: "정책 설계 및 구조화", i2_d: "가치 사슬 및 상업 계획에 맞춘 그룹 TP 정책, 가격 모델, SOP 및 거버넌스.", i3_t: "기능 및 경제 분석", i3_d: "FAR 분석, 가장 적절한 방법 선택, 테스트 대상 당사자 선택 및 글로벌 데이터베이스의 정상 가격 범위.", i4_t: "회사 간 계약", i4_d: "계약, 행동 및 가격이 동일한 내용을 나타내도록 계약서 작성 및 갱신.", i5_t: "문서화", i5_d: "각 관할권에 맞게 조정된 공통 표준에 대한 마스터 파일, 로컬 파일 및 다중 국가 파일.", i6_t: "규정 준수 및 파일링", i6_d: "인도의 회계사 보고서 문서, 마스터 파일 및 CbCR 양식, UAE TP 공개, CbCR 통지 및 보고서.", i7_t: "재무 거래 및 무형 자산", i7_d: "대출, 보증, 현금 풀링, 로열티 및 IP — 당사의 평가 실무에서 평가 지원을 제공합니다.", i8_t: "감사 방어 및 분쟁 지원", i8_d: "사전 감사 준비, TP 질문 및 평가에 대한 응답, APA 및 항소 프로세스를 통한 지원." },
        sit: { title: "필요성을 촉발하는 비즈니스 상황", l1: "회사 간 거래가 있지만 서면 TP 정책이나 계약이 없는 경우", l2: "새로운 관할권, 구조 조정, 자금 조달 또는 IP 이전은 그룹 내에서 가치가 이동하는 방식을 변경합니다.", l3: "UAE 법인세로 인해 귀하의 UAE 법인이 이전 가격망에 포함되었습니다.", l4: "문서화, 공개 및 CbCR은 여러 국가에 걸쳐 일관되게 작성되어야 합니다.", l5: "세무 당국에서 TP 질문, 감사 또는 평가를 시작했습니다.", l6: "자문 회사는 인원을 늘리지 않고도 안정적이고 기밀이 유지되는 TP 제공 능력이 필요합니다.", l7: "급증 용량, 파견 또는 2차 검토가 필요한 사내 세무 팀" },
        who: { title: "이 서비스의 대상", l1: "인도, UAE, 유럽, 아시아 또는 호주에 법인을 둔 다국적 그룹", l2: "아웃바운드 자회사 및 국경 간 서비스, IP 또는 자금 조달 흐름이 있는 인도 그룹", l3: "인도 기반 제공 파트너를 찾는 해외 세무, 법률 및 컨설팅 회사" },
        scope: { title: "자세한 지원 범위", h1: "계획 및 정책", h1_l1: "TP 상태 점검 및 위험 노출 평가", h1_l2: "그룹 TP 정책, 가격 모델 및 SOP", h1_l3: "국경 간 거래 구조화 및 비즈니스 구조 조정", h1_l4: "회사 간 계약 — 초안 작성, 검토 및 연간 갱신", h1_l5: "연말 진실성 확인 및 가격 조정", h2: "분석 및 벤치마킹", h2_l1: "기능, 자산 및 위험(FAR) 분석", h2_l2: "가장 적절한 방법 및 테스트 당사자 선택", h2_l3: "비교 가능한 검색, 선별 및 정상 가격 범위", h2_l4: "로열티, 이자율 및 보증 수수료 벤치마킹", h2_l5: "연결된 사람에 대한 보수 벤치마킹", h3: "문서화 및 규정 준수", h3_l1: "마스터 파일 및 로컬 파일, 동시 및 감사 준비 완료", h3_l2: "하나의 허브에서 조정되는 다중 국가 문서화", h3_l3: "인도: 회계사 보고서 문서, 마스터 파일 및 CbCR 양식", h3_l4: "UAE: TP 공개 양식, 로컬/마스터 파일 및 CbCR", h3_l5: "사내 팀을 위한 파견 및 두 번째 검토 지원", h4: "논쟁 및 전문 분야", h4_l1: "사전 감사 상태 점검 및 문서 일치", h4_l2: "TP 질문, 감사 및 평가에 대한 응답", h4_l3: "일방적 및 양자적 APA 신청 지원", h4_l4: "항소 지원, 세무팀과 협력", h4_l5: "금융 거래, 무형 자산 및 TP 관련 평가" },
        juris: { title: "관할 구역 초점", j1_t: "인도", j1_l1: "회계사 보고서(양식 3CEB) 문서 지원", j1_l2: "마스터 파일(양식 3CEAA) 및 CbCR(양식 3CEAC / 3CEAD)", j1_l3: "세이프 하버 평가 및 TP 평가", j2_t: "아랍에미리트", j2_l1: "UAE 법인세에 따른 정상가격 준수", j2_l2: "TP 공개 양식, 로컬 파일 및 마스터 파일", j2_l3: "연결된 사람의 보수 — UAE 데스크를 통해", j3_t: "유럽, 아시아 및 호주", j3_l1: "네덜란드, 룩셈부르크, 싱가포르 및 호주 파일", j3_l2: "OECD에 맞춘 로컬 및 마스터 파일", j3_l3: "필요한 경우 지역 고문과 조정" },
        approach: { title: "참여 접근 방식 및 단계", a1_t: "진단하다", a1_d: "거래 및 엔터티 매핑, 현재 위치 및 노출 평가.", a2_t: "설계", a2_d: "분석에서 지원할 정책, 방법 및 계약을 설정하거나 구체화합니다.", a3_t: "분석", a3_d: "FAR, 벤치마킹 및 재무 분석을 실행하여 정상 가격 결과를 설정합니다.", a4_t: "문서 및 파일", a4_d: "지역 달력에 따라 공통된 표준에 맞게 파일 및 공개 문서를 준비합니다.", a5_t: "구현", a5_d: "시스템, SOP 및 연말 조정에 가격을 통합합니다. 재무팀을 교육합니다.", a6_t: "방어", a6_d: "질의, 감사, APA 및 항소를 통해 작업 배후에 섭니다." },
        models: { title: "참여 모델", m1_t: "직접 참여", m1_d: "여러 국가의 이전 가격을 관리하는 기업 그룹과의 직접 참여.", m2_t: "공동 소싱 제공", m2_d: "파견을 포함하여 사내 세무팀과 함께 공동 소싱 제공.", m3_t: "화이트 라벨 지원", m3_d: "해외 세금, 법률 및 컨설팅 회사를 위한 기밀 화이트 라벨 지원.", m4_t: "연간 TP 리테이너", m4_d: "정책, 문서, 파일링 및 일년 내내 문의 사항을 다루는 연간 리테이너." },
        tools: { title: "데이터베이스 및 도구", desc: "경제 분석을 위해 1단계 글로벌 금융, 벤치마킹 및 거래 데이터베이스를 활용합니다:", t1: "TP 촉매", t2: "오르비스", t3: "S&P 캐피탈 IQ", t4: "로열티통계 / 로열티범위", t5: "대출 커넥터", t6: "리피니티브 아이콘", t7: "뛰어난 기술 및 자본주의" },
        deliv: { title: "일반적인 결과물", d1: "TP 상태 점검 보고서 및 로드맵", d2: "그룹 TP 정책, 가격 모델 및 SOP", d3: "회사 간 합의", d4: "벤치마킹 연구 및 경제 분석", d5: "마스터 파일, 로컬 파일 및 다국가 파일", d6: "법정 TP 양식, 공개 및 CbCR", d7: "감사 응답 및 APA 제출", d8: "관리 교육 및 연말 실제 확인 메모" },
        cred: { title: "선택된 경험 및 자격 증명", desc: "TAG 그룹은 네덜란드, 룩셈부르크, 싱가포르, UAE, 호주, 인도 등 여러 국가에서 이전 가격 경험을 보유하고 있습니다. 우리 파트너들은 Big Four 기업에서 이전 가격 및 국제 조세를 이끌었으며 인도 및 아시아 태평양 지역의 다국적 그룹 세무를 총괄했습니다. 다국적 그룹에 직접 서비스를 제공하고 해외 자문 회사를 위한 백엔드 제공 파트너 역할을 수행했습니다.", clients: "선택된 클라이언트" },
        faq: { title: "자주 묻는 질문" },
        faqs: [
          { q: "회사 간 거래가 적은 경우 이전 가격 지원이 필요합니까?", a: "대부분의 관할권은 모든 특수관계자 거래에 정상가격 원칙을 적용하는 반면, 문서화 및 신고 의무는 현지 임계값에 따라 다릅니다. 상태 점검은 귀하에게 적용되는 사항을 확인하고 노력을 비례적으로 유지합니다." },
          { q: "벤치마킹은 얼마나 자주 새로 고쳐야 합니까?", a: "재무 데이터는 매년 업데이트해야 하며 신선한 비교 검색은 일반적으로 몇 년마다 — 또는 비즈니스, 거래 또는 시장이 크게 변할 때 더 빨리 수행해야 합니다." },
          { q: "TP 정책과 회사 간 계약의 차이점은 무엇입니까?", a: "정책은 그룹의 방법론과 가격 결정 논리를 설정합니다. 계약은 두 단체 간의 논리를 실행에 옮기는 법적 계약입니다. 둘 다 엔터티가 실제로 작동하는 방식과 일치해야 합니다." },
          { q: "우리 회사의 브랜드 뒤에서 일할 수 있습니까?", a: "예. 세무, 법률 및 컨설팅 회사를 위한 기밀의 화이트 라벨 배송을 제공하여 템플릿, 검토 프로세스 및 고객 일정과 통합합니다." },
          { q: "어느 관할권을 다루고 있습니까?", a: "현지 승인이 필요한 경우 현지 고문과 조율하여 인도 기반 허브에서 인도, UAE, 네덜란드, 룩셈부르크, 싱가포르, 호주 및 기타 많은 국가를 위한 문서를 준비합니다." }
        ],
        pdf: { title: "서비스 포트폴리오 문서", desc: "아래에서 공식 4페이지 글로벌 이전 가격 포트폴리오 개요 문서를 보거나 다운로드하십시오.", doc_name: "글로벌 이전 가격 포트폴리오.pdf", doc_meta: "4페이지 · 공식 서비스 포트폴리오 문서", open: "전체 화면 열기", download: "PDF 다운로드" },
        contacts: { title: "주요 연락처" },
        connected: { title: "연결된 서비스", c1_t: "세금 및 국경 간 자문", c1_d: "관련 역량", c2_t: "국제 비즈니스", c2_d: "관련 역량", c3_t: "거래, 평가 및 거래 지원", c3_d: "관련 역량" },
        cta: { title: "글로벌 이전 가격(Global Transfer Pricing)을 당사 팀과 논의하세요.", desc: "귀하의 상황을 알려주시면 귀하의 비즈니스에 적합한 범위, 팀 및 접근 방식을 매핑해 드립니다.", btn1: "문의 — contact@taggroup.in", btn2: "연락처 페이지" }
      },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Using replaceAll to ensure literal newlines are maintained correctly.
let enIndex = localesFile.indexOf('services: {\\n');
if(enIndex === -1) enIndex = localesFile.indexOf('services: {\\n');
if(enIndex === -1) enIndex = localesFile.indexOf('services: {\\n');
if(enIndex === -1) enIndex = localesFile.indexOf('services: {');

localesFile = localesFile.slice(0, enIndex + 12) + '\\n' + enTpKeys + localesFile.slice(enIndex + 12);

let koIndex = localesFile.lastIndexOf('services: {');

localesFile = localesFile.slice(0, koIndex + 12) + '\\n' + koTpKeys + localesFile.slice(koIndex + 12);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated Global Transfer Pricing page and updated locales.ts");
