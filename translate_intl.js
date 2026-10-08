const fs = require('fs');

// International Page Replacements
let intlTsx = fs.readFileSync('src/app/(public)/international/page.tsx', 'utf8');

if (!intlTsx.includes('useI18n')) {
  intlTsx = intlTsx.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';");
  intlTsx = intlTsx.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();");
}

const intlReplacements = [
  ['<span>International Desk</span>', '<span>{t("intl.breadcrumb")}</span>'],
  ['<span className="eyebrow">International Desk</span>', '<span className="eyebrow">{t("intl.hero_eyebrow")}</span>'],
  ['<h1>Dedicated country desks, coordinated from India.</h1>', '<h1>{t("intl.hero_title")}</h1>'],
  ['<p>Each desk pairs India-side capability with on-ground expertise in the market — a single point of contact for entry, tax, compliance and operations across the corridor. We support Indian businesses expanding abroad and international groups engaging with India.</p>', '<p>{t("intl.hero_desc")}</p>'],
  ['<span className="eyebrow" style={{ "justifyContent": "center" }}>Our desks</span><h2>Choose your corridor</h2>\n            <p className="lead">Dedicated desks led by named professionals, with more geographies being added.</p>', '<span className="eyebrow" style={{ "justifyContent": "center" }}>{t("intl.desks_eyebrow")}</span><h2>{t("intl.desks_title")}</h2>\n            <p className="lead">{t("intl.desks_desc")}</p>'],
  ['<span className="badge badge-local">Active desk</span>', '<span className="badge badge-local">{t("intl.badge_active")}</span>'],
  ['<span className="badge badge-network">Coming soon</span>', '<span className="badge badge-network">{t("intl.badge_soon")}</span>'],
  ['<h3>UAE Desk</h3>', '<h3>{t("header.global_dropdown.uae.title")}</h3>'],
  ['<h3>Singapore &amp; Malaysia Desk</h3>', '<h3>{t("header.global_dropdown.sg.title")}</h3>'],
  ['<h3>Mauritius Desk</h3>', '<h3>{t("header.global_dropdown.mu.title")}</h3>'],
  ['<h3>US Desk</h3>', '<h3>{t("header.global_dropdown.us.title")}</h3>'],
  ['Explore desk <svg', '{t("intl.explore_desk")} <svg'],
  ['<span className="eyebrow">One team, both sides of the border</span>\n              <h2>How the International Desk works</h2>\n              <p>Every desk gives you a single coordinating team that understands both jurisdictions — so entry strategy, entity setup, tax and transfer pricing, accounting, payroll and ongoing compliance all move together, without you managing multiple vendors across time zones.</p>', '<span className="eyebrow">{t("intl.works_eyebrow")}</span>\n              <h2>{t("intl.works_title")}</h2>\n              <p>{t("intl.works_desc")}</p>'],
  ['International Business services <svg', '{t("intl.works_btn")} <svg'],
  ['<h4>Entry &amp; structuring</h4><p>Market entry, entity choice and cross-border structuring.</p>', '<h4>{t("intl.feat1_title")}</h4><p>{t("intl.feat1_desc")}</p>'],
  ['<h4>Tax &amp; transfer pricing</h4><p>Local and cross-border tax, treaties and intercompany pricing.</p>', '<h4>{t("intl.feat2_title")}</h4><p>{t("intl.feat2_desc")}</p>'],
  ['<h4>Accounting &amp; payroll</h4><p>Books, payroll and management reporting, delivered from India.</p>', '<h4>{t("intl.feat3_title")}</h4><p>{t("intl.feat3_desc")}</p>'],
  ['<h4>Compliance &amp; governance</h4><p>Ongoing regulatory, governance and substance support.</p>', '<h4>{t("intl.feat4_title")}</h4><p>{t("intl.feat4_desc")}</p>'],
  ['<h2>Planning a cross-border move?</h2>\n        <p>Whether you\'re expanding out of India or coordinating a multi-country group, we\'ll help you structure and run it.</p>', '<h2>{t("intl.cta_title")}</h2>\n        <p>{t("intl.cta_desc")}</p>'],
  ['International services <svg', '{t("intl.cta_btn1")} <svg']
];

