"use client";
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
                <a className="btn btn-ghost" href="/api/generate-pdf?service=tp" target="_blank" style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.tp.nav.download_pdf')}</a>
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
                        <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>{t(`services.tp.lifecycle.i${num}_t`)}</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                          {t(`services.tp.lifecycle.i${num}_d`)}
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
                        <h4 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '1.08rem', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>{t(`services.tp.juris.j${num}_t`)}</h4>
                        <ul className="check-list">
                          <li>{t(`services.tp.juris.j${num}_l1`)}</li>
                          <li>{t(`services.tp.juris.j${num}_l2`)}</li>
                          <li>{t(`services.tp.juris.j${num}_l3`)}</li>
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
                        <h4>{t(`services.tp.approach.a${num}_t`)}</h4>
                        <p>{t(`services.tp.approach.a${num}_d`)}</p>
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
                        <h4>{t(`services.tp.models.m${num}_t`)}</h4>
                        <p>{t(`services.tp.models.m${num}_d`)}</p>
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
                    <span key={i} className="chip accent">{t(`services.tp.tools.t${i+1}`)}</span>
                  ))}
                </div>
              </section>

              {/* Section 10: Typical deliverables */}
              <section className="svc-block" id="deliverables">
                <h2><span className="n">10</span>{t('services.tp.deliv.title')}</h2>
                <div className="deliverables">
                  {Array.from({length: 8}).map((_, i) => (
                    <div key={i} className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t(`services.tp.deliv.d${i+1}`)}</span></div>
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
                        href="/api/generate-pdf?service=tp" 
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
                        href="/api/generate-pdf?service=tp" 
                        target="_blank"
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
                      src="/api/generate-pdf?service=tp"
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
