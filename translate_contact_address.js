const fs = require('fs');

let contactTsx = fs.readFileSync('src/app/(public)/contact/page.tsx', 'utf8');

contactTsx = contactTsx.replace('1808, Tower B, Emaar Digital Greens, Golf Course Extn, Sector 61, Gurgaon, Haryana 122098 (C/O TAMS)', '{t("footer_extended.offices.addr_corporate")}');
contactTsx = contactTsx.replace('745-P, Sector 15, Gurugram, Haryana 122001, India', '{t("footer_extended.offices.addr_head")}');
contactTsx = contactTsx.replace('FF-104, Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi 110034', '{t("footer_extended.offices.addr_delhi")}');
contactTsx = contactTsx.replace('Office 10, Level 1, Sharjah Media City, Sharjah, UAE', '{t("footer_extended.offices.addr_uae")}');

fs.writeFileSync('src/app/(public)/contact/page.tsx', contactTsx);
console.log("Updated contact/page.tsx for addresses.");
