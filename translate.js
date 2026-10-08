const fs = require('fs');
const path = require('path');

let aboutTsx = fs.readFileSync('src/app/(public)/about/page.tsx', 'utf8');

// We will just do a simple replacement for about/page.tsx
if (!aboutTsx.includes('useI18n')) {
  aboutTsx = aboutTsx.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  aboutTsx = aboutTsx.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}

const aboutReplacements = [
  ['<span>About</span>', '<span>{t("header.about")}</span>'],
  ['<span className="eyebrow">About the firm</span>', '<span className="eyebrow">{t("about.hero_eyebrow")}</span>'],
  ['<h1>Bridging management vision and its implementation.</h1>', '<h1>{t("about.hero_title")}</h1>'],
  ['<p>TAG Group is a multidisciplinary group with a global presence — empowering businesses with comprehensive advisory, high-end CFO services and robust assurance support.</p>', '<p>{t("about.hero_desc")}</p>'],
  ['<span className="eyebrow">Our story</span>', '<span className="eyebrow">{t("about.story_eyebrow")}</span>'],
  ['<h2>Practical business advice, blended with tax and regulatory insight</h2>', '<h2>{t("about.story_title")}</h2>'],
  ['<p>We counsel clients on their key strategic issues, leveraging deep industry expertise and analytical rigour to help them make informed decisions and solve their toughest, most critical business problems. We provide compliance, advisory and business-consultancy services across the lifecycle of a business.</p>', '<p>{t("about.story_p1")}</p>'],
  ['<p>In today\'s environment, the key challenge for clients is acquiring the most up-to-date knowledge across management functions and technologies, and using it to maximise value. We work to ensure our clients\' needs are served first — providing quality services, adding considerable value, and working collaboratively as partners.</p>', '<p>{t("about.story_p2")}</p>'],
  ['<div className="lbl">Practice groups</div>', '<div className="lbl">{t("about.stat_practice")}</div>'],
  ['<div className="lbl">Service portfolios</div>', '<div className="lbl">{t("about.stat_service")}</div>'],
  ['<div className="lbl">India & UAE offices</div>', '<div className="lbl">{t("about.stat_offices")}</div>'],
  ['<div className="lbl">International jurisdictions</div>', '<div className="lbl">{t("about.stat_intl")}</div>'],
  ['<span className="eyebrow">How we\'re organised</span>', '<span className="eyebrow">{t("about.org_eyebrow")}</span>'],
  ['<h2>Grouped into core practice areas</h2>', '<h2>{t("about.org_title")}</h2>'],
  ['<h3>Taxation</h3><p>Corporate, international and indirect tax, transfer pricing and cross-border structuring.</p>', '<h3>{t("about.org_tax_title")}</h3><p>{t("about.org_tax_desc")}</p>'],
  ['<h3>Advisory</h3><p>Transactions, valuation, corporate/legal/FEMA, India entry, HR and international business.</p>', '<h3>{t("about.org_adv_title")}</h3><p>{t("about.org_adv_desc")}</p>'],
  ['<h3>Assurance support</h3><p>Internal audit, IFC/ICFR, SOX advisory and forensic reviews — non-statutory in scope.</p>', '<h3>{t("about.org_assur_title")}</h3><p>{t("about.org_assur_desc")}</p>'],
  ['<h3>Shared / Virtual CFO</h3><p>Strategic financial leadership, reporting, forecasting and finance-process improvement.</p>', '<h3>{t("about.org_cfo_title")}</h3><p>{t("about.org_cfo_desc")}</p>'],
  ['<h3>Training &amp; development</h3><p>Finance training for non-finance teams; taxation, accounting standards and MIS for professionals.</p>', '<h3>{t("about.org_train_title")}</h3><p>{t("about.org_train_desc")}</p>'],
  ['<h3>International desks</h3><p>Dedicated desks for the UAE, Singapore &amp; Malaysia and Mauritius, with the United States coming soon.</p>', '<h3>{t("about.org_intl_title")}</h3><p>{t("about.org_intl_desc")}</p>'],
  ['<span className="eyebrow">Why TAG</span><h2>Key differentiators</h2>\n    <p className="lead">What clients tell us makes the difference when the problem is complex and the deadline is real.</p>', '<span className="eyebrow">{t("about.why_eyebrow")}</span><h2>{t("about.why_title")}</h2>\n    <p className="lead">{t("about.why_desc")}</p>'],
  ['<h4>Leadership-grade team</h4><p>Leaders drawn from Big Four accounting firms, listed companies, and European & APAC heads of multinationals — motivated professionals driven by integrity and excellence.</p>', '<h4>{t("about.diff_lead_title")}</h4><p>{t("about.diff_lead_desc")}</p>'],
  ['<h4>Synergy across verticals</h4><p>Collaboration across our tax, finance, assurance, legal, people and technology verticals — deep, cross-disciplinary experience solving the whole problem, not a slice of it.</p>', '<h4>{t("about.diff_syn_title")}</h4><p>{t("about.diff_syn_desc")}</p>'],
  ['<h4>On-target delivery</h4><p>Modern project-management discipline, clear milestones and partner-level review — so timelines hold and nothing surfaces late.</p>', '<h4>{t("about.diff_del_title")}</h4><p>{t("about.diff_del_desc")}</p>'],
  ['<h4>Single-window</h4><p>One coordinating interface across tax, finance, assurance and operations — a single accountable team rather than four vendors to chase.</p>', '<h4>{t("about.diff_win_title")}</h4><p>{t("about.diff_win_desc")}</p>'],
  ['<span className="eyebrow">Industry experience</span><h2>Experience across sectors</h2>\n    <p className="lead">We have supported clients from start-ups to Fortune 100 groups across a broad range of industries.</p>', '<span className="eyebrow">{t("about.ind_eyebrow")}</span><h2>{t("about.ind_title")}</h2>\n    <p className="lead">{t("about.ind_desc")}</p>'],
  ['<strong>One team, many disciplines</strong><span>Tax · Transfer pricing · CFO · Assurance · Legal · People · Technology</span>', '<strong>{t("about.team_title")}</strong><span>{t("about.team_desc")}</span>'],
  ['<span className="eyebrow" style={{"justifyContent":"center"}}>Credentials</span>\n      <h2>Our client portfolio</h2>\n      <p className="lead">We have the privilege of working with well-known native and global companies. Our clients engage us in a number of ways across diverse industries.</p>', '<span className="eyebrow" style={{"justifyContent":"center"}}>{t("about.cred_eyebrow")}</span>\n      <h2>{t("about.cred_title")}</h2>\n      <p className="lead">{t("about.cred_desc")}</p>'],
  ['<p className="logo-note">Logos and names are shown with the respective clients\' permission. Trademarks remain the property of their owners.</p>', '<p className="logo-note">{t("about.cred_note")}</p>'],
  ['<span className="eyebrow">Network & associations</span>\n        <h2>International associations</h2>\n        <p>TAG works with a network of specialist firms and international associates to deliver end-to-end support, while keeping each entity independently responsible for its own services.</p>', '<span className="eyebrow">{t("about.net_eyebrow")}</span>\n        <h2>{t("about.net_title")}</h2>\n        <p>{t("about.net_desc")}</p>'],
  ['<h2>Work with a team that treats your problem as its own.</h2>\n    <p>Meet the partners behind the practice, or tell us what you\'re working on.</p>', '<h2>{t("about.cta_title")}</h2>\n    <p>{t("about.cta_desc")}</p>'],
  ['Meet the leadership', '{t("about.cta_btn1")}'],
  ['Contact us', '{t("about.cta_btn2")}']
];

