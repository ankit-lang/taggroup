const fs = require('fs');

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

localesFile = localesFile.replace('"SME → F100",\n      "stat4_desc": "창업자부터', '"중소기업 → F100",\n      "stat4_desc": "창업자부터');

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated SME -> F100 in locales.ts");
