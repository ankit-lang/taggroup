const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let jsx = html;
  
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  jsx = jsx.replace(/<(img|br|hr|input|meta|link)([^>]*?)\/?>/g, (match, tag, attrs) => {
    if (attrs.endsWith('/')) return match;
    return `<${tag}${attrs} />`;
  });

  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const obj = rules.reduce((acc, rule) => {
      let [key, val] = rule.split(':').map(s => s.trim());
      if (!key || !val) return acc;
      key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[key] = val;
      return acc;
    }, {});
    return `style={${JSON.stringify(obj)}}`;
  });
  
  jsx = jsx.replace(/href="([^"]+)\.html(#?[^"]*)"/g, 'href="/$1$2"');
  jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
  jsx = jsx.replace(/href="([a-zA-Z0-9]+[^"]*)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1.startsWith('mailto') || p1.startsWith('tel') || p1.startsWith('#')) return match;
    return `href="/${p1}"`;
  });

  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  return jsx;
}

function processHtmlFile(inFile, outRoute) {
  const content = fs.readFileSync(inFile, 'utf-8');
  let mainContent = '';
  
  const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*>/i);
  if (headerFooterMatch) {
    mainContent = headerFooterMatch[1];
  } else {
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) mainContent = bodyMatch[1];
    else mainContent = content; 
  }

  mainContent = mainContent.replace(/<nav className="m-actions"[\s\S]*?<\/nav>/i, '');
  mainContent = mainContent.replace(/<div className="modal"[\s\S]*?<\/div>\s*<\/div>/i, ''); 

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

const filesToProcess = [
  { in: 'index.html', out: 'page.tsx' },
  { in: 'careers.html', out: 'careers/page.tsx' },
  { in: 'leadership.html', out: 'leadership/page.tsx' },
  { in: 'about.html', out: 'about/page.tsx' },
  { in: 'contact.html', out: 'contact/page.tsx' },
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

scanDir('people');

for (const task of filesToProcess) {
  const inFile = path.join(inputDir, task.in);
  if (fs.existsSync(inFile)) {
    processHtmlFile(inFile, task.out);
  }
}

console.log('Done.');
