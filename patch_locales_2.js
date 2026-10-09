const fs = require('fs');
const { gaurav, mr_pradip } = require('./ko_gaurav_pradip.js');

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

function replaceObject(startTag, replacementObj, isRoot) {
    const startIdx = localesTs.indexOf(startTag, localesTs.indexOf('ko: {'));
    if (startIdx === -1) {
        console.error("Could not find start tag in ko block: " + startTag);
        process.exit(1);
    }
    
    let openBrackets = 1;
    let endIdx = -1;
    const startIndex = localesTs.indexOf('{', startIdx) + 1;
    
    for (let i = startIndex; i < localesTs.length; i++) {
        if (localesTs[i] === '{') openBrackets++;
        else if (localesTs[i] === '}') {
            openBrackets--;
            if (openBrackets === 0) {
                endIdx = i;
                break;
            }
        }
    }
    
    if (endIdx === -1) {
        console.error("Could not find end of object");
        process.exit(1);
    }
    
    const keyName = startTag.split(':')[0].trim();
    const replacementStr = JSON.stringify(replacementObj, null, 4).replace(/}/g, isRoot ? '    }' : '        }').replace(/\n/g, isRoot ? '\n    ' : '\n        ');
    
    localesTs = localesTs.substring(0, startIdx) + (isRoot ? "    " : "        ") + keyName + ": " + replacementStr + localesTs.substring(endIdx + 1);
}

replaceObject('        gaurav: {', gaurav, false);
replaceObject('    mr_pradip: {', mr_pradip, true);

fs.writeFileSync('src/data/locales.ts', localesTs);
console.log("Successfully patched gaurav and mr_pradip");
