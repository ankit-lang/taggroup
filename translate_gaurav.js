const fs = require('fs');

let gauravPageContent = `"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t('people.gaurav.breadcrumb.home')}</a> / <a href="/leadership">{t('people.gaurav.breadcrumb.leadership')}</a> / <span>{t('people.gaurav.name')}</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</div>
      <div>
        <span className="eyebrow">{t('people.gaurav.title')}</span>
        <h1>{t('people.gaurav.name')}</h1>
        <p>{t('people.gaurav.subtitle')}</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">{t('people.gaurav.chips.c1')}</span><span className="chip">{t('people.gaurav.chips.c2')}</span><span className="chip">{t('people.gaurav.chips.c3')}</span><span className="chip">{t('people.gaurav.chips.c4')}</span><span className="chip">{t('people.gaurav.chips.c5')}</span><span className="chip">{t('people.gaurav.chips.c6')}</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t('people.gaurav.nav.profile')}</h5>
        <a href="#summary">{t('people.gaurav.nav.overview')}</a>
        <a href="#expertise">{t('people.gaurav.nav.expertise')}</a>
        <a href="#experience">{t('people.gaurav.nav.experience')}</a>
        <a href="#credentials">{t('people.gaurav.nav.credentials')}</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>{t('people.gaurav.nav.get_in_touch')}</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('people.gaurav.nav.email')}</a><a className="btn btn-ghost" href="tel:+918860716777"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z"/></svg> +91 88607 16777</a>
            <a className="btn btn-ghost" href="/assets/profiles/gaurav.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('people.gaurav.nav.download')}</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">{t('people.gaurav.nav.overview')}</a><a href="#expertise">{t('people.gaurav.nav.expertise')}</a><a href="#experience">{t('people.gaurav.nav.experience')}</a><a href="#credentials">{t('people.gaurav.nav.credentials')}</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>{t('people.gaurav.overview.title')}</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>{t('people.gaurav.overview.desc')}</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>$102M</em></div><div className="lbl">{t('people.gaurav.overview.s1')}</div></div><div className="stat"><div className="val"><em>$10.7M</em></div><div className="lbl">{t('people.gaurav.overview.s2')}</div></div><div className="stat"><div className="val"><em>30+</em></div><div className="lbl">{t('people.gaurav.overview.s3')}</div></div><div className="stat"><div className="val"><em>800+</em></div><div className="lbl">{t('people.gaurav.overview.s4')}</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>{t('people.gaurav.expertise.title')}</h2>
          <div className="xp-grid"><div className="xp-col"><h4>{t('people.gaurav.expertise.h1')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h1_l1')}</li><li>{t('people.gaurav.expertise.h1_l2')}</li><li>{t('people.gaurav.expertise.h1_l3')}</li><li>{t('people.gaurav.expertise.h1_l4')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h2')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h2_l1')}</li><li>{t('people.gaurav.expertise.h2_l2')}</li><li>{t('people.gaurav.expertise.h2_l3')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h3')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h3_l1')}</li><li>{t('people.gaurav.expertise.h3_l2')}</li><li>{t('people.gaurav.expertise.h3_l3')}</li></ul></div><div className="xp-col"><h4>{t('people.gaurav.expertise.h4')}</h4><ul className="check-list"><li>{t('people.gaurav.expertise.h4_l1')}</li><li>{t('people.gaurav.expertise.h4_l2')}</li><li>{t('people.gaurav.expertise.h4_l3')}</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>{t('people.gaurav.experience.title')}</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p1')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r1')}</strong><p>{t('people.gaurav.experience.d1')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p2')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r2')}</strong><p>{t('people.gaurav.experience.d2')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p3')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r3')}</strong><p>{t('people.gaurav.experience.d3')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p4')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r4')}</strong><p>{t('people.gaurav.experience.d4')}</p></div></div><div className="tl-item"><div className="tl-period">{t('people.gaurav.experience.p5')}</div><div className="tl-body"><strong>{t('people.gaurav.experience.r5')}</strong><p>{t('people.gaurav.experience.d5')}</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>{t('people.gaurav.cred.title')}</h2>
          <ul className="check-list two"><li>{t('people.gaurav.cred.c1')}</li><li>{t('people.gaurav.cred.c2')}</li><li>{t('people.gaurav.cred.c3')}</li><li>{t('people.gaurav.cred.c4')}</li><li>{t('people.gaurav.cred.c5')}</li><li>{t('people.gaurav.cred.c6')}</li><li>{t('people.gaurav.cred.c7')}</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{t('people.gaurav.cred.sector')}</h4>
          <div className="chips"><span className="chip">{t('people.gaurav.cred.s1')}</span><span className="chip">{t('people.gaurav.cred.s2')}</span><span className="chip">{t('people.gaurav.cred.s3')}</span><span className="chip">{t('people.gaurav.cred.s4')}</span><span className="chip">{t('people.gaurav.cred.s5')}</span><span className="chip">{t('people.gaurav.cred.s6')}</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t('people.gaurav.cta.title')}</h2>
            <p>{t('people.gaurav.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> gaurav@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('people.gaurav.cta.btn')}</a>
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

fs.writeFileSync('src/app/(public)/people/gaurav/page.tsx', gauravPageContent);

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enGauravKeys = `
      people: {
        gaurav: {
          breadcrumb: { home: "Home", leadership: "Leadership" },
          title: "Managing Partner",
          name: "Gaurav Sharma",
          subtitle: "Direct & International Tax · Structuring & CFO Advisory · Gurugram, India",
          chips: { c1: "International tax", c2: "Transfer pricing", c3: "Cross-border", c4: "Fractional CFO", c5: "M&A", c6: "Board advisory" },
          nav: { profile: "Profile", overview: "Overview", expertise: "Areas of expertise", experience: "Experience", credentials: "Credentials", get_in_touch: "Get in touch", email: "Email Gaurav", download: "Download profile (PDF)" },
          overview: { title: "Overview", desc: "Gaurav is the Managing Partner of TAG Group and the driving force behind its tax, cross-border and CFO practice. Over 14+ years he has moved from Big Four advisory into senior in-house leadership — heading tax for the APAC region and finance for South-East Asia at European infrastructure and energy multinationals — before founding TAG Group's integrated advisory platform. He is a trusted counsel to founders, CFOs and boards on cross-border investment, M&A, finance transformation and high-stakes tax controversy, and serves as an Independent Director. He has supported ~US$102M of sovereign-wealth-fund equity, recovered ~US$10.7M in tax refunds, and built governance frameworks across 30+ entities while leading teams of 20+.", s1: "Sovereign-wealth-fund equity supported", s2: "Tax refunds recovered", s3: "Entity portfolio governed", s4: "Chartered Accountants trained" },
          expertise: { title: "Areas of expertise", h1: "International tax & transfer pricing", h1_l1: "International tax, transfer pricing and treaty interpretation", h1_l2: "Cross-border investment, funding and repatriation structures", h1_l3: "Permanent Establishment and POEM advisory", h1_l4: "Withholding tax and foreign-remittance support", h2: "Finance leadership & CFO", h2_l1: "Fractional CFO, controllership and finance transformation", h2_l2: "Financial oversight, MIS, budgeting and cash-flow management", h2_l3: "Governance frameworks across multi-entity groups", h3: "Transactions & structuring", h3_l1: "M&A tax, due diligence and post-deal integration", h3_l2: "Transaction structuring, restructuring and repatriation", h3_l3: "Strategic pricing and financial models for high-value bids across Asia", h4: "Tax controversy & recovery", h4_l1: "Tax litigation and dispute management", h4_l2: "Refund governance and recovery", h4_l3: "Prosecution, compounding and anti-evasion matters" },
          experience: { title: "Experience", p1: "2025 – present", r1: "Managing Partner, TAG Group", d1: "Founded and leads TAG Group's tax, cross-border and CFO practice — building an integrated, partner-led platform for Indian and multinational clients, and advising boards on structuring, transactions and governance.", p2: "Regional leadership", r2: "Financial Controller, South-East Asia — European infrastructure & energy MNC", d2: "Held full finance ownership for the region — steering reporting, audit, MIS and commercial decisions across India and South Asia and partnering regional leadership on strategy.", p3: "Regional leadership", r3: "Head of Tax Affairs, APAC — European MNC", d3: "Owned tax strategy and risk across six countries (India, Singapore, Vietnam, Indonesia, the Philippines and South Korea), shaping the group's cross-border and treaty positions.", p4: "India & South Asia", r4: "Tax Head — infrastructure & energy group", d4: "Directed tax governance for a 20+ entity portfolio — recovering ~US$10.7M in refunds and defending disputes of ~US$75M before tax tribunals.", p5: "Early career", r5: "Big Four firms", d5: "Built the technical foundation in transfer pricing and international tax — documentation, economic analysis and controversy for marquee global clients." },
          cred: { title: "Credentials & qualifications", c1: "Chartered Accountant (ICAI)", c2: "IIM Indore (Alumni)", c3: "Independent Director", c4: "Diploma in IFRS", c5: "CPA (Australia)", c6: "MBA (NMIMS)", c7: "14+ years' experience", sector: "Sector experience", s1: "Infrastructure", s2: "Renewable energy", s3: "Engineering & EPC", s4: "Technology & services", s5: "Defence", s6: "Start-ups & e-commerce" },
          cta: { title: "Work with Gaurav", desc: "Reach out directly, or send a general enquiry and we'll connect you with the right team.", btn: "Contact TAG Group" }
        }
      },
