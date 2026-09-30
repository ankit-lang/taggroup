const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  content = content.replace(/className="w-full flex flex-col min-h-screen/g, 'className="w-full flex flex-col');
  content = content.replace(/className="w-full flex min-h-screen/g, 'className="w-full flex');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src/app/(public)'));
console.log('Done.');
