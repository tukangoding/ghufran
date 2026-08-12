# Design: SSG "rasa Next.js" dengan Vanilla JS

## Tujuan

Membuat website tetap vanilla JS namun meniru perilaku situs Next.js:
SSG (konten statis di HTML), clean URLs, transisi tanpa reload, SEO
lengkap + structured data, dan lazy load gambar.

## Arsitektur

```
scripts/build.mjs          SSG build script (Node, tanpa framework)
templates/blog-index.html  shell daftar blog (navbar/footer + marker)
templates/post.html        shell artikel (navbar/footer + marker)
router.js                  router klien: transisi tanpa reload + lazy + filter
posts.js                   data + slug + dateISO + module.exports (UMD)
blog/
  index.html               daftar blog, URL /blog/
  <slug>/index.html        tiap artikel, URL /blog/<slug>/
blog.html                  redirect -> /blog/
blog-post.html             redirect ?id=N -> /blog/<slug>/
sitemap.xml, robots.txt    di-generate
index.html                 homepage manual, blog-list di-inject via marker
```

## Rincian

### Data (posts.js)
- Setiap post punya `slug` (mis. `kusuma-hotel-syariah-yogyakarta`) dan
  `dateISO` (mis. `2026-08-11`).
- Export UMD: `if (typeof module !== "undefined") module.exports = posts;`
  sehingga bisa dibaca Node (build) dan tetap global di browser.
- Slugs:
  - 1: `belajar-css-dari-nol`
  - 2: `coding-sambil-tetap-konsisten-di-gym`
  - 3: `kenapa-rap-dan-coding-mirip`
  - 4: `kusuma-hotel-syariah-yogyakarta`

### Build script (scripts/build.mjs)
- `SITE_URL` konstanta di atas file (ganti sesuai domain final).
- Membaca posts.js (via `import posts from "../posts.js"`), template, index.html.
- Generate:
  - `/blog/<slug>/index.html`: title/meta/canonical/OG dari metaTitle &
    metaDescription, JSON-LD (Review untuk hotel, Article untuk lain),
    kategori+tanggal, konten statis, "artikel lainnya".
  - `/blog/index.html`: daftar semua post (card dengan `data-category`),
    JSON-LD ItemList/Blog, meta description.
  - `blog.html`: redirect `<meta http-equiv="refresh" content="0; url=/blog/">`.
  - `blog-post.html`: redirect JS `?id=N` -> `/blog/<slug>/`.
  - `index.html`: inject 3 post terbaru ke marker
    `<!-- BLOG:LIST:START --> ... <!-- BLOG:LIST:END -->`.
  - `sitemap.xml` dan `robots.txt`.
- Semua link internal root-relative (`/blog/`, `/`, `/style.css`) tanpa
  `<base>`. Basis asumsi: deployment di root domain (mis. ghufolio.edgeone.dev).
  Tanpa `<base>`, `document.baseURI` mengikuti URL saat ini sehingga resolusi
  link konsisten antara load statis dan swap via router (pushState).
- Verifikasi manual: `node scripts/build.mjs`.

### Router klien (router.js)
- Delegasi klik pada `a[href]` internal (same-origin, bukan anchor, bukan
  `target=_blank`).
- `fetch()` halaman target -> parse `<main>` -> ganti `<main>` sekarang,
  update `<title>`, meta description, canonical, OG; `history.pushState`;
  scroll top; dispatch `page:loaded`.
- `popstate` untuk back/forward. Jika fetch gagal atau tidak ada `<main>`,
  fallback `location.href`.
- `initPage()` dijalankan saat load dan setiap `page:loaded`:
  - filter blog (sembunyikan/tampilkan `.blog-item` berdasarkan data-category)
  - lazy image (`img[data-src]` via IntersectionObserver, tambah `.loaded`)

### SEO & structured data
- Post: JSON-LD `Review` (hotel) / `Article`, OG tags, canonical.
- Daftar blog: `ItemList`/`Blog`.
- `sitemap.xml` + `robots.txt`.

### Lazy load
- CSS: `img.lazy-img { opacity: 0; transition: opacity .4s }`,
  `.lazy-img.loaded { opacity: 1 }`.
- Placeholder hotel tetap `div.post-cover`; mekanisme siap untuk foto asli.

### Homepage (index.html)
- Marker `<!-- BLOG:LIST:START -->/<!-- BLOG:LIST:END -->` mengapit
  `<div class="blog-list">`.
- Link blog di navbar/footer dan "Lihat semua" diubah ke `blog/`.

### Cursor (script.js)
- Hover cursor diubah ke event delegation agar tetap berfungsi setelah
  transisi tanpa reload.

## File yang berubah / baru
Baru: `scripts/build.mjs`, `templates/blog-index.html`, `templates/post.html`,
`router.js`, `blog/`, `sitemap.xml`, `robots.txt`.
Diubah: `posts.js`, `index.html`, `style.css`, `script.js`, `blog.html`
(redirect), `blog-post.html` (redirect), README.

## Di luar scope
- GSAP / React / Three.js / Flutter (dibahas terpisah)
- Deploy target (SITE_URL placeholder)

## Verifikasi
- `node scripts/build.mjs` bersih, semua file generate.
- Headless Chrome: konten artikel tampil tanpa JS, meta + JSON-LD benar,
  homepage menampilkan 3 post terbaru, /blog/ & /blog/<slug>/ valid,
  sitemap valid, klik antar halaman tidak reload.
