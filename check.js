const fs = require('fs');
const content = fs.readFileSync('/home/ankit/Desktop/tag/src/app/(public)/insights/page.tsx', 'utf-8');

try {
  require('@babel/core').parseSync(content, {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    filename: 'page.tsx'
  });
  console.log("No syntax errors!");
} catch (err) {
  console.log(err.message);
}
