# Portofolio — Ahnaf Ralip Jovian

Website portofolio pribadi bergaya monokrom editorial: hero, about, what I do (keahlian & jasa),
education, selected work, certificates, tech stack, CV, dan kontak.
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
  description: "Penjelasan lengkap yang muncul saat kartu diklik.",
  tools: ["Kotlin", "Firebase"],
  images: ["cover.jpg", "1.jpg", "2.jpg"],
  links: {                        // semua opsional
    demo: "https://...",
    github: "https://github.com/...",
    figma: "https://figma.com/...",
    download: "https://.../app.apk",
  },
},
```

## Menambah sertifikat

Masukkan gambarnya ke `certificates/`, lalu tambahkan datanya di array `CERTIFICATES`.
Section **Sertifikat** otomatis muncul begitu array ini ada isinya.

```js
{
  title: "Nama Sertifikat",
  issuer: "Penerbit",
  year: "2026",
  description: "Penjelasan singkat sertifikat.",
  tags: ["HTML", "CSS"],
  image: "nama-file.jpg",
  link: "",
},
```

## Menambah CV

Taruh file PDF di `assets/`, misalnya `assets/cv-ahnaf-ralip-jovian.pdf`. Setelah itu isi `PROFILE.cv` dan `PROFILE.cvUpdated` di `data.js`.
Tombol **Lihat CV** dan **Download PDF** akan muncul otomatis.

## Bagian lain di data.js

- `SERVICES`: daftar di section What I Do. Pakai `cta: true` untuk menampilkan tombol "Pesan Sekarang".
- `STACK`: baris-baris di section Tech & Stack.
- `MARQUEE`: teks pada pita berjalan.
- `PROFILE.heroLeft` / `heroRight`: dua kata besar di hero.
- `PROFILE.statement`: kalimat besar yang menyala saat di-scroll.

## Tips gambar

- Kecilkan ukuran file dulu di [squoosh.app](https://squoosh.app) atau [tinypng.com](https://tinypng.com). Targetnya lebar maksimal sekitar 1600px dan ukuran di bawah 300 KB.
- Rasio 16:10 paling pas untuk cover projek.
