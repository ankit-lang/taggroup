const fs = require('fs');

let homeTsx = fs.readFileSync('src/app/(public)/page.tsx', 'utf8');

// Replace chips
const chipReplacements = [
  ['<span className="chip">Netherlands</span>', '<span className="chip">{t("home.chip_nl")}</span>'],
  ['<span className="chip">Luxembourg</span>', '<span className="chip">{t("home.chip_lu")}</span>'],
  ['<span className="chip">Singapore</span>', '<span className="chip">{t("home.chip_sg")}</span>'],
  ['<span className="chip">UAE</span>', '<span className="chip">{t("home.chip_uae")}</span>'],
  ['<span className="chip">Australia</span>', '<span className="chip">{t("home.chip_au")}</span>'],
  ['<span className="chip">India</span>', '<span className="chip">{t("home.chip_in")}</span>'],
  ['<span className="chip accent">&amp; many others</span>', '<span className="chip accent">{t("home.chip_others")}</span>'],
  ['<span className="chip">Bookkeeping</span>', '<span className="chip">{t("home.chip_bk")}</span>'],
  ['<span className="chip">Month-end close</span>', '<span className="chip">{t("home.chip_mc")}</span>'],
  ['<span className="chip">MIS &amp; reporting</span>', '<span className="chip">{t("home.chip_mis")}</span>'],
  ['<span className="chip accent">US &amp; UAE</span>', '<span className="chip accent">{t("home.chip_us_uae")}</span>'],
  ['<span className="chip">Entry modelling</span>', '<span className="chip">{t("home.chip_em")}</span>'],
  ['<span className="chip">Incorporation</span>', '<span className="chip">{t("home.chip_inc")}</span>'],
  ['<span className="chip">Setup &amp; run</span>', '<span className="chip">{t("home.chip_sr")}</span>'],
  ['<span className="chip accent">End-to-end</span>', '<span className="chip accent">{t("home.chip_e2e")}</span>']
];

for (const [find, replace] of chipReplacements) {
  homeTsx = homeTsx.replaceAll(find, replace);
}

fs.writeFileSync('src/app/(public)/page.tsx', homeTsx);

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enKeys = `
    chip_nl: "Netherlands",
    chip_lu: "Luxembourg",
    chip_sg: "Singapore",
    chip_uae: "UAE",
    chip_au: "Australia",
    chip_in: "India",
    chip_others: "& many others",
    chip_bk: "Bookkeeping",
    chip_mc: "Month-end close",
    chip_mis: "MIS & reporting",
    chip_us_uae: "US & UAE",
    chip_em: "Entry modelling",
    chip_inc: "Incorporation",
    chip_sr: "Setup & run",
    chip_e2e: "End-to-end",`;

const koKeys = `
    chip_nl: "네덜란드",
    chip_lu: "룩셈부르크",
    chip_sg: "싱가포르",
    chip_uae: "UAE",
    chip_au: "호주",
    chip_in: "인도",
    chip_others: "& 기타 국가",
    chip_bk: "기장",
    chip_mc: "월말 결산",
    chip_mis: "MIS 및 보고",
    chip_us_uae: "US & UAE",
    chip_em: "진출 모델링",
    chip_inc: "법인 설립",
    chip_sr: "설정 및 운영",
    chip_e2e: "엔드투엔드",`;

let enHomeIndex = localesFile.indexOf('home: {') + 7;
localesFile = localesFile.slice(0, enHomeIndex) + '\n' + enKeys + localesFile.slice(enHomeIndex);

let koIndex = localesFile.lastIndexOf('home: {') + 7;
localesFile = localesFile.slice(0, koIndex) + '\n' + koKeys + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated chips in page.tsx and locales.ts");
