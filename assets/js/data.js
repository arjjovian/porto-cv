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
  wordmark: "Jovian", // nama besar di navbar & footer
  role: "Frontend Developer & UI/UX Designer",
  photo: "assets/img/profile.jpg", // foto hero
  photoAlt: "assets/img/profile-alt.jpg", // foto section Education & CV
  heroLeft: "Creative",
  heroRight: "Developer",
  heroIntro:
    "Pelajar Rekayasa Perangkat Lunak di SMK Telkom Purwokerto yang merancang, membangun, dan menghidupkan website, aplikasi, dan game.",
  heroOutro:
    "Dari sketsa di Figma sampai kode yang berjalan — setiap karya saya buat rapi, mudah dipakai, dan enak dilihat.",
  aboutLead:
    "Halo, saya Ahnaf Ralip Jovian — panggil saja Jovian. Pelajar RPL di SMK Telkom Purwokerto yang jatuh cinta pada desain, kode, dan game.",
  about:
    "Saya lahir di Gunungkidul pada 27 Juli 2009. Saya senang mengubah ide menjadi tampilan yang rapi dan mudah dipakai — mulai dari desain di Figma, ilustrasi vektor, sampai website dan game yang benar-benar bisa dijalankan. Di luar ngoding, saya suka berenang dan bermain game, dua hal yang membuat saya tetap produktif dan terinspirasi.",
  cv: "", // contoh: "assets/cv-ahnaf-ralip-jovian.pdf" — kosongkan jika belum ada
  cvUpdated: "", // contoh: "September 2026"
  statement:
    "Every pixel has a purpose. I design with curiosity, build with care, and keep learning with every project I ship.",
};

/* Kontak & sosial media — kosongkan ("") yang tidak dipakai */
const CONTACT = {
  email: "",
  whatsapp: "6288238231258", // format internasional tanpa + dan tanpa 0 di depan
  instagram: "arj_jov",
  github: "arjjovian",
  linkedin: "", // contoh: "ahnaf-ralip-jovian"
};

/* Teks pada pita berjalan */
const MARQUEE = ["Frontend Developer", "UI/UX Designer", "Game Developer", "Graphic Designer", "Website Services"];

/* What I Do — bidang keahlian + jasa. image = gambar latar (opsional) */
const SERVICES = [
  {
    title: "UI/UX Design",
    lead: "Merancang tampilan aplikasi dan website yang jelas, nyaman, dan enak dilihat — dari wireframe sampai desain siap dikembangkan di Figma.",
    points: ["Wireframe & user flow", "High-fidelity UI", "Prototype interaktif", "Desain responsif"],
    image: "projects/arjov-shop/cover.jpg",
  },
  {
    title: "Web Development",
    lead: "Mengubah desain menjadi website yang cepat, responsif, dan benar-benar bisa dipakai — dari landing page sampai web dengan login dan database.",
    points: ["HTML, CSS & JavaScript", "PHP & MySQL", "Layout responsif", "Form & dashboard"],
    image: "projects/usaha-kita/cover.jpg",
  },
  {
    title: "Mobile Apps",
    lead: "Membuat aplikasi Android sederhana dengan tampilan yang rapi dan alur yang mudah dipahami pengguna.",
    points: ["Aplikasi Android (APK)", "Desain UI mobile", "Navigasi antar halaman", "Pengolahan data"],
    image: "",
  },
  {
    title: "Game Development",
    lead: "Membangun game 2D di Unity dengan C#: gerakan pemain, musuh, item, level, sampai menu dan musik.",
    points: ["Game 2D di Unity (C#)", "Kontrol & gerakan pemain", "Musuh, koin & skor", "Level & menu game"],
    image: "projects/explorer-journey/cover.jpg",
  },
  {
    title: "Graphic Design",
    lead: "Membuat visual yang menarik perhatian: ilustrasi vektor, desain CV, poster, sampai konten media sosial.",
    points: ["Ilustrasi vektor", "Desain CV", "Poster & konten sosmed", "Editing video"],
    image: "projects/om-nom-stories/cover.jpg",
  },
  {
    title: "Website Services",
    lead: "Butuh website untuk usaha, organisasi, atau pribadi? Saya bantu dari desain sampai website kamu online dan siap dibagikan.",
    points: ["Landing page & company profile", "Website portofolio", "Desain Figma → website", "Bantu online-kan & revisi"],
    image: "projects/usaha-kita/1.jpg",
    cta: true, // tampilkan tombol "Pesan Sekarang"
  },
];

/* Pendidikan */
const EDUCATION_STORY =
  "Perjalanan saya dimulai di SD Negeri 2 Ajibarang Kulon, lalu SMP Negeri 1 Ajibarang, tempat saya mulai penasaran dengan dunia teknologi. Sekarang saya belajar Rekayasa Perangkat Lunak di SMK Telkom Purwokerto, mendalami pemrograman, desain, dan pengembangan game.";

const EDUCATION = [
  {
    school: "SMK Telkom Purwokerto",
    level: "Rekayasa Perangkat Lunak",
    period: "Sekarang",
    description: "Belajar pengembangan web, basis data, desain UI/UX, dan pemrograman game.",
    map: "https://www.google.com/maps/search/?api=1&query=SMK+Telkom+Purwokerto",
  },
  {
    school: "SMP Negeri 1 Ajibarang",
    level: "Sekolah Menengah Pertama",
    period: "",
    description: "Tempat saya pertama kali tertarik dengan teknologi dan dunia digital.",
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
   role     : keterangan kecil di baris projek, contoh "Design & Development"
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
    description:
      "Website pendamping UMKM untuk memulai bisnis online. Pengguna bisa mendaftar dan masuk, lalu mengakses beranda, panduan memulai bisnis (riset pasar, branding, pemasaran online, layanan pelanggan), katalog produk lokal unggulan, dan halaman komunitas.",
    tools: ["HTML", "CSS", "JavaScript"],
    images: ["cover.jpg", "1.jpg", "2.jpg"],
    links: { github: "https://github.com/arjjovian/mk3-usahakita" },
  },
  {
    slug: "explorer-journey",
    title: "Explorer Journey",
    category: "Game",
    role: "Game Development",
    year: "2026",
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

/* Tech & Stack */
const STACK = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "PHP", "C#"] },
  { group: "Data & Backend", items: ["MySQL"] },
  { group: "Game Development", items: ["Unity"] },
  { group: "Design & Media", items: ["Figma", "Adobe Illustrator", "Video Editing"] },
  { group: "Tools", items: ["VS Code", "Git & GitHub", "Laragon"] },
];
