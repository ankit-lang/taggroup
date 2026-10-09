const fs = require('fs');
let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

function extractObject(startTag) {
    const startIdx = localesTs.indexOf(startTag);
    if (startIdx === -1) return null;
    let openBrackets = 0;
    const startIndex = startIdx + startTag.length - 1; // '{'
    for (let i = startIndex; i < localesTs.length; i++) {
        if (localesTs[i] === '{') openBrackets++;
        else if (localesTs[i] === '}') {
            openBrackets--;
            if (openBrackets === -1) {
                return localesTs.substring(startIndex, i + 1);
            }
        }
    }
}

const gauravStr = extractObject('        gaurav: {');
const pradipStr = extractObject('    mr_pradip: {');
fs.writeFileSync('extract2.json', '{"gaurav": ' + gauravStr + ', "mr_pradip": ' + pradipStr + '}');
