const fs = require('fs');

let content = fs.readFileSync('src/data/locales.ts', 'utf8');
const koPagesJson = fs.readFileSync('people_ko.json', 'utf8');

const firstIndex = content.indexOf('    people_pages: {');
const secondIndex = content.indexOf('    people_pages: {', firstIndex + 1);

const before = content.slice(0, secondIndex);

const after = `    people_pages: ${koPagesJson.trim()}
}
};

export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "en";
`;

fs.writeFileSync('src/data/locales.ts', before + after, 'utf8');
console.log('Replaced second people_pages block');
