const fs = require('fs');

const pageContent = `"use client";
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
                    <li key={i}>{t(\`services.legal.sit.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.legal.who.title')}</h2>
                <ul className="check-list two">
                  {Array.from({length: 4}).map((_, i) => (
                    <li key={i}>{t(\`services.legal.who.l\${i+1}\`)}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.legal.scope.title')}</h2>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h1')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.legal.scope.h1_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h2')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.legal.scope.h2_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h3')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 6}).map((_, i) => (
                      <li key={i}>{t(\`services.legal.scope.h3_l\${i+1}\`)}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "12px" }}>{t('services.legal.scope.h4')}</h4>
                  <ul className="check-list two">
                    {Array.from({length: 4}).map((_, i) => (
                      <li key={i}>{t(\`services.legal.scope.h4_l\${i+1}\`)}</li>
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
                      <h4>{t(\`services.legal.approach.a\${i+1}_t\`)}</h4>
                      <p>{t(\`services.legal.approach.a\${i+1}_d\`)}</p>
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
                      <span>{t(\`services.legal.deliv.d\${i+1}\`)}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.legal.industries.title')}</h2>
                <div className="chips">
                  {Array.from({length: 14}).map((_, i) => (
                    <span key={i} className="chip">{t(\`services.legal.industries.i\${i+1}\`)}</span>
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
`;

fs.writeFileSync('src/app/(public)/services/corporate-legal-fema/page.tsx', pageContent);

const enLegalKeys = `
      legal: {
        breadcrumb: { home: "Home", services: "Services" },
        hero: { eyebrow: "Legal & regulatory", title: "Corporate, Legal, FEMA & Regulatory", short_title: "Corporate, Legal, FEMA & Regulatory", desc: "Corporate structuring, secretarial coordination, FEMA and cross-border regulatory advice, supported by a specialist legal network." },
        nav: { on_this_page: "On this page", proposition: "Service proposition", situations: "When it's needed", who: "Who it's for", scope: "Scope of assistance", approach: "Our approach", deliverables: "Typical deliverables", industries: "Industries", experience: "Experience", connected: "Connected services", enquire: "Enquire", lead_partners: "Lead partners", lead_partners_note: "Speak directly with the partners who lead this practice.", portfolio_pdf: "Service portfolio", portfolio_pdf_note: "Download a one-page summary of this portfolio.", download_pdf: "Download portfolio (PDF)" },
        partners: { gaurav: { name: "Gaurav Sharma", title: "Managing Partner" }, pradip: { name: "MR Pradip", title: "Associate Partner" } },
        prop: { title: "Service proposition", desc: "Corporate and cross-border activity generates a steady stream of legal and regulatory obligations. TAG coordinates entity structuring, governance, FEMA and RBI matters and commercial documentation — combining accounting, tax and legal analysis, with dispute and insolvency support through dual-qualified professionals.", note: "Legal services identify the relevant advocate or legal associate where professional rules require it." },
        sit: { title: "Business situations that trigger the need", l1: "You are incorporating, restructuring or reorganising entities", l2: "Foreign investment (FDI/ODI) or ECB needs structuring and filings", l3: "A FEMA position, health check or compounding matter needs resolution", l4: "Board and shareholder governance needs strengthening", l5: "Commercial agreements need drafting or review", l6: "A commercial, tax or insolvency dispute needs support" },
        who: { title: "Who this service is for", l1: "Groups managing multi-entity structures", l2: "Foreign investors and Indian outbound investors", l3: "Businesses with FEMA/RBI obligations", l4: "Boards and promoters needing governance and documentation" },
        scope: { title: "Detailed scope of assistance", 
          h1: "Corporate & secretarial", h1_l1: "Corporate and entity structuring", h1_l2: "Company and LLP incorporation", h1_l3: "Companies Act and LLP compliance", h1_l4: "Board and shareholder governance", h1_l5: "Corporate reorganisations, mergers and demergers", h1_l6: "Secretarial compliance coordination",
          h2: "Commercial & disputes", h2_l1: "Commercial agreements and documentation", h2_l2: "Legal and regulatory due diligence", h2_l3: "Commercial dispute support", h2_l4: "Insolvency and restructuring support",
          h3: "FEMA & exchange control", h3_l1: "FEMA advisory", h3_l2: "Foreign Direct Investment (FDI)", h3_l3: "Overseas Investment and ODI", h3_l4: "External Commercial Borrowings (ECB)", h3_l5: "Branch, liaison and project offices", h3_l6: "Cross-border payment and repatriation advisory",
          h4: "Regulatory", h4_l1: "RBI filings and regulatory reporting", h4_l2: "FEMA health checks", h4_l3: "Regularisation and compounding", h4_l4: "RBI and Enforcement Directorate representation support"
        },
        approach: { title: "Engagement approach & phases", a1_t: "Structure", a1_d: "Select the right entity, holding and governance structure.", a2_t: "Comply", a2_d: "Set up and coordinate secretarial, FEMA and RBI compliance.", a3_t: "Document", a3_d: "Prepare and review agreements and regulatory filings.", a4_t: "Represent", a4_d: "Support disputes, compounding and regulatory representation." },
        deliv: { title: "Typical deliverables", d1: "Entity and structuring advice", d2: "Secretarial and Companies Act compliance", d3: "FDI/ODI/ECB structuring and filings", d4: "FEMA health-check reports", d5: "Commercial agreements and reviews", d6: "Regulatory representation support" },
        industries: { title: "Relevant industries", i1: "Infrastructure", i2: "Renewable energy", i3: "Engineering & EPC", i4: "Automotive", i5: "Manufacturing", i6: "Technology & IT/ITeS", i7: "Logistics", i8: "Real estate", i9: "Hospitality", i10: "Healthcare & pharma", i11: "FMCG & retail", i12: "Oil & gas", i13: "Aviation", i14: "Start-ups & e-commerce" },
        cred: { title: "Selected experience & credentials", desc: "Legal and regulatory work is supported by dual-qualified professionals (CA + LL.B.) with High Court and Supreme Court exposure, and a specialist legal network covering commercial disputes, insolvency, FEMA and white-collar matters.", clients: "Selected clients" },
        connected: { title: "Connected services", c1_t: "Tax & Cross-Border Advisory", c1_d: "Related capability", c2_t: "Deals, Valuation & Transaction Support", c2_d: "Related capability", c3_t: "India Entry: One-Stop Business Establishment", c3_d: "Related capability", c4_t: "International Business", c4_d: "Related capability" },
        cta: { title: "Discuss Corporate, Legal, FEMA & Regulatory with our team", desc: "Tell us your situation and we'll map the right scope, team and approach for your business.", btn1: "Enquire — info@taggroup.in", btn2: "Contact page" }
      },
`;

