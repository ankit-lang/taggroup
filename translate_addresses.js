const fs = require('fs');

let footerTsx = fs.readFileSync('src/components/public/footer.tsx', 'utf8');

footerTsx = footerTsx.replace('1808, Tower B, Emaar Digital Greens, Golf Course Extn, Sector 61, Gurgaon, Haryana 122098 (C/O TAMS)', '{t("footer_extended.offices.addr_corporate")}');
footerTsx = footerTsx.replace('745-P, Sector 15, Gurugram, Haryana 122001, India', '{t("footer_extended.offices.addr_head")}');
footerTsx = footerTsx.replace('FF-104, Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi 110034', '{t("footer_extended.offices.addr_delhi")}');
footerTsx = footerTsx.replace('Office 10, Level 1, Sharjah Media City, Sharjah, UAE', '{t("footer_extended.offices.addr_uae")}');

fs.writeFileSync('src/components/public/footer.tsx', footerTsx);


// Now update locales.ts
let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

const enAddr = `        corporate: "Gurgaon (Corporate)",
        head: "Gurugram (Head Office)",
        delhi: "New Delhi",
        uae: "UAE (Sharjah)",
        addr_corporate: "1808, Tower B, Emaar Digital Greens, Golf Course Extn, Sector 61, Gurgaon, Haryana 122098 (C/O TAMS)",
        addr_head: "745-P, Sector 15, Gurugram, Haryana 122001, India",
        addr_delhi: "FF-104, Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi 110034",
        addr_uae: "Office 10, Level 1, Sharjah Media City, Sharjah, UAE"`;

const koAddr = `        corporate: "구르가온 (본사)",
        head: "구루그람 (본점)",
        delhi: "뉴델리",
        uae: "UAE (샤르자)",
        addr_corporate: "하리아나 122098 구르가온, 섹터 61, 골프 코스 익스텐션, Emaar Digital Greens, 타워 B, 1808호 (C/O TAMS)",
        addr_head: "인도 하리아나 122001 구루그람, 섹터 15, 745-P",
        addr_delhi: "뉴델리 110034 피탐푸라, 네타지 수바시 플레이스, 펄 오맥스 타워, FF-104호",
        addr_uae: "UAE 샤르자, 샤르자 미디어 시티, 레벨 1, 오피스 10"`;


localesFile = localesFile.replace(`        corporate: "Gurgaon (Corporate)",
        head: "Gurugram (Head Office)",
        delhi: "New Delhi",
        uae: "UAE (Sharjah)"`, enAddr);
        
localesFile = localesFile.replace(`        corporate: "구르가온 (본사)",
        head: "구루그람 (본점)",
        delhi: "뉴델리",
        uae: "UAE (샤르자)"`, koAddr);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated footer.tsx and locales.ts for addresses.");
