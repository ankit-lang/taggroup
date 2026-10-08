const fs = require('fs');

let file = fs.readFileSync('src/data/locales.ts', 'utf8');

const koStartStr = `      intlBus: {
        breadcrumb: { home: "홈", services: "서비스" },`;

const enStartStr = `      intlBus: {
        breadcrumb: { home: "Home", services: "Services" },`;

const firstKoIdx = file.indexOf(koStartStr);
const firstEnIdx = file.indexOf(enStartStr);

console.log('koStart', firstKoIdx);
console.log('enStart', firstEnIdx);
