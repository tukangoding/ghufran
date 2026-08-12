# Portfolio — ghufrxn.

Website portfolio statis vanilla JS (tanpa framework), dirancang menyerupai
perilaku situs Next.js: SSG (konten statis di HTML), clean URLs, transisi
tanpa reload, SEO + structured data, dan lazy load gambar.

## Teknologi

- HTML + CSS vanilla, JS vanilla (no framework, no build bundler)
- `scripts/build.mjs` — SSG ala Next.js (Node vanilla)
- `router.js` — transisi antar halaman tanpa reload (fetch + swap `<main>`)

## Alur kerja

1. Edit artikel di `posts.js` (copy salah satu object, isi `id`, `slug`,
   `title`, `category`, `date`, `dateISO`, `metaTitle`, `metaDescription`,
   `excerpt`, `content`).
2. Generate halaman statis:

   ```bash
   node scripts/build.mjs
   ```

   Hasil: `blog/`, `sitemap.xml`, `robots.txt`, plus inject 3 artikel
   terbaru ke `index.html` lewat marker `<!-- BLOG:LIST:START -->`.
3. Commit hasil build, push.

## URL

- Halaman artikel: `/blog/<slug>/` (mis. `/blog/kusuma-hotel-syariah-yogyakarta/`)
- Daftar blog: `/blog/`
- Link lama tetap jalan via redirect: `blog.html`, `blog-post.html?id=N`

## Konfigurasi

Ubah `SITE_URL` di bagian atas `scripts/build.mjs` sesuai domain final
deployment (dipakai untuk canonical, OG, sitemap, robots).
