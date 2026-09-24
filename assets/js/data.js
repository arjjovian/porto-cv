/* =========================================================================
   DATA PORTOFOLIO
   -------------------------------------------------------------------------
   Semua isi web ada di file ini. Untuk menambah / mengubah projek,
   sertifikat, pengalaman, dll cukup edit bagian di bawah — tidak perlu
   menyentuh HTML.

   Aturan gambar:
   - Projek     : projects/<nama-folder>/cover.jpg (+ 1.jpg, 2.jpg, ...)
   - Sertifikat : certificates/<nama-file>.jpg
   Pakai huruf kecil & tanda hubung, tanpa spasi.
   ========================================================================= */

const PROFILE = {
  name: "Ahnaf Ralip Jovian",
  nickname: "Jovian",
  role: "Frontend Developer & UI/UX Designer",
  tagline:
    "Pelajar RPL di SMK Telkom Purwokerto yang suka membangun website, merancang antarmuka, dan membuat game.",
  location: "Banyumas, Jawa Tengah",
  photo: "assets/img/profile.jpg",
  photoAlt: "assets/img/profile-alt.jpg",
  cv: "", // contoh: "assets/cv-ahnaf-ralip-jovian.pdf" — kosongkan jika belum ada
  available: true, // badge "Terbuka untuk kolaborasi"
  about: [
    "Halo! Saya Ahnaf Ralip Jovian, pelajar jurusan Rekayasa Perangkat Lunak di SMK Telkom Purwokerto. Saya lahir di Gunungkidul pada 27 Juli 2009 dan punya minat besar di dunia teknologi, khususnya pengembangan web dan desain.",
    "Saya senang mengubah ide menjadi tampilan yang rapi dan mudah dipakai — mulai dari desain di Figma, ilustrasi vektor, sampai website dan game yang benar-benar bisa dijalankan. Saya selalu bersemangat mempelajari hal baru dan menghadapi tantangan yang membuat saya berkembang.",
    "Di luar ngoding, saya suka berenang dan bermain game — dua hal yang membantu saya tetap produktif dan terinspirasi.",
  ],
  facts: [
    { label: "Sekolah", value: "SMK Telkom Purwokerto" },
    { label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
    { label: "Lokasi", value: "Banyumas, Jawa Tengah" },
    { label: "Hobi", value: "Renang & Game" },
  ],
};

/* Kontak & sosial media — kosongkan ("") yang tidak dipakai */
const CONTACT = {
  email: "",
  whatsapp: "6288238231258", // format internasional tanpa + dan tanpa 0 di depan
  instagram: "arj_jov",
  github: "arjjovian",
  linkedin: "", // contoh: "ahnaf-ralip-jovian"
};

/* Skill / tech stack. icon = nama class Devicon (https://devicon.dev), boleh kosong */
const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    group: "Backend & Database",
    items: [
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "MySQL", icon: "devicon-mysql-original" },
    ],
  },
  {
    group: "Game Development",
    items: [
      { name: "Unity", icon: "devicon-unity-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
  },
  {
    group: "Desain",
    items: [
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Adobe Illustrator", icon: "devicon-illustrator-plain" },
      { name: "UI/UX Design", icon: "" },
      { name: "Editing Video", icon: "" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
    ],
  },
];

/* Projek. category harus salah satu dari PROJECT_CATEGORIES.
   Kategori yang belum punya projek otomatis disembunyikan dari filter.
   - Web           : website
   - Aplikasi      : aplikasi Android / APK
   - Game          : game 2D / 3D
   - UI/UX         : desain Figma, mockup, prototype
   - Desain Grafis : vektor, poster, logo, desain CV, dll */
const PROJECT_CATEGORIES = ["Web", "Aplikasi", "Game", "UI/UX", "Desain Grafis"];

const PROJECTS = [
  {
    slug: "usaha-kita",
    title: "Usaha Kita",
    category: "Web",
    year: "2025",
    summary: "Website pendamping UMKM untuk mulai berjualan online.",
    description:
      "Usaha Kita adalah website yang membantu pelaku usaha kecil memulai bisnis online. Pengguna bisa mendaftar dan masuk, lalu mengakses beranda, panduan memulai bisnis (riset pasar, branding, pemasaran online, layanan pelanggan), katalog produk lokal unggulan, dan halaman komunitas.",
    tools: ["HTML", "CSS", "JavaScript"],
    images: ["cover.jpg", "1.jpg", "2.jpg"],
    links: { github: "https://github.com/arjjovian/mk3-usahakita" },
    featured: true,
  },
  {
    slug: "explorer-journey",
    title: "Explorer Journey",
    category: "Game",
    year: "2026",
    summary: "Game platformer 2D yang dibuat dengan Unity.",
    description:
      "Explorer Journey adalah game platformer 2D. Pemain menjelajahi level, mengumpulkan koin, menghindari musuh yang berpatroli, dan mencapai titik finish. Dibuat dengan Unity dan C#, lengkap dengan menu pemilihan level, kamera yang mengikuti pemain, dan musik 8-bit.",
    tools: ["Unity", "C#"],
    images: ["cover.jpg"],
    links: { github: "https://github.com/arjjovian/ExplorerJourney-Unity" },
    featured: true,
  },
  {
    slug: "arjov-shop",
    title: "Arjov Shop",
    category: "UI/UX",
    year: "",
    summary: "Desain landing page toko sepatu online.",
    description:
      "Desain antarmuka landing page untuk toko sepatu online “Arjov Shop”, dibuat di Figma. Fokus pada hero yang bersih, susunan produk yang menarik, dan tombol ajakan membeli yang jelas.",
    tools: ["Figma"],
    images: ["cover.jpg"],
    links: {},
    featured: true,
  },
  {
    slug: "om-nom-stories",
    title: "Om Nom Stories",
    category: "Desain Grafis",
    year: "",
    summary: "Ilustrasi vektor menu utama sebuah game.",
    description:
      "Ilustrasi vektor untuk tampilan menu utama game bertema Om Nom — logo, tombol Start / Menu / Exit, karakter, dan latar pemandangan dibuat sepenuhnya dengan vektor.",
    tools: ["Adobe Illustrator"],
    images: ["cover.jpg"],
    links: {},
  },
  {
    slug: "telkom-medika",
    title: "Vektor Telkom Medika",
    category: "Desain Grafis",
    year: "",
    summary: "Ilustrasi vektor gedung klinik Telkom Medika.",
    description:
      "Ilustrasi vektor bergaya flat dari gedung klinik Telkom Medika, menyederhanakan bentuk bangunan menjadi bidang warna yang bersih.",
    tools: ["Adobe Illustrator"],
    images: ["cover.jpg"],
    links: {},
  },
  {
    slug: "vektor-wajah",
    title: "Vektor Potret Diri",
    category: "Desain Grafis",
    year: "",
    summary: "Potret diri dalam gaya vektor hitam-putih.",
    description:
      "Potret diri yang digambar ulang sebagai ilustrasi vektor hitam-putih dengan gaya garis minimalis.",
    tools: ["Adobe Illustrator"],
    images: ["cover.jpg"],
    links: {},
  },
];

/* Sertifikat. Contoh isi:
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    image: "belajar-dasar-web.jpg",          // file di folder certificates/
    link: "https://www.dicoding.com/certificates/XXXX", // boleh ""
  },
*/
const CERTIFICATES = [];

/* Pengalaman (PKL, lomba, organisasi, freelance, dll). Contoh isi:
  {
    role: "Frontend Developer (PKL)",
    place: "PT Contoh Digital",
    period: "Jan 2026 – Mar 2026",
    description: "Membangun halaman ...",
  },
*/
const EXPERIENCES = [];

const EDUCATION = [
  {
    role: "Rekayasa Perangkat Lunak",
    place: "SMK Telkom Purwokerto",
    period: "Sekarang",
    description: "Belajar pengembangan web, basis data, desain UI/UX, dan pemrograman game.",
  },
  { role: "Sekolah Menengah Pertama", place: "SMP Negeri 1 Ajibarang", period: "", description: "" },
  { role: "Sekolah Dasar", place: "SD Negeri 2 Ajibarang Kulon", period: "", description: "" },
];