for (const [find, replace] of aboutReplacements) {
  aboutTsx = aboutTsx.replace(find, replace);
}

fs.writeFileSync('src/app/(public)/about/page.tsx', aboutTsx);
console.log("Updated about/page.tsx");

// Services page
let servicesTsx = fs.readFileSync('src/app/(public)/services/page.tsx', 'utf8');

if (!servicesTsx.includes('useI18n')) {
  servicesTsx = servicesTsx.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  servicesTsx = servicesTsx.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}

const servicesReplacements = [
  ['<span>Services</span>', '<span>{t("header.services")}</span>'],
  ['<span className="eyebrow">Services overview</span>\n          <h1>Ten service portfolios, built around real business situations.</h1>\n          <p>TAG Group is presented through four principal capabilities — tax and cross-border advisory; CFO, finance transformation and controllership; risk, controls and management consulting; and India entry and international business — supported by a global capability centre, transaction advisory, valuation, legal and regulatory, HR, technology and workforce solutions.</p>', '<span className="eyebrow">{t("services.hero_eyebrow")}</span>\n          <h1>{t("services.hero_title")}</h1>\n          <p>{t("services.hero_desc")}</p>'],
  ['<span className="kicker">Corporate, international and indirect tax</span>\n              <h3>Tax & Cross-Border Advisory</h3>', '<span className="kicker">{t("header.services_dropdown.tax.desc")}</span>\n              <h3>{t("header.services_dropdown.tax.title")}</h3>'],
  ['<span className="kicker">Documentation delivered from India</span>\n              <h3>Global Transfer Pricing</h3>', '<span className="kicker">{t("header.services_dropdown.tp.desc")}</span>\n              <h3>{t("header.services_dropdown.tp.title")}</h3>'],
  ['<span className="kicker">TP & Finance/Accounting delivery hub</span>\n              <h3>Global Capability Centre</h3>', '<span className="kicker">{t("header.services_dropdown.gcc.desc")}</span>\n              <h3>{t("header.services_dropdown.gcc.title")}</h3>'],
  ['<span className="kicker">Virtual CFO, controllership, reporting</span>\n              <h3>CFO & Finance Transformation</h3>', '<span className="kicker">{t("header.services_dropdown.cfo.desc")}</span>\n              <h3>{t("header.services_dropdown.cfo.title")}</h3>'],
  ['<span className="kicker">Internal audit, ICFR, SOX, forensics</span>\n              <h3>Risk, Internal Audit & Controls</h3>', '<span className="kicker">{t("header.services_dropdown.risk.desc")}</span>\n              <h3>{t("header.services_dropdown.risk.title")}</h3>'],
  ['<span className="kicker">M&A, due diligence, valuation</span>\n              <h3>Deals, Valuation & Transaction Support</h3>', '<span className="kicker">{t("header.services_dropdown.deals.desc")}</span>\n              <h3>{t("header.services_dropdown.deals.title")}</h3>'],
  ['<span className="kicker">Entity, secretarial, FEMA, disputes</span>\n              <h3>Corporate, Legal, FEMA & Regulatory</h3>', '<span className="kicker">{t("header.services_dropdown.corp.desc")}</span>\n              <h3>{t("header.services_dropdown.corp.title")}</h3>'],
  ['<span className="kicker">Setup, finance, HR, IT, premises</span>\n              <h3>India Entry: One-Stop Business Establishment</h3>', '<span className="kicker">{t("header.services_dropdown.india.desc")}</span>\n              <h3>{t("header.services_dropdown.india.title")}</h3>'],
  ['<span className="kicker">Recruitment, L&D, HR operations</span>\n              <h3>Human Capital & HR Advisory</h3>', '<span className="kicker">{t("header.services_dropdown.hr.desc")}</span>\n              <h3>{t("header.services_dropdown.hr.title")}</h3>'],
  ['<span className="kicker">Outbound expansion & cross-border</span>\n              <h3>International Business</h3>', '<span className="kicker">{t("header.services_dropdown.intl.desc")}</span>\n              <h3>{t("header.services_dropdown.intl.title")}</h3>'],
  ['Explore <svg', '{t("services.explore")} <svg'],
  ['<span className="eyebrow" style={{ "justifyContent": "center" }}>How our pages work</span><h2>Depth, not generic claims</h2>\n            <p className="lead">Each service page is structured the same way — so you can quickly see whether we fit your situation, and reach the concerned partner directly.</p>', '<span className="eyebrow" style={{ "justifyContent": "center" }}>{t("services.work_eyebrow")}</span><h2>{t("services.work_title")}</h2>\n            <p className="lead">{t("services.work_desc")}</p>'],
  ['<h4>Proposition &amp; triggers</h4><p>What the service does and the situations that create the need.</p>', '<h4>{t("services.feat1_title")}</h4><p>{t("services.feat1_desc")}</p>'],
  ['<h4>Scope &amp; approach</h4><p>Detailed scope of assistance and our engagement phases.</p>', '<h4>{t("services.feat2_title")}</h4><p>{t("services.feat2_desc")}</p>'],
  ['<h4>The partner to call</h4><p>Every page names the concerned partner, with a direct line to them.</p>', '<h4>{t("services.feat3_title")}</h4><p>{t("services.feat3_desc")}</p>'],
  ['<h2>Not sure which portfolio fits?</h2>\n        <p>Describe your situation and we\'ll point you to the right capability and team.</p>', '<h2>{t("services.cta_title")}</h2>\n        <p>{t("services.cta_desc")}</p>']
];

