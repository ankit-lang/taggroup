const fs = require('fs');
let content = fs.readFileSync('src/data/locales.ts', 'utf8');

// Find the first occurrence of desks inside services_dropdown
const desksStartIndex = content.indexOf('        desks: {\n      uae: {');
if (desksStartIndex !== -1) {
  // Find the end of this desks object
  // It ends with:
  //         "cta_btn_all": "All desks"\n      }\n    },\n    intl: { title: "International Business"
  
  const intlStr = '    intl: { title: "International Business", desc: "Outbound expansion & cross-border" }';
  const intlIndex = content.indexOf(intlStr, desksStartIndex);
  
  // Extract the whole desks block
  const desksBlock = content.substring(desksStartIndex, intlIndex);
  
  // Remove it from here
  content = content.slice(0, desksStartIndex) + content.slice(intlIndex);
  
  // Now we need to insert it at the root of `en`. 
  // Let's find a root level key in `en` like `hero: {` or `contact: {`.
  // Actually, there's a root level `intl: {` which was added by translate_intl.js.
  // Wait, translate_intl.js added `intl: { ... }` right before `contact_page: {`.
  
  const enContactPageStr = '    contact_page: {';
  const firstContactPageIndex = content.indexOf(enContactPageStr);
  
  // Insert desks block right before `contact_page: {`
  content = content.slice(0, firstContactPageIndex) + desksBlock + '\n' + content.slice(firstContactPageIndex);
  
  fs.writeFileSync('src/data/locales.ts', content);
  console.log('Fixed locales.ts');
} else {
  console.log('desks not found at the expected place.');
}
