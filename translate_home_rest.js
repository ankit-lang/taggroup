const fs = require('fs');

let homeTsx = fs.readFileSync('src/app/(public)/page.tsx', 'utf8');

const replacements = [
  // Slides
  ['<span className="hero-tag">Flagship capability</span>', '<span className="hero-tag">{t("home.slide1_tag")}</span>'],
  ['<h1>Global Transfer Pricing. <em>Delivered from India.</em></h1>', '<h1>{t("home.slide1_title_1")} <em>{t("home.slide1_title_2")}</em></h1>'],
  ['<p className="hero-sub">Multi-country documentation and economic analysis for multinational groups and the overseas advisers who partner with us.</p>', '<p className="hero-sub">{t("home.slide1_sub")}</p>'],
  ['Explore <svg', '{t("home.slide_btn1")} <svg'],
  ['Talk to our team', '{t("home.slide_btn2")}'],

  ['<span className="hero-tag">One-stop establishment</span>', '<span className="hero-tag">{t("home.slide2_tag")}</span>'],
  ['<h1>Your one-stop partner for <em>establishing business in India.</em></h1>', '<h1>{t("home.slide2_title_1")} <em>{t("home.slide2_title_2")}</em></h1>'],
  ['<p className="hero-sub">Entry modelling, incorporation, tax, finance, recruitment, IT infrastructure, premises and operational support — coordinated by one team.</p>', '<p className="hero-sub">{t("home.slide2_sub")}</p>'],

  ['<span className="hero-tag">Life at TAG</span>', '<span className="hero-tag">{t("home.slide3_tag")}</span>'],
  ['<h1>The people behind <em>the advice.</em></h1>', '<h1>{t("home.slide3_title_1")} <em>{t("home.slide3_title_2")}</em></h1>'],
  ['<p className="hero-sub">A multidisciplinary team with Big Four and multinational leadership roots — built on integrity, collaboration and room to grow.</p>', '<p className="hero-sub">{t("home.slide3_sub")}</p>'],

  ['<span className="hero-tag">Cross-border</span>', '<span className="hero-tag">{t("home.slide4_tag")}</span>'],
  ['<h1>International taxation &amp; <em>cross-border advisory.</em></h1>', '<h1>{t("home.slide4_title_1")} <em>{t("home.slide4_title_2")}</em></h1>'],
  ['<p className="hero-sub">Investment structures, treaty positions, withholding, repatriation, and HNI and promoter tax matters.</p>', '<p className="hero-sub">{t("home.slide4_sub")}</p>'],

  ['<span className="hero-tag">Assurance support</span>', '<span className="hero-tag">{t("home.slide5_tag")}</span>'],
  ['<h1>Internal Audit, Controls <em>&amp; Assurance Support.</em></h1>', '<h1>{t("home.slide5_title_1")} <em>{t("home.slide5_title_2")}</em></h1>'],
  ['<p className="hero-sub">Risk-based internal audit, ICFR, SOX advisory, reporting reviews and audit preparedness — an explicitly non-statutory scope.</p>', '<p className="hero-sub">{t("home.slide5_sub")}</p>'],

  ['<span className="hero-tag">Finance leadership</span>', '<span className="hero-tag">{t("home.slide6_tag")}</span>'],
  ['<h1>CFO Advisory &amp; <em>Finance Transformation.</em></h1>', '<h1>{t("home.slide6_title_1")} <em>{t("home.slide6_title_2")}</em></h1>'],
  ['<p className="hero-sub">Financial oversight, reporting, forecasting, working-capital discipline and finance-process improvement.</p>', '<p className="hero-sub">{t("home.slide6_sub")}</p>'],

  ['<span className="hero-tag">Insights &amp; media</span>', '<span className="hero-tag">{t("home.slide7_tag")}</span>'],
  ['<h1>Ideas, updates &amp; <em>the latest coverage.</em></h1>', '<h1>{t("home.slide7_title_1")} <em>{t("home.slide7_title_2")}</em></h1>'],
  ['<p className="hero-sub">Read our latest thinking, subscribe to our newsletters, and see where TAG Group appears in the media.</p>', '<p className="hero-sub">{t("home.slide7_sub")}</p>'],

  ['<span className="hero-tag">International presence</span>', '<span className="hero-tag">{t("home.slide8_tag")}</span>'],
  ['<h1>Singapore · UAE · Mauritius <em>and the US, coming soon.</em></h1>', '<h1>{t("home.slide8_title_1")} <em>{t("home.slide8_title_2")}</em></h1>'],
  ['<p className="hero-sub">Dedicated country desks coordinated from India — with local partners in the UAE, Singapore, Malaysia and Mauritius.</p>', '<p className="hero-sub">{t("home.slide8_sub")}</p>'],

  // Insights cards
  ['<span className="ic-tag">Insight · Transfer Pricing</span>', '<span className="ic-tag">{t("home.ic1_tag")}</span>'],
  ['<h3>Building a defensible multi-country transfer-pricing file</h3>', '<h3>{t("home.ic1_title")}</h3>'],
  ['<p>How to align FAR, benchmarking and documentation across jurisdictions so your file stands up to more than one tax administration.</p>', '<p>{t("home.ic1_desc")}</p>'],
  ['Read <svg', '{t("home.ic_btn1")} <svg'],

  ['<span className="ic-tag">Insight · International Tax</span>', '<span className="ic-tag">{t("home.ic2_tag")}</span>'],
  ['<h3>UAE Corporate Tax: what Indian groups must plan for</h3>', '<h3>{t("home.ic2_title")}</h3>'],
  ['<p>The essentials of the UAE\'s Corporate Tax and VAT regime, and how India–UAE groups should structure ahead of it.</p>', '<p>{t("home.ic2_desc")}</p>'],

  ['<span className="ic-tag">Media · The Weekly Brief</span>', '<span className="ic-tag">{t("home.ic3_tag")}</span>'],
  ['<h3>This week across tax, geopolitics &amp; regulatory</h3>', '<h3>{t("home.ic3_title")}</h3>'],
  ['<p>Our weekly round-up of the developments that matter — subscribe to get it in your inbox, or browse recent editions.</p>', '<p>{t("home.ic3_desc")}</p>'],

  // Desks
  ['<span className="dt-flag">🇦🇪</span><span className="dt-txt"><b>UAE</b><em>Sharjah · Dubai</em></span><span className="dt-tag">Desk</span>', '<span className="dt-flag">🇦🇪</span><span className="dt-txt"><b>{t("header.global_dropdown.uae.title")}</b><em>{t("home.desk1_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span>'],
  ['<span className="dt-flag">🇸🇬</span><span className="dt-txt"><b>Singapore &amp; Malaysia</b><em>Singapore · Kuala Lumpur</em></span><span className="dt-tag">Desk</span>', '<span className="dt-flag">🇸🇬</span><span className="dt-txt"><b>{t("header.global_dropdown.sg.title")}</b><em>{t("home.desk2_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span>'],
  ['<span className="dt-flag">🇲🇺</span><span className="dt-txt"><b>Mauritius</b><em>Port Louis · Ebène</em></span><span className="dt-tag">Desk</span>', '<span className="dt-flag">🇲🇺</span><span className="dt-txt"><b>{t("header.global_dropdown.mu.title")}</b><em>{t("home.desk3_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span>'],
  ['<span className="dt-flag">🇺🇸</span><span className="dt-txt"><b>United States</b><em>Opening soon</em></span><span className="dt-tag">Soon</span>', '<span className="dt-flag">🇺🇸</span><span className="dt-txt"><b>{t("header.global_dropdown.us.title")}</b><em>{t("home.desk4_loc")}</em></span><span className="dt-tag">{t("home.desk_soon")}</span>'],

  // Leaders
  ['<div className="qmeta"><b>Gaurav Sharma</b><span>Managing Partner</span></div>', '<div className="qmeta"><b>{t("home.ldr1_name")}</b><span>{t("home.ldr1_title")}</span></div>'],
  ['<div className="qmeta"><b>Vishal Tayal</b><span>Partner — UAE Desk</span></div>', '<div className="qmeta"><b>{t("home.ldr2_name")}</b><span>{t("home.ldr2_title")}</span></div>'],
  ['<div className="qmeta"><b>Ishita Sharma</b><span>Partner — Human Capital &amp; HR</span></div>', '<div className="qmeta"><b>{t("home.ldr3_name")}</b><span>{t("home.ldr3_title")}</span></div>']
];

