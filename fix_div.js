const fs = require('fs');
const filePath = '/home/ankit/Desktop/tag/src/app/(public)/insights/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The original file had a missing </div></div> before the Subscribe section.
// Let's add them back right before the Subscribe section.

content = content.replace(
  /<div style=\{{\"margin\":\"52px 0 8px\"}}>/,
  `</div></div>\n\n      <div style={{"margin":"52px 0 8px"}}>`
);

// We had two extra closing divs stripped because of the replacement
// Let's verify if the number of opening and closing divs match
let open = (content.match(/<div/g) || []).length;
let close = (content.match(/<\/div>/g) || []).length;
console.log("Open divs:", open, "Close divs:", close);

fs.writeFileSync(filePath, content);
