import fs from 'fs';

// simple script to extract en.people_pages
const content = fs.readFileSync('src/data/locales.ts', 'utf8');

// We can extract it by finding "people_pages: {" in the en block.
const firstPeoplePages = content.indexOf('    people_pages: {');
const nextKey = content.indexOf('    nav: {', firstPeoplePages); // "nav: {" comes after people_pages? Let's check where it ends.
// Wait, I can just use typescript compiler or Babel, but simpler: let's match brackets.
let openBrackets = 0;
let startIndex = firstPeoplePages + 18; // '{'
let endIndex = -1;

for (let i = startIndex; i < content.length; i++) {
  if (content[i] === '{') openBrackets++;
  else if (content[i] === '}') {
    openBrackets--;
    if (openBrackets === -1) {
      endIndex = i;
      break;
    }
  }
}

const enPeoplePagesStr = content.substring(startIndex, endIndex);
fs.writeFileSync('en_people.json', '{' + enPeoplePagesStr + '}');
console.log("Extracted en_people.json");
