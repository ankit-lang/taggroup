const fs = require('fs');

const enSgMy = {
  title_short: "Singapore & Malaysia Desk",
  eyebrow: "India \u2194 Singapore & Malaysia",
  title: "\ud83c\uddf8\ud83c\uddec Singapore & Malaysia Desk",
  hero_desc: "TAG Group's Singapore & Malaysia Desk, delivered with S&A Consulting Singapore, helps businesses set up and run entities across two of Asia's most important gateways \u2014 with accounting, corporate secretarial, payroll and regulatory coordination handled end to end.",
  nav_page: "On this page",
  nav_why: "Why this corridor",
  nav_services: "How we help",
  desk_lead: "Desk lead",
  partner_title: "International Desk \u2014 Singapore",
  btn_enquire: " Enquire",
  why_title: "Why the Singapore & Malaysia corridor",
  why_l1: "Singapore: Asia's premier holding, fund and treasury hub",
  why_l2: "Malaysia: a competitive base for operations and shared services",
  why_l3: "Robust legal systems and extensive treaty networks",
  why_l4: "Ideal for outbound Indian expansion into ASEAN",
  services_title: "How the desk helps",
  svc1_title: "Entry & corporate",
  svc1_l1: "Company incorporation & corporate secretarial",
  svc1_l2: "Holding & fund-structure setup",
  svc1_l3: "Nominee, registered-office & governance support",
  svc2_title: "Finance & tax",
  svc2_l1: "Accounting, compliance & management accounts",
  svc2_l2: "GST / SST and corporate tax",
  svc2_l3: "Payroll and employment administration",
  svc3_title: "Regulatory coordination",
  svc3_l1: "ACRA, IRAS, MOM and CPF Board (Singapore)",
  svc3_l2: "SSM and local authorities (Malaysia)",
  svc3_l3: "Cross-border coordination with India",
  cta_title: "Explore the Singapore & Malaysia Desk",
  cta_desc: "Tell us your plans for this corridor and we'll map the right structure, tax position and setup.",
  cta_btn_all: "All desks"
};

const koSgMy = {
  title_short: "싱가포르 & 말레이시아 데스크",
  eyebrow: "인도 \u2194 싱가포르 & 말레이시아",
  title: "\ud83c\uddf8\ud83c\uddec 싱가포르 & 말레이시아 데스크",
  hero_desc: "TAG Group의 싱가포르 및 말레이시아 데스크는 S&A Consulting Singapore와 함께 제공되며, 기업이 아시아의 가장 중요한 두 관문에 법인을 설립하고 운영할 수 있도록 지원합니다. 회계, 기업 비서 업무, 급여 및 규제 조정을 전반적으로 처리합니다.",
  nav_page: "페이지 목차",
  nav_why: "이 회랑을 선택하는 이유",
  nav_services: "우리의 지원 방식",
  desk_lead: "데스크 리더",
  partner_title: "인터내셔널 데스크 \u2014 싱가포르",
  btn_enquire: " 문의하기",
  why_title: "싱가포르 및 말레이시아 회랑의 이점",
  why_l1: "싱가포르: 아시아 최고의 지주, 펀드 및 재무 허브",
  why_l2: "말레이시아: 운영 및 공유 서비스를 위한 경쟁력 있는 기반",
  why_l3: "견고한 법률 시스템 및 광범위한 조약 네트워크",
  why_l4: "인도의 아세안(ASEAN) 진출을 위한 이상적인 경로",
  services_title: "데스크 지원 내용",
  svc1_title: "진출 및 기업",
  svc1_l1: "법인 설립 및 기업 비서 업무",
  svc1_l2: "지주 및 펀드 구조 설정",
  svc1_l3: "차명(Nominee), 등록 사무소 및 거버넌스 지원",
  svc2_title: "재무 및 세무",
  svc2_l1: "회계, 규정 준수 및 관리 계정",
  svc2_l2: "GST / SST 및 법인세",
  svc2_l3: "급여 및 고용 관리",
  svc3_title: "규제 조정",
  svc3_l1: "ACRA, IRAS, MOM 및 CPF 이사회 (싱가포르)",
  svc3_l2: "SSM 및 현지 당국 (말레이시아)",
  svc3_l3: "인도와의 국경 간 조정",
  cta_title: "싱가포르 & 말레이시아 데스크 탐색",
  cta_desc: "이 회랑에 대한 계획을 알려주시면 올바른 구조, 세무 포지션 및 설정을 매핑해 드립니다.",
  cta_btn_all: "모든 데스크"
};