`;

const koGauravKeys = `
      people: {
        gaurav: {
          breadcrumb: { home: "홈", leadership: "리더십" },
          title: "대표 파트너",
          name: "가우라브 샤르마",
          subtitle: "직접세 및 국제 조세 · 구조화 및 CFO 자문 · 인도 구루그람",
          chips: { c1: "국제 조세", c2: "이전 가격", c3: "국경 간", c4: "가상 CFO", c5: "M&A", c6: "이사회 자문" },
          nav: { profile: "프로필", overview: "개요", expertise: "전문 분야", experience: "경험", credentials: "자격 요건", get_in_touch: "연락하기", email: "가우라브에게 이메일 보내기", download: "프로필 다운로드 (PDF)" },
          overview: { title: "개요", desc: "가우라브는 TAG Group의 대표 파트너이자 세무, 국경 간 및 CFO 업무의 원동력입니다. 14년 이상의 기간 동안 그는 Big Four 자문 회사에서 고위 사내 리더십으로 이동하여 유럽 인프라 및 에너지 다국적 기업에서 APAC 지역 세무 및 동남아시아 재무를 이끌었으며 이후 TAG Group의 통합 자문 플랫폼을 설립했습니다. 그는 국경 간 투자, M&A, 재무 혁신 및 세금 논쟁에 대해 창업자, CFO 및 이사회의 신뢰할 수 있는 고문이며 독립 이사로 활동하고 있습니다. 그는 약 1억 200만 달러의 국부펀드 자본을 지원했고, 약 1,070만 달러의 세금 환급액을 회수했으며, 20명 이상의 팀을 이끌면서 30개 이상의 기업에 거버넌스 프레임워크를 구축했습니다.", s1: "지원되는 국부펀드 자본", s2: "회수된 세금 환급액", s3: "관리되는 기업 포트폴리오", s4: "교육받은 공인회계사" },
          expertise: { title: "전문 분야", h1: "국제 조세 및 이전 가격", h1_l1: "국제 조세, 이전 가격 및 조약 해석", h1_l2: "국경 간 투자, 자금 조달 및 자금 송환 구조", h1_l3: "고정 사업장 및 POEM 자문", h1_l4: "원천 징수 및 해외 송금 지원", h2: "재무 리더십 및 CFO", h2_l1: "가상 CFO, 컨트롤러십 및 재무 혁신", h2_l2: "재무 감독, MIS, 예산 책정 및 현금 흐름 관리", h2_l3: "다중 엔티티 그룹 전체의 거버넌스 프레임워크", h3: "거래 및 구조화", h3_l1: "M&A 세무, 실사 및 거래 후 통합", h3_l2: "거래 구조화, 구조 조정 및 자금 송환", h3_l3: "아시아 전역의 고가 입찰을 위한 전략적 가격 책정 및 재무 모델", h4: "세금 논쟁 및 회수", h4_l1: "세무 소송 및 분쟁 관리", h4_l2: "환급 거버넌스 및 회수", h4_l3: "기소, 복리 및 탈세 방지 문제" },
          experience: { title: "경험", p1: "2025 – 현재", r1: "대표 파트너, TAG Group", d1: "TAG Group의 세무, 국경 간 및 CFO 실무를 설립하고 이끌며 인도 및 다국적 고객을 위한 통합 파트너 주도 플랫폼을 구축하고 이사회에 구조화, 거래 및 거버넌스에 대해 조언합니다.", p2: "지역 리더십", r2: "재무 컨트롤러, 동남아시아 — 유럽 인프라 & 에너지 다국적 기업", d2: "해당 지역에 대한 완전한 재무 소유권을 보유하고 인도 및 남아시아 전역의 보고, 감사, MIS 및 상업적 결정을 주도하고 전략에 대해 지역 리더십과 파트너 관계를 맺습니다.", p3: "지역 리더십", r3: "세무 부서 책임자, APAC — 유럽 다국적 기업", d3: "인도, 싱가포르, 베트남, 인도네시아, 필리핀, 한국 등 6개국의 세무 전략과 리스크를 소유하여 그룹의 국경 간 및 조약 포지션을 형성했습니다.", p4: "인도 & 남아시아", r4: "세무 책임자 — 인프라 & 에너지 그룹", d4: "20개 이상의 기업 포트폴리오에 대한 세무 거버넌스를 지시하여 약 1,070만 달러의 환급액을 회수하고 조세 심판원에서 약 7,500만 달러의 분쟁을 방어했습니다.", p5: "초기 경력", r5: "Big Four 회사", d5: "선도적인 글로벌 고객을 위한 이전 가격 및 국제 조세에 대한 기술적 기반(문서화, 경제 분석 및 논쟁)을 구축했습니다." },
          cred: { title: "자격 요건 및 자격", c1: "공인회계사 (ICAI)", c2: "IIM Indore (졸업생)", c3: "독립 이사", c4: "IFRS 디플로마", c5: "CPA (호주)", c6: "MBA (NMIMS)", c7: "14년 이상의 경험", sector: "산업 경험", s1: "인프라", s2: "재생 에너지", s3: "엔지니어링 & EPC", s4: "기술 & 서비스", s5: "국방", s6: "스타트업 & 전자상거래" },
          cta: { title: "가우라브와 함께 일하기", desc: "직접 연락하거나 일반 문의 사항을 보내주시면 적합한 팀을 연결해 드립니다.", btn: "TAG Group 연락하기" }
        }
      },
`;

let enPeopleIndex = localesFile.indexOf('people: {');
if (enPeopleIndex === -1) {
    let enServicesIndex = localesFile.indexOf('services: {');
    localesFile = localesFile.slice(0, enServicesIndex) + enGauravKeys + '\\n' + localesFile.slice(enServicesIndex);
}

let koPeopleIndex = localesFile.lastIndexOf('people: {');
if (koPeopleIndex === -1) {
    let koServicesIndex = localesFile.lastIndexOf('services: {');
    localesFile = localesFile.slice(0, koServicesIndex) + koGauravKeys + '\\n' + localesFile.slice(koServicesIndex);
}

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated gaurav profile page and locales.ts");
