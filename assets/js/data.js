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
  role: "UI/UX Designer & Frontend Developer",
  school: "SMK Telkom Purwokerto · RPL",
  location: "Purwokerto, ID",
  timezone: "Asia/Jakarta", // untuk jam live di hero
  available: true, // badge "Available for work"
  photo: "assets/img/profile.jpg", // foto hero
  photoAlt: "assets/img/profile-alt.jpg", // foto About
  heroLines: ["Design.", "Code.", "Play."], // baris ke-2 tampil bergaris tepi
  heroIntro:
    "Hai, saya Jovian — siswa Rekayasa Perangkat Lunak yang merancang tampilan web & aplikasi, lalu mewujudkannya jadi produk yang nyaman dipakai.",
  aboutLead:
    "Saya suka mengubah ide menjadi sesuatu yang bisa dilihat, disentuh, dan dimainkan.",
  about: [
    "Nama saya Ahnaf Ralip Jovian, siswa kelas XI jurusan Rekayasa Perangkat Lunak di SMK Telkom Purwokerto. Minat utama saya ada di UI/UX Design dan desain grafis.",
    "Saya terbiasa mengerjakan projek sekolah yang menuntut kreativitas, ketelitian, dan kerja sama tim — mulai dari desain di Figma, ilustrasi vektor, sampai website dan aplikasi Android. Di luar itu, saya suka berenang dan bermain game.",
  ],
  facts: [
    { label: "Sekolah", value: "SMK Telkom Purwokerto" },
    { label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
    { label: "Asal", value: "Ajibarang, Banyumas" },
    { label: "Fokus", value: "UI/UX & Desain Grafis" },
  ],
  cv: "assets/cv-ahnaf-ralip-jovian.pdf", // kosongkan ("") jika belum ada
  cvPreview: "assets/img/cv-preview.jpg", // gambar halaman CV untuk pratinjau
  cvUpdated: "2026",
};

/* Kontak & sosial media — kosongkan ("") yang tidak dipakai */
const CONTACT = {
  email: "arjjovian@gmail.com",
  whatsapp: "62882006534564", // format internasional tanpa + dan tanpa 0 di depan
  whatsappLabel: "+62 882-0065-34564", // cara nomor ditampilkan
  instagram: "arj_jov",
  github: "arjjovian",
  linkedin: "ahnaf-ralip-jovian-16b87a346",
};

/* Teks pada marquee */
const MARQUEE = ["UI/UX Designer", "Frontend Developer", "Mobile App Designer", "Graphic Designer", "Digital Marketing"];

/* What I Do. Item dengan cta: true tampil sebagai kartu "Jasa" lebar */
const SERVICES = [
  {
    title: "UI/UX Design",
    lead: "Merancang tampilan web dan aplikasi yang jelas, nyaman, dan enak dilihat di Figma.",
    points: ["Wireframe", "Prototype", "Usability testing", "Design system"],
    image: "projects/jokop/cover.jpg",
  },
  {
    title: "Web Design & Development",
    lead: "Dari desain web responsif sampai jadi website yang benar-benar bisa dipakai.",
    points: ["Responsive UI", "HTML & CSS", "JavaScript", "PHP & MySQL"],
    image: "projects/baru-raya-toys/cover.jpg",
  },
  {
    title: "Mobile Apps",
    lead: "Merancang dan membangun aplikasi Android dengan alur yang mudah dipahami pengguna.",
    points: ["Android Studio", "Kotlin", "UI mobile", "Figma"],
    image: "projects/qursiku/cover.jpg",
  },
  {
    title: "Game Development",
    lead: "Membangun game 2D di Unity dengan C#: gerakan, musuh, level, dan menu.",
    points: ["Unity", "C#", "Level design", "Game UI"],
    image: "projects/explorer-journey/cover.jpg",
  },
  {
    title: "Graphic Design & Content",
    lead: "Ilustrasi vektor, poster, ID card, sampai konten media sosial dan digital marketing.",
    points: ["Vektor", "Poster & ID card", "Konten sosmed", "Copywriting"],
    image: "projects/om-nom-stories/cover.jpg",
  },
  {
    title: "Jasa Desain & Pembuatan Website",
    lead: "Butuh website atau desain aplikasi untuk usaha, organisasi, atau pribadi? Saya bantu dari desain di Figma sampai website kamu online dan siap dibagikan.",
    points: ["Desain UI di Figma", "Landing page", "Company profile", "Toko online", "Website portofolio", "Revisi"],
    cta: true,
  },
];

