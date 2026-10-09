const fs = require('fs');

let uaeTsx = fs.readFileSync('src/app/(public)/desks/uae/page.tsx', 'utf8');

if (!uaeTsx.includes('useI18n')) {
  uaeTsx = uaeTsx.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  uaeTsx = uaeTsx.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}

const replacements = [
  ['<div className="breadcrumb"><a href="/index">Home</a> / <a href="/international">International Desk</a> / <span>UAE Desk</span></div>', '<div className="breadcrumb"><a href="/index">{t("breadcrumb.home")}</a> / <a href="/international">{t("intl.breadcrumb")}</a> / <span>{t("desks.uae.title_short")}</span></div>'],
  ['<span className="eyebrow">India ↔ UAE</span>', '<span className="eyebrow">{t("desks.uae.eyebrow")}</span>'],
  ['<h1>🇦🇪 UAE Desk</h1>', '<h1>{t("desks.uae.title")}</h1>'],
  ['<p>TAG Group\'s UAE Desk is your bridge across the India–UAE corridor. Through our local presence with Taxepolis International FZCO in Sharjah, we help Indian businesses establish and operate in the UAE, and UAE-based groups engage with India — with joined-up tax, structuring and compliance on both sides.</p>', '<p>{t("desks.uae.hero_desc")}</p>'],
  ['<h5>On this page</h5>', '<h5>{t("desks.uae.nav_page")}</h5>'],
  ['<a href="#why">Why this corridor</a>', '<a href="#why">{t("desks.uae.nav_why")}</a>'],
  ['<a href="#services">How we help</a>', '<a href="#services">{t("desks.uae.nav_services")}</a>'],
  ['<h5>Desk lead</h5>', '<h5>{t("desks.uae.desk_lead")}</h5>'],
  ['<span>Partner — UAE Desk</span>', '<span>{t("desks.uae.partner_title")}</span>'],
  ['> Enquire</a>', '>{t("desks.uae.btn_enquire")}</a>'],
  ['<nav className="jump-chips" aria-label="On this page"><a href="#why">Why this corridor</a><a href="#services">How we help</a></nav>', '<nav className="jump-chips" aria-label={t("desks.uae.nav_page")}><a href="#why">{t("desks.uae.nav_why")}</a><a href="#services">{t("desks.uae.nav_services")}</a></nav>'],
  ['<figcaption className="ph-cap"><strong>UAE Desk</strong><span>India ↔ UAE</span></figcaption>', '<figcaption className="ph-cap"><strong>{t("desks.uae.title_short")}</strong><span>{t("desks.uae.eyebrow")}</span></figcaption>'],
  ['<h2>Why the UAE corridor</h2>', '<h2>{t("desks.uae.why_title")}</h2>'],
  ['<li>One of the world\'s most active trade &amp; investment corridors</li>', '<li>{t("desks.uae.why_l1")}</li>'],
  ['<li>0% / low-tax regimes, free zones and a fast-evolving Corporate Tax &amp; VAT landscape</li>', '<li>{t("desks.uae.why_l2")}</li>'],
  ['<li>A natural hub for holding, treasury and regional headquarters</li>', '<li>{t("desks.uae.why_l3")}</li>'],
  ['<li>Large Indian diaspora and business community</li>', '<li>{t("desks.uae.why_l4")}</li>'],
  ['<h2>How the desk helps</h2>', '<h2>{t("desks.uae.services_title")}</h2>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Entry &amp; structuring</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc1_title")}</h4>'],
  ['<li>UAE mainland &amp; free-zone entity setup</li>', '<li>{t("desks.uae.svc1_l1")}</li>'],
  ['<li>Holding, treasury &amp; regional-HQ structuring</li>', '<li>{t("desks.uae.svc1_l2")}</li>'],
  ['<li>India–UAE cross-border transaction structuring</li>', '<li>{t("desks.uae.svc1_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Tax</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc2_title")}</h4>'],
  ['<li>UAE VAT advisory &amp; implementation</li>', '<li>{t("desks.uae.svc2_l1")}</li>'],
  ['<li>UAE Corporate Tax readiness</li>', '<li>{t("desks.uae.svc2_l2")}</li>'],
  ['<li>India GST for India–UAE businesses</li>', '<li>{t("desks.uae.svc2_l3")}</li>'],
  ['<li>Withholding &amp; treaty positions</li>', '<li>{t("desks.uae.svc2_l4")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Compliance &amp; operations</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc3_title")}</h4>'],
  ['<li>Accounting, bookkeeping &amp; management reporting</li>', '<li>{t("desks.uae.svc3_l1")}</li>'],
  ['<li>Payroll &amp; employment coordination</li>', '<li>{t("desks.uae.svc3_l2")}</li>'],
  ['<li>Banking &amp; regulatory coordination</li>', '<li>{t("desks.uae.svc3_l3")}</li>'],
  ['<li>Ongoing compliance calendars</li>', '<li>{t("desks.uae.svc3_l4")}</li>'],
  ['<h2>Explore the UAE Desk</h2>', '<h2>{t("desks.uae.cta_title")}</h2>'],
  ['<p>Tell us your plans for this corridor and we\'ll map the right structure, tax position and setup.</p>', '<p>{t("desks.uae.cta_desc")}</p>'],
  ['<a className="btn btn-light" href="/international">All desks</a>', '<a className="btn btn-light" href="/international">{t("desks.uae.cta_btn_all")}</a>']
];

