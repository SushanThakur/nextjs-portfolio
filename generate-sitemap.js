const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://sushant.uk';

const pages = [
  { url: '', priority: '1.00' },
  { url: 'About', priority: '0.80' },
  { url: 'Works', priority: '0.80' },
  { url: 'Works/Design', priority: '0.80' },
  { url: 'Works/Frontend', priority: '0.80' },
  { url: 'Works/Robotics', priority: '0.80' },
  { url: 'Blog', priority: '0.80' },
  { url: 'Contact', priority: '0.80' },
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}/${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${page.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'out', 'sitemap.xml'), sitemapContent);
console.log('Sitemap generated!');
