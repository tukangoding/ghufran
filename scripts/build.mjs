// ============================================================
// scripts/build.mjs — SSG ala Next.js dengan vanilla JS
// Jalankan: node scripts/build.mjs
//
// Membaca posts.js + templates, lalu meng-generate:
//   - blog/index.html            (daftar blog, URL bersih /blog/)
//   - blog/<slug>/index.html     (artikel statis, URL /blog/<slug>/)
//   - blog.html                  (redirect -> /blog/)
//   - blog-post.html             (redirect ?id=N -> /blog/<slug>/)
//   - sitemap.xml, robots.txt
//   - index.html (halaman utama) -> inject 3 artikel terbaru via marker
// ============================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ── KONFIGURASI ──
// TODO: ganti sesuai domain final deployment (contoh project pages GitHub).
const SITE_URL = "https://tukangoding.github.io/ghufran";

const posts = (await import(path.join(ROOT, "posts.js"))).default;

// ── HELPERS ──
function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function write(file, content) {
  const abs = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
  console.log("  write", file);
}

// escape untuk konteks atribut/teks HTML (bukan untuk konten yang sudah HTML)
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svgArrow() {
  return `<svg class="blog-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 13L13 3M13 3H6M13 3v7"/></svg>`;
}

// kartu besar (daftar blog / homepage). base = prefiks link relatif ke <base>.
function postCard(post, index, base) {
  const num = String(index + 1).padStart(2, "0");
  return `
            <a href="${base}${post.slug}/" class="blog-item" data-category="${esc(post.category)}">
              <div class="blog-item__left">
                <span class="blog-num">${num}</span>
              </div>
              <div class="blog-item__center">
                <span class="blog-category">${esc(post.category)}</span>
                <h3 class="blog-title">${esc(post.title)}</h3>
              </div>
              <div class="blog-item__right">
                <span class="blog-date">${esc(post.date)}</span>
                ${svgArrow()}
              </div>
            </a>`;
}

// kartu ringkas ("artikel lainnya")
function otherCard(post, base) {
  return `
            <a href="${base}${post.slug}/" class="blog-item">
              <div class="blog-item__left">
                <span class="blog-num">0${post.id}</span>
              </div>
              <div class="blog-item__center">
                <span class="blog-category">${esc(post.category)}</span>
                <h3 class="blog-title">${esc(post.title)}</h3>
              </div>
              <div class="blog-item__right">
                <span class="blog-date">${esc(post.date)}</span>
                ${svgArrow()}
              </div>
            </a>`;
}

function jsonLd(post) {
  const author = { "@type": "Person", name: "Ghufran" };
  const url = `${SITE_URL}/blog/${post.slug}/`;
  if (post.slug === "kusuma-hotel-syariah-yogyakarta") {
    return JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Hotel",
          name: "Kusuma Hotel Syariah Yogyakarta",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Wijaya Kusuma No.29, Dero, Condongcatur",
            addressLocality: "Depok, Sleman, Yogyakarta",
            addressRegion: "DIY",
            postalCode: "55283",
            addressCountry: "ID",
          },
        },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author,
        datePublished: post.dateISO,
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        url,
      },
      null,
      2,
    );
  }
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      datePublished: post.dateISO,
      author,
      url,
    },
    null,
    2,
  );
}

