const fs = require('fs');

const chunk1 = require('./ko_people_1.js');
const chunk2 = require('./ko_people_2.js');
const chunk3 = require('./ko_people_3.js');

const merged = { ...chunk1, ...chunk2, ...chunk3 };
const mergedStr = "people_pages: " + JSON.stringify(merged, null, 4).replace(/}/g, '    }') + "  }";

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// Find where ko.people_pages begins
const koPeoplePagesStart = localesTs.indexOf('    people_pages: {', localesTs.indexOf('    people_pages: {') + 10);

if (koPeoplePagesStart === -1) {
    console.error("Could not find ko.people_pages");
    process.exit(1);
}

// Find where it ends
let openBrackets = 1; // Started AT '{'
let koPeoplePagesEnd = -1;
const startIndex = localesTs.indexOf('{', koPeoplePagesStart) + 1; 

for (let i = startIndex; i < localesTs.length; i++) {
  if (localesTs[i] === '{') openBrackets++;
  else if (localesTs[i] === '}') {
    openBrackets--;
    if (openBrackets === 0) {
      koPeoplePagesEnd = i;
      break;
    }
  }
}

if (koPeoplePagesEnd === -1) {
    console.error("Could not find end of ko.people_pages");
    process.exit(1);
}

const newLocalesTs = localesTs.substring(0, koPeoplePagesStart) + "people_pages: " + JSON.stringify(merged, null, 4).replace(/}/g, '    }').replace(/\n/g, '\n    ') + localesTs.substring(koPeoplePagesEnd + 1);

fs.writeFileSync('src/data/locales.ts', newLocalesTs);
console.log("Successfully patched locales.ts (people_pages)");
