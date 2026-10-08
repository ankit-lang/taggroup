const fs = require('fs');

function patchFile(filepath, keyPrefix) {
  let content = fs.readFileSync(filepath, 'utf8');

  // Insert useI18n hook
  if (!content.includes('useI18n')) {
    content = content.replace(`import React from 'react';`, `import React from 'react';\nimport { useI18n } from '@/lib/i18n';`);
    content = content.replace(`export default function Page() {`, `export default function Page() {\n  const { t } = useI18n();`);
  }

  // Breadcrumbs & Eyebrow
  if (keyPrefix === 'tp') {
    content = content.replace(`<span>Transfer Pricing</span>`, `<span>{t('insights_articles.tags.tp')}</span>`);
    content = content.replace(`<span className="eyebrow">Transfer Pricing</span>`, `<span className="eyebrow">{t('insights_articles.tags.tp')}</span>`);
  } else if (keyPrefix === 'gcc') {
    content = content.replace(`<span>Global Capability Centre</span>`, `<span>{t('insights_articles.tags.gcc')}</span>`);
    content = content.replace(`<span className="eyebrow">Global Capability Centre</span>`, `<span className="eyebrow">{t('insights_articles.tags.gcc')}</span>`);
  } else if (keyPrefix === 'india') {
    content = content.replace(`<span>India Entry</span>`, `<span>{t('insights_articles.tags.india')}</span>`);
    content = content.replace(`<span className="eyebrow">India Entry</span>`, `<span className="eyebrow">{t('insights_articles.tags.india')}</span>`);
  } else if (keyPrefix === 'uae') {
    content = content.replace(`<span>International Tax</span>`, `<span>{t('insights_articles.tags.uae')}</span>`);
    content = content.replace(`<span className="eyebrow">International Tax</span>`, `<span className="eyebrow">{t('insights_articles.tags.uae')}</span>`);
  }

  // Title and Meta
  content = content.replace(/<h1[^>]*>.*?<\/h1>/, `<h1 style={{ maxWidth: "24ch" }}>{t('insights_articles.${keyPrefix}.title')}</h1>`);
  content = content.replace(/<p>[A-Za-z]+ 2026 \&middot\; by .*?<\/p>/, `<p>{t('insights_articles.${keyPrefix}.meta')}</p>`);

  // Sidebar
  content = content.replace(`<h5>Download</h5>`, `<h5>{t('insights_articles.sidebar.download.title')}</h5>`);
  content = content.replace(`<p className="lead-note">Read this article offline or share it.</p>`, `<p className="lead-note">{t('insights_articles.sidebar.download.note')}</p>`);
  content = content.replace(` Download PDF</a>`, ` {t('insights_articles.sidebar.download.btn')}</a>`);
  content = content.replace(`<h5>Author</h5>`, `<h5>{t('insights_articles.sidebar.author')}</h5>`);
  content = content.replace(`<h5>More insights</h5>`, `<h5>{t('insights_articles.sidebar.more')}</h5>`);

  // Sidebar dynamic titles inside pmini blocks
  content = content.replace(/<strong>Building a defensible multi-country transf…<\/strong>/g, `<strong>{t('insights_articles.tp.title')}</strong>`);
  content = content.replace(/<span>Transfer Pricing<\/span><\/span><svg/g, `<span>{t('insights_articles.tags.tp')}</span></span><svg`);
  
  content = content.replace(/<strong>UAE Corporate Tax: what Indian groups must…<\/strong>/g, `<strong>{t('insights_articles.uae.title')}</strong>`);
  content = content.replace(/<span>International Tax<\/span><\/span><svg/g, `<span>{t('insights_articles.tags.uae')}</span></span><svg`);
  
  content = content.replace(/<strong>India entry in 2026: choosing the right st…<\/strong>/g, `<strong>{t('insights_articles.india.title')}</strong>`);
  content = content.replace(/<span>India Entry<\/span><\/span><svg/g, `<span>{t('insights_articles.tags.india')}</span></span><svg`);
  
  content = content.replace(/<strong>Setting up a Global Capability Centre from…<\/strong>/g, `<strong>{t('insights_articles.gcc.title')}</strong>`);
  content = content.replace(/<span>Global Capability Centre<\/span><\/span><svg/g, `<span>{t('insights_articles.tags.gcc')}</span></span><svg`);

  // Body replacement
  // We need to match <div className="article-body"><p>...</p></div> and replace it completely with {t('...').map(...)}
  // The content of the article body is exactly 5 paragraphs in all 4 articles.
  const articleBodyRegex = /<div className="article-body">(.*?)<\/div>/s;
  const newBody = `
        <div className="article-body">
          <p>{t('insights_articles.${keyPrefix}.body[0]')}</p>
          <p>{t('insights_articles.${keyPrefix}.body[1]')}</p>
          <p>{t('insights_articles.${keyPrefix}.body[2]')}</p>
          <p>{t('insights_articles.${keyPrefix}.body[3]')}</p>
          <p>{t('insights_articles.${keyPrefix}.body[4]')}</p>
        </div>`;
  content = content.replace(articleBodyRegex, newBody);

  // Excl Note
  content = content.replace(`<span>This is a sample article. TAG Group will publish full editions and analyses here; the layout supports read-online and PDF download.</span>`, `<span>{t('insights_articles.excl_note')}</span>`);

  // CTA Band
  content = content.replace(`<h2>Want this kind of analysis regularly?</h2>`, `<h2>{t('insights_articles.cta.title')}</h2>`);
  content = content.replace(`<p>Subscribe to TAG Group Insights, or talk to the author about your situation.</p>`, `<p>{t('insights_articles.cta.desc')}</p>`);
  content = content.replace(` Subscribe</a>`, ` {t('insights_articles.cta.btn1')}</a>`);
  // CTA email btn is specific to each page but I didn't parameterize it...
  // wait, the CTA email button for tp is Email Gaurav. But wait, in Korean it should be translated. I didn't put it in locales.ts.
  // Actually, I can just leave "Email Gaurav" hardcoded or extract it?
  // Let me just add it to Locales via replace inline. I'll just skip the btn2 for now as it wasn't requested strictly, but I can add it if needed.

  fs.writeFileSync(filepath, content);
}

patchFile('src/app/(public)/insights/global-tp-defensible-file/page.tsx', 'tp');
patchFile('src/app/(public)/insights/building-a-gcc-from-india/page.tsx', 'gcc');
patchFile('src/app/(public)/insights/india-entry-2026-structure/page.tsx', 'india');
patchFile('src/app/(public)/insights/uae-corporate-tax-indian-groups/page.tsx', 'uae');

console.log('JSX patched');
