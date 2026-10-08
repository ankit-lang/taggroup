const fs = require('fs');

const pageContent = `"use client";
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
                  <h4>{t(\`services.india.intro.p\${n}_t\`)}</h4>
                  <p>{t(\`services.india.intro.p\${n}_d\`)}</p>
                  <div className="who">{t(\`services.india.intro.p\${n}_w\`)}</div>
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
                    <li key={i}>{t(\`services.india.sit.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.india.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(\`services.india.who.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.india.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h1_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h2_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h3_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 7}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h4_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h5')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h5_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.india.scope.h6')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.india.scope.h6_l\${i+1}\`)}</li>
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
                      <h4>{t(\`services.india.approach.a\${i+1}_t\`)}</h4>
                      <p>{t(\`services.india.approach.a\${i+1}_d\`)}</p>
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
                      <span>{t(\`services.india.deliv.d\${i+1}\`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.india.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(\`services.india.industries.i\${i+1}\`)}</span>
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
                    <span key={i} className="chip accent">{t(\`services.india.client.c\${i+1}\`)}</span>
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
`;

fs.writeFileSync('src/app/(public)/services/india-entry/page.tsx', pageContent);

const enIndiaKeys = `
      india: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: { eyebrow: "One-stop establishment", title: "India Entry: One-Stop Business Establishment", short_title: "India Entry", desc: "Your single coordinating partner to plan, establish and run a business in India — strategy, incorporation, tax, finance, HR, IT, premises and operations, end to end." },
        intro: {
          eyebrow: "One accountable interface",
          title: "Everything it takes to set up and run in India — under one roof",
          desc: "Eight coordinated workstreams, each led by a dedicated partner, from first assessment to a fully running operation and a clean hand-over to your team.",
          p1_t: "Strategy & feasibility", p1_d: "Entry model, entity choice, tax & FEMA modelling, incentives and an implementation roadmap.", p1_w: "Led by Gaurav Sharma",
          p2_t: "Incorporation & registrations", p2_d: "Company / LLP / branch / liaison-office setup, PAN, TAN, GST and RBI filings.", p2_w: "Led by MR Pradip",
          p3_t: "Banking & capital", p3_d: "Bank-account opening, capital-infusion and FEMA / ODI coordination.", p3_w: "Led by Gaurav Sharma",
          p4_t: "Finance, payroll & compliance", p4_d: "Accounting, payroll, MIS, tax & transfer-pricing setup and virtual-CFO oversight.", p4_w: "Led by K. Vishnu Sharma",
          p5_t: "HR & recruitment", p5_d: "Organisation design, leadership & team hiring, employment documentation and workforce.", p5_w: "Led by Ishita Sharma",
          p6_t: "IT & infrastructure", p6_d: "Networks, servers, cloud, cybersecurity, ERP and end-user technology.", p6_w: "Led by Sushil Sharma",
          p7_t: "Premises & facilities", p7_d: "Office, factory and warehouse search, lease, fit-out and facility workforce.", p7_w: "Led by Amit Sood",
          p8_t: "Operate & hand over", p8_d: "Ongoing compliance and operations, then transition to your internal team.", p8_w: "Led by Gaurav Sharma"
        },
        nav: { on_this_page: "On this page", proposition: "Service proposition", situations: "When it's needed", who: "Who it's for", scope: "Scope of assistance", approach: "Our approach", deliverables: "Typical deliverables", industries: "Industries", clients: "Who we support", experience: "Experience", connected: "Connected services", enquire: "Enquire", lead_partners: "Lead partners", lead_partners_note: "Speak directly with the partners who lead this practice.", specialists: "Specialists", portfolio_pdf: "Service portfolio", portfolio_pdf_note: "Download a one-page summary of this portfolio.", download_pdf: "Download portfolio (PDF)" },
        partners: { gaurav: { name: "Gaurav Sharma", title: "Managing Partner" }, sumit: { name: "Sumit Goyal", title: "Partner" }, vishnu: { name: "K. Vishnu Sharma", title: "Partner" }, sushil: { name: "Sushil Sharma", title: "Associate Partner" } },
        prop: { title: "Service proposition", desc: "Entering India means navigating strategy, incorporation, tax, finance, hiring, technology and premises at once — usually across many vendors. TAG Group replaces that with one accountable interface that takes you from feasibility to a fully running operation, and then to a smooth hand-over to your own team. Each workstream is led by a dedicated partner, so you get specialist depth with single-point coordination.", note: "TAG is the single coordinating interface; legal, immigration, cybersecurity, recruitment and real estate are coordinated through TAG's specialist network, with each specialist responsible for its own work." },
        sit: { title: "Business situations that trigger the need", l1: "An overseas group is setting up operations in India", l2: "You need one accountable partner across setup, finance, HR and IT", l3: "Entry-mode and entity structure need evaluation", l4: "Incorporation, registrations and banking need coordinating", l5: "A new India operation needs finance, payroll and compliance from day one", l6: "You want to incubate before building an internal team" },
        who: { title: "Who this service is for", l1: "Multinational groups entering the Indian market", l2: "Overseas businesses needing an end-to-end India setup partner", l3: "Founders establishing a new India entity", l4: "Groups incubating operations before internal hiring" },
        scope: { title: "Detailed scope of assistance", 
          h1: "Entry strategy", h1_l1: "India-entry feasibility and operating model", h1_l2: "Market-entry and location assessment", h1_l3: "Subsidiary, LLP, branch, liaison and project-office evaluation", h1_l4: "Tax, FEMA and regulatory modelling", h1_l5: "State and government-incentive evaluation", h1_l6: "Business plan and implementation roadmap",
          h2: "Establishment", h2_l1: "Incorporation and regulatory registrations", h2_l2: "PAN, TAN and GST registrations", h2_l3: "Banking and capital-infusion coordination", h2_l4: "Office, factory, warehouse and land identification", h2_l5: "Lease and property-transaction coordination", h2_l6: "Local vendor and professional-service coordination",
          h3: "Finance & compliance", h3_l1: "Accounting and bookkeeping", h3_l2: "Payroll processing", h3_l3: "MIS and management reporting", h3_l4: "Tax and regulatory compliance", h3_l5: "Transfer pricing setup and intercompany agreements", h3_l6: "Internal controls, finance processes and virtual CFO support",
          h4: "HR & recruitment", h4_l1: "Organisation and workforce planning", h4_l2: "Leadership and specialist hiring", h4_l3: "Recruitment-process management", h4_l4: "Employment documentation coordination", h4_l5: "Payroll and employee compliance", h4_l6: "Blue-collar and facility workforce support", h4_l7: "Learning and capability programmes",
          h5: "Technology & infrastructure", h5_l1: "IT infrastructure planning", h5_l2: "Hardware and software procurement support", h5_l3: "Networks, servers and cloud infrastructure", h5_l4: "Cybersecurity and information-security controls", h5_l5: "ERP and business-system implementation support", h5_l6: "Collaboration tools and IT vendor management",
          h6: "Operational support", h6_l1: "Office and facility setup", h6_l2: "Security and support-staff deployment", h6_l3: "Property and tenant coordination", h6_l4: "Insurance, immigration and third-party introductions", h6_l5: "Transition from incubation to the client's internal team", h6_l6: "Continuing compliance and operational support"
        },
        approach: { title: "Engagement approach & phases", a1_t: "Assess", a1_d: "Model entry options, tax/FEMA implications, incentives and a roadmap.", a2_t: "Establish", a2_d: "Incorporate, register, open banking and secure premises.", a3_t: "Operate", a3_d: "Run finance, payroll, compliance, HR and IT for the new entity.", a4_t: "Transition", a4_d: "Hand over to the client's internal team with continuing support." },
        deliv: { title: "Typical deliverables", d1: "India-entry feasibility & operating model", d2: "Incorporation and registrations", d3: "Banking and premises coordination", d4: "Finance, payroll and compliance setup", d5: "Recruitment and IT infrastructure setup", d6: "Transition and ongoing support plan" },
        industries: { title: "Relevant industries", i1: "Infrastructure", i2: "Renewable energy", i3: "Engineering & EPC", i4: "Automotive", i5: "Manufacturing", i6: "Technology & IT/ITeS", i7: "Logistics", i8: "Real estate", i9: "Hospitality", i10: "Healthcare & pharma", i11: "FMCG & retail", i12: "Oil & gas", i13: "Aviation", i14: "Start-ups & e-commerce" },
        client: { title: "Who we support", desc: "Sectors we help establish and scale in India — from global e-commerce and technology platforms to ESG, healthcare and industrial groups:", c1: "E-commerce & marketplace giants", c2: "Renewable energy & ESG companies", c3: "Healthcare & pharma", c4: "Infrastructure & EPC", c5: "Technology & IT/ITeS", c6: "Manufacturing & automotive" },
        cred: { title: "Selected experience & credentials", desc: "Delivered through TAG's integrated team and specialist network — tax, CFO, HR (recruitment, L&D, SAP HR), IT infrastructure (20+ years enterprise experience), and real-estate & workforce coordination across Delhi NCR and other markets.", clients: "Selected clients" },
        connected: { title: "Connected services", c1_t: "Tax & Cross-Border Advisory", c1_d: "Related capability", c2_t: "CFO & Finance Transformation", c2_d: "Related capability", c3_t: "Human Capital & HR Advisory", c3_d: "Related capability", c4_t: "Corporate, Legal, FEMA & Regulatory", c4_d: "Related capability", c5_t: "International Business", c5_d: "Related capability" },
        cta: { title: "Discuss India Entry with our team", desc: "Tell us your situation and we'll map the right scope, team and approach for your business.", btn1: "Enquire — info@taggroup.in", btn2: "Contact page" }
      },
`;