// ── 1. BLOG INDEX (/blog/) ──
console.log("build: blog/index.html");
let blogIndex = read("templates/blog-index.html");
const blogCards = posts.map((p, i) => postCard(p, i, "blog/")).join("\n");
const blogLd = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog — ghufrxn.",
    url: `${SITE_URL}/blog/`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}/`,
      datePublished: p.dateISO,
      author: { "@type": "Person", name: "Ghufran" },
    })),
  },
  null,
  2,
);
blogIndex = blogIndex
  .replace("{{TITLE}}", esc("Thoughts & bars"))
  .replace(
    "{{META_DESCRIPTION}}",
    esc("Coding, lifestyle, musik, dan travel — artikel ditulis dari sudut pandang yang sedang belajar."),
  )
  .replace("{{CANONICAL}}", `${SITE_URL}/blog/`)
  .replace("{{BLOG_LIST}}", blogCards)
  .replace("{{JSON_LD}}", `<script type="application/ld+json">${blogLd}</script>`);
write("blog/index.html", blogIndex);

// ── 2. POST PAGES (/blog/<slug>/) ──
console.log("build: blog/<slug>/index.html");
const postTpl = read("templates/post.html");
for (const post of posts) {
  const others = posts.filter((p) => p.id !== post.id).slice(0, 2);
  const otherCards = others.map((o) => otherCard(o, "blog/")).join("\n");
  const page = postTpl
    .replace("{{TITLE}}", esc(post.metaTitle || post.title))
    .replace("{{META_DESCRIPTION}}", esc(post.metaDescription || post.excerpt))
    .replaceAll("{{CANONICAL}}", `${SITE_URL}/blog/${post.slug}/`)
    .replace("{{OG_TITLE}}", esc(post.metaTitle || post.title))
    .replace("{{OG_DESCRIPTION}}", esc(post.metaDescription || post.excerpt))
    .replace("{{JSON_LD}}", `<script type="application/ld+json">${jsonLd(post)}</script>`)
    .replace("{{CATEGORY}}", esc(post.category))
    .replace("{{DATE}}", esc(post.date))
    .replace("{{H1_TITLE}}", esc(post.title))
    .replace("{{CONTENT}}", post.content)
    .replace("{{OTHER_POSTS}}", otherCards);
  write(`blog/${post.slug}/index.html`, page);
}

// ── 3. HOMEPAGE — inject 3 artikel terbaru ──
console.log("build: index.html");
let indexHtml = read("index.html");
const START = "<!-- BLOG:LIST:START -->";
const END = "<!-- BLOG:LIST:END -->";
const si = indexHtml.indexOf(START);
const ei = indexHtml.indexOf(END);
if (si === -1 || ei === -1 || ei < si) {
  throw new Error("Marker BLOG:LIST tidak ditemukan di index.html");
}
const homeCards = posts.slice(0, 3).map((p, i) => postCard(p, i, "blog/")).join("\n");
indexHtml = indexHtml.slice(0, si + START.length) + "\n" + homeCards + "\n" + indexHtml.slice(ei);
write("index.html", indexHtml);

// ── 4. REDIRECT STUBS (link lama tetap jalan) ──
console.log("build: blog.html (redirect)");
write(
  "blog.html",
  `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=blog/" />
    <title>Mengalihkan ke blog…</title>
  </head>
  <body>
    <p style="font-family: sans-serif; padding: 2rem"><a href="blog/">Ke blog →</a></p>
  </body>
</html>
`,
);

console.log("build: blog-post.html (redirect)");
const idMap = posts.map((p) => `"${p.id}":"${p.slug}"`).join(",");
write(
  "blog-post.html",
  `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mengalihkan…</title>
  </head>
  <body>
    <script>
      const m = {${idMap}};
      const id = new URLSearchParams(location.search).get("id");
      location.replace("blog/" + (m[id] ? m[id] + "/" : ""));
    <\/script>
  </body>
</html>
`,
);

// ── 5. SITEMAP + ROBOTS ──
console.log("build: sitemap.xml + robots.txt");
const urls = [`${SITE_URL}/`, `${SITE_URL}/blog/`].concat(
  posts.map((p) => `${SITE_URL}/blog/${p.slug}/`),
);
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
for (const u of urls) sitemap += `  <url><loc>${u}</loc></url>\n`;
sitemap += "</urlset>\n";
write("sitemap.xml", sitemap);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log("\nBuild selesai ✔  (" + posts.length + " artikel)");
