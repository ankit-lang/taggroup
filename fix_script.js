const fs = require('fs');
const path = require('path');

const layoutPath = '/home/ankit/Desktop/tag/src/app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf-8');

if (!content.includes('next/script')) {
  content = `import Script from 'next/script';\n` + content;
  content = content.replace(
    /<\/body>/,
    `  <Script src="/assets/js/main.js" strategy="lazyOnload" />\n      </body>`
  );
  fs.writeFileSync(layoutPath, content);
  console.log('Fixed script in layout');
}