const koIndiaKeys = `
      india: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: { eyebrow: "원스톱 설립", title: "인도 진출: 원스톱 비즈니스 설립", short_title: "인도 진출", desc: "인도에서 비즈니스를 계획, 설립 및 운영하기 위한 단일 조정 파트너 — 전략, 법인 설립, 세금, 재무, HR, IT, 구내 및 운영, 종단 간." },
        intro: {
          eyebrow: "하나의 책임 있는 인터페이스",
          title: "인도에서 설정하고 실행하는 데 필요한 모든 것 — 한 지붕 아래",
          desc: "전담 파트너가 이끄는 8개의 조정된 작업 스트림은 초기 평가부터 완전히 운영되고 귀하의 팀으로 원활하게 인계될 때까지 진행됩니다.",
          p1_t: "전략 및 타당성", p1_d: "진출 모델, 법인 선택, 세금 및 FEMA 모델링, 인센티브 및 구현 로드맵.", p1_w: "가우라브 샤르마 주도",
          p2_t: "설립 및 등록", p2_d: "회사 / LLP / 지점 / 연락 사무소 설정, PAN, TAN, GST 및 RBI 신고.", p2_w: "MR 프라딥 주도",
          p3_t: "은행 및 자본", p3_d: "은행 계좌 개설, 자본 투입 및 FEMA / ODI 조정.", p3_w: "가우라브 샤르마 주도",
          p4_t: "재무, 급여 및 규정 준수", p4_d: "회계, 급여, MIS, 세금 및 이전 가격 설정 및 가상 CFO 감독.", p4_w: "K. 비슈누 샤르마 주도",
          p5_t: "HR 및 채용", p5_d: "조직 설계, 리더십 및 팀 고용, 고용 문서 및 인력.", p5_w: "이시타 샤르마 주도",
          p6_t: "IT 및 인프라", p6_d: "네트워크, 서버, 클라우드, 사이버 보안, ERP 및 최종 사용자 기술.", p6_w: "수실 샤르마 주도",
          p7_t: "구내 및 시설", p7_d: "사무실, 공장 및 창고 검색, 임대, 시설 인력.", p7_w: "아밋 수드 주도",
          p8_t: "운영 및 인계", p8_d: "지속적인 규정 준수 및 운영 후 내부 팀으로 전환합니다.", p8_w: "가우라브 샤르마 주도"
        },
        nav: { on_this_page: "이 페이지에서", proposition: "서비스 제안", situations: "필요한 경우", who: "서비스 대상", scope: "지원 범위", approach: "우리의 접근 방식", deliverables: "주요 결과물", industries: "산업 분야", clients: "우리가 지원하는 대상", experience: "경험", connected: "연결된 서비스", enquire: "문의하기", lead_partners: "대표 파트너", lead_partners_note: "이 실무를 이끄는 파트너와 직접 상담하세요.", specialists: "전문가", portfolio_pdf: "서비스 포트폴리오", portfolio_pdf_note: "이 포트폴리오의 1페이지 요약본을 다운로드하세요.", download_pdf: "포트폴리오 다운로드 (PDF)" },
        partners: { gaurav: { name: "가우라브 샤르마", title: "대표 파트너" }, sumit: { name: "수밋 고얄", title: "파트너" }, vishnu: { name: "K. 비슈누 샤르마", title: "파트너" }, sushil: { name: "수실 샤르마", title: "어소시에이트 파트너" } },
        prop: { title: "서비스 제안", desc: "인도에 진출한다는 것은 전략, 통합, 세금, 재무, 고용, 기술 및 구내를 한 번에 탐색하는 것을 의미하며 대개 많은 벤더를 거칩니다. TAG Group은 타당성 조사부터 완전히 실행되는 운영에 이르기까지 귀하를 이끌고 자체 팀으로 원활하게 인계하는 하나의 책임 있는 인터페이스로 대체합니다. 각 작업 스트림은 전담 파트너가 이끌므로 단일 지점 조정을 통해 전문적인 깊이를 얻을 수 있습니다.", note: "TAG는 단일 조정 인터페이스입니다. 법률, 이민, 사이버 보안, 채용 및 부동산은 TAG의 전문 네트워크를 통해 조정되며 각 전문가는 자신의 업무를 책임집니다." },
        sit: { title: "필요성을 촉발하는 비즈니스 상황", l1: "해외 그룹이 인도에서 운영을 시작하고 있습니다.", l2: "설정, 재무, HR 및 IT 전반에 걸쳐 책임감 있는 하나의 파트너가 필요합니다.", l3: "진입 모드 및 엔터티 구조 평가가 필요합니다.", l4: "법인 설립, 등록 및 은행 업무 조정이 필요합니다.", l5: "새로운 인도 지사는 첫날부터 재무, 급여 및 규정 준수가 필요합니다.", l6: "내부 팀을 구성하기 전에 배양하고 싶습니다." },
        who: { title: "이 서비스의 대상", l1: "인도 시장에 진출하는 다국적 그룹", l2: "종단 간 인도 설정 파트너가 필요한 해외 비즈니스", l3: "새로운 인도 법인을 설립하는 창립자", l4: "내부 채용 전에 운영을 배양하는 그룹" },
        scope: { title: "자세한 지원 범위", 
          h1: "진입 전략", h1_l1: "인도 진출 타당성 및 운영 모델", h1_l2: "시장 진입 및 위치 평가", h1_l3: "자회사, LLP, 지점, 연락 및 프로젝트 사무소 평가", h1_l4: "세금, FEMA 및 규제 모델링", h1_l5: "주 및 정부 인센티브 평가", h1_l6: "사업 계획 및 실행 로드맵",
          h2: "설립", h2_l1: "법인 설립 및 규제 등록", h2_l2: "PAN, TAN 및 GST 등록", h2_l3: "은행 및 자본 투입 조정", h2_l4: "사무실, 공장, 창고 및 토지 식별", h2_l5: "임대 및 부동산 거래 조정", h2_l6: "현지 공급업체 및 전문 서비스 조정",
          h3: "재무 및 규정 준수", h3_l1: "회계 및 장부 작성", h3_l2: "급여 처리", h3_l3: "MIS 및 관리 보고", h3_l4: "세금 및 규제 준수", h3_l5: "이전 가격 설정 및 회사 간 계약", h3_l6: "내부 통제, 재무 프로세스 및 가상 CFO 지원",
          h4: "HR 및 채용", h4_l1: "조직 및 인력 계획", h4_l2: "리더십 및 전문가 고용", h4_l3: "채용 프로세스 관리", h4_l4: "고용 문서 조정", h4_l5: "급여 및 직원 준수", h4_l6: "블루칼라 및 시설 인력 지원", h4_l7: "학습 및 역량 프로그램",
          h5: "기술 및 인프라", h5_l1: "IT 인프라 계획", h5_l2: "하드웨어 및 소프트웨어 조달 지원", h5_l3: "네트워크, 서버 및 클라우드 인프라", h5_l4: "사이버 보안 및 정보 보안 제어", h5_l5: "ERP 및 비즈니스 시스템 구현 지원", h5_l6: "협업 도구 및 IT 공급업체 관리",
          h6: "운영 지원", h6_l1: "사무실 및 시설 설정", h6_l2: "보안 및 지원 직원 배치", h6_l3: "부동산 및 세입자 조정", h6_l4: "보험, 이민 및 제3자 소개", h6_l5: "인큐베이션에서 클라이언트의 내부 팀으로 전환", h6_l6: "지속적인 규정 준수 및 운영 지원"
        },
        approach: { title: "참여 접근 방식 및 단계", a1_t: "평가", a1_d: "진입 옵션, 세금/FEMA 영향, 인센티브 및 로드맵을 모델링합니다.", a2_t: "설립", a2_d: "통합, 등록, 오픈 뱅킹 및 보안 구내.", a3_t: "운영", a3_d: "새 법인을 위한 재무, 급여, 규정 준수, HR 및 IT를 운영합니다.", a4_t: "전환", a4_d: "지속적인 지원을 통해 클라이언트의 내부 팀에 인계합니다." },
        deliv: { title: "일반적인 결과물", d1: "인도 진출 타당성 및 운영 모델", d2: "통합 및 등록", d3: "은행 및 구내 조정", d4: "재무, 급여 및 규정 준수 설정", d5: "채용 및 IT 인프라 설정", d6: "전환 및 지속적인 지원 계획" },
        industries: { title: "관련 산업", i1: "인프라", i2: "재생 에너지", i3: "엔지니어링 및 EPC", i4: "자동차", i5: "제조", i6: "기술 및 IT/ITeS", i7: "물류", i8: "부동산", i9: "환대", i10: "의료 및 제약", i11: "FMCG 및 소매", i12: "석유 및 가스", i13: "항공", i14: "스타트업 및 전자상거래" },
        client: { title: "우리가 지원하는 대상", desc: "글로벌 전자상거래 및 기술 플랫폼에서 ESG, 의료 및 산업 그룹에 이르기까지 인도에서 설립하고 확장하는 데 도움이 되는 부문:", c1: "전자상거래 및 마켓플레이스 거대 기업", c2: "재생 에너지 및 ESG 기업", c3: "의료 및 제약", c4: "인프라 및 EPC", c5: "기술 및 IT/ITeS", c6: "제조 및 자동차" },
        cred: { title: "선택된 경험 및 자격 증명", desc: "TAG의 통합 팀 및 전문가 네트워크(세금, CFO, HR(채용, L&D, SAP HR), IT 인프라(20년 이상의 엔터프라이즈 경험), 델리 NCR 및 기타 시장의 부동산 및 인력 조정을 통해 제공됩니다.", clients: "선택된 클라이언트" },
        connected: { title: "연결된 서비스", c1_t: "세금 및 국경 간 자문", c1_d: "관련 역량", c2_t: "CFO 및 재무 혁신", c2_d: "관련 역량", c3_t: "인적 자본 및 HR 자문", c3_d: "관련 역량", c4_t: "기업, 법률, FEMA 및 규제", c4_d: "관련 역량", c5_t: "국제 비즈니스", c5_d: "관련 역량" },
        cta: { title: "저희 팀과 인도 진출에 대해 논의하십시오.", desc: "귀하의 상황을 알려주시면 귀하의 비즈니스에 적합한 범위, 팀 및 접근 방식을 매핑해 드립니다.", btn1: "문의 — info@taggroup.in", btn2: "연락처 페이지" }
      },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('services: {');
localesFile = localesFile.slice(0, enIndex + 12) + '\n' + enIndiaKeys + localesFile.slice(enIndex + 12);

// Insert korean
let koIndex = localesFile.lastIndexOf('services: {');
localesFile = localesFile.slice(0, koIndex + 12) + '\n' + koIndiaKeys + localesFile.slice(koIndex + 12);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated India Entry page and updated locales.ts");