for (const [find, replace] of servicesReplacements) {
  servicesTsx = servicesTsx.replaceAll(find, replace); // using replaceAll for Explore 
}
fs.writeFileSync('src/app/(public)/services/page.tsx', servicesTsx);
console.log("Updated services/page.tsx");


// Generate Locales JSON logic:
let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enAbout = {
  hero_eyebrow: "About the firm",
  hero_title: "Bridging management vision and its implementation.",
  hero_desc: "TAG Group is a multidisciplinary group with a global presence — empowering businesses with comprehensive advisory, high-end CFO services and robust assurance support.",
  story_eyebrow: "Our story",
  story_title: "Practical business advice, blended with tax and regulatory insight",
  story_p1: "We counsel clients on their key strategic issues, leveraging deep industry expertise and analytical rigour to help them make informed decisions and solve their toughest, most critical business problems. We provide compliance, advisory and business-consultancy services across the lifecycle of a business.",
  story_p2: "In today's environment, the key challenge for clients is acquiring the most up-to-date knowledge across management functions and technologies, and using it to maximise value. We work to ensure our clients' needs are served first — providing quality services, adding considerable value, and working collaboratively as partners.",
  stat_practice: "Practice groups",
  stat_service: "Service portfolios",
  stat_offices: "India & UAE offices",
  stat_intl: "International jurisdictions",
  org_eyebrow: "How we're organised",
  org_title: "Grouped into core practice areas",
  org_tax_title: "Taxation",
  org_tax_desc: "Corporate, international and indirect tax, transfer pricing and cross-border structuring.",
  org_adv_title: "Advisory",
  org_adv_desc: "Transactions, valuation, corporate/legal/FEMA, India entry, HR and international business.",
  org_assur_title: "Assurance support",
  org_assur_desc: "Internal audit, IFC/ICFR, SOX advisory and forensic reviews — non-statutory in scope.",
  org_cfo_title: "Shared / Virtual CFO",
  org_cfo_desc: "Strategic financial leadership, reporting, forecasting and finance-process improvement.",
  org_train_title: "Training & development",
  org_train_desc: "Finance training for non-finance teams; taxation, accounting standards and MIS for professionals.",
  org_intl_title: "International desks",
  org_intl_desc: "Dedicated desks for the UAE, Singapore & Malaysia and Mauritius, with the United States coming soon.",
  why_eyebrow: "Why TAG",
  why_title: "Key differentiators",
  why_desc: "What clients tell us makes the difference when the problem is complex and the deadline is real.",
  diff_lead_title: "Leadership-grade team",
  diff_lead_desc: "Leaders drawn from Big Four accounting firms, listed companies, and European & APAC heads of multinationals — motivated professionals driven by integrity and excellence.",
  diff_syn_title: "Synergy across verticals",
  diff_syn_desc: "Collaboration across our tax, finance, assurance, legal, people and technology verticals — deep, cross-disciplinary experience solving the whole problem, not a slice of it.",
  diff_del_title: "On-target delivery",
  diff_del_desc: "Modern project-management discipline, clear milestones and partner-level review — so timelines hold and nothing surfaces late.",
  diff_win_title: "Single-window",
  diff_win_desc: "One coordinating interface across tax, finance, assurance and operations — a single accountable team rather than four vendors to chase.",
  ind_eyebrow: "Industry experience",
  ind_title: "Experience across sectors",
  ind_desc: "We have supported clients from start-ups to Fortune 100 groups across a broad range of industries.",
  team_title: "One team, many disciplines",
  team_desc: "Tax · Transfer pricing · CFO · Assurance · Legal · People · Technology",
  cred_eyebrow: "Credentials",
  cred_title: "Our client portfolio",
  cred_desc: "We have the privilege of working with well-known native and global companies. Our clients engage us in a number of ways across diverse industries.",
  cred_note: "Logos and names are shown with the respective clients' permission. Trademarks remain the property of their owners.",
  net_eyebrow: "Network & associations",
  net_title: "International associations",
  net_desc: "TAG works with a network of specialist firms and international associates to deliver end-to-end support, while keeping each entity independently responsible for its own services.",
  cta_title: "Work with a team that treats your problem as its own.",
  cta_desc: "Meet the partners behind the practice, or tell us what you're working on.",
  cta_btn1: "Meet the leadership",
  cta_btn2: "Contact us"
};

