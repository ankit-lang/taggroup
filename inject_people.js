const fs = require('fs');

let localesContent = fs.readFileSync('src/data/locales.ts', 'utf8');

const peopleEn = JSON.parse(fs.readFileSync('people_en.json', 'utf8'));
const peopleKo = JSON.parse(fs.readFileSync('people_ko.json', 'utf8'));

// Format JSON as string without outer braces
let enStr = JSON.stringify(peopleEn, null, 2);
enStr = enStr.slice(1, -1) + ','; // remove { and }

let koStr = JSON.stringify(peopleKo, null, 2);
koStr = koStr.slice(1, -1) + ',';

// Find the position of 'mr_pradip' or 'gaurav' inside en.people
// We will just replace "      people: {\n" with "      people: {\n" + enStr
localesContent = localesContent.replace('      people: {\\n', '      people: {\\n' + enStr);
localesContent = localesContent.replace('      people: {\\n', '      people: {\\n' + koStr); // second replace targets KO block, wait this doesn't work if they are identical.

// To be safe, let's use exact line matching or regex.
const enBlockStart = localesContent.indexOf('  en: {');
const koBlockStart = localesContent.indexOf('  ko: {');

const enPeopleIndex = localesContent.indexOf('      people: {', enBlockStart);
localesContent = localesContent.slice(0, enPeopleIndex + 15) + '\\n' + enStr + localesContent.slice(enPeopleIndex + 15);

const koPeopleIndex = localesContent.indexOf('      people: {', koBlockStart);
localesContent = localesContent.slice(0, koPeopleIndex + 15) + '\\n' + koStr + localesContent.slice(koPeopleIndex + 15);

fs.writeFileSync('src/data/locales.ts', localesContent);
console.log('locales.ts updated with people JSON');
