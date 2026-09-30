const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /href="mailto:contact@taggroup\.in\?subject=Subscribe%3A[^"]*"/g;
      const newContent = content.replace(regex, 'href="#" data-newsletter');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Updated subscribe links in:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'app'));
