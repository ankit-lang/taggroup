const fs = require('fs');

let localesContent = fs.readFileSync('src/data/locales.ts', 'utf8');

// Replace the literal \n that was inserted by mistake
localesContent = localesContent.replace(/\\n/g, '\n');

fs.writeFileSync('src/data/locales.ts', localesContent);
