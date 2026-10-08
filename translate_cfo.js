const fs = require('fs');

const pageContent = `"use client";
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
                    <span key={i} className="chip">{t(\`services.cfo.industries.i\${i+1}\`)}</span>
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
`;

fs.writeFileSync('src/app/(public)/services/cfo-finance-transformation/page.tsx', pageContent);

const enCfoKeys = `
      cfo: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: { eyebrow: "Second lead capability", title: "CFO & Finance Transformation", desc: "Strategic financial leadership without the full-time overhead — virtual CFO, controllership and finance transformation." },
        nav: { on_this_page: "On this page", proposition: "Service proposition", situations: "When it's needed", who: "Who it's for", scope: "Scope of assistance", approach: "Our approach", deliverables: "Typical deliverables", industries: "Industries", experience: "Experience", connected: "Connected services", enquire: "Enquire", lead_partners: "Lead partners", lead_partners_note: "Speak directly with the partners who lead this practice.", portfolio_pdf: "Service portfolio", portfolio_pdf_note: "Download a one-page summary of this portfolio.", download_pdf: "Download portfolio (PDF)" },
        partners: { gaurav: { name: "Gaurav Sharma", title: "Managing Partner" }, vishnu: { name: "K. Vishnu Sharma", title: "Partner" } },
        prop: { title: "Service proposition", desc: "Growing businesses often need CFO-level judgement before they need a full-time CFO. TAG bridges management vision and financial implementation: oversight, reporting discipline, forecasting and finance-process improvement, delivered by partners with senior controllership experience in large listed and multinational organisations." },
        sit: { title: "Business situations that trigger the need", l1: "You need financial leadership but not a full-time CFO", l2: "The monthly close is slow, manual or unreliable", l3: "Investors and lenders need credible reporting and forecasts", l4: "A funding round or transaction requires finance readiness", l5: "Finance processes and controls need to scale with the business", l6: "ERP implementation or automation is on the agenda" },
        who: { title: "Who this service is for", l1: "Founders and boards scaling without a full finance function", l2: "Businesses preparing for investment or a transaction", l3: "Groups needing consolidation and management reporting discipline", l4: "Finance teams needing capability and process uplift" },
        scope: { title: "Detailed scope of assistance", h1: "CFO & controllership", h1_l1: "Virtual and fractional CFO services", h1_l2: "Finance controllership", h1_l3: "Board and investor reporting", h2: "Accounting & close", h2_l1: "Accounting and bookkeeping", h2_l2: "Monthly and annual financial close", h2_l3: "Consolidation and group reporting", h2_l4: "Transaction accounting", h2_l5: "Post-acquisition finance integration", h3: "Planning & analysis", h3_l1: "MIS and management reporting", h3_l2: "Budgeting and forecasting", h3_l3: "Financial planning and analysis (FP&A)", h3_l4: "Cash-flow and working-capital management", h4: "Reporting & standards", h4_l1: "Ind AS, IFRS and accounting advisory", h4_l2: "Accounting policy development", h4_l3: "Audit preparedness and coordination", h5: "Transformation", h5_l1: "ERP implementation and finance automation", h5_l2: "Shared-service and finance-process design", h5_l3: "Finance-team structuring" },
        approach: { title: "Engagement approach & phases", a1_t: "Assess", a1_d: "Diagnose the finance function, close cycle, controls and reporting maturity.", a2_t: "Stabilise", a2_d: "Fix the close, MIS and controls; establish reliable reporting.", a3_t: "Optimise", a3_d: "Automate, redesign processes and build the right finance operating model.", a4_t: "Lead", a4_d: "Provide ongoing CFO oversight, board reporting and decision support." },
        deliv: { title: "Typical deliverables", d1: "Board and investor reporting packs", d2: "Reliable monthly close and MIS", d3: "Budgets, forecasts and cash-flow models", d4: "Consolidated and Ind AS financials", d5: "Finance process/SOP redesign", d6: "ERP and automation roadmaps" },
        industries: { title: "Relevant industries", i1: "Infrastructure", i2: "Renewable energy", i3: "Engineering & EPC", i4: "Automotive", i5: "Manufacturing", i6: "Technology & IT/ITeS", i7: "Logistics", i8: "Real estate", i9: "Hospitality", i10: "Healthcare & pharma", i11: "FMCG & retail", i12: "Oil & gas", i13: "Aviation", i14: "Start-ups & e-commerce" },
        cred: { title: "Selected experience & credentials", desc: "Led by Gaurav Sharma, whose finance-leadership career spans financial controllership for European infrastructure & energy MNCs and regional finance and tax leadership across India and APAC — building governance frameworks across 30+ entities and managing teams of 20+. Supported by partners with senior controllership in leading British companies and Fortune 100 global technology groups — including close-cycle reduction, 50%+ reduction in manual journals, SAP S/4HANA implementation, group consolidation across 100+ subsidiaries, and audit-ready reporting.", clients: "Selected clients" },
        connected: { title: "Connected services", c1_t: "Global Capability Centre", c1_d: "Related capability", c2_t: "Risk, Internal Audit & Controls", c2_d: "Related capability", c3_t: "Tax & Cross-Border Advisory", c3_d: "Related capability", c4_t: "Deals, Valuation & Transaction Support", c4_d: "Related capability" },
        cta: { title: "Discuss CFO & Finance Transformation with our team", desc: "Tell us your situation and we'll map the right scope, team and approach for your business.", btn1: "Enquire — info@taggroup.in", btn2: "Contact page" }
      },
`;

