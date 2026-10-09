const fs = require('fs');

const enMediaCards = {
  press_desc: "Commentary and quotes in business and professional media on tax, TP and cross-border developments.",
  press_l1: "Press mentions & expert commentary",
  press_l2: "Op-eds and bylined columns",
  press_l3: "Rapid reactions to Budget & policy changes",

  speak_desc: "Our partners speak at ICAI programmes, industry forums and client roundtables.",
  speak_l1: "ICAI faculty sessions (GST & International Tax)",
  speak_l2: "Webinars & industry panels",
  speak_l3: "Client & corporate roundtables",

  pub_desc: "In-depth notes, guides and analyses authored by the team.",
  pub_l1: "Technical guides & explainers",
  pub_l2: "Transfer-pricing & international-tax notes",
  pub_l3: "India-entry and GCC playbooks",

  rec_desc: "Milestones, memberships and recognition across the group.",
  rec_l1: "Professional memberships & certifications",
  rec_l2: "Network affiliations",
  rec_l3: "Recognition \u2014 to be updated"
};

const koMediaCards = {
  press_desc: "세무, 이전 가격 및 국경 간 개발과 관련한 비즈니스 및 전문 매체의 논평 및 인용.",
  press_l1: "언론 보도 및 전문가 논평",
  press_l2: "오피니언 및 기명 칼럼",
  press_l3: "예산 및 정책 변화에 대한 신속한 대응",

  speak_desc: "당사의 파트너들은 ICAI 프로그램, 산업 포럼 및 클라이언트 라운드테이블에서 강연합니다.",
  speak_l1: "ICAI 강사 세션 (GST 및 국제 조세)",
  speak_l2: "웨비나 및 산업 패널",
  speak_l3: "클라이언트 및 기업 라운드테이블",

  pub_desc: "팀이 작성한 심층 노트, 가이드 및 분석.",
  pub_l1: "기술 가이드 및 설명서",
  pub_l2: "이전 가격 및 국제 조세 노트",
  pub_l3: "인도 진출 및 GCC 플레이북",

  rec_desc: "그룹 전체의 마일스톤, 멤버십 및 인정.",
  rec_l1: "전문 멤버십 및 인증",
  rec_l2: "네트워크 제휴",
  rec_l3: "인정 \u2014 업데이트 예정"
};

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert into `insights: {` block
const firstInsightsIndex = localesTs.indexOf("insights: {");
const secondInsightsIndex = localesTs.indexOf("insights: {", firstInsightsIndex + 1);

const enInsert = "media_cards: " + JSON.stringify(enMediaCards, null, 6).replace(/}/g, '      },') + "\n      ";
const koInsert = "media_cards: " + JSON.stringify(koMediaCards, null, 6).replace(/}/g, '      },') + "\n      ";

// Second first
localesTs = localesTs.substring(0, secondInsightsIndex + 11) + "\n      " + koInsert + localesTs.substring(secondInsightsIndex + 11);
localesTs = localesTs.substring(0, firstInsightsIndex + 11) + "\n      " + enInsert + localesTs.substring(firstInsightsIndex + 11);

fs.writeFileSync('src/data/locales.ts', localesTs);

let pageTsx = fs.readFileSync('src/app/(public)/insights/page.tsx', 'utf8');

const replacements = [
  ['<p>Commentary and quotes in business and professional media on tax, TP and cross-border developments.</p>', '<p>{t("insights.media_cards.press_desc")}</p>'],
  ['<span>Press mentions &amp; expert commentary</span>', '<span>{t("insights.media_cards.press_l1")}</span>'],
  ['<span>Op-eds and bylined columns</span>', '<span>{t("insights.media_cards.press_l2")}</span>'],
  ['<span>Rapid reactions to Budget &amp; policy changes</span>', '<span>{t("insights.media_cards.press_l3")}</span>'],
  
  ['<p>Our partners speak at ICAI programmes, industry forums and client roundtables.</p>', '<p>{t("insights.media_cards.speak_desc")}</p>'],
  ['<span>ICAI faculty sessions (GST &amp; International Tax)</span>', '<span>{t("insights.media_cards.speak_l1")}</span>'],
  ['<span>Webinars &amp; industry panels</span>', '<span>{t("insights.media_cards.speak_l2")}</span>'],
  ['<span>Client &amp; corporate roundtables</span>', '<span>{t("insights.media_cards.speak_l3")}</span>'],
  
  ['<p>In-depth notes, guides and analyses authored by the team.</p>', '<p>{t("insights.media_cards.pub_desc")}</p>'],
  ['<span>Technical guides &amp; explainers</span>', '<span>{t("insights.media_cards.pub_l1")}</span>'],
  ['<span>Transfer-pricing &amp; international-tax notes</span>', '<span>{t("insights.media_cards.pub_l2")}</span>'],
  ['<span>India-entry and GCC playbooks</span>', '<span>{t("insights.media_cards.pub_l3")}</span>'],
  
  ['<p>Milestones, memberships and recognition across the group.</p>', '<p>{t("insights.media_cards.rec_desc")}</p>'],
  ['<span>Professional memberships &amp; certifications</span>', '<span>{t("insights.media_cards.rec_l1")}</span>'],
  ['<span>Network affiliations</span>', '<span>{t("insights.media_cards.rec_l2")}</span>'],
  ['<span>Recognition — to be updated</span>', '<span>{t("insights.media_cards.rec_l3")}</span>']
];

for (const [find, replace] of replacements) {
  pageTsx = pageTsx.replace(find, replace);
}

fs.writeFileSync('src/app/(public)/insights/page.tsx', pageTsx);

console.log("Media cards translated and updated.");
