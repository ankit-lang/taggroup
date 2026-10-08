const fs = require('fs');

const pageContent = `"use client";
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
                    <li key={i}>{t(\`services.gcc.sit.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.gcc.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(\`services.gcc.who.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.gcc.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h1_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h2_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h3_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 5}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h4_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h5')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 3}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h5_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.gcc.scope.h6')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.gcc.scope.h6_l\${i+1}\`)}</li>
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
                      <h4>{t(\`services.gcc.approach.a\${i+1}_t\`)}</h4>
                      <p>{t(\`services.gcc.approach.a\${i+1}_d\`)}</p>
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
                      <h4>{t(\`services.gcc.engage.e\${i+1}\`)}</h4>
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
                      <span>{t(\`services.gcc.deliv.d\${i+1}\`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">8</span>{t('services.gcc.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(\`services.gcc.industries.i\${i+1}\`)}</span>
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
                    <span key={i} className="chip accent">{t(\`services.gcc.client.c\${i+1}\`)}</span>
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
                    <li key={i}>{t(\`services.gcc.gain.l\${i+1}\`)}</li>
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
                    <span key={i} className="chip">{t(\`services.gcc.tools.t\${i+1}\`)}</span>
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
`;

fs.writeFileSync('src/app/(public)/services/global-capability-centre/page.tsx', pageContent);