const koCfoKeys = `
      cfo: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: { eyebrow: "두 번째 핵심 역량", title: "CFO 및 재무 혁신", desc: "전임자의 간접비가 없는 전략적 재정 리더십 — 가상 CFO, 통제 및 재무 혁신." },
        nav: { on_this_page: "이 페이지에서", proposition: "서비스 제안", situations: "필요한 경우", who: "서비스 대상", scope: "지원 범위", approach: "우리의 접근 방식", deliverables: "주요 결과물", industries: "산업 분야", experience: "경험", connected: "연결된 서비스", enquire: "문의하기", lead_partners: "대표 파트너", lead_partners_note: "이 실무를 이끄는 파트너와 직접 상담하세요.", portfolio_pdf: "서비스 포트폴리오", portfolio_pdf_note: "이 포트폴리오의 1페이지 요약본을 다운로드하세요.", download_pdf: "포트폴리오 다운로드 (PDF)" },
        partners: { gaurav: { name: "가우라브 샤르마", title: "대표 파트너" }, vishnu: { name: "K. 비슈누 샤르마", title: "파트너" } },
        prop: { title: "서비스 제안", desc: "성장하는 비즈니스는 전임 CFO가 필요하기 전에 종종 CFO 수준의 판단이 필요합니다. TAG는 경영진의 비전과 재무 구현을 연결합니다: 감독, 보고 원칙, 예측 및 재무 프로세스 개선, 대규모 상장 및 다국적 조직에서 수석 통제 경험이 있는 파트너가 제공합니다." },
        sit: { title: "필요성을 촉발하는 비즈니스 상황", l1: "재무 리더십이 필요하지만 전임 CFO는 필요하지 않음", l2: "월별 마감이 느리거나 수동이거나 신뢰할 수 없음", l3: "투자자와 대출 기관은 신뢰할 수 있는 보고와 예측이 필요합니다.", l4: "자금 조달 라운드 또는 거래에는 재정 준비가 필요합니다.", l5: "재무 프로세스 및 제어 기능은 비즈니스에 맞춰 확장되어야 합니다.", l6: "ERP 구현 또는 자동화가 의제에 있습니다." },
        who: { title: "이 서비스의 대상", l1: "전체 재무 기능 없이 확장하는 설립자 및 이사회", l2: "투자 또는 거래를 준비하는 기업", l3: "통합 및 관리 보고 규율이 필요한 그룹", l4: "역량 및 프로세스 향상이 필요한 재무팀" },
        scope: { title: "자세한 지원 범위", h1: "CFO 및 통제", h1_l1: "가상 및 시간제 CFO 서비스", h1_l2: "재무 통제", h1_l3: "이사회 및 투자자 보고", h2: "회계 및 마감", h2_l1: "회계 및 장부 작성", h2_l2: "월별 및 연간 재무 마감", h2_l3: "연결 및 그룹 보고", h2_l4: "거래 회계", h2_l5: "인수 후 재무 통합", h3: "계획 및 분석", h3_l1: "MIS 및 관리 보고", h3_l2: "예산 책정 및 예측", h3_l3: "재무 계획 및 분석 (FP&A)", h3_l4: "현금 흐름 및 운전 자본 관리", h4: "보고 및 표준", h4_l1: "Ind AS, IFRS 및 회계 자문", h4_l2: "회계 정책 개발", h4_l3: "감사 준비 및 조정", h5: "혁신", h5_l1: "ERP 구현 및 재무 자동화", h5_l2: "공유 서비스 및 재무 프로세스 설계", h5_l3: "재무팀 구성" },
        approach: { title: "참여 접근 방식 및 단계", a1_t: "평가", a1_d: "재무 기능, 마감 주기, 통제 및 보고 성숙도를 진단합니다.", a2_t: "안정화", a2_d: "마감, MIS 및 제어를 수정합니다. 신뢰할 수 있는 보고를 구축합니다.", a3_t: "최적화", a3_d: "자동화, 프로세스 재설계 및 올바른 재무 운영 모델 구축.", a4_t: "리드", a4_d: "지속적인 CFO 감독, 이사회 보고 및 의사결정 지원을 제공합니다." },
        deliv: { title: "일반적인 결과물", d1: "이사회 및 투자자 보고서 패키지", d2: "신뢰할 수 있는 월별 마감 및 MIS", d3: "예산, 예측 및 현금 흐름 모델", d4: "통합 및 Ind AS 재무제표", d5: "재무 프로세스/SOP 재설계", d6: "ERP 및 자동화 로드맵" },
        industries: { title: "관련 산업", i1: "인프라", i2: "재생 에너지", i3: "엔지니어링 및 EPC", i4: "자동차", i5: "제조", i6: "기술 및 IT/ITeS", i7: "물류", i8: "부동산", i9: "환대", i10: "의료 및 제약", i11: "FMCG 및 소매", i12: "석유 및 가스", i13: "항공", i14: "스타트업 및 전자상거래" },
        cred: { title: "선택된 경험 및 자격 증명", desc: "가우라브 샤르마가 이끄는 재무 리더십 경력은 유럽 인프라 및 에너지 다국적 기업의 재무 컨트롤러십과 인도 및 APAC 전역의 지역 재무 및 세무 리더십에 걸쳐 30개 이상의 기업에 걸쳐 거버넌스 프레임워크를 구축하고 20명 이상의 팀을 관리했습니다. 주요 영국 기업 및 Fortune 100 글로벌 기술 그룹의 수석 컨트롤러십을 보유한 파트너의 지원 — 수동 분개 항목 50% 이상 감소, SAP S/4HANA 구현, 100개 이상의 자회사 전반에 걸친 그룹 통합 및 감사 준비 보고 포함.", clients: "선택된 클라이언트" },
        connected: { title: "연결된 서비스", c1_t: "글로벌 역량 센터", c1_d: "관련 역량", c2_t: "위험, 내부 감사 및 통제", c2_d: "관련 역량", c3_t: "세금 및 국경 간 자문", c3_d: "관련 역량", c4_t: "거래, 평가 및 거래 지원", c4_d: "관련 역량" },
        cta: { title: "저희 팀과 CFO 및 재무 혁신에 대해 논의하십시오.", desc: "귀하의 상황을 알려주시면 귀하의 비즈니스에 적합한 범위, 팀 및 접근 방식을 매핑해 드립니다.", btn1: "문의 — info@taggroup.in", btn2: "연락처 페이지" }
      },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('services: {');
localesFile = localesFile.slice(0, enIndex + 12) + '\\n' + enCfoKeys + localesFile.slice(enIndex + 12);

// Insert korean
let koIndex = localesFile.lastIndexOf('services: {');
localesFile = localesFile.slice(0, koIndex + 12) + '\\n' + koCfoKeys + localesFile.slice(koIndex + 12);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated CFO page and updated locales.ts");
