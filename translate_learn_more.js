const fs = require('fs');

let homeTsx = fs.readFileSync('src/app/(public)/page.tsx', 'utf8');

// Replace "Learn more <svg" with "{t('home.learn_more')} <svg"
homeTsx = homeTsx.replaceAll('Learn more <svg', '{t("home.learn_more")} <svg');

// Replace "Explore <svg" in the flags section:
homeTsx = homeTsx.replaceAll('Explore <svg', '{t("home.explore")} <svg');

fs.writeFileSync('src/app/(public)/page.tsx', homeTsx);

let localesFile = fs.readFileSync('src/data/locales.ts', 'utf8');

// En keys
const enKeys = `
    learn_more: "Learn more",
    explore: "Explore",`;

// Ko keys
const koKeys = `
    learn_more: "자세히 알아보기",
    explore: "탐색하기",`;

let enHomeIndex = localesFile.indexOf('home: {') + 7;
localesFile = localesFile.slice(0, enHomeIndex) + '\n' + enKeys + localesFile.slice(enHomeIndex);

let koIndex = localesFile.lastIndexOf('home: {') + 7;
localesFile = localesFile.slice(0, koIndex) + '\n' + koKeys + localesFile.slice(koIndex);

fs.writeFileSync('src/data/locales.ts', localesFile);
console.log("Updated page.tsx for Learn more and Explore buttons.");