const koLegalKeys = `
      legal: {
        breadcrumb: { home: "홈", services: "서비스" },
        hero: { eyebrow: "법률 및 규제", title: "기업, 법무, FEMA 및 규제", short_title: "기업, 법무, FEMA 및 규제", desc: "기업 구조화, 비서 조정, FEMA 및 국경 간 규제 자문, 전문 법률 네트워크 지원." },
        nav: { on_this_page: "이 페이지에서", proposition: "서비스 제안", situations: "필요한 경우", who: "서비스 대상", scope: "지원 범위", approach: "우리의 접근 방식", deliverables: "주요 결과물", industries: "산업 분야", experience: "경험", connected: "연결된 서비스", enquire: "문의하기", lead_partners: "대표 파트너", lead_partners_note: "이 실무를 이끄는 파트너와 직접 상담하세요.", portfolio_pdf: "서비스 포트폴리오", portfolio_pdf_note: "이 포트폴리오의 1페이지 요약본을 다운로드하세요.", download_pdf: "포트폴리오 다운로드 (PDF)" },
        partners: { gaurav: { name: "가우라브 샤르마", title: "대표 파트너" }, pradip: { name: "MR 프라딥", title: "어소시에이트 파트너" } },
        prop: { title: "서비스 제안", desc: "기업 및 국경 간 활동은 법률 및 규제 의무의 꾸준한 흐름을 생성합니다. TAG는 회계, 세무 및 법률 분석을 결합하고 이중 자격을 갖춘 전문가를 통해 분쟁 및 파산 지원을 제공하면서 기업 구조화, 거버넌스, FEMA 및 RBI 문제 및 상업 문서를 조정합니다.", note: "법률 서비스는 전문 규칙이 요구하는 관련 변호사 또는 법률 고문을 식별합니다." },
        sit: { title: "필요성을 촉발하는 비즈니스 상황", l1: "법인 설립, 구조 조정 또는 재구성", l2: "외국인 투자(FDI/ODI) 또는 ECB 구조화 및 서류 제출", l3: "FEMA 포지션, 건강 검진 또는 복합 문제 해결 필요", l4: "이사회 및 주주 거버넌스 강화", l5: "상업 계약 작성 또는 검토", l6: "상업, 세금 또는 파산 분쟁 지원" },
        who: { title: "이 서비스의 대상", l1: "다중 엔터티 구조를 관리하는 그룹", l2: "외국인 투자자 및 인도 아웃바운드 투자자", l3: "FEMA/RBI 의무가 있는 비즈니스", l4: "거버넌스 및 문서가 필요한 이사회 및 프로모터" },
        scope: { title: "자세한 지원 범위", 
          h1: "기업 및 비서", h1_l1: "기업 및 엔터티 구조화", h1_l2: "회사 및 LLP 설립", h1_l3: "회사법 및 LLP 준수", h1_l4: "이사회 및 주주 거버넌스", h1_l5: "기업 재조직, 합병 및 분할", h1_l6: "비서 준수 조정",
          h2: "상업 및 분쟁", h2_l1: "상업 계약 및 문서", h2_l2: "법률 및 규제 실사", h2_l3: "상업 분쟁 지원", h2_l4: "파산 및 구조 조정 지원",
          h3: "FEMA 및 외환 통제", h3_l1: "FEMA 자문", h3_l2: "외국인 직접 투자(FDI)", h3_l3: "해외 투자 및 ODI", h3_l4: "외부 상업 차입(ECB)", h3_l5: "지점, 연락 및 프로젝트 사무소", h3_l6: "국경 간 지불 및 송금 자문",
          h4: "규제", h4_l1: "RBI 제출 및 규제 보고", h4_l2: "FEMA 건강 검진", h4_l3: "정규화 및 복합화", h4_l4: "RBI 및 집행국 대표 지원"
        },
        approach: { title: "참여 접근 방식 및 단계", a1_t: "구조", a1_d: "적절한 엔터티, 지주 및 거버넌스 구조를 선택합니다.", a2_t: "준수", a2_d: "비서, FEMA 및 RBI 규정 준수를 설정하고 조정합니다.", a3_t: "문서화", a3_d: "계약 및 규제 문서를 준비하고 검토합니다.", a4_t: "대표", a4_d: "분쟁, 복합화 및 규제 대표를 지원합니다." },
        deliv: { title: "일반적인 결과물", d1: "엔터티 및 구조화 조언", d2: "비서 및 회사법 준수", d3: "FDI/ODI/ECB 구조화 및 제출", d4: "FEMA 건강 검진 보고서", d5: "상업 계약 및 검토", d6: "규제 대표 지원" },
        industries: { title: "관련 산업", i1: "인프라", i2: "재생 에너지", i3: "엔지니어링 및 EPC", i4: "자동차", i5: "제조", i6: "기술 및 IT/ITeS", i7: "물류", i8: "부동산", i9: "환대", i10: "의료 및 제약", i11: "FMCG 및 소매", i12: "석유 및 가스", i13: "항공", i14: "스타트업 및 전자상거래" },
        cred: { title: "선택된 경험 및 자격 증명", desc: "법률 및 규제 작업은 고등 법원 및 대법원 경험이 있는 이중 자격을 갖춘 전문가(CA + LL.B.)와 상업 분쟁, 파산, FEMA 및 화이트칼라 문제를 다루는 전문 법률 네트워크의 지원을 받습니다.", clients: "선택된 클라이언트" },
        connected: { title: "연결된 서비스", c1_t: "세금 및 국경 간 자문", c1_d: "관련 역량", c2_t: "거래, 가치 평가 및 거래 지원", c2_d: "관련 역량", c3_t: "인도 진출: 원스톱 비즈니스 설립", c3_d: "관련 역량", c4_t: "국제 비즈니스", c4_d: "관련 역량" },
        cta: { title: "저희 팀과 기업, 법무, FEMA 및 규제에 대해 논의하십시오.", desc: "귀하의 상황을 알려주시면 귀하의 비즈니스에 적합한 범위, 팀 및 접근 방식을 매핑해 드립니다.", btn1: "문의 — info@taggroup.in", btn2: "연락처 페이지" }
      },
`;

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert english
let enIndex = localesFile.indexOf('services: {');
localesFile = localesFile.slice(0, enIndex + 12) + '\n' + enLegalKeys + localesFile.slice(enIndex + 12);

// Insert korean
let koIndex = localesFile.lastIndexOf('services: {');
localesFile = localesFile.slice(0, koIndex + 12) + '\n' + koLegalKeys + localesFile.slice(koIndex + 12);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Translated Corporate Legal FEMA page and updated locales.ts");