const enGccKeys = `
      gcc: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: { eyebrow: "Your strategic back-end partner", title: "Global Capability Centre", short_title: "Global Capability Centre", desc: "An India-based Centre of Excellence that becomes your back office — global transfer pricing for groups and advisers worldwide, and managed finance & accounting that keeps clients' books across the globe." },
        nav: { on_this_page: "On this page", proposition: "Service proposition", situations: "When it's needed", who: "Who it's for", scope: "Scope of assistance", approach: "Our approach", engagement: "Engagement options", deliverables: "Typical deliverables", industries: "Industries", clients: "Who we support", experience: "Experience", gain: "Why partner with us", tools: "Databases & tools", connected: "Connected services", enquire: "Enquire", lead_partners: "Lead partners", lead_partners_note: "Speak directly with the partners who lead this practice.", portfolio_pdf: "Service portfolio", portfolio_pdf_note: "Download a one-page summary of this portfolio.", download_pdf: "Download portfolio (PDF)" },
        partners: { gaurav: { name: "Gaurav Sharma", title: "Managing Partner" }, vishnu: { name: "K. Vishnu Sharma", title: "Partner" } },
        prop: { title: "Service proposition", desc: "TAG Group runs a Global Capability Centre (GCC): a centralised, India-based Centre of Excellence that extends the capacity of multinational groups and overseas professional firms — without adding internal overhead. We act as a global capability centre for transfer pricing across the world, and we maintain the books and finance operations for international businesses, currently delivering finance & accounting for clients in the United States and the UAE, with capacity to scale to new geographies. Partner-led, audit-ready and confidential, we plug into your workflow as a seamless, white-label extension of your team." },
        sit: { title: "Business situations that trigger the need", l1: "You want to scale a TP or finance service line without adding headcount or overhead", l2: "An overseas tax, legal or consulting firm needs a white-label, back-end delivery partner", l3: "Multi-country transfer pricing must be produced to a common, defensible standard", l4: "Your books, close and reporting need a reliable, cost-effective managed-service partner", l5: "You need quick turnarounds on complex regional or cross-border mandates", l6: "In-house TP or finance teams need deputation and surge capacity" },
        who: { title: "Who this service is for", l1: "Global consulting, tax, legal and accounting firms seeking an execution partner", l2: "Multinational groups centralising transfer pricing and finance operations", l3: "US and UAE businesses outsourcing their finance & accounting", l4: "In-house TP and finance teams needing scalable, review-ready capacity" },
        scope: { title: "Detailed scope of assistance", 
          h1: "Documentation & compliance (TP)", h1_l1: "Local File, Master File and CbCR support", h1_l2: "Contemporaneous documentation to local / global standards", h1_l3: "SOP and governance development for consistent documentation", h1_l4: "Deputation support for in-house TP and tax teams",
          h2: "Benchmarking & economic analysis", h2_l1: "Functional, Asset and Risk (FAR) analysis", h2_l2: "Benchmarking studies using leading databases and tools", h2_l3: "Most-Appropriate-Method selection and arm's-length range", h2_l4: "Financial and comparability analysis",
          h3: "Strategic guidance & policy (TP)", h3_l1: "Global TP policy design and cross-border structuring", h3_l2: "Related-party transaction guidance and pricing write-ups", h3_l3: "Jurisdictional TP study and risk-exposure assessment", h3_l4: "Documentation-led dispute and audit support",
          h4: "Finance & accounting (back office)", h4_l1: "Bookkeeping and maintenance of the books of account", h4_l2: "Month-end and year-end close and reconciliations", h4_l3: "Accounts payable, receivable and payroll coordination", h4_l4: "MIS, management reporting and dashboards", h4_l5: "Audit-support and year-end packs",
          h5: "Geographic coverage", h5_l1: "Transfer pricing — delivered for clients worldwide", h5_l2: "Finance & accounting — currently the United States and the UAE", h5_l3: "Scaling to additional geographies on demand",
          h6: "Delivery framework", h6_l1: "Partner-led delivery with Big-Four-grade technical depth", h6_l2: "Central coordination from India with common request templates", h6_l3: "Defined SLAs, review milestones and quality control", h6_l4: "Confidential, secure, white-label information handling"
        },
        approach: { title: "Engagement approach & phases", a1_t: "Scope & onboard", a1_d: "Define coverage, entities, standards, tools and information flows.", a2_t: "Build the delivery model", a2_d: "Set up templates, SLAs, review milestones and secure, white-label handling.", a3_t: "Run & report", a3_d: "Deliver recurring TP and finance work to a common, audit-ready standard.", a4_t: "Scale", a4_d: "Extend to new entities, services and geographies as you grow." },
        engage: { title: "Engagement options", e1: "Captive-style extension of your team", e2: "Co-sourced delivery", e3: "Confidential white-label support for overseas firms" },
        deliv: { title: "Typical deliverables", d1: "Master / Local File & CbCR support", d2: "Benchmarking & FAR analysis", d3: "TP policies & SOPs", d4: "Monthly management accounts", d5: "Close & reconciliation packs", d6: "MIS & reporting dashboards", d7: "Audit-support files", d8: "Deputation & surge capacity" },
        industries: { title: "Relevant industries", i1: "Infrastructure", i2: "Renewable energy", i3: "Engineering & EPC", i4: "Automotive", i5: "Manufacturing", i6: "Technology & IT/ITeS", i7: "Logistics", i8: "Real estate", i9: "Hospitality", i10: "Healthcare & pharma", i11: "FMCG & retail", i12: "Oil & gas", i13: "Aviation", i14: "Start-ups & e-commerce" },
        client: { title: "Who we support", desc: "Sectors we help establish and scale in India — from global e-commerce and technology platforms to ESG, healthcare and industrial groups:", c1: "Technology & IT/ITeS", c2: "Manufacturing & engineering", c3: "E-commerce, logistics & distribution", c4: "Financial services & fintech", c5: "Media, digital platforms & entertainment", c6: "Infrastructure, EPC & real estate", c7: "Healthcare & pharma", c8: "Automotive" },
        cred: { title: "Selected experience & credentials", desc: "TAG Group acts as a global capability centre for transfer pricing worldwide, with TP experience across the Netherlands, Luxembourg, Singapore, UAE, Australia, India and many others. Our managed finance & accounting currently serves businesses in the United States and the UAE, delivered from India with partner-led review, defined SLAs and secure, confidential handling — a true back-end partner for firms and groups scaling their capacity.", clients: "Selected clients" },
        gain: { title: "Why firms partner with our GCC", desc: "What you gain from a partner-led, India-based Centre of Excellence:", l1: "Partner-led delivery with deep, Big-Four-grade technical expertise", l2: "Audit-ready documentation and transfer-pricing defence support", l3: "Quick turnarounds, even on complex regional and cross-border mandates", l4: "Confidential, white-label support that integrates with your workflow", l5: "Cost-effective execution from an India-based Centre of Excellence", l6: "Strategic insight that aligns business goals with TP defensibility" },
        tools: { title: "Databases & tools", desc: "We work with leading transfer-pricing and financial databases and delivery tools, including:", t1: "TP Catalyst", t2: "Orbis (TNMM module)", t3: "S&P Capital IQ", t4: "RoyaltyStat / Royalty Range", t5: "Loan Connector", t6: "Refinitiv Eikon", t7: "Prowess & Capitaline" },
        connected: { title: "Connected services", c1_t: "Global Transfer Pricing", c1_d: "Related capability", c2_t: "CFO & Finance Transformation", c2_d: "Related capability", c3_t: "International Business", c3_d: "Related capability", c4_t: "Tax & Cross-Border Advisory", c4_d: "Related capability" },
        cta: { title: "Discuss Global Capability Centre with our team", desc: "Tell us your situation and we'll map the right scope, team and approach for your business.", btn1: "Enquire — info@taggroup.in", btn2: "Contact page" }
      },
`;

