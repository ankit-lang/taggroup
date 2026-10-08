const fs = require('fs');

let file = fs.readFileSync('src/data/locales.ts', 'utf8');

const enServicesStart = file.indexOf('services: {');
if (enServicesStart === -1) {
    console.error("Could not find en services");
    process.exit(1);
}
const insertIdxEn = file.indexOf('{', enServicesStart) + 1;

const koServicesStart = file.indexOf('services: {', insertIdxEn + 1000);
if (koServicesStart === -1) {
    console.error("Could not find ko services");
    process.exit(1);
}
console.log('Found ko services');
