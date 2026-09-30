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

      // Match href="mailto:info@taggroup.in?subject=Enquiry%3A%20{Service Name}"
      // and replace with href="/contact?service={Service Name}"
      const regex = /href="mailto:contact@taggroup\.in\?subject=Enquiry%3A%20([^"]+)"/g;
      const newContent = content.replace(regex, 'href="/contact?service=$1"');

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'app'));