const koAbout = {
  hero_eyebrow: "회사 소개",
  hero_title: "경영 비전과 그 실행을 연결합니다.",
  hero_desc: "TAG Group은 글로벌 역량을 갖춘 종합 자문 그룹으로, 포괄적인 자문, 최고급 CFO 서비스 및 강력한 보증 지원을 통해 기업의 역량을 강화합니다.",
  story_eyebrow: "우리의 이야기",
  story_title: "실용적인 비즈니스 자문, 세무 및 규제 인사이트와 융합",
  story_p1: "우리는 심층적인 산업 전문 지식과 분석적 엄격함을 활용하여 고객이 정보에 입각한 결정을 내리고 가장 어렵고 중요한 비즈니스 문제를 해결할 수 있도록 핵심 전략 문제에 대해 조언합니다.",
  story_p2: "오늘날의 환경에서 고객의 주요 과제는 경영 기능 및 기술 전반에 걸쳐 가장 최신의 지식을 습득하고 이를 사용하여 가치를 극대화하는 것입니다. 우리는 파트너로서 고품질 서비스를 제공합니다.",
  stat_practice: "전문 그룹",
  stat_service: "서비스 포트폴리오",
  stat_offices: "인도 및 UAE 사무소",
  stat_intl: "해외 관할구역",
  org_eyebrow: "조직 구성",
  org_title: "핵심 분야별 그룹",
  org_tax_title: "세무",
  org_tax_desc: "기업, 국제 및 간접세, 이전가격 및 국경 간 구조화.",
  org_adv_title: "자문",
  org_adv_desc: "거래, 가치 평가, 기업/법무/FEMA, 인도 진출, HR 및 국제 비즈니스.",
  org_assur_title: "보증 지원",
  org_assur_desc: "내부 감사, IFC/ICFR, SOX 자문 및 포렌식 검토.",
  org_cfo_title: "공유 / 가상 CFO",
  org_cfo_desc: "전략적 재무 리더십, 보고, 예측 및 재무 프로세스 개선.",
  org_train_title: "교육 및 개발",
  org_train_desc: "비재무 팀을 위한 재무 교육, 전문가를 위한 세무, 회계 기준 및 MIS.",
  org_intl_title: "인터내셔널 데스크",
  org_intl_desc: "UAE, 싱가포르 & 말레이시아, 모리셔스를 위한 전담 데스크 (미국 데스크 출시 예정).",
  why_eyebrow: "왜 TAG인가",
  why_title: "핵심 차별화 요소",
  why_desc: "문제가 복잡하고 기한이 촉박할 때 고객이 차이를 느끼는 부분입니다.",
  diff_lead_title: "리더십급 팀",
  diff_lead_desc: "Big Four 회계법인, 상장 기업, 다국적 기업의 유럽 및 APAC 책임자 출신 리더들.",
  diff_syn_title: "부서 간 시너지",
  diff_syn_desc: "세무, 재무, 보증, 법무, 인사 및 기술 부서 간의 협업을 통해 문제의 전체를 해결합니다.",
  diff_del_title: "목표 달성 배송",
  diff_del_desc: "현대적인 프로젝트 관리 규율, 명확한 마일스톤 및 파트너 수준의 검토.",
  diff_win_title: "싱글 윈도우",
  diff_win_desc: "세무, 재무, 보증 및 운영 전반을 아우르는 하나의 창구.",
  ind_eyebrow: "산업 경험",
  ind_title: "다양한 분야의 경험",
  ind_desc: "우리는 다양한 산업 분야의 스타트업부터 Fortune 100 그룹에 이르기까지 고객을 지원해 왔습니다.",
  team_title: "하나의 팀, 다양한 전문 분야",
  team_desc: "세금 · 이전가격 · CFO · 보증 · 법률 · 인력 · 기술",
  cred_eyebrow: "자격 요건",
  cred_title: "고객 포트폴리오",
  cred_desc: "우리는 잘 알려진 국내 및 글로벌 기업과 협력하는 특권을 누리고 있습니다.",
  cred_note: "로고와 이름은 각 고객의 허락 하에 표시됩니다. 상표는 해당 소유자의 자산입니다.",
  net_eyebrow: "네트워크 및 협회",
  net_title: "국제 협회",
  net_desc: "TAG는 전문 회사 및 국제 협회 네트워크와 협력하여 엔드투엔드 지원을 제공합니다.",
  cta_title: "당신의 문제를 자신의 문제처럼 다루는 팀과 함께 일하십시오.",
  cta_desc: "해당 파트너를 만나거나 현재 진행 중인 작업에 대해 알려주세요.",
  cta_btn1: "리더십 만나기",
  cta_btn2: "문의하기"
};


