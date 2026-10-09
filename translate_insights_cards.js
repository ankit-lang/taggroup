const fs = require('fs');

let pageTsx = fs.readFileSync('src/app/(public)/insights/page.tsx', 'utf8');

const replacements = [
  ['<span className="ic-tag">Transfer Pricing</span>', '<span className="ic-tag">{t("insights.cards.tp_tag")}</span>'],
  ['<div className="ic-meta">May 2026 &middot; Gaurav Sharma</div>', '<div className="ic-meta">{t("insights.cards.tp_meta")}</div>'],
  ['<h3>Building a defensible multi-country transfer-pricing file</h3>', '<h3>{t("insights.cards.tp_title")}</h3>'],
  ['<p>How to align FAR analysis, benchmarking and documentation across jurisdictions so your file stands up to more than one tax administration — not just the one that asks first.</p>', '<p>{t("insights.cards.tp_desc")}</p>'],

  ['<span className="ic-tag">International Tax</span>', '<span className="ic-tag">{t("insights.cards.uae_tag")}</span>'],
  ['<div className="ic-meta">April 2026 &middot; Vishal Tayal</div>', '<div className="ic-meta">{t("insights.cards.uae_meta")}</div>'],
  ['<h3>UAE Corporate Tax: what Indian groups must plan for</h3>', '<h3>{t("insights.cards.uae_title")}</h3>'],
  ['<p>The essentials of the UAE\'s Corporate Tax and VAT regime, and how India–UAE groups should structure — free zone or mainland, substance, and the interaction with Indian tax.</p>', '<p>{t("insights.cards.uae_desc")}</p>'],

  ['<span className="ic-tag">India Entry</span>', '<span className="ic-tag">{t("insights.cards.india_tag")}</span>'],
  ['<div className="ic-meta">March 2026 &middot; Gaurav Sharma</div>', '<div className="ic-meta">{t("insights.cards.india_meta")}</div>'],
  ['<h3>India entry in 2026: choosing the right structure</h3>', '<h3>{t("insights.cards.india_title")}</h3>'],
  ['<p>Subsidiary, LLP, branch, liaison or project office? A practical walk-through of the trade-offs on tax, compliance, repatriation and speed — and how to avoid re-structuring later.</p>', '<p>{t("insights.cards.india_desc")}</p>'],

  ['<span className="ic-tag">Global Capability Centre</span>', '<span className="ic-tag">{t("insights.cards.gcc_tag")}</span>'],
  ['<div className="ic-meta">February 2026 &middot; K. Vishnu Sharma</div>', '<div className="ic-meta">{t("insights.cards.gcc_meta")}</div>'],
  ['<h3>Setting up a Global Capability Centre from India</h3>', '<h3>{t("insights.cards.gcc_title")}</h3>'],
  ['<p>Why global groups and advisory firms are moving transfer pricing and finance & accounting to India-based delivery — and how to do it without losing control or quality.</p>', '<p>{t("insights.cards.gcc_desc")}</p>']
];

for (const [find, replace] of replacements) {
  pageTsx = pageTsx.replace(find, replace);
}

fs.writeFileSync('src/app/(public)/insights/page.tsx', pageTsx);

const enCards = {
  tp_tag: "TRANSFER PRICING",
  tp_meta: "May 2026 · Gaurav Sharma",
  tp_title: "Building a defensible multi-country transfer-pricing file",
  tp_desc: "How to align FAR analysis, benchmarking and documentation across jurisdictions so your file stands up to more than one tax administration — not just the one that asks first.",

  uae_tag: "INTERNATIONAL TAX",
  uae_meta: "April 2026 · Vishal Tayal",
  uae_title: "UAE Corporate Tax: what Indian groups must plan for",
  uae_desc: "The essentials of the UAE's Corporate Tax and VAT regime, and how India–UAE groups should structure — free zone or mainland, substance, and the interaction with Indian tax.",

  india_tag: "INDIA ENTRY",
  india_meta: "March 2026 · Gaurav Sharma",
  india_title: "India entry in 2026: choosing the right structure",
  india_desc: "Subsidiary, LLP, branch, liaison or project office? A practical walk-through of the trade-offs on tax, compliance, repatriation and speed — and how to avoid re-structuring later.",

  gcc_tag: "GLOBAL CAPABILITY CENTRE",
  gcc_meta: "February 2026 · K. Vishnu Sharma",
  gcc_title: "Setting up a Global Capability Centre from India",
  gcc_desc: "Why global groups and advisory firms are moving transfer pricing and finance & accounting to India-based delivery — and how to do it without losing control or quality."
};

const koCards = {
  tp_tag: "이전 가격",
  tp_meta: "2026년 5월 · 가우라브 샤르마",
  tp_title: "방어 가능한 다국적 이전가격 파일 구축",
  tp_desc: "FAR 분석, 벤치마킹 및 문서화를 관할권 전체에 걸쳐 조정하여 파일이 단일 세무 당국뿐만 아니라 여러 당국의 요구를 충족하도록 하는 방법.",

  uae_tag: "국제 조세",
  uae_meta: "2026년 4월 · 비샬 타얄",
  uae_title: "UAE 법인세: 인도 그룹이 계획해야 할 사항",
  uae_desc: "UAE의 법인세 및 VAT 제도의 핵심, 그리고 인도-UAE 그룹이 프리존 또는 본토, 실질 및 인도 세금과의 상호 작용을 어떻게 구조화해야 하는지.",

  india_tag: "인도 진출",
  india_meta: "2026년 3월 · 가우라브 샤르마",
  india_title: "2026년 인도 진출: 올바른 구조 선택",
  india_desc: "자회사, LLP, 지사, 연락 사무소 또는 프로젝트 사무소? 세금, 규정 준수, 자금 회수 및 속도에 대한 실용적인 분석과 나중에 재구조화를 피하는 방법.",

  gcc_tag: "글로벌 역량 센터",
  gcc_meta: "2026년 2월 · K. 비슈누 샤르마",
  gcc_title: "인도에서 글로벌 역량 센터 설립",
  gcc_desc: "글로벌 그룹 및 자문 회사가 이전 가격 및 재무 및 회계를 인도 기반 제공으로 이동하는 이유와 통제력이나 품질을 잃지 않고 이를 수행하는 방법."
};

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// The file has two `insights: {` occurrences.
// Find the first one (for EN)
const firstInsightsIndex = localesTs.indexOf("insights: {");
// Find the second one (for KO)
const secondInsightsIndex = localesTs.indexOf("insights: {", firstInsightsIndex + 1);

const enCardsStr = "cards: " + JSON.stringify(enCards, null, 6).replace(/}/g, '      },');
const koCardsStr = "cards: " + JSON.stringify(koCards, null, 6).replace(/}/g, '      },');

// Replace second first, to avoid index shifting
localesTs = localesTs.substring(0, secondInsightsIndex + 11) + "\n      " + koCardsStr + localesTs.substring(secondInsightsIndex + 11);
localesTs = localesTs.substring(0, firstInsightsIndex + 11) + "\n      " + enCardsStr + localesTs.substring(firstInsightsIndex + 11);

fs.writeFileSync('src/data/locales.ts', localesTs);
console.log("Updated locales.ts with insights cards");
