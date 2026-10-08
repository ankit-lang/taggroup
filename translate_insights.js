const fs = require('fs');

let insightsTsx = fs.readFileSync('src/app/(public)/insights/page.tsx', 'utf8');

if (!insightsTsx.includes('getLocale')) {
  insightsTsx = insightsTsx.replace("import { getPublications } from '@/actions/publication.actions';", "import { getPublications } from '@/actions/publication.actions';\nimport { getLocale } from '@/lib/get-locale';\nimport { locales } from '@/data/locales';");
  
  insightsTsx = insightsTsx.replace("const publications = await getPublications({ search: '', category: 'All' }) || [];", "const publications = await getPublications({ search: '', category: 'All' }) || [];\n  const locale = await getLocale();\n  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], locales[locale]) || path;");
}

const insightsReplacements = [
  ['<span>Insights &amp; Media</span>', '<span>{t("header.insights")}</span>'],
  ['<span className="eyebrow">Insights &amp; Media</span>', '<span className="eyebrow">{t("header.insights")}</span>'],
  ['<h1>Ideas, updates and news from TAG Group.</h1>', '<h1>{t("insights.hero_title")}</h1>'],
  ['<p>Read our latest thinking, subscribe to newsletters built for decision-makers, and follow where TAG Group appears in the media — all in one place.</p>', '<p>{t("insights.hero_desc")}</p>'],
  ['<button data-tab="tab-insights" className="active">Insights</button>', '<button data-tab="tab-insights" className="active">{t("insights.tab_insights")}</button>'],
  ['<button data-tab="tab-media">Media</button>', '<button data-tab="tab-media">{t("insights.tab_media")}</button>'],
  ['<h2 style={{ "fontSize": "1.5rem" }}>Latest articles &amp; editions</h2>', '<h2 style={{ "fontSize": "1.5rem" }}>{t("insights.latest_title")}</h2>'],
  ['<p className="lead" style={{ "marginTop": "6px" }}>Read a summary, open the full piece, or download it as a PDF.</p>', '<p className="lead" style={{ "marginTop": "6px" }}>{t("insights.latest_desc")}</p>'],
  ['Read <svg', '{t("insights.read")} <svg'],
  ['<h2 style={{ "fontSize": "1.5rem" }}>Subscribe to our newsletters</h2>', '<h2 style={{ "fontSize": "1.5rem" }}>{t("insights.sub_title")}</h2>'],
  ['<p className="lead" style={{ "marginTop": "6px" }}>Two fortnightly and two weekly newsletters — pick the cadence that suits you.</p>', '<p className="lead" style={{ "marginTop": "6px" }}>{t("insights.sub_desc")}</p>'],
  ['<span className="ic-tag">Fortnightly</span>', '<span className="ic-tag">{t("insights.freq_fort")}</span>'],
  ['<span className="ic-tag">Weekly</span>', '<span className="ic-tag">{t("insights.freq_week")}</span>'],
  ['Subscribe <svg', '{t("insights.subscribe_btn")} <svg'],
  ['Subscribe to all <svg', '{t("insights.sub_all")} <svg'],
  ['<h2 style={{ "fontSize": "1.5rem" }}>TAG Group in the media</h2>', '<h2 style={{ "fontSize": "1.5rem" }}>{t("insights.media_title")}</h2>'],
  ['<p className="lead" style={{ "marginTop": "6px" }}>Press, speaking, publications and recognition. Media enquiries: <a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p>', '<p className="lead" style={{ "marginTop": "6px" }}>{t("insights.media_desc")} <a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p>'],
  ['<h3>In the press</h3>', '<h3>{t("insights.press_title")}</h3>'],
  ['<h3>Speaking &amp; events</h3>', '<h3>{t("insights.speak_title")}</h3>'],
  ['<h3>Publications &amp; thought leadership</h3>', '<h3>{t("insights.pub_title")}</h3>'],
  ['<h3>Recognition</h3>', '<h3>{t("insights.rec_title")}</h3>'],
  ['<span>This section is being populated with live coverage. To feature TAG Group or request an interview, contact <a href="mailto:info@taggroup.in">info@taggroup.in</a>.</span>', '<span>{t("insights.excl_note")} <a href="mailto:info@taggroup.in">info@taggroup.in</a>.</span>'],
  ['<h2>Get our best thinking in your inbox</h2>', '<h2>{t("insights.cta_title")}</h2>'],
  ['<p>Subscribe to TAG Group Insights, or reach out for media &amp; speaking enquiries.</p>', '<p>{t("insights.cta_desc")}</p>'],
  ['Media enquiries</a>', '{t("insights.cta_media")}</a>']
];