const enMauritius = {
  title_short: "Mauritius Desk",
  eyebrow: "India \u2194 Mauritius",
  title: "\ud83c\uddf2\ud83c\uddfa Mauritius Desk",
  hero_desc: "TAG Group's Mauritius Desk, delivered with Fideco Global Business Services, supports company establishment, administration and governance in a leading international financial centre \u2014 with substance, AML/CFT and accounting handled by an experienced on-ground team led by Hasina Bahemia (CAMS).",
  nav_page: "On this page",
  nav_why: "Why this corridor",
  nav_services: "How we help",
  desk_lead: "Desk lead",
  partner_title: "International Desk \u2014 Mauritius",
  btn_enquire: " Enquire",
  why_title: "Why the Mauritius corridor",
  why_l1: "A well-regulated international financial centre",
  why_l2: "Established route for structuring investment into Africa & Asia",
  why_l3: "Strong governance, substance and administration ecosystem",
  why_l4: "Extensive double-taxation treaty network",
  services_title: "How the desk helps",
  svc1_title: "Establishment & administration",
  svc1_l1: "Global Business Company (GBC) setup",
  svc1_l2: "Corporate administration & company secretarial",
  svc1_l3: "Substance & governance support",
  svc2_title: "Compliance",
  svc2_l1: "AML/CFT compliance & client onboarding",
  svc2_l2: "Accounting & tax coordination",
  svc2_l3: "Regulatory filings & ongoing administration",
  svc3_title: "Coordination",
  svc3_l1: "Cross-border structuring coordination",
  svc3_l2: "Business-related relocation assistance",
  svc3_l3: "Coordination with India delivery",
  cta_title: "Explore the Mauritius Desk",
  cta_desc: "Tell us your plans for this corridor and we'll map the right structure, tax position and setup.",
  cta_btn_all: "All desks"
};

const koMauritius = {
  title_short: "모리셔스 데스크",
  eyebrow: "인도 \u2194 모리셔스",
  title: "\ud83c\uddf2\ud83c\uddfa 모리셔스 데스크",
  hero_desc: "TAG Group의 모리셔스 데스크는 Fideco Global Business Services와 함께 제공되며, 선도적인 국제 금융 센터에서 회사 설립, 관리 및 거버넌스를 지원합니다. Hasina Bahemia(CAMS)가 이끄는 경험 풍부한 현지 팀이 실질, AML/CFT 및 회계를 처리합니다.",
  nav_page: "페이지 목차",
  nav_why: "이 회랑을 선택하는 이유",
  nav_services: "우리의 지원 방식",
  desk_lead: "데스크 리더",
  partner_title: "인터내셔널 데스크 \u2014 모리셔스",
  btn_enquire: " 문의하기",
  why_title: "모리셔스 회랑의 이점",
  why_l1: "규제가 잘 정비된 국제 금융 센터",
  why_l2: "아프리카 및 아시아 투자를 위한 확립된 경로",
  why_l3: "강력한 거버넌스, 실질 및 관리 생태계",
  why_l4: "광범위한 이중 과세 방지 조약 네트워크",
  services_title: "데스크 지원 내용",
  svc1_title: "설립 및 관리",
  svc1_l1: "글로벌 비즈니스 회사(GBC) 설립",
  svc1_l2: "기업 관리 및 회사 비서 업무",
  svc1_l3: "실질 및 거버넌스 지원",
  svc2_title: "규정 준수",
  svc2_l1: "AML/CFT 규정 준수 및 고객 온보딩",
  svc2_l2: "회계 및 세무 조정",
  svc2_l3: "규제 기관 보고 및 지속적인 관리",
  svc3_title: "조정",
  svc3_l1: "국경 간 구조화 조정",
  svc3_l2: "비즈니스 관련 이전 지원",
  svc3_l3: "인도 팀과의 전달 조정",
  cta_title: "모리셔스 데스크 탐색",
  cta_desc: "이 회랑에 대한 계획을 알려주시면 올바른 구조, 세무 포지션 및 설정을 매핑해 드립니다.",
  cta_btn_all: "모든 데스크"
};

