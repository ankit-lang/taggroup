const fs = require('fs');

let localesContent = fs.readFileSync('src/data/locales.ts', 'utf8');

const peopleEn = JSON.parse(fs.readFileSync('people_en.json', 'utf8'));
const peopleKo = JSON.parse(fs.readFileSync('people_ko.json', 'utf8'));

let enStr = JSON.stringify(peopleEn, null, 2);
let koStr = JSON.stringify(peopleKo, null, 2);

// We find "  ko: {" and insert the enStr BEFORE the closing brace of "en" block.
// The structure is:
//   en: {
//     ...
//   },
//   ko: {
const koBlockIndex = localesContent.indexOf('  ko: {');
const enClosingBraceIndex = localesContent.lastIndexOf('}', koBlockIndex);
localesContent = localesContent.slice(0, enClosingBraceIndex) + ',\n    people_pages: ' + enStr + '\n' + localesContent.slice(enClosingBraceIndex);

// For ko, it's at the end of the file.
// The file ends with:
//   }
// };
// We want to insert before the second to last brace.
const fileEndIndex = localesContent.lastIndexOf('};');
const koClosingBraceIndex = localesContent.lastIndexOf('}', fileEndIndex - 1);
localesContent = localesContent.slice(0, koClosingBraceIndex) + ',\n    people_pages: ' + koStr + '\n' + localesContent.slice(koClosingBraceIndex);

fs.writeFileSync('src/data/locales.ts', localesContent);
console.log('locales.ts updated with people_pages JSON');
