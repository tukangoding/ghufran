# Portfolio v2.0 — ghufrxn.

Website portfolio dibangun dengan **Nuxt 3 + Vue 3**, SSG (Static Site Generation),
dan Nuxt Content untuk blog. Desain neo-brutalist / Gumroad-style.

## Teknologi

- Nuxt 3 + Vue 3 (SSG)
- Nuxt Content v2 (blog markdown)
- Vue 3 Composables
- CSS vanilla (neo-brutalist theme)

## Struktur

```
portfolio/
├── app.vue                    # Root app
├── nuxt.config.ts             # Nuxt configuration
├── layouts/default.vue        # Default layout (navbar + footer)
├── pages/
│   ├── index.vue              # Home page
│   └── blog/
│       ├── index.vue          # Blog listing
│       └── [slug].vue         # Single post
├── components/
│   ├── AppNavbar.vue          # Navigation
│   ├── HeroSection.vue        # Hero section
│   ├── AboutSection.vue       # About section
│   ├── SkillsSection.vue      # Skills section
│   ├── PortfolioSection.vue   # Portfolio cards (4 items)
│   ├── VideosSection.vue      # YouTube embeds
│   ├── BlogSection.vue        # Blog preview on home
│   ├── ContactSection.vue     # Contact links
│   └── AppFooter.vue          # Footer
├── composables/
│   └── useCustomCursor.ts     # Custom cursor animation
├── content/blog/              # Markdown blog posts
│   ├── belajar-css-dari-nol.md
│   ├── coding-sambil-tetap-konsisten-di-gym.md
│   ├── kenapa-rap-dan-coding-mirip.md
│   └── kusuma-hotel-syariah-yogyakarta.md
└── public/images/portfolio/   # Portfolio thumbnails
    ├── alf-production.svg     # ALF Production placeholder
    └── tepamenep-villa.svg    # Tepa Menep Villa placeholder
```

## Alur Kerja

### Development

```bash
npm install
npm run dev
```

### Build & Deploy

```bash
npm run generate   # Generate static files ke .output/public/
npm run preview    # Preview hasil generate
```

### Tambah Blog Post

1. Buat file markdown di `content/blog/<slug>.md`
2. Tambahkan frontmatter:
   ```yaml
   ---
   title: "Judul Artikel"
   category: "Coding"
   date: "Mar 2026"
   dateISO: "2026-03-15"
   excerpt: "Ringkasan singkat..."
   ---
   ```
3. Tulis konten di bawah frontmatter
4. Build & deploy

### Ganti Thumbnail Portfolio

1. Ganti file di `public/images/portfolio/`
2. Update path di `components/PortfolioSection.vue`

## Portfolio Items

1. **Nasyid Nusantara** — Platform nasyid Indonesia
2. **Pesan Oleh-Oleh** — Platform pemesanan oleh-oleh
3. **ALF Production** — Website produksi Mars & Hymne
4. **Tepa Menep Villa** — Payment Gateway Integration

## URL

- Home: `/`
- Blog listing: `/blog/`
- Blog post: `/blog/<slug>/`

## Deployment

Static files di `.output/public/` bisa di-deploy ke:
- Edgeone (SSG)
- Vercel
- Netlify
- GitHub Pages