for (const [find, replace] of intlReplacements) {
  intlTsx = intlTsx.replaceAll(find, replace);
}
fs.writeFileSync('src/app/(public)/international/page.tsx', intlTsx);
console.log("Updated international/page.tsx");

const enIntl = {
  breadcrumb: "International Desk",
  hero_eyebrow: "International Desk",
  hero_title: "Dedicated country desks, coordinated from India.",
  hero_desc: "Each desk pairs India-side capability with on-ground expertise in the market — a single point of contact for entry, tax, compliance and operations across the corridor. We support Indian businesses expanding abroad and international groups engaging with India.",
  desks_eyebrow: "Our desks",
  desks_title: "Choose your corridor",
  desks_desc: "Dedicated desks led by named professionals, with more geographies being added.",
  badge_active: "Active desk",
  badge_soon: "Coming soon",
  explore_desk: "Explore desk",
  works_eyebrow: "One team, both sides of the border",
  works_title: "How the International Desk works",
  works_desc: "Every desk gives you a single coordinating team that understands both jurisdictions — so entry strategy, entity setup, tax and transfer pricing, accounting, payroll and ongoing compliance all move together, without you managing multiple vendors across time zones.",
  works_btn: "International Business services",
  feat1_title: "Entry & structuring",
  feat1_desc: "Market entry, entity choice and cross-border structuring.",
  feat2_title: "Tax & transfer pricing",
  feat2_desc: "Local and cross-border tax, treaties and intercompany pricing.",
  feat3_title: "Accounting & payroll",
  feat3_desc: "Books, payroll and management reporting, delivered from India.",
  feat4_title: "Compliance & governance",
  feat4_desc: "Ongoing regulatory, governance and substance support.",
  cta_title: "Planning a cross-border move?",
  cta_desc: "Whether you're expanding out of India or coordinating a multi-country group, we'll help you structure and run it.",
  cta_btn1: "International services"
};

const koIntl = {
  breadcrumb: "인터내셔널 데스크",
  hero_eyebrow: "인터내셔널 데스크",
  hero_title: "인도에서 조정되는 전담 국가 데스크.",
  hero_desc: "각 데스크는 인도 내 역량과 현지 시장 전문성을 결합하여 진출, 세무, 규정 준수 및 운영에 대한 단일 창구를 제공합니다.",
  desks_eyebrow: "우리의 데스크",
  desks_title: "목적지 선택",
  desks_desc: "지명된 전문가가 이끄는 전담 데스크가 지속적으로 추가되고 있습니다.",
  badge_active: "활성 데스크",
  badge_soon: "곧 제공 예정",
  explore_desk: "데스크 탐색",
  works_eyebrow: "국경 양쪽의 하나의 팀",
  works_title: "인터내셔널 데스크의 작동 방식",
  works_desc: "모든 데스크는 두 관할 구역을 모두 이해하는 단일 조정 팀을 제공합니다.",
  works_btn: "국제 비즈니스 서비스",
  feat1_title: "진출 및 구조화",
  feat1_desc: "시장 진출, 법인 선택 및 국경 간 구조화.",
  feat2_title: "세무 및 이전 가격",
  feat2_desc: "현지 및 국경 간 세무, 조약 및 계열사 간 가격 책정.",
  feat3_title: "회계 및 급여",
  feat3_desc: "인도에서 제공되는 장부, 급여 및 경영 보고.",
  feat4_title: "규정 준수 및 거버넌스",
  feat4_desc: "지속적인 규제, 거버넌스 및 실체 지원.",
  cta_title: "국경을 넘는 비즈니스를 계획 중이신가요?",
  cta_desc: "인도 밖으로 확장하거나 다국적 그룹을 조정하는 등, 귀하가 이를 구성하고 운영할 수 있도록 도와드립니다.",
  cta_btn1: "국제 서비스"
};

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

localesFile = localesFile.replace("contact_page: {", "intl: " + JSON.stringify(enIntl, null, 6) + ",\n    contact_page: {");

let indexKo = localesFile.lastIndexOf("contact_page: {");
localesFile = localesFile.substring(0, indexKo) + "intl: " + JSON.stringify(koIntl, null, 6) + ",\n    " + localesFile.substring(indexKo);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated locales.ts");
