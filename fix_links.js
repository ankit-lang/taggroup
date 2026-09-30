const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace careers.html#... to /careers#...
  content = content.replace(/careers\.html#/g, '/careers#');

  // Replace <a href="/..." to <Link href="/..."
  // It handles opening tags, not self-closing, we also need to replace closing </a> with </Link>
  // A simple regex approach could be risky, but since these are mostly simple tags, let's do:
  // Find all <a href="/something" ...> and replace with <Link href="/something" ...>
  // And their corresponding </a> to </Link>
  // To avoid breaking mailto/tel, we only match href starting with / or #
  let replaced = false;

  const aTagRegex = /<a(\s+[^>]*href=["']?(\/[^"'>]*|#[^"'>]*)["']?[^>]*)>/g;
  
  if (aTagRegex.test(content)) {
    // We only replace </a> if we replace <a>. 
    // This is a naive replacement and could fail on nested a tags, which HTML doesn't allow anyway.
    content = content.replace(aTagRegex, '<Link$1>');
    content = content.replace(/<\/a>/g, '</Link>');
    replaced = true;
  }

  // Ensure import Link from 'next/link'
  if (replaced && !content.includes("import Link from 'next/link'") && !content.includes('import Link from "next/link"')) {
    // Add import after first line of imports or top
    const match = content.match(/import .*?;?\n/);
    if (match) {
      content = content.replace(match[0], match[0] + "import Link from 'next/link';\n");
    } else {
      content = "import Link from 'next/link';\n" + content;
    }
  }

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
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Done.');
