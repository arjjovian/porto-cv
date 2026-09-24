# Portofolio — Ahnaf Ralip Jovian

Website portofolio pribadi bertema gelap yang kalem (tanpa warna mencolok): hero, about, services (keahlian & jasa),
education, selected work, certificates, stats, tech stack, CV, dan kontak.
Dibuat dengan HTML, CSS, dan JavaScript murni. Tidak perlu database atau build tool.

## Menjalankan

- **Laragon:** taruh folder ini di `D:\laragon\www\PORTOFOLIO`, lalu buka `http://localhost/PORTOFOLIO`.
- **Tanpa server:** klik dua kali `index.html`.
- **Online gratis:** upload ke GitHub, lalu aktifkan **Settings → Pages** (branch `main`, folder `/root`). Bisa juga lewat Vercel atau Netlify.

## Struktur

```
index.html            halaman utama
assets/css/style.css  tampilan
assets/js/data.js     ← SEMUA ISI WEB ADA DI SINI
assets/js/main.js     logika tampilan (tidak perlu diubah)
assets/img/           foto profil
projects/<slug>/      gambar projek: cover.jpg, 1.jpg, 2.jpg, ...
certificates/         gambar sertifikat
```

## Menambah projek

1. Buat folder `projects/nama-projek/` (huruf kecil, tanpa spasi).
2. Masukkan `cover.jpg` sebagai gambar utama, lalu `1.jpg`, `2.jpg`, dan seterusnya untuk screenshot lain.
3. Tambahkan data projeknya di array `PROJECTS` dalam `assets/js/data.js`:

```js
{
  slug: "nama-projek",            // sama dengan nama folder
  title: "Nama Projek",
  category: "Mobile",             // Web | Mobile | Game | UI/UX | Design
  role: "UI/UX & Development",    // keterangan kecil di baris projek
  year: "2026",
  summary: "Satu kalimat singkat untuk kartu.",
  description: "Penjelasan lengkap yang muncul saat kartu diklik.",
  tools: ["Kotlin", "Firebase"],
  images: ["cover.jpg", "1.jpg", "2.jpg"],
  links: {                        // semua opsional
    demo: "https://...",
    github: "https://github.com/...",
    figma: "https://figma.com/...",
    download: "https://.../app.apk",
  },
  featured: true,                 // opsional: kartu dibuat lebar & tampil paling depan
},
```

## Menambah sertifikat

Masukkan gambarnya ke `certificates/`, lalu tambahkan datanya di array `CERTIFICATES`.
Gambar pertama di `images` jadi cover kartu. Gambar berikutnya (misalnya halaman modul) tampil di galeri saat kartu diklik.
Section **Sertifikat** otomatis muncul begitu array ini ada isinya.

```js
{
  title: "Nama Sertifikat",
  issuer: "Penerbit",
  year: "2026",
  description: "Penjelasan singkat sertifikat.",
  tags: ["HTML", "CSS"],
  images: ["nama-file-1.jpg", "nama-file-2.jpg"],
  link: "",                       // link verifikasi, boleh kosong
},
```

## Menambah CV

CV ada di `assets/cv-ahnaf-ralip-jovian.pdf`, dan gambar pratinjaunya di `assets/img/cv-preview.jpg`.
Kalau CV diperbarui, ganti kedua file itu (nama file tetap sama), lalu sesuaikan `PROFILE.cvUpdated` di `data.js`.
Versi di web sengaja tidak mencantumkan alamat rumah lengkap.

## Bagian lain di data.js

- `SERVICES`: kartu di section Services. Item dengan `cta: true` tampil sebagai kartu **Jasa** yang lebar.
- `STACK`: kelompok tools di section Tech stack. `icon` memakai class dari [devicon.dev](https://devicon.dev).
- `MARQUEE`: teks berjalan di bawah hero.
- `PROFILE.heroLines`: tiga baris judul besar di hero.
- Warna tombol utama (`--accent`) dan aksen dekoratif abu-abu (`--soft`) ada di bagian atas `assets/css/style.css`.

## Tips gambar

- Kecilkan ukuran file dulu di [squoosh.app](https://squoosh.app) atau [tinypng.com](https://tinypng.com). Targetnya lebar maksimal sekitar 1600px dan ukuran di bawah 300 KB.
- Rasio 16:10 paling pas untuk cover projek.
