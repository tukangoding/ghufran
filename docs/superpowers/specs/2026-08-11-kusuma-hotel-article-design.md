# Design: Artikel Review Kusuma Hotel Syariah Yogyakarta

## Tujuan

Menambahkan artikel review hotel ke blog, lengkap dengan placeholder gambar dan
meta SEO per artikel, plus memperbaiki section blog di homepage.

## Perubahan

### 1. `posts.js`

- Tambah post `id: 4`:
  - `category: "Travel"`, `date: "Aug 2026"`
  - `title`: "Review Kusuma Hotel Syariah Yogyakarta: Surga Bebas Asap Rokok & Ramah Anak di Sleman"
  - `metaTitle`: "Review Kusuma Hotel Syariah Yogyakarta: Bebas Asap Rokok & Ramah Anak!"
  - `metaDescription`: sesuai yang diberikan user
  - `excerpt`: ringkasan singkat
  - `content`: HTML penuh artikel, 5 sub-bab + kesimpulan sebagai `<h2>`,
    alamat di akhir, emoji dari user dipertahankan, placeholder gambar di atas.
- Tambah field `metaTitle`/`metaDescription` ke 3 post lama (derivasi dari
  judul/excerpt) agar konsisten.

### 2. `blog.html`

- Tambah tombol filter `Travel` di bar filter.

### 3. `blog-post.html`

- `document.title` memakai `post.metaTitle`.
- Tambah `<meta name="description">` dinamis dari `post.metaDescription`.

### 4. `style.css`

- Style `.post-cover` (placeholder gambar):
  - `border: 2px dashed #000`
  - `aspect-ratio: 16 / 9`
  - background `--gum-peach`
  - teks tengah "(Foto hotel di sini — ganti dengan foto asli)"

### 5. `index.html`

- Section blog homepage: perbaiki `href="#"` yang rusak menjadi
  `blog-post.html?id=N`, tampilkan 3 artikel terbaru (hotel = #1).

## Di luar scope

- GSAP / React / Three.js / Flutter (dibahas terpisah)
- Fitur cover image penuh di blog list

## Verifikasi

- `blog.html`: filter Travel menampilkan artikel hotel.
- `blog-post.html?id=4`: judul + meta description benar di DevTools,
  placeholder gambar tampil.
- `index.html`: link blog mengarah ke artikel asli.
