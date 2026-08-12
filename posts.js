// ============================================================
// posts.js — sumber data semua artikel blog
// Cara tambah artikel baru: copy salah satu object di bawah,
// tambahkan di awal array, isi datanya, selesai.
// ============================================================

const posts = [
  {
    id: 4,
    slug: "kusuma-hotel-syariah-yogyakarta",
    title: "Review Kusuma Hotel Syariah Yogyakarta: Surga Bebas Asap Rokok & Ramah Anak di Sleman",
    category: "Travel",
    date: "Aug 2026",
    dateISO: "2026-08-11",
    metaTitle: "Review Kusuma Hotel Syariah Yogyakarta: Bebas Asap Rokok & Ramah Anak!",
    metaDescription: "Pengalaman menginap di Kusuma Hotel Syariah Jogja. Kamar bebas asap rokok, ada playground, sarapan gudeg endul, plus surprise cuci mobil gratis!",
    excerpt: "Bintang lima! Hotel syariah bebas asap rokok, ada playground anak, kolam renang, dan sarapan gudeg endul — plus surprise cuci mobil gratis di pagi hari.",
    content: `
      <div class="post-cover" aria-label="Tempat foto hotel">(Foto hotel di sini — ganti dengan foto asli)</div>

      <p>Aku mau kasih bintang lima ⭐ ⭐ ⭐ ⭐ ⭐ buat Kusuma Hotel Syariah Yogyakarta! Kenapa? Ada banyak plot twist menyenangkan selama menginap di sini yang bikin sekeluarga happy banget.</p>

      <h2>1. Pelayanan Sigap &amp; Surprise Pagi Hari!</h2>

      <p>Sebagai orang yang tidak terbiasa mengendarai mobil manual—which is udah stress duluan di jalan—aku dibantu parkir dengan sangat rapi oleh staf yang sigap nan ramah.</p>

      <p>You know what? Pas pagi hari sekitar pukul 05.00–07.00 WIB, aku terperanjat mendengar suara gemericik air. Kirain cuma nyiram tanaman, eh ternyata staf hotel lagi mencuci mobil-mobil para pengunjung yang sedang menginap! Respect banget sih sama pelayanannya!</p>

      <h2>2. Kamar 100% Bebas Asap Rokok (Ramah Ibu &amp; Bayi)</h2>

      <p>Begitu masuk ke ruang kamar: bersih dan bebas bau rokok. Ehm, ini surga sih buat para kaum hawa yang anti bau rokok, apalagi kalau lagi ada baby menyertai ke mana-mana, ya nggak? Termasuk istri ane.</p>

      <p>Kalau kamu pesan varian kamar Deluxe, sudah disediakan beanbag santai di dalamnya. Memang tak ada wastafel di kamar mandi, but it's alright, Pak. Tetap aman dan nyaman!</p>

      <h2>3. Fasilitas Lengkap: Playground Anak &amp; Kolam Renang</h2>

      <p>Kamu punya baby usia 1 tahun, 2 tahun, atau toddler? Di Kusuma Hotel Syariah Yogyakarta ada space playground yang cukup lengkap untuk mengakomodasi jiwa bermain buah hati kamu.</p>

      <p>Selain itu, ada juga kolam renang yang proper untuk menggerakkan seluruh badan kamu dan relaksasi setelah lelah beraktivitas di Jogja. Kolam renang ini buka dari pukul 06.00 pagi sampai 18.00 WIB.</p>

      <h2>4. Sarapan Enak Banget: Gudeg &amp; Siomay yang Bikin Terperanjat!</h2>

      <p>Kalo kamu milih paket yang ada sarapannya, hotel syariah di Jogja satu ini menyediakan berbagai macam menu sarapan yang rasanya memanjakan lidah. Staf tentu siap antar langsung ke meja yang ada di teras kamar Anda.</p>

      <p>Waktu itu aku dan istri pesan Nasi Gudeg dan Siomay. Sempat tidak berharap apa-apa, tapi terkejut sejak suapan pertama. Endul cuy!</p>

      <p>Kalo di Semarang tuh ada gudeg kesukaanku, noh di Dinar Mas Meteseh tiap pagi, enak pisan. Nah, rasa gudeg di sini mirip banget! Siomay-nya juga nggak ngasal bikin bumbunya. Gimana ya? Pas banget rasanya, terasa segar bumbunya kaya abis diracik banget. MashaAllah Tabarakallah Alhamdulillah.</p>

      <h2>5. Fasilitas Teras Kamar &amp; Kebersihan Ekstra</h2>

      <p>Urusan air minum, insyaAllah kita mah tidak perlu khawatir kekurangan. Air panas dan dingin semua tersedia di dispenser galon air mineral yang terpasang proper di setiap sudut teras kamar.</p>

      <p>Nggak ketinggalan kopi, teh, handuk, dan peralatan bersih-bersih lainnya disediakan dengan rapi dan bersih.</p>

      <h2>Kesimpulan: Apakah Worth It Menginap di Sini?</h2>

      <p>Penginapan ini memang cocok banget untuk "Orang Baik" (sesuai tagline Hotel Kusuma tersebut). MashaAllah Tabarakallah untuk owner dan para partner kerjanya yang terlihat melayani kami sekeluarga dari hati.</p>

      <p>Worth it! Kalo kamu lagi di Jogja dan sedang nyari referensi penginapan yang aman dari bau asap rokok, syariah, bersih, sarapan enak, beukh! Langsung aja meluncur ke lokasi.</p>

      <p><strong>Alamat Kusuma Hotel Syariah Yogyakarta:</strong><br>
      Jl. Wijaya Kusuma No.29, Dero, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.</p>

      <p>Have a beautiful day! 👍</p>
    `
  },
  {
    id: 1,
    slug: "belajar-css-dari-nol",
    title: "Belajar CSS dari Nol: Apa yang Tidak Diajarkan Tutorial",
    category: "Coding",
    date: "Apr 2026",
    dateISO: "2026-04-15",
    metaTitle: "Belajar CSS dari Nol: Apa yang Tidak Diajarkan Tutorial",
    metaDescription: "Kebanyakan tutorial CSS mengajarkan syntax, bukan cara berpikir. Ini yang sebenarnya perlu kamu pahami sebelum nulis satu baris pun.",
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
    slug: "coding-sambil-tetap-konsisten-di-gym",
    title: "Cara Saya Coding Sambil Tetap Konsisten di Gym",
    category: "Lifestyle",
    date: "Mar 2026",
    dateISO: "2026-03-15",
    metaTitle: "Cara Saya Coding Sambil Tetap Konsisten di Gym",
    metaDescription: "Dua hal yang katanya tidak bisa jalan bersamaan. Tapi setelah beberapa bulan mencoba, ini yang aku temukan.",
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
    slug: "kenapa-rap-dan-coding-mirip",
    title: "Kenapa Rap dan Coding Lebih Mirip dari yang Kamu Kira",
    category: "Musik",
    date: "Feb 2026",
    dateISO: "2026-02-15",
    metaTitle: "Kenapa Rap dan Coding Lebih Mirip dari yang Kamu Kira",
    metaDescription: "Dua skill yang kelihatannya tidak nyambung sama sekali. Tapi semakin dalam aku masuk ke keduanya, semakin banyak yang terasa sama.",
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

// Supaya posts.js bisa dipakai di Node (scripts/build.mjs) maupun browser
if (typeof module !== "undefined") {
  module.exports = posts;
}