for (const [find, replace] of insightsReplacements) {
  insightsTsx = insightsTsx.replaceAll(find, replace);
}
fs.writeFileSync('src/app/(public)/insights/page.tsx', insightsTsx);
console.log("Updated insights/page.tsx");

// Home page Replacements
let homeTsx = fs.readFileSync('src/app/(public)/page.tsx', 'utf8');

if (!homeTsx.includes('useI18n')) {
  homeTsx = homeTsx.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  homeTsx = homeTsx.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}

const homeReplacements = [
  ['<span className="eyebrow">Who we are</span>', '<span className="eyebrow">{t("home.who_eyebrow")}</span>'],
  ['<h2>A multidisciplinary advisory platform, built around the problems that keep leaders awake.</h2>', '<h2>{t("home.who_title")}</h2>'],
  ['<p className="lead">TAG Group is a multidisciplinary group with a global footprint, bridging the gap between management vision and its implementation.</p>', '<p className="lead">{t("home.who_lead")}</p>'],
  ['<p>We counsel clients on their key strategic issues — leveraging deep industry expertise and analytical rigour to help them make informed decisions on their toughest problems. We blend practical business advice with tax and regulatory insight, and we view our clients as partners.</p>', '<p>{t("home.who_p")}</p>'],
  ['More about TAG <svg', '{t("home.who_btn")} <svg'],
  ['<strong>Where vision meets implementation</strong><span>Gurgaon · New Delhi · Sharjah</span>', '<strong>{t("home.who_img_title")}</strong><span>{t("home.who_img_desc")}</span>'],
  ['<b>4 offices</b><span>Gurgaon (2) · New Delhi · Sharjah</span>', '<b>{t("home.stat1_title")}</b><span>{t("home.stat1_desc")}</span>'],
  ['<b>10 portfolios</b><span>Tax, finance, assurance &amp; operations</span>', '<b>{t("home.stat2_title")}</b><span>{t("home.stat2_desc")}</span>'],
  ['<b>4 desks</b><span>UAE · Singapore &amp; Malaysia · Mauritius · US (soon)</span>', '<b>{t("home.stat3_title")}</b><span>{t("home.stat3_desc")}</span>'],
  ['<b>SME → F100</b><span>Founders to Fortune-100 groups</span>', '<b>{t("home.stat4_title")}</b><span>{t("home.stat4_desc")}</span>'],
  ['<span className="eyebrow">What we do</span>', '<span className="eyebrow">{t("home.what_eyebrow")}</span>'],
  ['<h2>Our core capabilities, one accountable team</h2>', '<h2>{t("home.what_title")}</h2>'],
  ['<p className="lead">Tax and cross-border advisory; CFO, finance transformation and controllership; risk, controls and management consulting; and India entry and international business solutions — supported by transaction advisory, valuation, legal, HR, technology and workforce specialists.</p>', '<p className="lead">{t("home.what_lead")}</p>'],
  ['<span className="kicker">Documentation delivered from India</span>\n          <h3>Global Transfer Pricing</h3>', '<span className="kicker">{t("header.services_dropdown.tp.desc")}</span>\n          <h3>{t("header.services_dropdown.tp.title")}</h3>'],
  ['<span className="kicker">TP & Finance/Accounting delivery hub</span>\n          <h3>Global Capability Centre</h3>', '<span className="kicker">{t("header.services_dropdown.gcc.desc")}</span>\n          <h3>{t("header.services_dropdown.gcc.title")}</h3>'],
  ['<span className="kicker">Corporate, international and indirect tax</span>\n          <h3>Tax & Cross-Border Advisory</h3>', '<span className="kicker">{t("header.services_dropdown.tax.desc")}</span>\n          <h3>{t("header.services_dropdown.tax.title")}</h3>'],
  ['<span className="kicker">Virtual CFO, controllership, reporting</span>\n          <h3>CFO & Finance Transformation</h3>', '<span className="kicker">{t("header.services_dropdown.cfo.desc")}</span>\n          <h3>{t("header.services_dropdown.cfo.title")}</h3>'],
  ['<span className="kicker">Setup, finance, HR, IT, premises</span>\n          <h3>India Entry: One-Stop Business Establishment</h3>', '<span className="kicker">{t("header.services_dropdown.india.desc")}</span>\n          <h3>{t("header.services_dropdown.india.title")}</h3>'],
  ['<span className="kicker">Internal audit, ICFR, SOX, forensics</span>\n          <h3>Risk, Internal Audit & Controls</h3>', '<span className="kicker">{t("header.services_dropdown.risk.desc")}</span>\n          <h3>{t("header.services_dropdown.risk.title")}</h3>'],
  ['View all ten service portfolios <svg', '{t("home.what_btn")} <svg'],
  ['<span className="eyebrow" style={{"justifyContent":"center"}}>Flagship capabilities</span>\n      <h2>Three ways we deliver global value from India</h2>\n      <p className="lead">Specialist engines that let multinational groups and overseas firms scale — without adding internal overhead.</p>', '<span className="eyebrow" style={{"justifyContent":"center"}}>{t("home.flag_eyebrow")}</span>\n      <h2>{t("home.flag_title")}</h2>\n      <p className="lead">{t("home.flag_desc")}</p>'],
  ['<span className="kicker">Global Transfer Pricing</span>\n        <h3>Documentation, delivered from India</h3>\n        <p>Local File, Master File and multi-country documentation with FAR, benchmarking and economic analysis — direct, co-sourced or white-label for overseas firms.</p>', '<span className="kicker">{t("home.flag1_kicker")}</span>\n        <h3>{t("home.flag1_title")}</h3>\n        <p>{t("home.flag1_desc")}</p>'],
  ['<span className="kicker">Finance &amp; Accounting</span>\n        <h3>Your back office, run from India</h3>\n        <p>Managed bookkeeping, close, reconciliations, payroll coordination and MIS — we maintain the books for clients across the globe, with defined SLAs and secure handling. Currently serving the US and UAE.</p>', '<span className="kicker">{t("home.flag2_kicker")}</span>\n        <h3>{t("home.flag2_title")}</h3>\n        <p>{t("home.flag2_desc")}</p>'],
  ['<span className="kicker">India Entry Modelling</span>\n        <h3>One-stop establishment in India</h3>\n        <p>Entry &amp; entity modelling, incorporation, tax and FEMA, finance, HR, IT and premises — one accountable team from feasibility to a running operation.</p>', '<span className="kicker">{t("home.flag3_kicker")}</span>\n        <h3>{t("home.flag3_title")}</h3>\n        <p>{t("home.flag3_desc")}</p>'],
  ['<span className="eyebrow" style={{"justifyContent":"center"}}>Credentials</span>\n      <h2>Trusted by well-known native &amp; global companies</h2>\n      <p className="lead">Our clients engage us in a number of ways, across diverse industries — from high-growth founders to Fortune 100 groups.</p>', '<span className="eyebrow" style={{"justifyContent":"center"}}>{t("about.cred_eyebrow")}</span>\n      <h2>{t("home.cred_title")}</h2>\n      <p className="lead">{t("home.cred_desc")}</p>'],
  ['See our client portfolio <svg', '{t("home.cred_btn")} <svg'],
  ['<span className="eyebrow">Insights &amp; media</span><h2>Fresh thinking &amp; the latest updates</h2>', '<span className="eyebrow">{t("header.insights")}</span><h2>{t("home.insights_title")}</h2>'],
  ['View all Insights &amp; Media <svg', '{t("home.insights_btn")} <svg'],
  ['<span className="eyebrow">Global reach</span>\n        <h2>India-rooted, internationally connected</h2>\n        <p>From offices in Gurgaon and New Delhi, and through dedicated desks for the UAE, Singapore &amp; Malaysia and Mauritius — with the United States coming soon — TAG Group supports inbound investment into India and the outbound expansion of Indian businesses.</p>', '<span className="eyebrow">{t("home.global_eyebrow")}</span>\n        <h2>{t("home.global_title")}</h2>\n        <p>{t("home.global_desc")}</p>'],
  ['Explore our desks <svg', '{t("home.global_btn")} <svg'],
  ['<span className="eyebrow" style={{"justifyContent":"center"}}>Message from the heads</span>\n      <h2>Thoughts from our leadership</h2>', '<span className="eyebrow" style={{"justifyContent":"center"}}>{t("home.ldr_eyebrow")}</span>\n      <h2>{t("home.ldr_title")}</h2>'],
  ['<p>Our work stands on integrity, collaboration and excellence. We exist to give clients trusted counsel that inspires confidence, creates long-term value, and builds relationships that endure — not transactions, but partnerships.</p>', '<p>{t("home.ldr1_q")}</p>'],
  ['<p>We simplify complexity and deliver tailored solutions. More than advisers, we are growth partners to our clients — committed to a culture of trust, precision and accountability that holds across every border we work in.</p>', '<p>{t("home.ldr2_q")}</p>'],
  ['<p>Great firms are built by great people. We invest in our teams and our clients alike — pairing deep, cross-disciplinary expertise with a client-first, technology-enabled approach that turns ambition into measurable outcomes.</p>', '<p>{t("home.ldr3_q")}</p>'],
  ['<span className="eyebrow" style={{"color":"#fff"}}>Let\'s talk</span>\n    <h2>Bring us your toughest problem.</h2>\n    <p>Whether it\'s a cross-border structure, a stalled finance function, a transaction or an India setup, we\'ll map the right scope, team and approach.</p>', '<span className="eyebrow" style={{"color":"#fff"}}>{t("home.cta_eyebrow")}</span>\n    <h2>{t("home.cta_title")}</h2>\n    <p>{t("home.cta_desc")}</p>'],
  ['Request a consultation <svg', '{t("home.cta_btn1")} <svg'],
  ['Browse services</a>', '{t("home.cta_btn2")}</a>']
];