/* Pendidikan — urutkan dari yang TERBARU. Tampil sebagai timeline dari kiri (terlama) ke kanan. */
const EDUCATION = [
  {
    school: "SMK Telkom Purwokerto",
    level: "SMK · Rekayasa Perangkat Lunak",
    period: "2024 — Sekarang",
    description: "Fokus di UI/UX Design, desain grafis, dan dasar pemrograman. Terbiasa memakai Figma, Canva, Adobe Illustrator, dan VS Code.",
    map: "https://www.google.com/maps/search/?api=1&query=SMK+Telkom+Purwokerto",
    current: true,
  },
  {
    school: "SMP Negeri 1 Ajibarang",
    level: "Sekolah Menengah Pertama",
    period: "2021 — 2024",
    description: "Mengembangkan kreativitas dan kerja sama tim lewat berbagai kegiatan pembelajaran.",
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
  "UI/UX": "UI/UX",
  Game: "Game",
  Design: "Design",
};

const PROJECTS = [
  {
    slug: "baru-raya-toys",
    title: "Baru Raya Toys",
    category: "Web",
    role: "Web Design · Figma",
    year: "2024",
    summary: "Toko mainan online lengkap dengan blog parenting dan admin dashboard.",
    description:
      "Desain website toko mainan online. Pembeli bisa mencari dan memfilter mainan, menyimpan ke wishlist, memasukkan ke keranjang, lalu memesan untuk diantar ke alamat. Ada juga blog parenting dan newsletter. Di sisi admin, pemilik toko bisa mengelola produk, pesanan, stok, supplier, promo & voucher, pelanggan, staff & role, sampai laporan.",
    tools: ["Figma", "UI/UX", "Web Design"],
    images: ["cover.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
    links: { figma: "https://www.figma.com/design/fk15PifsUaHqNu8QUm5V2R/Baru-Raya-toys" },
    featured: true,
  },
  {
    slug: "mesinpro",
    title: "MESINPRO",
    category: "Web",
    role: "Web Design · Figma",
    year: "2024",
    summary: "Toko alat berat & mesin industri dengan fitur bandingkan produk.",
    description:
      "Desain website toko alat berat dan mesin industri. Isinya katalog per kategori, detail produk lengkap dengan spesifikasi, fitur bandingkan produk, keranjang, dan checkout tiga langkah — mulai dari pilihan kargo atau armada alat berat, transfer bank, virtual account, sampai cicilan dan leasing.",
    tools: ["Figma", "UI/UX", "E-commerce"],
    images: ["cover.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    links: { figma: "https://www.figma.com/design/zIfR5hjhx405wCwfKF3Uy0/PSAJ-Mesin" },
    featured: true,
  },
  {
    slug: "qursiku",
    title: "Qursiku",
    category: "Mobile",
    role: "UI/UX & Android App",
    year: "2025",
    summary: "Aplikasi Android untuk pesan tiket bioskop online.",
    description:
      "Aplikasi pemesanan tiket bioskop digital. Pengguna bisa mendaftar, melihat film yang tayang dan yang akan datang, memilih jadwal dan kursi, memakai kode promo, lalu melihat ringkasan pesanan sebelum membayar. Tampilan dirancang di Figma, lalu dibangun dengan Android Studio dan Kotlin.",
    tools: ["Figma", "Android Studio", "Kotlin"],
    images: ["cover.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    links: {
      figma: "https://www.figma.com/design/BMbl86uYILTv3GWb6WOW1F/Untitled",
      github: "https://github.com/arjjovian/APK-Qursiku",
    },
  },
  {
    slug: "jokop",
    title: "Jokop — Jovian Kopi",
    category: "UI/UX",
    role: "Mobile App Design",
    year: "2025",
    summary: "Desain aplikasi pemesanan kopi untuk pick-up & delivery.",
    description:
      "Projek UI/UX aplikasi pemesanan kopi digital. Pengguna bisa memilih outlet, melihat menu populer dan kategori, mengatur ukuran, susu, dan tingkat manis, lalu menyelesaikan pesanan dan pembayaran. Fokusnya pada tampilan yang hangat, navigasi mudah, dan pengalaman yang nyaman.",
    tools: ["Figma", "UI/UX", "Mobile"],
    images: ["cover.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    links: { figma: "https://www.figma.com/design/74nQDQT2hruFGs9Wh3lC7m/DESIGN-JOKOP" },
  },
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
    role: "Landing Page Design",
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

/* Sertifikat. images = file di folder certificates/ (gambar pertama jadi cover). */
const CERTIFICATES = [
  {
    title: "AI Class ASEAN: AI for Youth",
    issuer: "ASEAN Foundation × Google.org",
    year: "2026",
    description: "Menyelesaikan 15 modul pembelajaran AI (12 jam) dari AI Ready ASEAN — mulai dari pengenalan AI, etika & keamanan data, prompt, sampai membuat aplikasi sederhana berbasis AI.",
    tags: ["Artificial Intelligence", "AI Ethics"],
    images: ["ai-class-asean-1.jpg", "ai-class-asean-2.jpg"],
    link: "",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2026",
    description: "Sertifikat kompetensi kelas dasar HTML & CSS (41 jam): struktur dan semantik HTML, styling, layout dengan Flexbox, dan halaman responsif. Ditutup dengan ujian akhir dan submission proyek website.",
    tags: ["HTML", "CSS", "Responsive"],
    images: ["dicoding-web-1.jpg", "dicoding-web-2.jpg", "dicoding-web-3.jpg"],
    link: "https://www.dicoding.com/certificates/2VX3V1O4JPYQ",
  },
  {
    title: "AI Ignition Training",
    issuer: "KUMPUL × AI Ignition Indonesia",
    year: "2026",
    description: "Pelatihan AI 30 JP dari AI Opportunity Fund: Asia Pacific (AVPN, Google.org, ADB) — kecerdasan artifisial, AI generatif, prompt engineering, LLM, dan penggunaan AI yang bertanggung jawab.",
    tags: ["Generative AI", "Prompt Engineering"],
    images: ["ai-ignition-1.jpg", "ai-ignition-2.jpg"],
    link: "",
  },
  {
    title: "Digital Marketing — Telkom DigiUp",
    issuer: "Telkom Indonesia · PT TPCC",
    year: "2025",
    description: "Program sertifikasi Digital Marketing Telkom DigiUp 2025 (26 JP) dengan grade Certified — strategi pemasaran digital, konten sosial media, copywriting, dan proyek promosi untuk Jokop.",
    tags: ["Digital Marketing", "Canva", "Copywriting"],
    images: ["digital-marketing-1.jpg", "digital-marketing-2.jpg"],
    link: "",
  },
  {
    title: "Azure AI Fundamentals (AI-900) Prep Course",
    issuer: "Microsoft × elevAIte Indonesia",
    year: "2025",
    description: "Kursus persiapan sertifikasi Microsoft Azure AI Fundamentals (AI-900) — konsep dasar AI dan layanan AI di cloud Microsoft Azure.",
    tags: ["Microsoft Azure", "Cloud AI"],
    images: ["azure-ai-900-1.jpg"],
    link: "",
  },
];