const enUs = {
  title_short: "US Desk",
  eyebrow: "India \u2194 United States",
  badge_coming_soon: "Coming soon",
  title: "\ud83c\uddfa\ud83c\uddf8 US Desk",
  hero_desc: "TAG Group's US Desk is coming soon. In the meantime, our Global Capability Centre already delivers managed finance & accounting for US-based businesses from India, and our tax and transfer-pricing teams support US\u2013India cross-border matters.",
  nav_page: "On this page",
  nav_why: "Why this corridor",
  nav_services: "How we help",
  desk_lead: "Desk status",
  lead_note: "A dedicated contact for this desk is coming soon. Our GCC and tax teams support this corridor today.",
  btn_enquire: " Enquire",
  why_title: "Why the US corridor",
  why_l1: "The largest India-outbound and inbound corridor",
  why_l2: "Deep demand for India-based finance & accounting delivery",
  why_l3: "Complex cross-border tax and transfer-pricing needs",
  services_title: "How the desk helps",
  svc1_title: "Available now",
  svc1_l1: "Finance & accounting delivery via our Global Capability Centre",
  svc1_l2: "US\u2013India transfer-pricing documentation & analysis",
  svc1_l3: "Cross-border tax coordination",
  svc2_title: "Coming soon",
  svc2_l1: "A dedicated US Desk with a named local contact",
  svc2_l2: "Expanded entry & compliance support",
  svc2_l3: "On-ground coordination",
  cta_title: "Explore the US Desk",
  cta_desc: "Tell us your plans for this corridor and we'll map the right structure, tax position and setup.",
  cta_btn_all: "All desks"
};

const koUs = {
  title_short: "미국 데스크",
  eyebrow: "인도 \u2194 미국",
  badge_coming_soon: "출시 예정",
  title: "\ud83c\uddfa\ud83c\uddf8 미국 데스크",
  hero_desc: "TAG Group의 미국 데스크가 곧 개설됩니다. 그동안 당사의 글로벌 역량 센터는 인도에서 미국 기반 기업을 위한 관리 재무 및 회계 서비스를 이미 제공하고 있으며, 세무 및 이전 가격 팀은 미국-인도 국경 간 문제를 지원합니다.",
  nav_page: "페이지 목차",
  nav_why: "이 회랑을 선택하는 이유",
  nav_services: "우리의 지원 방식",
  desk_lead: "데스크 상태",
  lead_note: "이 데스크의 전담 담당자가 곧 배정될 예정입니다. 당사의 GCC 및 세무 팀은 현재 이 회랑을 지원하고 있습니다.",
  btn_enquire: " 문의하기",
  why_title: "미국 회랑의 이점",
  why_l1: "최대 규모의 인도 아웃바운드 및 인바운드 회랑",
  why_l2: "인도 기반 재무 및 회계 제공에 대한 깊은 수요",
  why_l3: "복잡한 국경 간 세무 및 이전 가격 요구 사항",
  services_title: "데스크 지원 내용",
  svc1_title: "현재 사용 가능",
  svc1_l1: "당사의 글로벌 역량 센터를 통한 재무 및 회계 제공",
  svc1_l2: "미국-인도 이전 가격 문서화 및 분석",
  svc1_l3: "국경 간 세무 조정",
  svc2_title: "출시 예정",
  svc2_l1: "지정된 현지 연락처가 있는 전담 미국 데스크",
  svc2_l2: "확장된 진출 및 규정 준수 지원",
  svc2_l3: "현지 조정",
  cta_title: "미국 데스크 탐색",
  cta_desc: "이 회랑에 대한 계획을 알려주시면 올바른 구조, 세무 포지션 및 설정을 매핑해 드립니다.",
  cta_btn_all: "모든 데스크"
};