for (const [find, replace] of replacements) {
  homeTsx = homeTsx.replaceAll(find, replace);
}

fs.writeFileSync('src/app/(public)/page.tsx', homeTsx);

// Add to Locales
let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enKeys = `
    slide1_tag: "Flagship capability",
    slide1_title_1: "Global Transfer Pricing.",
    slide1_title_2: "Delivered from India.",
    slide1_sub: "Multi-country documentation and economic analysis for multinational groups and the overseas advisers who partner with us.",
    slide_btn1: "Explore",
    slide_btn2: "Talk to our team",
    slide2_tag: "One-stop establishment",
    slide2_title_1: "Your one-stop partner for",
    slide2_title_2: "establishing business in India.",
    slide2_sub: "Entry modelling, incorporation, tax, finance, recruitment, IT infrastructure, premises and operational support — coordinated by one team.",
    slide3_tag: "Life at TAG",
    slide3_title_1: "The people behind",
    slide3_title_2: "the advice.",
    slide3_sub: "A multidisciplinary team with Big Four and multinational leadership roots — built on integrity, collaboration and room to grow.",
    slide4_tag: "Cross-border",
    slide4_title_1: "International taxation &",
    slide4_title_2: "cross-border advisory.",
    slide4_sub: "Investment structures, treaty positions, withholding, repatriation, and HNI and promoter tax matters.",
    slide5_tag: "Assurance support",
    slide5_title_1: "Internal Audit, Controls",
    slide5_title_2: "& Assurance Support.",
    slide5_sub: "Risk-based internal audit, ICFR, SOX advisory, reporting reviews and audit preparedness — an explicitly non-statutory scope.",
    slide6_tag: "Finance leadership",
    slide6_title_1: "CFO Advisory &",
    slide6_title_2: "Finance Transformation.",
    slide6_sub: "Financial oversight, reporting, forecasting, working-capital discipline and finance-process improvement.",
    slide7_tag: "Insights & media",
    slide7_title_1: "Ideas, updates &",
    slide7_title_2: "the latest coverage.",
    slide7_sub: "Read our latest thinking, subscribe to our newsletters, and see where TAG Group appears in the media.",
    slide8_tag: "International presence",
    slide8_title_1: "Singapore · UAE · Mauritius",
    slide8_title_2: "and the US, coming soon.",
    slide8_sub: "Dedicated country desks coordinated from India — with local partners in the UAE, Singapore, Malaysia and Mauritius.",
    ic1_tag: "Insight · Transfer Pricing",
    ic1_title: "Building a defensible multi-country transfer-pricing file",
    ic1_desc: "How to align FAR, benchmarking and documentation across jurisdictions so your file stands up to more than one tax administration.",
    ic_btn1: "Read",
    ic2_tag: "Insight · International Tax",
    ic2_title: "UAE Corporate Tax: what Indian groups must plan for",
    ic2_desc: "The essentials of the UAE's Corporate Tax and VAT regime, and how India–UAE groups should structure ahead of it.",
    ic3_tag: "Media · The Weekly Brief",
    ic3_title: "This week across tax, geopolitics & regulatory",
    ic3_desc: "Our weekly round-up of the developments that matter — subscribe to get it in your inbox, or browse recent editions.",
    desk1_loc: "Sharjah · Dubai",
    desk2_loc: "Singapore · Kuala Lumpur",
    desk3_loc: "Port Louis · Ebène",
    desk4_loc: "Opening soon",
    desk_tag: "Desk",
    desk_soon: "Soon",
    ldr1_name: "Gaurav Sharma",
    ldr1_title: "Managing Partner",
    ldr2_name: "Vishal Tayal",
    ldr2_title: "Partner — UAE Desk",
    ldr3_name: "Ishita Sharma",
    ldr3_title: "Partner — Human Capital & HR",
`;

