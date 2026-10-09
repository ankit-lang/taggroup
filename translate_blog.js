const fs = require('fs');

const enBlog = {
  breadcrumb: "Blog",
  title: "Blog",
  hero_title: "Latest Updates & News.",
  hero_desc: "Read our latest announcements, team updates, and thoughts on industry trends.",
  empty: "No blog posts published yet. Check back soon!",
  read: "Read"
};

const koBlog = {
  breadcrumb: "블로그",
  title: "블로그",
  hero_title: "최신 업데이트 및 뉴스.",
  hero_desc: "업계 동향에 대한 최근 공지, 팀 업데이트 및 의견을 읽어보세요.",
  empty: "아직 게시된 블로그 게시물이 없습니다. 곧 다시 확인해 주세요!",
  read: "읽기"
};

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// Insert at the end of each locale block, or just after insights block.
// `export const locales = { en: { ... }, ko: { ... } }`
// The `en` object ends around line 1850.
const firstInsightsIndex = localesTs.indexOf("insights: {");
const secondInsightsIndex = localesTs.indexOf("insights: {", firstInsightsIndex + 1);

const enInsert = "blog: " + JSON.stringify(enBlog, null, 4).replace(/}/g, '    },') + "\n    ";
const koInsert = "blog: " + JSON.stringify(koBlog, null, 4).replace(/}/g, '    },') + "\n    ";

// Second first
localesTs = localesTs.substring(0, secondInsightsIndex) + koInsert + localesTs.substring(secondInsightsIndex);
localesTs = localesTs.substring(0, firstInsightsIndex) + enInsert + localesTs.substring(firstInsightsIndex);

fs.writeFileSync('src/data/locales.ts', localesTs);

let pageTsx = fs.readFileSync('src/app/(public)/blog/page.tsx', 'utf8');

// Add imports
pageTsx = pageTsx.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { getLocale } from '@/lib/get-locale';\nimport { locales } from '@/data/locales';");

// Add t function logic inside BlogPage
const tLogic = `  const locale = await getLocale();
  const t = (path: string) => {
    const keys = path.split('.');
    let curr: any = (locales as any)[locale] || locales.en;
    for (const key of keys) {
      if (curr === undefined) break;
      curr = curr[key];
    }
    return curr || path;
  };
`;
pageTsx = pageTsx.replace("const blogs = await getBlogs({ search: '', category: 'All' });", "const blogs = await getBlogs({ search: '', category: 'All' });\n" + tLogic);

// Replace strings
pageTsx = pageTsx.replace('<Link href="/">Home</Link> / <span>Blog</span>', '<Link href="/">{t("breadcrumb.home")}</Link> / <span>{t("blog.breadcrumb")}</span>');
pageTsx = pageTsx.replace('<span className="eyebrow">Blog</span>', '<span className="eyebrow">{t("blog.title")}</span>');
pageTsx = pageTsx.replace('<h1>Latest Updates & News.</h1>', '<h1>{t("blog.hero_title")}</h1>');
pageTsx = pageTsx.replace('<p>Read our latest announcements, team updates, and thoughts on industry trends.</p>', '<p>{t("blog.hero_desc")}</p>');
pageTsx = pageTsx.replace('<p>No blog posts published yet. Check back soon!</p>', '<p>{t("blog.empty")}</p>');
pageTsx = pageTsx.replace('Read <svg', '{t("blog.read")} <svg');

fs.writeFileSync('src/app/(public)/blog/page.tsx', pageTsx);

console.log("Blog page translated and updated.");