// 1. Patch locales.ts
let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

const enInsert = `
      sg_my: ${JSON.stringify(enSgMy, null, 8).replace(/}/g, '      }')},
      mauritius: ${JSON.stringify(enMauritius, null, 8).replace(/}/g, '      }')},
      us: ${JSON.stringify(enUs, null, 8).replace(/}/g, '      }')},
`;
const koInsert = `
      sg_my: ${JSON.stringify(koSgMy, null, 8).replace(/}/g, '      }')},
      mauritius: ${JSON.stringify(koMauritius, null, 8).replace(/}/g, '      }')},
      us: ${JSON.stringify(koUs, null, 8).replace(/}/g, '      }')},
`;

const firstDesks = localesTs.indexOf('desks: {');
const secondDesks = localesTs.indexOf('desks: {', firstDesks + 1);

// We replace "desks: {" with "desks: {" + koInsert for the second (Korean) one
// and for the first (English) one. We do second one first to not mess up indexes.
localesTs = localesTs.substring(0, secondDesks + 8) + '\n' + koInsert + localesTs.substring(secondDesks + 8);
localesTs = localesTs.substring(0, firstDesks + 8) + '\n' + enInsert + localesTs.substring(firstDesks + 8);

fs.writeFileSync('src/data/locales.ts', localesTs);

// 2. Patch Singapore & Malaysia Desk page
let sgMyPage = fs.readFileSync('src/app/(public)/desks/singapore-malaysia/page.tsx', 'utf8');
if (!sgMyPage.includes('useI18n')) {
  sgMyPage = sgMyPage.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  sgMyPage = sgMyPage.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}
