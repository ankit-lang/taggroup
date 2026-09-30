const fs = require('fs');

const cssFile = '/home/ankit/Desktop/tag/public/assets/css/styles.css';
let content = fs.readFileSync(cssFile, 'utf-8');

const updated = content.replace(/url\(['"]?\.\.\/img\/(.*?)['"]?\)/g, 'url("/assets/img/$1")');

fs.writeFileSync(cssFile, updated, 'utf-8');
console.log('Fixed CSS URLs.');
