const fs = require('fs');
const path = require('path');

const peopleDir = "src/app/(public)/people";
const files = fs.readdirSync(peopleDir);

for (const name of files) {
    if (name === "gaurav" || name === "mr-pradip") continue;
    const filepath = path.join(peopleDir, name, "page.tsx");
    if (!fs.existsSync(filepath)) continue;

    let content = fs.readFileSync(filepath, 'utf8');

    // Fix pill-row style
    content = content.replace(/style=\{"marginTop":"14px"\}/g, 'style={{"marginTop":"14px"}}');

    // Fix h4 style
    content = content.replace(/style=\{"margin":"26px 0 12px","color":"var\(--accent\)"\}/g, 'style={{"margin":"26px 0 12px","color":"var(--accent)"}}');
    
    // Check if there are any other single braces around json strings
    // like style={"..."}
    content = content.replace(/style=\{("color"[^}]+)\}/g, 'style={{$1}}');

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed ${name}`);
}