const sgMyReplacements = [
  ['<span>Singapore & Malaysia Desk</span>', '<span>{t("desks.sg_my.title_short")}</span>'],
  ['<span className="eyebrow">India ↔ Singapore &amp; Malaysia</span>', '<span className="eyebrow">{t("desks.sg_my.eyebrow")}</span>'],
  ['<h1>🇸🇬 Singapore & Malaysia Desk</h1>', '<h1>{t("desks.sg_my.title")}</h1>'],
  ["<p>TAG Group's Singapore &amp; Malaysia Desk, delivered with S&amp;A Consulting Singapore, helps businesses set up and run entities across two of Asia's most important gateways — with accounting, corporate secretarial, payroll and regulatory coordination handled end to end.</p>", '<p>{t("desks.sg_my.hero_desc")}</p>'],
  ['<h5>On this page</h5>', '<h5>{t("desks.sg_my.nav_page")}</h5>'],
  ['<a href="#why">Why this corridor</a>', '<a href="#why">{t("desks.sg_my.nav_why")}</a>'],
  ['<a href="#services">How we help</a>', '<a href="#services">{t("desks.sg_my.nav_services")}</a>'],
  ['<h5>Desk lead</h5>', '<h5>{t("desks.sg_my.desk_lead")}</h5>'],
  ['<span>International Desk — Singapore</span>', '<span>{t("desks.sg_my.partner_title")}</span>'],
  [' Enquire</a>', ' {t("desks.sg_my.btn_enquire")}</a>'],
  ['<strong>Singapore & Malaysia Desk</strong>', '<strong>{t("desks.sg_my.title_short")}</strong>'],
  ['<span>India ↔ Singapore &amp; Malaysia</span>', '<span>{t("desks.sg_my.eyebrow")}</span>'],
  ['<h2>Why the Singapore & Malaysia corridor</h2>', '<h2>{t("desks.sg_my.why_title")}</h2>'],
  ["<li>Singapore: Asia's premier holding, fund and treasury hub</li>", '<li>{t("desks.sg_my.why_l1")}</li>'],
  ['<li>Malaysia: a competitive base for operations and shared services</li>', '<li>{t("desks.sg_my.why_l2")}</li>'],
  ['<li>Robust legal systems and extensive treaty networks</li>', '<li>{t("desks.sg_my.why_l3")}</li>'],
  ['<li>Ideal for outbound Indian expansion into ASEAN</li>', '<li>{t("desks.sg_my.why_l4")}</li>'],
  ['<h2>How the desk helps</h2>', '<h2>{t("desks.sg_my.services_title")}</h2>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Entry &amp; corporate</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.sg_my.svc1_title")}</h4>'],
  ['<li>Company incorporation &amp; corporate secretarial</li>', '<li>{t("desks.sg_my.svc1_l1")}</li>'],
  ['<li>Holding &amp; fund-structure setup</li>', '<li>{t("desks.sg_my.svc1_l2")}</li>'],
  ['<li>Nominee, registered-office &amp; governance support</li>', '<li>{t("desks.sg_my.svc1_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Finance &amp; tax</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.sg_my.svc2_title")}</h4>'],
  ['<li>Accounting, compliance &amp; management accounts</li>', '<li>{t("desks.sg_my.svc2_l1")}</li>'],
  ['<li>GST / SST and corporate tax</li>', '<li>{t("desks.sg_my.svc2_l2")}</li>'],
  ['<li>Payroll and employment administration</li>', '<li>{t("desks.sg_my.svc2_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Regulatory coordination</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.sg_my.svc3_title")}</h4>'],
  ['<li>ACRA, IRAS, MOM and CPF Board (Singapore)</li>', '<li>{t("desks.sg_my.svc3_l1")}</li>'],
  ['<li>SSM and local authorities (Malaysia)</li>', '<li>{t("desks.sg_my.svc3_l2")}</li>'],
  ['<li>Cross-border coordination with India</li>', '<li>{t("desks.sg_my.svc3_l3")}</li>'],
  ['<h2>Explore the Singapore & Malaysia Desk</h2>', '<h2>{t("desks.sg_my.cta_title")}</h2>'],
  ["<p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>", '<p>{t("desks.sg_my.cta_desc")}</p>'],
  ['All desks</a>', '{t("desks.sg_my.cta_btn_all")}</a>']
];
for (let [find, rep] of sgMyReplacements) {
  sgMyPage = sgMyPage.replaceAll(find, rep);
}
// Add intl breadcrumb translation
sgMyPage = sgMyPage.replace('Home</a>', '{t("breadcrumb.home")}</a>');
sgMyPage = sgMyPage.replace('International Desk</a>', '{t("intl.breadcrumb")}</a>');

fs.writeFileSync('src/app/(public)/desks/singapore-malaysia/page.tsx', sgMyPage);


// 3. Patch Mauritius Desk page
let mauritiusPage = fs.readFileSync('src/app/(public)/desks/mauritius/page.tsx', 'utf8');
if (!mauritiusPage.includes('useI18n')) {
  mauritiusPage = mauritiusPage.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  mauritiusPage = mauritiusPage.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}