for (const [find, replace] of homeReplacements) {
  homeTsx = homeTsx.replaceAll(find, replace);
}

fs.writeFileSync('src/app/(public)/page.tsx', homeTsx);
console.log("Updated page.tsx");


const enInsights = {
  hero_title: "Ideas, updates and news from TAG Group.",
  hero_desc: "Read our latest thinking, subscribe to newsletters built for decision-makers, and follow where TAG Group appears in the media — all in one place.",
  tab_insights: "Insights",
  tab_media: "Media",
  latest_title: "Latest articles & editions",
  latest_desc: "Read a summary, open the full piece, or download it as a PDF.",
  read: "Read",
  sub_title: "Subscribe to our newsletters",
  sub_desc: "Two fortnightly and two weekly newsletters — pick the cadence that suits you.",
  freq_fort: "Fortnightly",
  freq_week: "Weekly",
  subscribe_btn: "Subscribe",
  sub_all: "Subscribe to all",
  media_title: "TAG Group in the media",
  media_desc: "Press, speaking, publications and recognition. Media enquiries:",
  press_title: "In the press",
  speak_title: "Speaking & events",
  pub_title: "Publications & thought leadership",
  rec_title: "Recognition",
  excl_note: "This section is being populated with live coverage. To feature TAG Group or request an interview, contact",
  cta_title: "Get our best thinking in your inbox",
  cta_desc: "Subscribe to TAG Group Insights, or reach out for media & speaking enquiries.",
  cta_media: "Media enquiries"
};

