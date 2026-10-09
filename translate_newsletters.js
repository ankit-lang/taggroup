const fs = require('fs');

const enNewsletters = {
  n1_title: "Tax & TP Fortnightly",
  n1_desc: "A consolidated read across GST, Transfer Pricing, International Tax and Corporate Tax \u2014 the fortnight's key changes, rulings and what they mean for you.",
  n2_title: "Startup Fortnightly",
  n2_desc: "Funding, regulatory and tax developments for founders and investors \u2014 curated for India's startup ecosystem.",
  n3_title: "Case Law Weekly",
  n3_desc: "The week's most important rulings across direct tax, GST and transfer pricing \u2014 decoded, with practical takeaways.",
  n4_title: "The Weekly Brief",
  n4_desc: "A crisp weekly round-up of daily briefs across tax, geopolitics, regulatory and MCA updates \u2014 everything on one page."
};

const koNewsletters = {
  n1_title: "세무 & 이전가격 격주간",
  n1_desc: "GST, 이전 가격, 국제 조세 및 법인세 전반에 걸친 통합 읽기 \u2014 격주 단위의 주요 변경 사항, 판결 및 이것이 귀하에게 의미하는 바를 다룹니다.",
  n2_title: "스타트업 격주간",
  n2_desc: "창업자 및 투자자를 위한 자금 조달, 규제 및 세무 동향 \u2014 인도 스타트업 생태계를 위해 선별되었습니다.",
  n3_title: "판례 주간",
  n3_desc: "직접세, GST 및 이전 가격 전반에 걸친 금주의 가장 중요한 판결 \u2014 실용적인 시사점과 함께 해독됩니다.",
  n4_title: "주간 브리핑",
  n4_desc: "세무, 지정학, 규제 및 MCA 업데이트 전반에 걸친 일일 브리핑의 명확한 주간 요약 \u2014 한 페이지에 모든 것을 담았습니다."
};

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// The file has two `insights: {` occurrences.
// Find the first one (for EN)
const firstInsightsIndex = localesTs.indexOf("insights: {");
// Find the second one (for KO)
const secondInsightsIndex = localesTs.indexOf("insights: {", firstInsightsIndex + 1);

const enInsert = "newsletters: " + JSON.stringify(enNewsletters, null, 6).replace(/}/g, '      },') + "\n      ";
const koInsert = "newsletters: " + JSON.stringify(koNewsletters, null, 6).replace(/}/g, '      },') + "\n      ";

// Replace second first, to avoid index shifting
localesTs = localesTs.substring(0, secondInsightsIndex + 11) + "\n      " + koInsert + localesTs.substring(secondInsightsIndex + 11);
localesTs = localesTs.substring(0, firstInsightsIndex + 11) + "\n      " + enInsert + localesTs.substring(firstInsightsIndex + 11);

fs.writeFileSync('src/data/locales.ts', localesTs);

let pageTsx = fs.readFileSync('src/app/(public)/insights/page.tsx', 'utf8');

const replacements = [
  ['<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Tax &amp; TP Fortnightly</h3>', '<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n1_title")}</h3>'],
  ['<p style={{ "flex": "1" }}>A consolidated read across GST, Transfer Pricing, International Tax and Corporate Tax — the fortnight\'s key changes, rulings and what they mean for you.</p>', '<p style={{ "flex": "1" }}>{t("insights.newsletters.n1_desc")}</p>'],
  ['<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Startup Fortnightly</h3>', '<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n2_title")}</h3>'],
  ['<p style={{ "flex": "1" }}>Funding, regulatory and tax developments for founders and investors — curated for India\'s startup ecosystem.</p>', '<p style={{ "flex": "1" }}>{t("insights.newsletters.n2_desc")}</p>'],
  ['<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Case Law Weekly</h3>', '<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n3_title")}</h3>'],
  ['<p style={{ "flex": "1" }}>The week\'s most important rulings across direct tax, GST and transfer pricing — decoded, with practical takeaways.</p>', '<p style={{ "flex": "1" }}>{t("insights.newsletters.n3_desc")}</p>'],
  ['<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>The Weekly Brief</h3>', '<h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n4_title")}</h3>'],
  ['<p style={{ "flex": "1" }}>A crisp weekly round-up of daily briefs across tax, geopolitics, regulatory and MCA updates — everything on one page.</p>', '<p style={{ "flex": "1" }}>{t("insights.newsletters.n4_desc")}</p>']
];

for (const [find, replace] of replacements) {
  pageTsx = pageTsx.replace(find, replace);
}

fs.writeFileSync('src/app/(public)/insights/page.tsx', pageTsx);

console.log("Newsletters translated and updated.");