const mauritiusReplacements = [
  ['<span>Mauritius Desk</span>', '<span>{t("desks.mauritius.title_short")}</span>'],
  ['<span className="eyebrow">India ↔ Mauritius</span>', '<span className="eyebrow">{t("desks.mauritius.eyebrow")}</span>'],
  ['<h1>🇲🇺 Mauritius Desk</h1>', '<h1>{t("desks.mauritius.title")}</h1>'],
  ["<p>TAG Group's Mauritius Desk, delivered with Fideco Global Business Services, supports company establishment, administration and governance in a leading international financial centre — with substance, AML/CFT and accounting handled by an experienced on-ground team led by Hasina Bahemia (CAMS).</p>", '<p>{t("desks.mauritius.hero_desc")}</p>'],
  ['<h5>On this page</h5>', '<h5>{t("desks.mauritius.nav_page")}</h5>'],
  ['<a href="#why">Why this corridor</a>', '<a href="#why">{t("desks.mauritius.nav_why")}</a>'],
  ['<a href="#services">How we help</a>', '<a href="#services">{t("desks.mauritius.nav_services")}</a>'],
  ['<h5>Desk lead</h5>', '<h5>{t("desks.mauritius.desk_lead")}</h5>'],
  ['<span>International Desk — Mauritius</span>', '<span>{t("desks.mauritius.partner_title")}</span>'],
  [' Enquire</a>', ' {t("desks.mauritius.btn_enquire")}</a>'],
  ['<strong>Mauritius Desk</strong>', '<strong>{t("desks.mauritius.title_short")}</strong>'],
  ['<h2>Why the Mauritius corridor</h2>', '<h2>{t("desks.mauritius.why_title")}</h2>'],
  ['<li>A well-regulated international financial centre</li>', '<li>{t("desks.mauritius.why_l1")}</li>'],
  ['<li>Established route for structuring investment into Africa &amp; Asia</li>', '<li>{t("desks.mauritius.why_l2")}</li>'],
  ['<li>Strong governance, substance and administration ecosystem</li>', '<li>{t("desks.mauritius.why_l3")}</li>'],
  ['<li>Extensive double-taxation treaty network</li>', '<li>{t("desks.mauritius.why_l4")}</li>'],
  ['<h2>How the desk helps</h2>', '<h2>{t("desks.mauritius.services_title")}</h2>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Establishment &amp; administration</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.mauritius.svc1_title")}</h4>'],
  ['<li>Global Business Company (GBC) setup</li>', '<li>{t("desks.mauritius.svc1_l1")}</li>'],
  ['<li>Corporate administration &amp; company secretarial</li>', '<li>{t("desks.mauritius.svc1_l2")}</li>'],
  ['<li>Substance &amp; governance support</li>', '<li>{t("desks.mauritius.svc1_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Compliance</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.mauritius.svc2_title")}</h4>'],
  ['<li>AML/CFT compliance &amp; client onboarding</li>', '<li>{t("desks.mauritius.svc2_l1")}</li>'],
  ['<li>Accounting &amp; tax coordination</li>', '<li>{t("desks.mauritius.svc2_l2")}</li>'],
  ['<li>Regulatory filings &amp; ongoing administration</li>', '<li>{t("desks.mauritius.svc2_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Coordination</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.mauritius.svc3_title")}</h4>'],
  ['<li>Cross-border structuring coordination</li>', '<li>{t("desks.mauritius.svc3_l1")}</li>'],
  ['<li>Business-related relocation assistance</li>', '<li>{t("desks.mauritius.svc3_l2")}</li>'],
  ['<li>Coordination with India delivery</li>', '<li>{t("desks.mauritius.svc3_l3")}</li>'],
  ['<h2>Explore the Mauritius Desk</h2>', '<h2>{t("desks.mauritius.cta_title")}</h2>'],
  ["<p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>", '<p>{t("desks.mauritius.cta_desc")}</p>'],
  ['All desks</a>', '{t("desks.mauritius.cta_btn_all")}</a>']
];
for (let [find, rep] of mauritiusReplacements) {
  mauritiusPage = mauritiusPage.replaceAll(find, rep);
}
mauritiusPage = mauritiusPage.replace('Home</a>', '{t("breadcrumb.home")}</a>');
mauritiusPage = mauritiusPage.replace('International Desk</a>', '{t("intl.breadcrumb")}</a>');
fs.writeFileSync('src/app/(public)/desks/mauritius/page.tsx', mauritiusPage);


// 4. Patch US Desk page
let usPage = fs.readFileSync('src/app/(public)/desks/united-states/page.tsx', 'utf8');
if (!usPage.includes('useI18n')) {
  usPage = usPage.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  usPage = usPage.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}
