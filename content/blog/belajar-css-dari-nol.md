---
title: "Belajar CSS dari Nol: Apa yang Tidak Diajarkan Tutorial"
category: "Coding"
date: "Apr 2026"
dateISO: "2026-04-15"
excerpt: "Kebanyakan tutorial CSS mengajarkan syntax, bukan cara berpikir. Ini yang sebenarnya perlu kamu pahami sebelum nulis satu baris pun."
---

Waktu pertama kali belajar CSS, aku pikir cukup hafal property-nya. **Salah besar.**

CSS itu bukan soal hafalan — ia soal cara berpikir tentang layout, tentang bagaimana elemen mengambil ruang, dan tentang mengapa browser membuat keputusan yang ia buat.

## Yang tidak diajarkan tutorial

Tutorial bilang: "pakai `display: flex` untuk layout horizontal." Tapi tidak ada yang bilang kenapa `justify-content` tidak bekerja kalau parent tidak punya extra space. Tidak ada yang jelasin bahwa `align-items` bekerja di cross axis, bukan main axis.

Dan yang paling sering dilewat: **CSS gagal diam-diam.** Typo di property name? Browser skip tanpa error. Kamu duduk bingung kenapa transisi tidak jalan, padahal masalahnya cuma satu huruf salah di `cubic-bezier`.

## Cara belajar yang benar

Buka DevTools. Selalu. Setiap kali nulis CSS, buka panel Styles dan lihat apa yang browser tangkap. Property yang dicoret = tidak valid. Property yang tidak muncul = nama salah.

DevTools adalah guru yang paling jujur — ia tidak pernah bohong tentang apa yang sebenarnya terjadi.

## Satu prinsip yang mengubah segalanya

Sebelum nulis CSS, tanya dulu: *"apakah animasi ini perlu browser menghitung ulang layout?"* Kalau iya — pakai `transform` sebagai gantinya. Itu saja sudah membuat animasimu 10x lebih smooth.
