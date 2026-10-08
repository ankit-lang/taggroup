const fs = require('fs');

let taxPageContent = `"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/intltax.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.tax.breadcrumb.home')}</a> / <a href="/services">{t('services.tax.breadcrumb.services')}</a> / <span>{t('services.tax.hero.title')}</span></div>
          <span className="eyebrow">{t('services.tax.hero.eyebrow')}</span>
          <h1>{t('services.tax.hero.title')}</h1>
          <p>{t('services.tax.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.tax.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.tax.nav.proposition')}</a><a href="#situations">{t('services.tax.nav.situations')}</a><a href="#who">{t('services.tax.nav.who')}</a><a href="#scope">{t('services.tax.nav.scope')}</a><a href="#approach">{t('services.tax.nav.approach')}</a><a href="#deliverables">{t('services.tax.nav.deliverables')}</a><a href="#industries">{t('services.tax.nav.industries')}</a><a href="#credentials">{t('services.tax.nav.experience')}</a><a href="#connected">{t('services.tax.nav.connected')}</a><a href="#cta">{t('services.tax.nav.enquire')}</a>
              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>{t('services.tax.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.tax.nav.lead_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.tax.partners.gaurav.name')}</strong><span>{t('services.tax.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/sumit">
                  <span className="pmini-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</span>
                  <span className="pmini-info"><strong>{t('services.tax.partners.sumit.name')}</strong><span>{t('services.tax.partners.sumit.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/mr-pradip">
                  <span className="pmini-av"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</span>
                  <span className="pmini-info"><strong>{t('services.tax.partners.pradip.name')}</strong><span>{t('services.tax.partners.pradip.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Tax%20&%20Cross-Border%20Advisory" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.tax.nav.enquire_btn')}</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>{t('services.tax.nav.portfolio')}</h5>
                <p className="lead-note">{t('services.tax.nav.download_note')}</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/tax-cross-border.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.tax.nav.download_btn')}</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">{t('services.tax.nav.proposition')}</a><a href="#situations">{t('services.tax.nav.situations')}</a><a href="#who">{t('services.tax.nav.who')}</a><a href="#scope">{t('services.tax.nav.scope')}</a><a href="#approach">{t('services.tax.nav.approach')}</a><a href="#deliverables">{t('services.tax.nav.deliverables')}</a><a href="#industries">{t('services.tax.nav.industries')}</a><a href="#credentials">{t('services.tax.nav.experience')}</a><a href="#connected">{t('services.tax.nav.connected')}</a><a href="#cta">{t('services.tax.nav.enquire')}</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/article.svg')" }}><img src="/assets/photos/services/tax-cross-border.jpg" alt="Tax & Cross-Border Advisory" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t('services.tax.hero.title')}</strong><span>{t('services.tax.hero.eyebrow')}</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.tax.prop.title')}</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>{t('services.tax.prop.desc')}</p>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.tax.sit.title')}</h2>
                <ul className="check-list"><li>{t('services.tax.sit.li1')}</li><li>{t('services.tax.sit.li2')}</li><li>{t('services.tax.sit.li3')}</li><li>{t('services.tax.sit.li4')}</li><li>{t('services.tax.sit.li5')}</li><li>{t('services.tax.sit.li6')}</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.tax.who.title')}</h2>
                <ul className="check-list two"><li>{t('services.tax.who.li1')}</li><li>{t('services.tax.who.li2')}</li><li>{t('services.tax.who.li3')}</li><li>{t('services.tax.who.li4')}</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.tax.scope.title')}</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tax.scope.h1')}</h4><ul className="check-list two"><li>{t('services.tax.scope.h1_l1')}</li><li>{t('services.tax.scope.h1_l2')}</li><li>{t('services.tax.scope.h1_l3')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tax.scope.h2')}</h4><ul className="check-list two"><li>{t('services.tax.scope.h2_l1')}</li><li>{t('services.tax.scope.h2_l2')}</li><li>{t('services.tax.scope.h2_l3')}</li><li>{t('services.tax.scope.h2_l4')}</li><li>{t('services.tax.scope.h2_l5')}</li><li>{t('services.tax.scope.h2_l6')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tax.scope.h3')}</h4><ul className="check-list two"><li>{t('services.tax.scope.h3_l1')}</li><li>{t('services.tax.scope.h3_l2')}</li><li>{t('services.tax.scope.h3_l3')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tax.scope.h4')}</h4><ul className="check-list two"><li>{t('services.tax.scope.h4_l1')}</li><li>{t('services.tax.scope.h4_l2')}</li><li>{t('services.tax.scope.h4_l3')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.tax.scope.h5')}</h4><ul className="check-list two"><li>{t('services.tax.scope.h5_l1')}</li><li>{t('services.tax.scope.h5_l2')}</li><li>{t('services.tax.scope.h5_l3')}</li><li>{t('services.tax.scope.h5_l4')}</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.tax.approach.title')}</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>{t('services.tax.approach.p1_t')}</h4><p>{t('services.tax.approach.p1_d')}</p></div><div className="phase"><div className="pn">02</div><h4>{t('services.tax.approach.p2_t')}</h4><p>{t('services.tax.approach.p2_d')}</p></div><div className="phase"><div className="pn">03</div><h4>{t('services.tax.approach.p3_t')}</h4><p>{t('services.tax.approach.p3_d')}</p></div><div className="phase"><div className="pn">04</div><h4>{t('services.tax.approach.p4_t')}</h4><p>{t('services.tax.approach.p4_d')}</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.tax.deliv.title')}</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l1')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l2')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l3')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l4')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l5')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.tax.deliv.l6')}</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.tax.ind.title')}</h2>
                <div className="chips"><span className="chip">{t('services.tax.ind.l1')}</span><span className="chip">{t('services.tax.ind.l2')}</span><span className="chip">{t('services.tax.ind.l3')}</span><span className="chip">{t('services.tax.ind.l4')}</span><span className="chip">{t('services.tax.ind.l5')}</span><span className="chip">{t('services.tax.ind.l6')}</span><span className="chip">{t('services.tax.ind.l7')}</span><span className="chip">{t('services.tax.ind.l8')}</span><span className="chip">{t('services.tax.ind.l9')}</span><span className="chip">{t('services.tax.ind.l10')}</span><span className="chip">{t('services.tax.ind.l11')}</span><span className="chip">{t('services.tax.ind.l12')}</span><span className="chip">{t('services.tax.ind.l13')}</span><span className="chip">{t('services.tax.ind.l14')}</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.tax.cred.title')}</h2>
                <div className="callout">{t('services.tax.cred.callout')}</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">{t('services.tax.cred.clients')}</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
95:                 </div>
              </section>

              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>{t('services.tax.conn.title')}</h2>
                <div className="connected"><a href="/services/global-transfer-pricing"><strong>{t('services.tax.conn.c1')}</strong><span>{t('services.tax.conn.rel')}</span></a><a href="/services/corporate-legal-fema"><strong>{t('services.tax.conn.c2')}</strong><span>{t('services.tax.conn.rel')}</span></a><a href="/services/deals-valuation"><strong>{t('services.tax.conn.c3')}</strong><span>{t('services.tax.conn.rel')}</span></a><a href="/services/cfo-finance-transformation"><strong>{t('services.tax.conn.c4')}</strong><span>{t('services.tax.conn.rel')}</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.tax.cta.title')}</h2>
                  <p>{t('services.tax.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Tax%20&%20Cross-Border%20Advisory"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.tax.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.tax.cta.btn2')}</a>
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

fs.writeFileSync('src/app/(public)/services/tax-cross-border/page.tsx', taxPageContent);

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enTaxKeys = `
      tax: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: {
          eyebrow: "Lead service portfolio",
          title: "Tax & Cross-Border Advisory",
          desc: "Corporate, international and indirect tax advice that keeps growing and cross-border businesses compliant, efficient and defensible."
        },
        nav: {
          on_this_page: "On this page",
          proposition: "Service proposition",
          situations: "When it's needed",
          who: "Who it's for",
          scope: "Scope of assistance",
          approach: "Our approach",
          deliverables: "Typical deliverables",
          industries: "Industries",
          experience: "Experience",
          connected: "Connected services",
          enquire: "Enquire",
          lead_partners: "Lead partners",
          lead_note: "Speak directly with the partners who lead this practice.",
          enquire_btn: "Enquire",
          portfolio: "Service portfolio",
          download_note: "Download a one-page summary of this portfolio.",
          download_btn: "Download portfolio (PDF)"
        },
        partners: {
          gaurav: { name: "Gaurav Sharma", title: "Managing Partner" },
          sumit: { name: "Sumit Goyal", title: "Partner" },
          pradip: { name: "MR Pradip", title: "Associate Partner" }
        },
        prop: {
          title: "Service proposition",
          desc: "Tax is where strategy meets regulation. TAG combines corporate tax, international tax, treaty positioning and indirect tax under one team so that structuring decisions, transaction outcomes and day-to-day compliance all pull in the same direction. Our partners bring Big Four training and in-house tax leadership across India and APAC."
        },
        sit: {
          title: "Business situations that trigger the need",
          li1: "You are structuring an inbound or outbound investment and need a tax-efficient, defensible position",
          li2: "Cross-border payments raise withholding, PE or POEM questions",
          li3: "A GST position, notice or departmental audit needs resolution",
          li4: "Your group is entering new markets and needs treaty and repatriation planning",
          li5: "A tax assessment or litigation matter requires representation and strategy",
          li6: "Promoter or HNI holdings need restructuring for succession and efficiency"
        },
        who: {
          title: "Who this service is for",
          li1: "CFOs and finance heads of Indian and multinational groups",
          li2: "Founders and promoters planning cross-border investment",
          li3: "Overseas businesses investing into India",
          li4: "In-house tax teams needing specialist support on complex positions"
        },
        scope: {
          title: "Detailed scope of assistance",
          h1: "Corporate & domestic tax",
          h1_l1: "Corporate and domestic tax advisory",
          h1_l2: "Business tax planning and compliance",
          h1_l3: "Tax health checks and technical opinions",
          h2: "International tax",
          h2_l1: "International tax and treaty (DTAA) advisory",
          h2_l2: "Cross-border investment and transaction structuring",
          h2_l3: "Inbound and outbound tax planning",
          h2_l4: "Permanent Establishment and POEM advisory",
          h2_l5: "Withholding tax and foreign remittance support",
          h2_l6: "Repatriation and succession-related tax advice",
          h3: "Transfer pricing (domestic)",
          h3_l1: "Transfer pricing policy and implementation",
          h3_l2: "Transfer pricing documentation and Form 3CEB support",
          h3_l3: "Intercompany agreements and pricing models",
          h4: "Indirect tax",
          h4_l1: "GST advisory, compliance and reconciliations",
          h4_l2: "GST registrations, refunds and controversy support",
          h4_l3: "Customs and foreign trade policy",
          h5: "Controversy & private client",
          h5_l1: "Tax litigation and dispute management",
          h5_l2: "Tax refunds and tax controversy",
          h5_l3: "Expatriate tax and global mobility",
          h5_l4: "HNI and promoter advisory; holding & investment structures"
        },
        approach: {
          title: "Engagement approach & phases",
          p1_t: "Diagnose",
          p1_d: "Review positions, transactions and exposures against current law and treaty networks.",
          p2_t: "Design",
          p2_d: "Build the efficient, defensible structure or compliance approach and document the rationale.",
          p3_t: "Implement",
          p3_d: "Prepare filings, agreements and documentation; coordinate with authorities and advisers.",
          p4_t: "Defend",
          p4_d: "Represent and support you through reviews, assessments and disputes."
        },
        deliv: {
          title: "Typical deliverables",
          l1: "Structuring and opinion notes",
          l2: "Treaty and withholding analysis",
          l3: "Transfer pricing documentation & Form 3CEB support",
          l4: "GST compliance and reconciliation packs",
          l5: "Litigation strategy and representation",
          l6: "Tax health-check reports"
        },
        ind: {
          title: "Relevant industries",
          l1: "Infrastructure", l2: "Renewable energy", l3: "Engineering & EPC",
          l4: "Automotive", l5: "Manufacturing", l6: "Technology & IT/ITeS",
          l7: "Logistics", l8: "Real estate", l9: "Hospitality",
          l10: "Healthcare & pharma", l11: "FMCG & retail", l12: "Oil & gas",
          l13: "Aviation", l14: "Start-ups & e-commerce"
        },
        cred: {
          title: "Selected experience & credentials",
          callout: "Partners have led transfer pricing and international tax at PwC and KPMG, and headed tax affairs across India, Bangladesh, Singapore, Vietnam, Indonesia, the Philippines and South Korea — including documentation, economic analysis, controversy and recovery of significant refunds.",
          clients: "Selected clients"
        },
        conn: {
          title: "Connected services",
          rel: "Related capability",
          c1: "Global Transfer Pricing",
          c2: "Corporate, Legal, FEMA & Regulatory",
          c3: "Deals, Valuation & Transaction Support",
          c4: "CFO & Finance Transformation"
        },
        cta: {
          title: "Discuss Tax & Cross-Border Advisory with our team",
          desc: "Tell us your situation and we'll map the right scope, team and approach for your business.",
          btn1: "Enquire — info@taggroup.in",
          btn2: "Contact page"
        }
      },
