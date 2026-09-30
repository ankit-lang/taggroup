const fs = require('fs');
const path = require('path');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // fix "assets/ to "/assets/
  content = content.replace(/"assets\//g, '"/assets/');
  
  // fix 'assets/ to '/assets/
  content = content.replace(/'assets\//g, "'/assets/");

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
    } else if (fullPath.endsWith('.tsx')) {
      fixPathsInFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src/app/(public)'));
console.log('Path fixing done.');