const koInsights = {
  hero_title: "TAG Group의 아이디어, 업데이트 및 뉴스.",
  hero_desc: "최신 생각을 읽고, 의사 결정자를 위한 뉴스레터를 구독하며, 미디어에 TAG Group이 어떻게 등장하는지 모두 한 곳에서 확인하세요.",
  tab_insights: "인사이트",
  tab_media: "미디어",
  latest_title: "최신 기사 및 발행물",
  latest_desc: "요약을 읽거나 전체 기사를 열거나 PDF로 다운로드하세요.",
  read: "읽기",
  sub_title: "뉴스레터 구독하기",
  sub_desc: "격주 2회 및 매주 2회 발행되는 뉴스레터 - 자신에게 맞는 주기를 선택하세요.",
  freq_fort: "격주",
  freq_week: "매주",
  subscribe_btn: "구독하기",
  sub_all: "모두 구독하기",
  media_title: "미디어 속의 TAG Group",
  media_desc: "언론, 강연, 출판 및 인정. 미디어 문의:",
  press_title: "언론 보도",
  speak_title: "강연 및 이벤트",
  pub_title: "출판 및 사고 리더십",
  rec_title: "인정",
  excl_note: "이 섹션은 실시간 보도로 채워지고 있습니다. TAG Group을 소개하거나 인터뷰를 요청하려면 다음으로 연락하세요.",
  cta_title: "최고의 통찰력을 받은 편지함으로 받으세요",
  cta_desc: "TAG Group 인사이트를 구독하거나 미디어 및 강연 문의를 위해 연락하세요.",
  cta_media: "미디어 문의"
};

