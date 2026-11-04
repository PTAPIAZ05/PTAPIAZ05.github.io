/* =======================================================
   Builds one page per project so each has a clean address:
     pedrotapiazamora.com/b-03   (instead of project?id=bu-03)

   project.html is the single template — edit it, then run:
     node tools/build-project-pages.js
   This writes b-01.html … r-02.html in the site root (GitHub Pages
   serves b-03.html at /b-03). Each copy gets its own <title>,
   description and link-preview tags, and tells the template which
   project to show. Do not edit the generated files by hand.
   ======================================================= */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const SITE = 'https://pedrotapiazamora.com';

const data = fs.readFileSync(path.join(root, 'projects-data.js'), 'utf8');
const PROJECTS = new Function(data + '; return PROJECTS;')();
const template = fs.readFileSync(path.join(root, 'project.html'), 'utf8');

// bu-03 -> b-03, ndot-01 -> n-01, research-02 -> r-02
const label = id => id.replace(/^bu-/, 'b-').replace(/^ndot-/, 'n-').replace(/^research-/, 'r-');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Remove pages from a previous run (so a deleted project's page disappears).
for (const f of fs.readdirSync(root)) {
  if (/^[bnr]-\d\d\.html$/.test(f)) fs.unlinkSync(path.join(root, f));
}

const written = [];
for (const [id, p] of Object.entries(PROJECTS)) {
  const slug = label(id);
  const title = `${p.title} — Pedro Tapia Zamora`;
  const desc = p.summary || p.overview || `${p.title}, a ${p.section} project by Pedro Tapia Zamora.`;
  const head = [
    `<title id="page-title">${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${SITE}/${slug}">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${SITE}/${slug}">`,
    p.image ? `<meta property="og:image" content="${SITE}/${esc(p.image)}">` : '',
  ].filter(Boolean).join('\n');

  let html = template
    .replace(/<title id="page-title">[^<]*<\/title>/, head)
    .replace('<script src="projects-data.js', `<script>window.PROJECT_ID = ${JSON.stringify(id)};</script>\n<script src="projects-data.js`)
    .replace('<html lang="en">', `<html lang="en">\n<!-- Generated from project.html by tools/build-project-pages.js. Edit the template, not this file. -->`);
  if (!html.includes('window.PROJECT_ID =')) throw new Error('template markers not found');
  fs.writeFileSync(path.join(root, slug + '.html'), html);
  written.push(`${slug}.html  ->  ${p.title}`);
}
console.log(written.join('\n'));
