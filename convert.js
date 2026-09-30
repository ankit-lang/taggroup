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
    // avoid double closing if already closed
    if (attrs.endsWith('/')) return match;
    return `<${tag}${attrs} />`;
  });

  // SVG attributes
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');

  // styles (very naive approach for specific styles used in this HTML)
  // e.g. style="margin-top:26px;width:100%;justify-content:center"
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
  
  // remove HTML comments that might break JSX
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '{/*$&*/}');
  // wait, the above wraps it, better to just remove them or wrap them properly
  jsx = jsx.replace(/{\/\*<!--([\s\S]*?)-->\*\/}/g, '{/* $1 */}');

  return jsx;
}

const inputDir = '/home/ankit/Downloads/maintag/tag-website';
const outputDir = '/home/ankit/Desktop/tag/src/app/(public)';

const files = [
  { name: 'index.html', route: 'page.tsx' },
  { name: 'about.html', route: 'about/page.tsx' },
  { name: 'contact.html', route: 'contact/page.tsx' },
  { name: 'insights.html', route: 'insights/page.tsx' },
];

for (const file of files) {
  const content = fs.readFileSync(path.join(inputDir, file.name), 'utf-8');
  // extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    let body = bodyMatch[1];
    
    // convert
    let jsx = htmlToJsx(body);
    
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
    const outPath = path.join(outputDir, file.route);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, componentStr);
    console.log('Converted', file.name, 'to', file.route);
  }
}