const enHome = {
  who_eyebrow: "Who we are",
  who_title: "A multidisciplinary advisory platform, built around the problems that keep leaders awake.",
  who_lead: "TAG Group is a multidisciplinary group with a global footprint, bridging the gap between management vision and its implementation.",
  who_p: "We counsel clients on their key strategic issues — leveraging deep industry expertise and analytical rigour to help them make informed decisions on their toughest problems. We blend practical business advice with tax and regulatory insight, and we view our clients as partners.",
  who_btn: "More about TAG",
  who_img_title: "Where vision meets implementation",
  who_img_desc: "Gurgaon · New Delhi · Sharjah",
  stat1_title: "4 offices",
  stat1_desc: "Gurgaon (2) · New Delhi · Sharjah",
  stat2_title: "10 portfolios",
  stat2_desc: "Tax, finance, assurance & operations",
  stat3_title: "4 desks",
  stat3_desc: "UAE · Singapore & Malaysia · Mauritius · US (soon)",
  stat4_title: "SME → F100",
  stat4_desc: "Founders to Fortune-100 groups",
  what_eyebrow: "What we do",
  what_title: "Our core capabilities, one accountable team",
  what_lead: "Tax and cross-border advisory; CFO, finance transformation and controllership; risk, controls and management consulting; and India entry and international business solutions — supported by transaction advisory, valuation, legal, HR, technology and workforce specialists.",
  what_btn: "View all ten service portfolios",
  flag_eyebrow: "Flagship capabilities",
  flag_title: "Three ways we deliver global value from India",
  flag_desc: "Specialist engines that let multinational groups and overseas firms scale — without adding internal overhead.",
  flag1_kicker: "Global Transfer Pricing",
  flag1_title: "Documentation, delivered from India",
  flag1_desc: "Local File, Master File and multi-country documentation with FAR, benchmarking and economic analysis — direct, co-sourced or white-label for overseas firms.",
  flag2_kicker: "Finance & Accounting",
  flag2_title: "Your back office, run from India",
  flag2_desc: "Managed bookkeeping, close, reconciliations, payroll coordination and MIS — we maintain the books for clients across the globe, with defined SLAs and secure handling. Currently serving the US and UAE.",
  flag3_kicker: "India Entry Modelling",
  flag3_title: "One-stop establishment in India",
  flag3_desc: "Entry & entity modelling, incorporation, tax and FEMA, finance, HR, IT and premises — one accountable team from feasibility to a running operation.",
  cred_title: "Trusted by well-known native & global companies",
  cred_desc: "Our clients engage us in a number of ways, across diverse industries — from high-growth founders to Fortune 100 groups.",
  cred_btn: "See our client portfolio",
  insights_title: "Fresh thinking & the latest updates",
  insights_btn: "View all Insights & Media",
  global_eyebrow: "Global reach",
  global_title: "India-rooted, internationally connected",
  global_desc: "From offices in Gurgaon and New Delhi, and through dedicated desks for the UAE, Singapore & Malaysia and Mauritius — with the United States coming soon — TAG Group supports inbound investment into India and the outbound expansion of Indian businesses.",
  global_btn: "Explore our desks",
  ldr_eyebrow: "Message from the heads",
  ldr_title: "Thoughts from our leadership",
  ldr1_q: "Our work stands on integrity, collaboration and excellence. We exist to give clients trusted counsel that inspires confidence, creates long-term value, and builds relationships that endure — not transactions, but partnerships.",
  ldr2_q: "We simplify complexity and deliver tailored solutions. More than advisers, we are growth partners to our clients — committed to a culture of trust, precision and accountability that holds across every border we work in.",
  ldr3_q: "Great firms are built by great people. We invest in our teams and our clients alike — pairing deep, cross-disciplinary expertise with a client-first, technology-enabled approach that turns ambition into measurable outcomes.",
  cta_eyebrow: "Let's talk",
  cta_title: "Bring us your toughest problem.",
  cta_desc: "Whether it's a cross-border structure, a stalled finance function, a transaction or an India setup, we'll map the right scope, team and approach.",
  cta_btn1: "Request a consultation",
  cta_btn2: "Browse services"
};

