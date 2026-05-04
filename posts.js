// ============================================================
// posts.js — sumber data semua artikel blog
// Cara tambah artikel baru: copy salah satu object di bawah,
// tambahkan di awal array, isi datanya, selesai.
// ============================================================

const posts = [
  {
    id: 1,
    title: "Belajar CSS dari Nol: Apa yang Tidak Diajarkan Tutorial",
    category: "Coding",
    date: "Apr 2026",
    excerpt: "Kebanyakan tutorial CSS mengajarkan syntax, bukan cara berpikir. Ini yang sebenarnya perlu kamu pahami sebelum nulis satu baris pun.",
    content: `
      <p>Waktu pertama kali belajar CSS, aku pikir cukup hafal property-nya. <strong>Salah besar.</strong></p>

      <p>CSS itu bukan soal hafalan — ia soal cara berpikir tentang layout, tentang bagaimana elemen mengambil ruang, dan tentang mengapa browser membuat keputusan yang ia buat.</p>

      <h2>Yang tidak diajarkan tutorial</h2>

      <p>Tutorial bilang: "pakai <code>display: flex</code> untuk layout horizontal." Tapi tidak ada yang bilang kenapa <code>justify-content</code> tidak bekerja kalau parent tidak punya extra space. Tidak ada yang jelasin bahwa <code>align-items</code> bekerja di cross axis, bukan main axis.</p>

      <p>Dan yang paling sering dilewat: <strong>CSS gagal diam-diam.</strong> Typo di property name? Browser skip tanpa error. Kamu duduk bingung kenapa transisi tidak jalan, padahal masalahnya cuma satu huruf salah di <code>cubic-bezier</code>.</p>

      <h2>Cara belajar yang benar</h2>

      <p>Buka DevTools. Selalu. Setiap kali nulis CSS, buka panel Styles dan lihat apa yang browser tangkap. Property yang dicoret = tidak valid. Property yang tidak muncul = nama salah.</p>

      <p>DevTools adalah guru yang paling jujur — ia tidak pernah bohong tentang apa yang sebenarnya terjadi.</p>

      <h2>Satu prinsip yang mengubah segalanya</h2>

      <p>Sebelum nulis CSS, tanya dulu: <em>"apakah animasi ini perlu browser menghitung ulang layout?"</em> Kalau iya — pakai <code>transform</code> sebagai gantinya. Itu saja sudah membuat animasimu 10x lebih smooth.</p>
    `
  },
  {
    id: 2,
    title: "Cara Saya Coding Sambil Tetap Konsisten di Gym",
    category: "Lifestyle",
    date: "Mar 2026",
    excerpt: "Dua hal yang katanya tidak bisa jalan bersamaan. Tapi setelah beberapa bulan mencoba, ini yang aku temukan.",
    content: `
      <p>Orang sering bilang: <em>"mana bisa coding sambil gym, waktunya kurang."</em> Dan aku dulu percaya itu.</p>

      <p>Sampai aku sadar bahwa masalahnya bukan waktu — tapi <strong>energi dan sistem.</strong></p>

      <h2>Pagi untuk badan, malam untuk kode</h2>

      <p>Ini yang paling sederhana dan paling efektif. Gym pagi sebelum otak penuh dengan masalah coding. Pulang, makan, istirahat sebentar — baru duduk di depan laptop.</p>

      <p>Otak setelah olahraga itu anehnya lebih jernih. Bug yang kemarin tidak ketemu, tiba-tiba kelihatan jelas setelah satu jam di gym.</p>

      <h2>Rest day = learning day</h2>

      <p>Hari istirahat dari gym aku pakai untuk hal yang lebih pasif: baca dokumentasi, nonton tutorial, atau nulis artikel seperti ini. Bukan sesi coding berat.</p>

      <p>Konsistensi itu bukan soal intensitas setiap hari — tapi soal tidak berhenti sama sekali.</p>

      <h2>Kuncinya: jangan tunggu mood</h2>

      <p>Gym dan coding punya satu musuh yang sama: nunggu mood yang pas. Mood tidak datang duluan — action yang datang duluan, mood mengikuti.</p>

      <p>Sepatu gym sudah di depan pintu. Laptop sudah terbuka di tab terakhir yang dikerjakan. Friction dikurangi semaksimal mungkin.</p>
    `
  },
  {
    id: 3,
    title: "Kenapa Rap dan Coding Lebih Mirip dari yang Kamu Kira",
    category: "Musik",
    date: "Feb 2026",
    excerpt: "Dua skill yang kelihatannya tidak nyambung sama sekali. Tapi semakin dalam aku masuk ke keduanya, semakin banyak yang terasa sama.",
    content: `
      <p>Pertama kali aku bilang ke orang bahwa aku rapper sekaligus programmer, reaksinya selalu sama: <em>"hah, nyambung?"</em></p>

      <p>Sekarang aku bisa jawab dengan yakin: <strong>sangat nyambung.</strong></p>

      <h2>Keduanya soal struktur</h2>

      <p>Rap yang bagus punya struktur: intro, verse, hook, bridge, outro. Kode yang bagus juga punya struktur: fungsi kecil yang punya satu tanggung jawab, dipanggil dari tempat yang tepat.</p>

      <p>Lirik yang berantakan dan kode yang spaghetti punya masalah yang sama — susah dibaca, susah diubah, susah dimengerti orang lain.</p>

      <h2>Keduanya soal revisi</h2>

      <p>Tidak ada rapper yang langsung puas dengan draft pertama. Tidak ada programmer yang langsung puas dengan kode pertama. Proses refinement itu yang menghasilkan karya yang benar-benar tajam.</p>

      <p>Di rap namanya <em>rewrite</em>. Di coding namanya <em>refactor</em>. Sama saja.</p>

      <h2>Keduanya soal komunikasi</h2>

      <p>Rap menyampaikan pesan ke pendengar. Kode menyampaikan instruksi ke komputer — dan ke programmer lain yang akan baca kodenya nanti.</p>

      <p>Kode yang tidak ada yang mengerti itu seperti lirik yang tidak ada yang connect. Technically benar, tapi gagal di tujuan utamanya.</p>

      <p>Jadi ya — rap dan coding itu bukan dua dunia yang berbeda. Mereka latihan untuk skill yang sama: <strong>menyusun sesuatu yang kompleks menjadi sesuatu yang bermakna.</strong></p>
    `
  }
];
