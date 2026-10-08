"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/india.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.india.breadcrumb.home')}</a> / <a href="/services">{t('services.india.breadcrumb.services')}</a> / <span>{t('services.india.hero.title')}</span></div>
          <span className="eyebrow">{t('services.india.hero.eyebrow')}</span>
          <h1>{t('services.india.hero.title')}</h1>
          <p>{t('services.india.hero.desc')}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center measure-lg mx-auto" style={{ marginBottom: "40px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>{t('services.india.intro.eyebrow')}</span>
            <h2>{t('services.india.intro.title')}</h2>
            <p className="lead">{t('services.india.intro.desc')}</p>
          </div>
          <div className="process">
            {Array.from({length: 8}).map((_, i) => {
              const n = i + 1;
              const link = n === 1 ? '/people/gaurav' : n === 2 ? '/people/mr-pradip' : n === 3 ? '/people/gaurav' : n === 4 ? '/people/k-vishnu' : n === 5 ? '/people/ishita' : n === 6 ? '/people/sushil' : n === 7 ? '/people/amit' : '/people/gaurav';
              return (
                <a key={n} className="pstep" href={link}>
                  <div className="pnum">{n.toString().padStart(2, '0')}</div>
                  <div className="pico">
                    {n === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>}
                    {n === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V5l7-2v18M19 21V9l-7-2M9 8h0M9 12h0M9 16h0M15 12h0M15 16h0" /></svg>}
                    {n === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>}
                    {n === 4 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>}
                    {n === 5 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8" /></svg>}
                    {n === 6 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>}
                    {n === 7 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>}
                    {n === 8 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>}
                  </div>
                  <h4>{t(`services.india.intro.p${n}_t`)}</h4>
                  <p>{t(`services.india.intro.p${n}_d`)}</p>
                  <div className="who">{t(`services.india.intro.p${n}_w`)}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.india.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.india.nav.proposition')}</a>
              <a href="#situations">{t('services.india.nav.situations')}</a>
              <a href="#who">{t('services.india.nav.who')}</a>
              <a href="#scope">{t('services.india.nav.scope')}</a>
              <a href="#approach">{t('services.india.nav.approach')}</a>
              <a href="#deliverables">{t('services.india.nav.deliverables')}</a>
              <a href="#industries">{t('services.india.nav.industries')}</a>
              <a href="#clients">{t('services.india.nav.clients')}</a>
              <a href="#credentials">{t('services.india.nav.experience')}</a>
              <a href="#connected">{t('services.india.nav.connected')}</a>
              <a href="#cta">{t('services.india.nav.enquire')}</a>
              
              <div className="side-card" style={{ marginTop: "26px" }}>
                <h5>{t('services.india.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.india.nav.lead_partners_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.india.partners.gaurav.name')}</strong><span>{t('services.india.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/sumit">
                  <span className="pmini-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</span>
                  <span className="pmini-info"><strong>{t('services.india.partners.sumit.name')}</strong><span>{t('services.india.partners.sumit.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>{t('services.india.partners.vishnu.name')}</strong><span>{t('services.india.partners.vishnu.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <span className="pmini-sep">{t('services.india.nav.specialists')}</span>
                <a className="pmini" href="/people/sushil">
                  <span className="pmini-av"><img src="/assets/photos/people/sushil.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SS</span>
                  <span className="pmini-info"><strong>{t('services.india.partners.sushil.name')}</strong><span>{t('services.india.partners.sushil.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                
                <a className="btn btn-primary" href="/contact?service=India%20Entry" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.india.nav.enquire')}
                </a>
              </div>
              
              <div className="side-card" style={{ marginTop: "18px" }}>
                <h5>{t('services.india.nav.portfolio_pdf')}</h5>
                <p className="lead-note">{t('services.india.nav.portfolio_pdf_note')}</p>
                <a className="btn btn-ghost" href="/api/generate-pdf?service=india" target="_blank" style={{ width: "100%", justifyContent: "flex-start" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.india.nav.download_pdf')}
                </a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">{t('services.india.nav.proposition')}</a>
              <a href="#situations">{t('services.india.nav.situations')}</a>
              <a href="#who">{t('services.india.nav.who')}</a>
              <a href="#scope">{t('services.india.nav.scope')}</a>
              <a href="#approach">{t('services.india.nav.approach')}</a>
              <a href="#deliverables">{t('services.india.nav.deliverables')}</a>
              <a href="#industries">{t('services.india.nav.industries')}</a>
              <a href="#clients">{t('services.india.nav.clients')}</a>
              <a href="#credentials">{t('services.india.nav.experience')}</a>
              <a href="#connected">{t('services.india.nav.connected')}</a>
              <a href="#cta">{t('services.india.nav.enquire')}</a>
            </nav>
            
            <div>
              <div style={{ marginBottom: "34px" }}>
                <figure className="photo r219 " style={{ backgroundImage: "url('/assets/img/plates/city-india.svg')" }}>
                  <img src="/assets/photos/services/india-entry.jpg" alt="India Entry: One-Stop Business Establishment" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>{t('services.india.hero.short_title')}</strong><span>{t('services.india.hero.eyebrow')}</span></figcaption>
                </figure>
              </div>

              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.india.prop.title')}</h2>
                <p className="lead" style={{ color: "var(--charcoal-700)" }}>
                  {t('services.india.prop.desc')}
                </p>
                <div className="excl-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg>
                  <span>{t('services.india.prop.note')}</span>
                </div>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.india.sit.title')}</h2>
                <ul className="check-list">
                  {Array.from({length: 6}).map((_, i) => (
                    <li key={i}>{t(`services.india.sit.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.india.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(`services.india.who.l${i+1}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.india.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h1_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h2_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h3_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 7}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h4_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h5')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h5_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h6')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(`services.india.scope.h6_l${i+1}`)}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.india.approach.title')}</h2>
                <div className="phase-grid">
                  {Array.from({length: 4}).map((_, i) => (
                    <div key={i} className="phase">
                      <div className="pn">0{i+1}</div>
                      <h4>{t(`services.india.approach.a${i+1}_t`)}</h4>
                      <p>{t(`services.india.approach.a${i+1}_d`)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.india.deliv.title')}</h2>
                <div className="deliverables">
                  {Array.from({length: 6}).map((_, i) => (
                    <div key={i} className="deliverable">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      <span>{t(`services.india.deliv.d${i+1}`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.india.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(`services.india.industries.i${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="clients">
                <h2>{t('services.india.client.title')}</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "14px" }}>
                  {t('services.india.client.desc')}
                </p>
                <div className="chips">
                  {Array.from({length: 6}).map((_, i) => (
                    <span key={i} className="chip accent">{t(`services.india.client.c${i+1}`)}</span>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.india.cred.title')}</h2>
                <div className="callout">
                  {t('services.india.cred.desc')}
                </div>
                <div className="logo-band" style={{ padding: "34px 0 0" }}>
                  <p className="eyebrow">{t('services.india.cred.clients')}</p>
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
                <h2><span className="n">9</span>{t('services.india.connected.title')}</h2>
                <div className="connected">
                  <a href="/services/tax-cross-border"><strong>{t('services.india.connected.c1_t')}</strong><span>{t('services.india.connected.c1_d')}</span></a>
                  <a href="/services/cfo-finance-transformation"><strong>{t('services.india.connected.c2_t')}</strong><span>{t('services.india.connected.c2_d')}</span></a>
                  <a href="/services/human-capital-hr"><strong>{t('services.india.connected.c3_t')}</strong><span>{t('services.india.connected.c3_d')}</span></a>
                  <a href="/services/corporate-legal-fema"><strong>{t('services.india.connected.c4_t')}</strong><span>{t('services.india.connected.c4_d')}</span></a>
                  <a href="/services/international-business"><strong>{t('services.india.connected.c5_t')}</strong><span>{t('services.india.connected.c5_d')}</span></a>
                </div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.india.cta.title')}</h2>
                  <p>{t('services.india.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=India%20Entry"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.india.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.india.cta.btn2')}</a>
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