const koHome = {
  who_eyebrow: "회사 소개",
  who_title: "리더들의 고민을 해결하기 위해 구축된 종합 자문 플랫폼.",
  who_lead: "TAG Group은 글로벌 입지를 갖춘 종합 그룹으로, 경영 비전과 실행 사이의 격차를 해소합니다.",
  who_p: "우리는 깊은 산업 전문 지식과 분석적 엄격함을 활용하여 고객이 가장 어려운 문제에 대해 현명한 결정을 내릴 수 있도록 핵심 전략 문제에 대해 조언합니다. 실용적인 비즈니스 조언을 세무 및 규제 통찰력과 결합하며, 고객을 파트너로 여깁니다.",
  who_btn: "TAG 자세히 알아보기",
  who_img_title: "비전이 구현되는 곳",
  who_img_desc: "구르가온 · 뉴델리 · 샤르자",
  stat1_title: "4개의 사무소",
  stat1_desc: "구르가온(2) · 뉴델리 · 샤르자",
  stat2_title: "10개의 포트폴리오",
  stat2_desc: "세무, 재무, 보증 및 운영",
  stat3_title: "4개의 데스크",
  stat3_desc: "UAE · 싱가포르 및 말레이시아 · 모리셔스 · 미국 (예정)",
  stat4_title: "SME → F100",
  stat4_desc: "창업자부터 Fortune 100대 기업까지",
  what_eyebrow: "제공 서비스",
  what_title: "우리의 핵심 역량, 책임감 있는 하나의 팀",
  what_lead: "세무 및 국경 간 자문, CFO, 재무 혁신 및 컨트롤러십, 위험, 통제 및 경영 컨설팅, 인도 진출 및 국제 비즈니스 솔루션을 제공하며 거래 자문, 가치 평가, 법률, HR, 기술 및 인력 전문가가 지원합니다.",
  what_btn: "10가지 서비스 포트폴리오 모두 보기",
  flag_eyebrow: "주력 역량",
  flag_title: "인도에서 글로벌 가치를 전달하는 세 가지 방법",
  flag_desc: "다국적 그룹 및 해외 기업이 내부 오버헤드 추가 없이 규모를 확장할 수 있도록 하는 전문 엔진.",
  flag1_kicker: "글로벌 이전가격",
  flag1_title: "인도에서 제공되는 문서화",
  flag1_desc: "해외 기업을 위한 직접, 공동 소싱 또는 화이트 레이블로 제공되는 FAR, 벤치마킹 및 경제 분석이 포함된 로컬 파일, 마스터 파일 및 다국적 문서화.",
  flag2_kicker: "재무 및 회계",
  flag2_title: "인도에서 운영되는 귀하의 백오피스",
  flag2_desc: "지정된 SLA와 안전한 처리를 통해 전 세계 고객의 장부를 유지 관리합니다. 현재 미국과 UAE에 서비스 제공 중.",
  flag3_kicker: "인도 진출 모델링",
  flag3_title: "인도에서의 원스톱 비즈니스 설립",
  flag3_desc: "진출 및 법인 모델링, 법인 설립, 세무 및 FEMA, 재무, HR, IT 및 사무실 등 타당성 조사부터 운영까지 한 팀에서 책임집니다.",
  cred_title: "유명 국내 및 글로벌 기업의 신뢰",
  cred_desc: "스타트업부터 Fortune 100 그룹에 이르기까지 다양한 산업 분야의 고객들이 다양한 방식으로 당사와 협력하고 있습니다.",
  cred_btn: "고객 포트폴리오 보기",
  insights_title: "신선한 생각과 최신 업데이트",
  insights_btn: "모든 인사이트 및 미디어 보기",
  global_eyebrow: "글로벌 도달",
  global_title: "인도에 뿌리를 둔 국제적으로 연결된 네트워크",
  global_desc: "구르가온 및 뉴델리 사무소와 UAE, 싱가포르 & 말레이시아, 모리셔스 전담 데스크(미국 곧 개설)를 통해 인도에 대한 인바운드 투자와 인도 비즈니스의 아웃바운드 확장을 지원합니다.",
  global_btn: "데스크 탐색",
  ldr_eyebrow: "리더십 메시지",
  ldr_title: "리더들의 생각",
  ldr1_q: "우리의 업무는 성실성, 협업 및 탁월함을 바탕으로 합니다. 거래가 아닌 파트너십을 구축합니다.",
  ldr2_q: "복잡성을 단순화하고 맞춤형 솔루션을 제공합니다. 단순한 조언자를 넘어 성장 파트너가 됩니다.",
  ldr3_q: "훌륭한 회사는 훌륭한 사람들에 의해 세워집니다. 팀과 고객 모두에게 투자합니다.",
  cta_eyebrow: "이야기합시다",
  cta_title: "가장 어려운 문제를 가져오세요.",
  cta_desc: "국경 간 구조화, 지연된 재무 기능, 거래 또는 인도 설정 등 어떤 문제든 적절한 범위, 팀 및 접근 방식을 구성해 드립니다.",
  cta_btn1: "상담 요청",
  cta_btn2: "서비스 둘러보기"
};

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

localesFile = localesFile.replace("contact_page: {", "insights: " + JSON.stringify(enInsights, null, 6) + ",\n    home: " + JSON.stringify(enHome, null, 6) + ",\n    contact_page: {");

let indexKo = localesFile.lastIndexOf("contact_page: {");
localesFile = localesFile.substring(0, indexKo) + "insights: " + JSON.stringify(koInsights, null, 6) + ",\n    home: " + JSON.stringify(koHome, null, 6) + ",\n    " + localesFile.substring(indexKo);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated locales.ts");