const koGccKeys = `
      gcc: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: { eyebrow: "전략적 백엔드 파트너", title: "글로벌 역량 센터", short_title: "글로벌 역량 센터", desc: "귀하의 백오피스가 되는 인도 기반 역량 센터 — 전 세계 그룹 및 고문을 위한 글로벌 이전 가격 책정, 전 세계 고객의 장부를 유지하는 관리형 재무 및 회계." },
        nav: { on_this_page: "이 페이지에서", proposition: "서비스 제안", situations: "필요한 경우", who: "서비스 대상", scope: "지원 범위", approach: "우리의 접근 방식", engagement: "참여 옵션", deliverables: "주요 결과물", industries: "산업 분야", clients: "우리가 지원하는 대상", experience: "경험", gain: "파트너가 되는 이유", tools: "데이터베이스 및 도구", connected: "연결된 서비스", enquire: "문의하기", lead_partners: "대표 파트너", lead_partners_note: "이 실무를 이끄는 파트너와 직접 상담하세요.", portfolio_pdf: "서비스 포트폴리오", portfolio_pdf_note: "이 포트폴리오의 1페이지 요약본을 다운로드하세요.", download_pdf: "포트폴리오 다운로드 (PDF)" },
        partners: { gaurav: { name: "가우라브 샤르마", title: "대표 파트너" }, vishnu: { name: "K. 비슈누 샤르마", title: "파트너" } },
        prop: { title: "서비스 제안", desc: "TAG Group은 글로벌 역량 센터(GCC)를 운영합니다. 즉, 내부 간접비를 추가하지 않고도 다국적 그룹과 해외 전문 회사의 역량을 확장하는 중앙 집중식 인도 기반 역량 센터입니다. 우리는 전 세계의 이전 가격 책정을 위한 글로벌 역량 센터 역할을 하며, 현재 미국과 아랍에미리트의 고객을 위해 재무 및 회계를 제공하고 있으며 새로운 지역으로 확장할 수 있는 능력을 갖춘 국제 비즈니스의 장부 및 재무 운영을 유지합니다. 파트너 주도, 감사 준비 및 기밀 유지, 원활하고 화이트 라벨링된 팀 확장으로 워크플로에 연결됩니다." },
        sit: { title: "필요성을 촉발하는 비즈니스 상황", l1: "인력이나 간접비를 추가하지 않고 TP 또는 금융 서비스 라인을 확장하려는 경우", l2: "해외 세금, 법률 또는 컨설팅 회사가 화이트 라벨, 백엔드 제공 파트너를 필요로 하는 경우", l3: "여러 국가의 이전 가격을 공통적이고 방어 가능한 표준으로 생성해야 하는 경우", l4: "장부, 마감 및 보고에 안정적이고 비용 효율적인 관리 서비스 파트너가 필요한 경우", l5: "복잡한 지역 또는 국경 간 명령에 대한 빠른 처리 시간이 필요한 경우", l6: "사내 TP 또는 재무 팀에 파견 및 급증 역량이 필요한 경우" },
        who: { title: "이 서비스의 대상", l1: "실행 파트너를 찾는 글로벌 컨설팅, 세무, 법률 및 회계 회사", l2: "이전 가격 및 재무 운영을 중앙 집중화하는 다국적 그룹", l3: "재무 및 회계를 아웃소싱하는 미국 및 아랍에미리트 비즈니스", l4: "확장 가능하고 검토 가능한 역량이 필요한 사내 TP 및 재무 팀" },
        scope: { title: "자세한 지원 범위", 
          h1: "문서화 및 규정 준수 (TP)", h1_l1: "로컬 파일, 마스터 파일 및 CbCR 지원", h1_l2: "지역 / 글로벌 표준에 대한 동시 문서화", h1_l3: "일관된 문서화를 위한 SOP 및 거버넌스 개발", h1_l4: "사내 TP 및 세무 팀을 위한 파견 지원",
          h2: "벤치마킹 및 경제 분석", h2_l1: "기능, 자산 및 위험(FAR) 분석", h2_l2: "주요 데이터베이스 및 도구를 사용한 벤치마킹 연구", h2_l3: "가장 적절한 방법 선택 및 독립 기업 간 범위", h2_l4: "재무 및 비교 가능성 분석",
          h3: "전략적 지침 및 정책 (TP)", h3_l1: "글로벌 TP 정책 설계 및 국경 간 구조화", h3_l2: "특수 관계자 거래 지침 및 가격 책정", h3_l3: "관할 구역 TP 연구 및 위험 노출 평가", h3_l4: "문서 주도 분쟁 및 감사 지원",
          h4: "재무 및 회계 (백오피스)", h4_l1: "장부 작성 및 회계 장부 유지 관리", h4_l2: "월말 및 연말 마감 및 대사", h4_l3: "미지급금, 매출채권 및 급여 조정", h4_l4: "MIS, 경영 보고 및 대시보드", h4_l5: "감사 지원 및 연말 팩",
          h5: "지리적 적용 범위", h5_l1: "이전 가격 — 전 세계 고객에게 제공", h5_l2: "재무 및 회계 — 현재 미국 및 아랍에미리트", h5_l3: "수요에 따라 추가 지역으로 확장",
          h6: "제공 프레임워크", h6_l1: "Big-Four 수준의 기술적 깊이를 갖춘 파트너 주도 제공", h6_l2: "공통 요청 템플릿을 사용하여 인도에서 중앙 조정", h6_l3: "정의된 SLA, 검토 마일스톤 및 품질 관리", h6_l4: "기밀 유지, 안전, 화이트 라벨 정보 처리"
        },
        approach: { title: "참여 접근 방식 및 단계", a1_t: "범위 지정 및 온보딩", a1_d: "적용 범위, 엔터티, 표준, 도구 및 정보 흐름을 정의합니다.", a2_t: "제공 모델 구축", a2_d: "템플릿, SLA, 검토 마일스톤 및 안전한 화이트 라벨 처리를 설정합니다.", a3_t: "실행 및 보고", a3_d: "반복적인 TP 및 재무 작업을 공통적인 감사 준비 표준으로 제공합니다.", a4_t: "확장", a4_d: "성장함에 따라 새로운 엔터티, 서비스 및 지역으로 확장합니다." },
        engage: { title: "참여 옵션", e1: "팀의 캡티브 스타일 확장", e2: "공동 소싱 제공", e3: "해외 기업을 위한 기밀 화이트 라벨 지원" },
        deliv: { title: "일반적인 결과물", d1: "마스터 / 로컬 파일 및 CbCR 지원", d2: "벤치마킹 및 FAR 분석", d3: "TP 정책 및 SOP", d4: "월간 경영 계정", d5: "마감 및 조정 팩", d6: "MIS 및 보고 대시보드", d7: "감사 지원 파일", d8: "파견 및 급증 용량" },
        industries: { title: "관련 산업", i1: "인프라", i2: "재생 에너지", i3: "엔지니어링 및 EPC", i4: "자동차", i5: "제조", i6: "기술 및 IT/ITeS", i7: "물류", i8: "부동산", i9: "환대", i10: "의료 및 제약", i11: "FMCG 및 소매", i12: "석유 및 가스", i13: "항공", i14: "스타트업 및 전자상거래" },
        client: { title: "우리가 지원하는 대상", desc: "글로벌 전자상거래 및 기술 플랫폼에서 ESG, 의료 및 산업 그룹에 이르기까지 인도에서 설립하고 확장하는 데 도움이 되는 부문:", c1: "기술 및 IT/ITeS", c2: "제조 및 엔지니어링", c3: "전자상거래, 물류 및 유통", c4: "금융 서비스 및 핀테크", c5: "미디어, 디지털 플랫폼 및 엔터테인먼트", c6: "인프라, EPC 및 부동산", c7: "의료 및 제약", c8: "자동차" },
        cred: { title: "선택된 경험 및 자격 증명", desc: "TAG Group은 네덜란드, 룩셈부르크, 싱가포르, UAE, 호주, 인도 등 여러 국가에 걸친 TP 경험을 바탕으로 전 세계 이전 가격 책정을 위한 글로벌 역량 센터 역할을 합니다. 현재 당사의 관리형 재무 및 회계는 파트너 주도의 검토, 정의된 SLA 및 안전하고 기밀 유지되는 처리를 통해 인도에서 미국 및 UAE의 비즈니스에 서비스를 제공하고 있습니다.", clients: "선택된 클라이언트" },
        gain: { title: "회사가 당사의 GCC와 파트너 관계를 맺는 이유", desc: "파트너 주도의 인도 기반 역량 센터에서 얻을 수 있는 이점:", l1: "깊은 Big-Four 수준의 기술적 전문성을 갖춘 파트너 주도 제공", l2: "감사 준비 문서화 및 이전 가격 책정 방어 지원", l3: "복잡한 지역 및 국경 간 위임장에서도 빠른 처리", l4: "워크플로와 통합되는 기밀 화이트 라벨 지원", l5: "인도 기반 역량 센터의 비용 효율적인 실행", l6: "비즈니스 목표를 TP 방어 가능성과 일치시키는 전략적 통찰력" },
        tools: { title: "데이터베이스 및 도구", desc: "당사는 다음을 포함하여 주요 이전 가격 책정 및 재무 데이터베이스와 제공 도구를 사용합니다:", t1: "TP Catalyst", t2: "Orbis (TNMM 모듈)", t3: "S&P Capital IQ", t4: "RoyaltyStat / Royalty Range", t5: "Loan Connector", t6: "Refinitiv Eikon", t7: "Prowess & Capitaline" },
        connected: { title: "연결된 서비스", c1_t: "글로벌 이전 가격", c1_d: "관련 역량", c2_t: "CFO 및 재무 혁신", c2_d: "관련 역량", c3_t: "국제 비즈니스", c3_d: "관련 역량", c4_t: "세금 및 국경 간 자문", c4_d: "관련 역량" },
        cta: { title: "저희 팀과 글로벌 역량 센터에 대해 논의하십시오.", desc: "귀하의 상황을 알려주시면 귀하의 비즈니스에 적합한 범위, 팀 및 접근 방식을 매핑해 드립니다.", btn1: "문의 — info@taggroup.in", btn2: "연락처 페이지" }
      },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('services: {');
localesFile = localesFile.slice(0, enIndex + 12) + '\n' + enGccKeys + localesFile.slice(enIndex + 12);

// Insert korean
let koIndex = localesFile.lastIndexOf('services: {');
localesFile = localesFile.slice(0, koIndex + 12) + '\n' + koGccKeys + localesFile.slice(koIndex + 12);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated Global Capability Centre page and updated locales.ts");
