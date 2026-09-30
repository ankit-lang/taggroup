const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let jsx = html;
  
  // class to className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // for to htmlFor
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // self closing tags
  jsx = jsx.replace(/<(img|br|hr|input|meta|link)([^>]*?)\/?>/g, (match, tag, attrs) => {
    if (attrs.endsWith('/')) return match;
    return `<${tag}${attrs} />`;
  });

  // SVG attributes
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  
  // style="margin-top:26px;width:100%;justify-content:center"
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const obj = rules.reduce((acc, rule) => {
      let [key, val] = rule.split(':').map(s => s.trim());
      if (!key || !val) return acc;
      // camelCase key
      key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[key] = val;
      return acc;
    }, {});
    return `style={${JSON.stringify(obj)}}`;
  });
  
  // replace <a> tags to Next.js <Link> (Optional: we can just leave <a>, the user said "just copy paste that layout and content", but we did <Link> earlier. Let's do Link for internal).
  // I will just leave <a> tags, Next.js handles them fine, but to be clean, let's fix `.html` extensions.
  jsx = jsx.replace(/href="([^"]+)\.html(#?[^"]*)"/g, 'href="/$1$2"');
  // special case for index.html
  jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
  // ensure leading slash for internal links (basic heuristic: if it doesn't start with http, mailto, tel, /, #, it's relative)
  jsx = jsx.replace(/href="([a-zA-Z0-9]+[^"]*)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1.startsWith('mailto') || p1.startsWith('tel') || p1.startsWith('#')) return match;
    return `href="/${p1}"`;
  });

  // comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  return jsx;
}

function processHtmlFile(inFile, outRoute) {
  const content = fs.readFileSync(inFile, 'utf-8');
  
  // extract content between </header> and <footer class="site-footer">
  // Some files might not have <header>. In that case, we fallback to <body> content.
  let mainContent = '';
  
  const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*>/i);
  if (headerFooterMatch) {
    mainContent = headerFooterMatch[1];
  } else {
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) mainContent = bodyMatch[1];
    else mainContent = content; // fallback
  }

  // Remove the <nav class="m-actions"> ... </nav> and <div class="modal"> if they got caught
  mainContent = mainContent.replace(/<nav class="m-actions"[\s\S]*?<\/nav>/i, '');
  mainContent = mainContent.replace(/<div class="modal"[\s\S]*?<\/div>\s*<\/div>/i, ''); // simple removal, might not catch nested divs properly, but they are after footer usually.

  let jsx = htmlToJsx(mainContent.trim());
  
  const componentStr = `
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
  
  const outPath = path.join('/home/ankit/Desktop/tag/src/app/(public)', outRoute);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, componentStr);
  console.log('Converted', inFile, 'to', outRoute);
}

const inputDir = '/home/ankit/Downloads/maintag/tag-website';

// We want services.html, international.html, insights.html, and their subfolders.
const filesToProcess = [
  { in: 'services.html', out: 'services/page.tsx' },
  { in: 'international.html', out: 'international/page.tsx' },
  { in: 'insights.html', out: 'insights/page.tsx' },
];

function scanDir(dirName) {
  const fullDir = path.join(inputDir, dirName);
  if (!fs.existsSync(fullDir)) return;
  const files = fs.readdirSync(fullDir);
  for (const f of files) {
    if (f.endsWith('.html')) {
      const name = f.replace('.html', '');
      filesToProcess.push({ in: `${dirName}/${f}`, out: `${dirName}/${name}/page.tsx` });
    }
  }
}

scanDir('services');
scanDir('desks');
scanDir('insights');

for (const task of filesToProcess) {
  const inFile = path.join(inputDir, task.in);
  if (fs.existsSync(inFile)) {
    processHtmlFile(inFile, task.out);
  }
}

console.log('Done.');
