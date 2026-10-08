const fs = require('fs');
['src/app/(public)/careers/page.tsx', 'src/app/(public)/leadership/page.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\\$\{/g, '${');
  fs.writeFileSync(file, content);
});
