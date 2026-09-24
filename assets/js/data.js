/* =========================================================================
   DATA PORTOFOLIO
   -------------------------------------------------------------------------
   Semua isi web ada di file ini. Untuk menambah / mengubah projek,
   sertifikat, CV, dll cukup edit bagian di bawah — tidak perlu
   menyentuh HTML.

   Aturan gambar:
   - Projek     : projects/<slug>/cover.jpg (+ 1.jpg, 2.jpg, ...)
   - Sertifikat : certificates/<nama-file>.jpg
   Pakai huruf kecil & tanda hubung, tanpa spasi.
   ========================================================================= */

const PROFILE = {
  name: "Ahnaf Ralip Jovian",
  nickname: "Jovian",
  role: "Frontend Developer & UI/UX Designer",
  school: "SMK Telkom Purwokerto · RPL",
  location: "Purwokerto, ID",
  timezone: "Asia/Jakarta", // untuk jam live di hero
  available: true, // badge "Available for work"
  photo: "assets/img/profile.jpg", // foto hero
  photoAlt: "assets/img/profile-alt.jpg", // foto About & CV
  heroLines: ["Design.", "Code.", "Play."], // baris ke-2 tampil bergaris tepi
  heroIntro:
    "Hai, saya Jovian — pelajar Rekayasa Perangkat Lunak yang merancang tampilan, membangun website & aplikasi, dan membuat game yang seru dimainkan.",
  aboutLead:
    "Saya suka mengubah ide menjadi sesuatu yang bisa dilihat, disentuh, dan dimainkan.",
  about: [
    "Nama saya Ahnaf Ralip Jovian, lahir di Gunungkidul pada 27 Juli 2009. Sekarang saya belajar Rekayasa Perangkat Lunak di SMK Telkom Purwokerto.",
    "Setiap projek saya mulai dari sketsa di Figma, lalu saya wujudkan jadi website, aplikasi, ilustrasi, atau game. Di luar ngoding, saya suka berenang dan bermain game — dua hal yang bikin saya tetap produktif dan terinspirasi.",
  ],
  facts: [
    { label: "Sekolah", value: "SMK Telkom Purwokerto" },
    { label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
    { label: "Asal", value: "Banyumas, Jawa Tengah" },
    { label: "Hobi", value: "Renang & Game" },
  ],
  cv: "", // contoh: "assets/cv-ahnaf-ralip-jovian.pdf" — kosongkan jika belum ada
  cvUpdated: "", // contoh: "September 2026"
};

/* Kontak & sosial media — kosongkan ("") yang tidak dipakai */
const CONTACT = {
  email: "",
  whatsapp: "6288238231258", // format internasional tanpa + dan tanpa 0 di depan
  instagram: "arj_jov",
  github: "arjjovian",
  linkedin: "", // contoh: "ahnaf-ralip-jovian"
};

/* Teks pada marquee */
const MARQUEE = ["Frontend Developer", "UI/UX Designer", "Game Developer", "Graphic Designer", "Mobile Apps"];

/* What I Do. Item dengan cta: true tampil sebagai kartu "Jasa" lebar */
const SERVICES = [
  {
    title: "UI/UX Design",
    lead: "Merancang tampilan aplikasi dan website yang jelas, nyaman, dan enak dilihat di Figma.",
    points: ["Wireframe", "User flow", "High-fidelity UI", "Prototype"],
    image: "projects/arjov-shop/cover.jpg",
  },
  {
    title: "Web Development",
    lead: "Mengubah desain menjadi website responsif yang benar-benar bisa dipakai.",
    points: ["HTML & CSS", "JavaScript", "PHP & MySQL", "Responsive"],
    image: "projects/usaha-kita/cover.jpg",
  },
  {
    title: "Game Development",
    lead: "Membangun game 2D di Unity dengan C#: gerakan, musuh, level, dan menu.",
    points: ["Unity", "C#", "Level design", "Game UI"],
    image: "projects/explorer-journey/cover.jpg",
  },
  {
    title: "Mobile Apps",
    lead: "Membuat aplikasi Android sederhana dengan alur yang mudah dipahami pengguna.",
    points: ["Android (APK)", "UI mobile", "Navigasi", "Data"],
    image: "",
  },
  {
    title: "Graphic Design",
    lead: "Ilustrasi vektor, desain CV, poster, sampai konten media sosial dan video.",
    points: ["Vektor", "Desain CV", "Poster", "Editing video"],
    image: "projects/om-nom-stories/cover.jpg",
  },
  {
    title: "Jasa Pembuatan Website",
    lead: "Butuh website untuk usaha, organisasi, atau pribadi? Saya bantu dari desain sampai website kamu online dan siap dibagikan.",
    points: ["Landing page", "Company profile", "Website portofolio", "Figma → Website", "Bantu online-kan", "Revisi"],
    cta: true,
  },
];

/* Pendidikan — urutkan dari yang TERBARU. Tampil sebagai timeline dari kiri (terlama) ke kanan. */
const EDUCATION = [
  {
    school: "SMK Telkom Purwokerto",
    level: "SMK · Rekayasa Perangkat Lunak",
    period: "Sekarang",
    description: "Mendalami pengembangan web, basis data, desain UI/UX, dan pemrograman game.",
    map: "https://www.google.com/maps/search/?api=1&query=SMK+Telkom+Purwokerto",
    current: true,
  },
  {
    school: "SMP Negeri 1 Ajibarang",
    level: "Sekolah Menengah Pertama",
    period: "",
    description: "Tempat saya pertama kali penasaran dengan teknologi dan dunia digital.",
    map: "https://www.google.com/maps/search/?api=1&query=SMP+Negeri+1+Ajibarang",
  },
  {
    school: "SD Negeri 2 Ajibarang Kulon",
    level: "Sekolah Dasar",
    period: "",
    description: "Awal dari semuanya: tahun-tahun pertama belajar, membaca, dan rasa ingin tahu.",
    map: "https://www.google.com/maps/search/?api=1&query=SD+Negeri+2+Ajibarang+Kulon",
  },
];

/* Projek.
   category : salah satu kunci di PROJECT_CATEGORIES
   role     : keterangan kecil, contoh "Design & Development"
   featured : true = kartu dibuat lebar (tampil paling depan)
   Kategori yang belum punya projek otomatis disembunyikan dari filter. */
const PROJECT_CATEGORIES = {
  Web: "Web",
  Mobile: "Mobile",
  Game: "Game",
  "UI/UX": "UI/UX",
  Design: "Design",
};

const PROJECTS = [
  {
    slug: "usaha-kita",
    title: "Usaha Kita",
    category: "Web",
    role: "Design & Development",
    year: "2025",
    summary: "Website pendamping UMKM untuk mulai berjualan online.",
    description:
      "Website pendamping UMKM untuk memulai bisnis online. Pengguna bisa mendaftar dan masuk, lalu mengakses beranda, panduan memulai bisnis (riset pasar, branding, pemasaran online, layanan pelanggan), katalog produk lokal unggulan, dan halaman komunitas.",
    tools: ["HTML", "CSS", "JavaScript"],
    images: ["cover.jpg", "1.jpg", "2.jpg"],
    links: { github: "https://github.com/arjjovian/mk3-usahakita" },
    featured: true,
  },
  {
    slug: "explorer-journey",
    title: "Explorer Journey",
    category: "Game",
    role: "Game Development",
    year: "2026",
    summary: "Game platformer 2D yang dibuat dengan Unity & C#.",
    description:
      "Game platformer 2D. Pemain menjelajahi level, mengumpulkan koin, menghindari musuh yang berpatroli, dan mencapai titik finish. Dibuat dengan Unity dan C#, lengkap dengan menu pemilihan level, kamera yang mengikuti pemain, dan musik 8-bit.",
    tools: ["Unity", "C#"],
    images: ["cover.jpg"],
    links: { github: "https://github.com/arjjovian/ExplorerJourney-Unity" },
  },
  {
    slug: "arjov-shop",
    title: "Arjov Shop",
    category: "UI/UX",
    role: "UI/UX Design",
    year: "",
    summary: "Desain landing page toko sepatu online di Figma.",
    description:
      "Desain landing page untuk toko sepatu online “Arjov Shop” di Figma. Fokus pada hero yang bersih, susunan produk yang menarik, dan tombol ajakan membeli yang jelas.",
    tools: ["Figma"],
    images: ["cover.jpg"],
    links: {},
  },
  {
    slug: "om-nom-stories",
    title: "Om Nom Stories",
    category: "Design",
    role: "Vector Illustration",
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
    title: "Telkom Medika",
    category: "Design",
    role: "Vector Illustration",
    year: "",
    summary: "Ilustrasi vektor gedung klinik bergaya flat.",
    description: "Ilustrasi vektor bergaya flat dari gedung klinik Telkom Medika, menyederhanakan bentuk bangunan menjadi bidang warna yang bersih.",
    tools: ["Adobe Illustrator"],
    images: ["cover.jpg"],
    links: {},
  },
  {
    slug: "vektor-wajah",
    title: "Self Portrait",
    category: "Design",
    role: "Vector Illustration",
    year: "",
    summary: "Potret diri dalam gaya vektor hitam-putih.",
    description: "Potret diri yang digambar ulang sebagai ilustrasi vektor hitam-putih dengan gaya garis minimalis.",
    tools: ["Adobe Illustrator"],
    images: ["cover.jpg"],
    links: {},
  },
];

/* Sertifikat. Section otomatis muncul kalau array ini ada isinya. Contoh:
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2026",
    description: "Kelas dasar HTML & CSS ...",
    tags: ["HTML", "CSS"],
    image: "belajar-dasar-web.jpg",                      // file di folder certificates/
    link: "https://www.dicoding.com/certificates/XXXX", // boleh ""
  },
*/
const CERTIFICATES = [];

/* Tech & Stack. icon = class Devicon (https://devicon.dev), boleh kosong */
const STACK = [
  {
    group: "Languages",
    items: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
  },
  { group: "Data & Backend", items: [{ name: "MySQL", icon: "devicon-mysql-plain" }] },
  { group: "Game", items: [{ name: "Unity", icon: "devicon-unity-plain" }] },
  {
    group: "Design & Media",
    items: [
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Illustrator", icon: "devicon-illustrator-plain" },
      { name: "Video Editing", icon: "" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Laragon", icon: "" },
    ],
  },
];