`;

const koTaxKeys = `
      tax: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: {
          eyebrow: "주요 서비스 포트폴리오",
          title: "세무 및 국경 간 자문",
          desc: "성장하는 국경 간 비즈니스가 규정을 준수하고 효율적이며 방어 가능하도록 유지하는 기업, 국제 및 간접세 자문."
        },
        nav: {
          on_this_page: "이 페이지에서",
          proposition: "서비스 제안",
          situations: "필요한 상황",
          who: "대상 고객",
          scope: "지원 범위",
          approach: "접근 방식",
          deliverables: "일반적인 산출물",
          industries: "관련 산업",
          experience: "경험",
          connected: "연결된 서비스",
          enquire: "문의하기",
          lead_partners: "담당 파트너",
          lead_note: "이 실무를 이끄는 파트너와 직접 상담하십시오.",
          enquire_btn: "문의하기",
          portfolio: "서비스 포트폴리오",
          download_note: "이 포트폴리오의 1페이지 요약을 다운로드하십시오.",
          download_btn: "포트폴리오 다운로드 (PDF)"
        },
        partners: {
          gaurav: { name: "가우라브 샤르마", title: "대표 파트너" },
          sumit: { name: "수밋 고얄", title: "파트너" },
          pradip: { name: "MR 프라딥", title: "어소시에이트 파트너" }
        },
        prop: {
          title: "서비스 제안",
          desc: "세금은 전략이 규제와 만나는 지점입니다. TAG는 기업 세무, 국제 세무, 조약 포지셔닝 및 간접세를 하나의 팀으로 통합하여 구조화 결정, 거래 결과 및 일상적인 규정 준수가 모두 같은 방향으로 나아가도록 합니다. 우리 파트너들은 Big Four 교육 및 인도와 APAC 전역의 사내 세무 리더십을 제공합니다."
        },
        sit: {
          title: "필요성을 유발하는 비즈니스 상황",
          li1: "인바운드 또는 아웃바운드 투자를 구조화하고 세금 효율적이고 방어 가능한 포지션이 필요한 경우",
          li2: "국경 간 지불이 원천 징수, PE 또는 POEM 문제를 야기하는 경우",
          li3: "GST 포지션, 통지 또는 부서 감사에 대한 해결이 필요한 경우",
          li4: "그룹이 새로운 시장에 진출하고 조약 및 자금 송환 계획이 필요한 경우",
          li5: "세금 평가 또는 소송 문제에 대리 및 전략이 필요한 경우",
          li6: "프로모터 또는 HNI 지주가 승계 및 효율성을 위해 구조 조정이 필요한 경우"
        },
        who: {
          title: "이 서비스의 대상",
          li1: "인도 및 다국적 그룹의 CFO 및 재무 책임자",
          li2: "국경 간 투자를 계획하는 창업자 및 프로모터",
          li3: "인도에 투자하는 해외 기업",
          li4: "복잡한 포지션에 대한 전문가 지원이 필요한 사내 세무 팀"
        },
        scope: {
          title: "자세한 지원 범위",
          h1: "기업 및 국내 세무",
          h1_l1: "기업 및 국내 세무 자문",
          h1_l2: "비즈니스 세금 계획 및 규정 준수",
          h1_l3: "세금 건전성 점검 및 기술적 의견",
          h2: "국제 세무",
          h2_l1: "국제 세무 및 조약(DTAA) 자문",
          h2_l2: "국경 간 투자 및 거래 구조화",
          h2_l3: "인바운드 및 아웃바운드 세금 계획",
          h2_l4: "고정 사업장 및 POEM 자문",
          h2_l5: "원천 징수 및 해외 송금 지원",
          h2_l6: "자금 송환 및 승계 관련 세무 조언",
          h3: "이전 가격(국내)",
          h3_l1: "이전 가격 정책 및 구현",
          h3_l2: "이전 가격 문서화 및 양식 3CEB 지원",
          h3_l3: "계열사 간 계약 및 가격 모델",
          h4: "간접세",
          h4_l1: "GST 자문, 규정 준수 및 조정",
          h4_l2: "GST 등록, 환급 및 분쟁 지원",
          h4_l3: "세관 및 대외 무역 정책",
          h5: "분쟁 및 개인 고객",
          h5_l1: "조세 소송 및 분쟁 관리",
          h5_l2: "세금 환급 및 세금 분쟁",
          h5_l3: "해외 거주자 세금 및 글로벌 이동성",
          h5_l4: "HNI 및 프로모터 자문; 지주 및 투자 구조"
        },
        approach: {
          title: "참여 접근 방식 및 단계",
          p1_t: "진단",
          p1_d: "현재 법률 및 조약 네트워크와 비교하여 위치, 거래 및 노출을 검토합니다.",
          p2_t: "설계",
          p2_d: "효율적이고 방어 가능한 구조 또는 규정 준수 접근 방식을 구축하고 근거를 문서화합니다.",
          p3_t: "구현",
          p3_d: "신고서, 합의서 및 문서를 준비하고 당국 및 고문과 조율합니다.",
          p4_t: "방어",
          p4_d: "검토, 평가 및 분쟁을 통해 귀하를 대리하고 지원합니다."
        },
        deliv: {
          title: "일반적인 산출물",
          l1: "구조화 및 의견 노트",
          l2: "조약 및 원천징수 분석",
          l3: "이전 가격 문서화 및 Form 3CEB 지원",
          l4: "GST 규정 준수 및 조정 팩",
          l5: "소송 전략 및 대리",
          l6: "세무 건전성 검토 보고서"
        },
        ind: {
          title: "관련 산업",
          l1: "인프라", l2: "재생 에너지", l3: "엔지니어링 & EPC",
          l4: "자동차", l5: "제조", l6: "기술 & IT/ITeS",
          l7: "물류", l8: "부동산", l9: "접객업",
          l10: "의료 & 제약", l11: "FMCG & 소매", l12: "석유 & 가스",
          l13: "항공", l14: "스타트업 & 전자상거래"
        },
        cred: {
          title: "주요 경험 및 자격",
          callout: "파트너들은 PwC 및 KPMG에서 이전 가격 및 국제 세무를 이끌었으며 인도, 방글라데시, 싱가포르, 베트남, 인도네시아, 필리핀, 한국 전역의 세무 업무를 이끌었습니다 — 문서화, 경제적 분석, 논쟁, 상당한 환급액 회수 포함.",
          clients: "선택된 고객"
        },
        conn: {
          title: "연결된 서비스",
          rel: "관련 역량",
          c1: "글로벌 이전가격",
          c2: "기업, 법무, FEMA 및 규제",
          c3: "거래, 가치 평가 및 트랜잭션 지원",
          c4: "CFO 및 재무 혁신"
        },
        cta: {
          title: "우리 팀과 세무 및 국경 간 자문에 대해 논의하십시오",
          desc: "귀하의 상황을 말씀해 주시면 귀하의 비즈니스에 맞는 올바른 범위, 팀 및 접근 방식을 매핑해 드립니다.",
          btn1: "문의 — info@taggroup.in",
          btn2: "연락처 페이지"
        }
      },
`;

let enServicesIndex = localesFile.indexOf('services: {') + 11;
localesFile = localesFile.slice(0, enServicesIndex) + '\\n' + enTaxKeys + localesFile.slice(enServicesIndex);

let koServicesIndex = localesFile.lastIndexOf('services: {') + 11;
localesFile = localesFile.slice(0, koServicesIndex) + '\\n' + koTaxKeys + localesFile.slice(koServicesIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated tax-cross-border page and locales.ts");