for (const [find, replace] of replacements) {
  uaeTsx = uaeTsx.replaceAll(find, replace);
}

fs.writeFileSync('src/app/(public)/desks/uae/page.tsx', uaeTsx);
console.log("Updated uae page.tsx");

const enUae = {
  title_short: "UAE Desk",
  eyebrow: "India ↔ UAE",
  title: "🇦🇪 UAE Desk",
  hero_desc: "TAG Group's UAE Desk is your bridge across the India–UAE corridor. Through our local presence with Taxepolis International FZCO in Sharjah, we help Indian businesses establish and operate in the UAE, and UAE-based groups engage with India — with joined-up tax, structuring and compliance on both sides.",
  nav_page: "On this page",
  nav_why: "Why this corridor",
  nav_services: "How we help",
  desk_lead: "Desk lead",
  partner_title: "Partner — UAE Desk",
  btn_enquire: " Enquire",
  why_title: "Why the UAE corridor",
  why_l1: "One of the world's most active trade & investment corridors",
  why_l2: "0% / low-tax regimes, free zones and a fast-evolving Corporate Tax & VAT landscape",
  why_l3: "A natural hub for holding, treasury and regional headquarters",
  why_l4: "Large Indian diaspora and business community",
  services_title: "How the desk helps",
  svc1_title: "Entry & structuring",
  svc1_l1: "UAE mainland & free-zone entity setup",
  svc1_l2: "Holding, treasury & regional-HQ structuring",
  svc1_l3: "India–UAE cross-border transaction structuring",
  svc2_title: "Tax",
  svc2_l1: "UAE VAT advisory & implementation",
  svc2_l2: "UAE Corporate Tax readiness",
  svc2_l3: "India GST for India–UAE businesses",
  svc2_l4: "Withholding & treaty positions",
  svc3_title: "Compliance & operations",
  svc3_l1: "Accounting, bookkeeping & management reporting",
  svc3_l2: "Payroll & employment coordination",
  svc3_l3: "Banking & regulatory coordination",
  svc3_l4: "Ongoing compliance calendars",
  cta_title: "Explore the UAE Desk",
  cta_desc: "Tell us your plans for this corridor and we'll map the right structure, tax position and setup.",
  cta_btn_all: "All desks"
};

const koUae = {
  title_short: "UAE 데스크",
  eyebrow: "인도 ↔ UAE",
  title: "🇦🇪 UAE 데스크",
  hero_desc: "TAG Group의 UAE 데스크는 인도-UAE 회랑을 가로지르는 다리입니다. 샤르자의 Taxepolis International FZCO와 현지 파트너십을 통해 인도 기업이 UAE에 설립 및 운영되도록 지원하고, UAE 기반 그룹이 인도와 원활하게 교류할 수 있도록 양국의 세무, 구조화 및 규정 준수를 연계하여 돕습니다.",
  nav_page: "페이지 목차",
  nav_why: "이 회랑을 선택하는 이유",
  nav_services: "우리의 지원 방식",
  desk_lead: "데스크 리더",
  partner_title: "파트너 — UAE 데스크",
  btn_enquire: " 문의하기",
  why_title: "UAE 회랑의 이점",
  why_l1: "세계에서 가장 활발한 무역 및 투자 회랑 중 하나",
  why_l2: "0% / 저세율 제도, 자유 무역 지대 및 빠르게 진화하는 법인세 및 부가가치세(VAT) 환경",
  why_l3: "지주, 재무 및 지역 본부를 위한 자연스러운 허브",
  why_l4: "대규모 인도인 디아스포라 및 비즈니스 커뮤니티",
  services_title: "데스크 지원 내용",
  svc1_title: "진출 및 구조화",
  svc1_l1: "UAE 본토 및 자유 무역 지대 법인 설립",
  svc1_l2: "지주, 재무 및 지역 본부 구조화",
  svc1_l3: "인도-UAE 국경 간 거래 구조화",
  svc2_title: "세무",
  svc2_l1: "UAE VAT 자문 및 구현",
  svc2_l2: "UAE 법인세 준비",
  svc2_l3: "인도-UAE 기업을 위한 인도 GST",
  svc2_l4: "원천징수 및 조약 입장",
  svc3_title: "규정 준수 및 운영",
  svc3_l1: "회계, 장부 기록 및 경영 보고",
  svc3_l2: "급여 및 고용 조정",
  svc3_l3: "은행 및 규제 조정",
  svc3_l4: "지속적인 규정 준수 일정 관리",
  cta_title: "UAE 데스크 탐색하기",
  cta_desc: "이 회랑에 대한 계획을 알려주시면 올바른 구조, 세금 포지션 및 설정을 매핑해 드립니다.",
  cta_btn_all: "모든 데스크"
};

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// Try to find if 'desks: {' exists
if (localesFile.includes('desks: {')) {
    // If it exists, inject 'uae: {...}' inside it. We assume it's already there or not.
    // Let's just create it at the same level as intl.
} else {
    // Inject desks right after intl
    localesFile = localesFile.replace("intl: {", "desks: {\n      uae: " + JSON.stringify(enUae, null, 8).replace(/}/g, '      }') + "\n    },\n    intl: {");
    
    let koIntlIndex = localesFile.lastIndexOf("intl: {");
    localesFile = localesFile.substring(0, koIntlIndex) + "desks: {\n      uae: " + JSON.stringify(koUae, null, 8).replace(/}/g, '      }') + "\n    },\n    " + localesFile.substring(koIntlIndex);
}

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated locales.ts");