const enServices = {
  hero_eyebrow: "Services overview",
  hero_title: "Ten service portfolios, built around real business situations.",
  hero_desc: "TAG Group is presented through four principal capabilities — tax and cross-border advisory; CFO, finance transformation and controllership; risk, controls and management consulting; and India entry and international business — supported by a global capability centre, transaction advisory, valuation, legal and regulatory, HR, technology and workforce solutions.",
  explore: "Explore",
  work_eyebrow: "How our pages work",
  work_title: "Depth, not generic claims",
  work_desc: "Each service page is structured the same way — so you can quickly see whether we fit your situation, and reach the concerned partner directly.",
  feat1_title: "Proposition & triggers",
  feat1_desc: "What the service does and the situations that create the need.",
  feat2_title: "Scope & approach",
  feat2_desc: "Detailed scope of assistance and our engagement phases.",
  feat3_title: "The partner to call",
  feat3_desc: "Every page names the concerned partner, with a direct line to them.",
  cta_title: "Not sure which portfolio fits?",
  cta_desc: "Describe your situation and we'll point you to the right capability and team."
};

const koServices = {
  hero_eyebrow: "서비스 개요",
  hero_title: "실제 비즈니스 상황을 중심으로 구축된 10개의 서비스 포트폴리오.",
  hero_desc: "TAG Group은 글로벌 역량 센터, 거래 자문, 가치 평가, 법률 및 규제, HR, 기술 및 인력 솔루션을 기반으로 세무 및 국경 간 자문, CFO, 재무 혁신 및 컨트롤러십, 위험, 통제 및 경영 컨설팅, 인도 진출 및 국제 비즈니스라는 4가지 주요 역량을 제공합니다.",
  explore: "탐색",
  work_eyebrow: "페이지 작동 방식",
  work_title: "일반적인 주장이 아닌 깊이",
  work_desc: "각 서비스 페이지는 동일한 방식으로 구성되어 있어 당사가 귀하의 상황에 맞는지 신속하게 확인하고 담당 파트너에게 직접 연락할 수 있습니다.",
  feat1_title: "제안 및 트리거",
  feat1_desc: "서비스의 기능과 필요성을 유발하는 상황.",
  feat2_title: "범위 및 접근 방식",
  feat2_desc: "지원 세부 범위 및 당사의 참여 단계.",
  feat3_title: "연락할 파트너",
  feat3_desc: "모든 페이지에는 담당 파트너의 이름과 직통 전화가 나와 있습니다.",
  cta_title: "어떤 포트폴리오가 맞는지 모르시겠습니까?",
  cta_desc: "귀하의 상황을 설명해 주시면 적절한 역량과 팀을 알려드리겠습니다."
};

localesFile = localesFile.replace("contact_page: {", "about: " + JSON.stringify(enAbout, null, 6) + ",\n    services: " + JSON.stringify(enServices, null, 6) + ",\n    contact_page: {");

let indexKo = localesFile.lastIndexOf("contact_page: {");
localesFile = localesFile.substring(0, indexKo) + "about: " + JSON.stringify(koAbout, null, 6) + ",\n    services: " + JSON.stringify(koServices, null, 6) + ",\n    " + localesFile.substring(indexKo);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated locales.ts");