const usReplacements = [
  ['<span>US Desk</span>', '<span>{t("desks.us.title_short")}</span>'],
  ['<span className="eyebrow">India ↔ United States</span>', '<span className="eyebrow">{t("desks.us.eyebrow")}</span>'],
  ['<h1>🇺🇸 US Desk<span className="badge badge-network" style={{"marginLeft":"8px"}}>Coming soon</span></h1>', '<h1>{t("desks.us.title")}<span className="badge badge-network" style={{"marginLeft":"8px"}}>{t("desks.us.badge_coming_soon")}</span></h1>'],
  ["<p>TAG Group's US Desk is coming soon. In the meantime, our Global Capability Centre already delivers managed finance &amp; accounting for US-based businesses from India, and our tax and transfer-pricing teams support US–India cross-border matters.</p>", '<p>{t("desks.us.hero_desc")}</p>'],
  ['<h5>On this page</h5>', '<h5>{t("desks.us.nav_page")}</h5>'],
  ['<a href="#why">Why this corridor</a>', '<a href="#why">{t("desks.us.nav_why")}</a>'],
  ['<a href="#services">How we help</a>', '<a href="#services">{t("desks.us.nav_services")}</a>'],
  ['<h5>Desk status</h5>', '<h5>{t("desks.us.desk_lead")}</h5>'],
  ['<p className="lead-note">A dedicated contact for this desk is coming soon. Our GCC and tax teams support this corridor today.</p>', '<p className="lead-note">{t("desks.us.lead_note")}</p>'],
  [' Enquire</a>', ' {t("desks.us.btn_enquire")}</a>'],
  ['<strong>US Desk</strong>', '<strong>{t("desks.us.title_short")}</strong>'],
  ['<h2>Why the US corridor</h2>', '<h2>{t("desks.us.why_title")}</h2>'],
  ['<li>The largest India-outbound and inbound corridor</li>', '<li>{t("desks.us.why_l1")}</li>'],
  ['<li>Deep demand for India-based finance &amp; accounting delivery</li>', '<li>{t("desks.us.why_l2")}</li>'],
  ['<li>Complex cross-border tax and transfer-pricing needs</li>', '<li>{t("desks.us.why_l3")}</li>'],
  ['<h2>How the desk helps</h2>', '<h2>{t("desks.us.services_title")}</h2>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Available now</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.us.svc1_title")}</h4>'],
  ['<li>Finance &amp; accounting delivery via our Global Capability Centre</li>', '<li>{t("desks.us.svc1_l1")}</li>'],
  ['<li>US–India transfer-pricing documentation &amp; analysis</li>', '<li>{t("desks.us.svc1_l2")}</li>'],
  ['<li>Cross-border tax coordination</li>', '<li>{t("desks.us.svc1_l3")}</li>'],
  ['<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Coming soon</h4>', '<h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.us.svc2_title")}</h4>'],
  ['<li>A dedicated US Desk with a named local contact</li>', '<li>{t("desks.us.svc2_l1")}</li>'],
  ['<li>Expanded entry &amp; compliance support</li>', '<li>{t("desks.us.svc2_l2")}</li>'],
  ['<li>On-ground coordination</li>', '<li>{t("desks.us.svc2_l3")}</li>'],
  ['<h2>Explore the US Desk</h2>', '<h2>{t("desks.us.cta_title")}</h2>'],
  ["<p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>", '<p>{t("desks.us.cta_desc")}</p>'],
  ['All desks</a>', '{t("desks.us.cta_btn_all")}</a>']
];
for (let [find, rep] of usReplacements) {
  usPage = usPage.replaceAll(find, rep);
}
usPage = usPage.replace('Home</a>', '{t("breadcrumb.home")}</a>');
usPage = usPage.replace('International Desk</a>', '{t("intl.breadcrumb")}</a>');
fs.writeFileSync('src/app/(public)/desks/united-states/page.tsx', usPage);

console.log("All desks translated and updated.");
