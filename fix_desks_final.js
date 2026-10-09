const fs = require('fs');

let content = fs.readFileSync('src/data/locales.ts', 'utf8');

const desksEndBlock = '        desks: {\n      uae: {';
const desksIndex = content.lastIndexOf(desksEndBlock);

if (desksIndex > content.lastIndexOf('export const defaultLocale')) {
  // It's at the end! Let's extract it.
  const exportedPart = 'export const defaultLocale: Locale = "en";';
  
  // Extract the `desks: { ... }` which is appended at the end.
  const desksBlock = '    desks: {\n' + content.substring(content.lastIndexOf('      uae: {'), content.length).trim();
  
  // Remove the appended stuff
  content = content.substring(0, content.lastIndexOf(exportedPart) + exportedPart.length) + '\n';
  
  // Insert desksBlock before the first `contact: {` which is at line 184
  const contactStr = '    contact: {';
  const firstContactIndex = content.indexOf(contactStr);
  
  content = content.substring(0, firstContactIndex) + desksBlock + ',\n' + content.substring(firstContactIndex);
  
  fs.writeFileSync('src/data/locales.ts', content);
  console.log('Fixed locales.ts correctly this time!');
} else {
  console.log('Not found at the end.');
}