const koKeys = `
    slide1_tag: "주력 역량",
    slide1_title_1: "글로벌 이전가격.",
    slide1_title_2: "인도에서 제공됩니다.",
    slide1_sub: "다국적 그룹 및 당사와 파트너십을 맺은 해외 자문가를 위한 다국가 문서화 및 경제 분석.",
    slide_btn1: "탐색",
    slide_btn2: "팀과 대화하기",
    slide2_tag: "원스톱 설립",
    slide2_title_1: "인도 내 비즈니스 설립을 위한",
    slide2_title_2: "원스톱 파트너.",
    slide2_sub: "진출 모델링, 법인 설립, 세무, 재무, 채용, IT 인프라, 사무실 및 운영 지원을 하나의 팀이 조정합니다.",
    slide3_tag: "TAG 라이프",
    slide3_title_1: "조언 뒤에 있는",
    slide3_title_2: "사람들.",
    slide3_sub: "Big Four 및 다국적 기업 리더십에 뿌리를 둔 다분야 팀 — 진실성, 협업 및 성장을 바탕으로 구축되었습니다.",
    slide4_tag: "국경 간",
    slide4_title_1: "국제 조세 및",
    slide4_title_2: "국경 간 자문.",
    slide4_sub: "투자 구조, 조약 위치, 원천 징수, 자금 송환, HNI 및 프로모터 세금 문제.",
    slide5_tag: "보증 지원",
    slide5_title_1: "내부 감사, 통제",
    slide5_title_2: "및 보증 지원.",
    slide5_sub: "위험 기반 내부 감사, ICFR, SOX 자문, 보고서 검토 및 감사 준비 — 명시적인 비법정 범위.",
    slide6_tag: "재무 리더십",
    slide6_title_1: "CFO 자문 및",
    slide6_title_2: "재무 혁신.",
    slide6_sub: "재무 감독, 보고, 예측, 운전 자본 규율 및 재무 프로세스 개선.",
    slide7_tag: "인사이트 및 미디어",
    slide7_title_1: "아이디어, 업데이트 및",
    slide7_title_2: "최신 보도.",
    slide7_sub: "최신 생각을 읽고 뉴스레터를 구독하며 TAG Group이 미디어에 등장하는 위치를 확인하세요.",
    slide8_tag: "국제적 존재감",
    slide8_title_1: "싱가포르 · UAE · 모리셔스",
    slide8_title_2: "및 미국 곧 개설.",
    slide8_sub: "인도에서 조정되는 전담 국가 데스크 — UAE, 싱가포르, 말레이시아 및 모리셔스의 현지 파트너와 함께합니다.",
    ic1_tag: "인사이트 · 이전가격",
    ic1_title: "방어 가능한 다국가 이전가격 파일 구축",
    ic1_desc: "관할 구역 간에 FAR, 벤치마킹 및 문서화를 조정하여 하나 이상의 세무 기관에 대응할 수 있도록 하는 방법.",
    ic_btn1: "읽기",
    ic2_tag: "인사이트 · 국제 조세",
    ic2_title: "UAE 법인세: 인도 그룹이 계획해야 할 사항",
    ic2_desc: "UAE의 법인세 및 VAT 제도의 핵심과 인도-UAE 그룹이 그에 앞서 구조화해야 하는 방법.",
    ic3_tag: "미디어 · 위클리 브리프",
    ic3_title: "이번 주 세금, 지정학 및 규제 전반",
    ic3_desc: "중요한 개발에 대한 주간 요약 — 받은 편지함으로 받으려면 구독하거나 최근 에디션을 찾아보세요.",
    desk1_loc: "샤르자 · 두바이",
    desk2_loc: "싱가포르 · 쿠알라룸푸르",
    desk3_loc: "포트루이스 · 에벤",
    desk4_loc: "곧 개설 예정",
    desk_tag: "데스크",
    desk_soon: "예정",
    ldr1_name: "가우라브 샤르마",
    ldr1_title: "대표 파트너",
    ldr2_name: "비샬 타얄",
    ldr2_title: "파트너 — UAE 데스크",
    ldr3_name: "이시타 샤르마",
    ldr3_title: "파트너 — 인적 자본 및 HR",
`;

let enHomeIndex = localesFile.indexOf('home: {') + 7;
localesFile = localesFile.slice(0, enHomeIndex) + '\n' + enKeys + localesFile.slice(enHomeIndex);

let koIndex = localesFile.lastIndexOf('home: {') + 7;
localesFile = localesFile.slice(0, koIndex) + '\n' + koKeys + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated page.tsx and locales.ts");
