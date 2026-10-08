const fs = require('fs');
const path = require('path');

const peopleDir = "src/app/(public)/people";
const files = fs.readdirSync(peopleDir);

for (const name of files) {
    if (name === "gaurav" || name === "mr-pradip") continue;
    const filepath = path.join(peopleDir, name, "page.tsx");
    if (!fs.existsSync(filepath)) continue;

    let content = fs.readFileSync(filepath, 'utf8');

    // Replace all remaining occurrences of "people." with "people_pages." inside t() calls
    content = content.replace(/t\('people\./g, "t('people_pages.");

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed prefix in ${name}`);
}
