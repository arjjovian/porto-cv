<?php include "./config.php"?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Ahnaf Ralip Jovian</title>
    <link rel="stylesheet" href="coba.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
</head>
<body>
    <header class="header">
        <a href="#" class="logo"><span>Arj</span>jovian</a>
    
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills & Education</a>
            <a href="#portfolio">Portfolio</a>
        </nav>
    
        <a href="#contact" class="contact">Contact</a>
    </header>

    <section id="home" class="section home">
        <div class="section-box">
            <h2>Hai</h2>
            <h1>Saya <span>Ahnaf Ralip Jovian</span><br> Frontend Developer</h1>
            <img src="arjovgtg.jpeg" alt="Profile Image" class="profile-image">
            <p>Halo! Saya Ahnaf Ralip Jovian, seorang progamming dan desain. Website ini berisi tentang saya,
                 pengalaman, dan keterampilan yang saya miliki. Jelajahi lebih lanjut untuk mengenal saya lebih dekat. Jangan ragu untuk menghubungi saya 
                 jika ingin berkolaborasi atau sekadar berbagi ide.</p>
        </div>
    </section>

    <section id="about" class="section about">
        <div class="section-box">
            <h2>About Me</h2>
            <p>  Saya adalah seorang pelajar dan Frontend Developer yang memiliki minat tinggi dalam dunia teknologi, khususnya di bidang pengembangan web.
                 Saya lahir pada tanggal 27 Juli 2009 di Gunungkidul. Saya merupakan Web Developer dan memiliki bakat di bidang Programming.
                Saat ini saya bersekolah di SMK Telkom Purwokerto. Saya selalu bersemangat untuk belajar hal baru dan menghadapi 
                 tantangan yang dapat meningkatkan keterampilan saya. Dengan pengalaman dalam Permograman dan design. Saya percaya bahwa kreativitas, kerja keras,
                 dan semangat untuk terus berkembang adalah kunci kesuksesan. Di waktu luang, saya senang melakukan aktivitas renang dan bermain game, yang membantu 
                 saya tetap produktif dan terinspirasi. Saya selalu terbuka untuk berkolaborasi dan berbagi ide dengan orang-orang yang memiliki visi yang sama.</p>
        </div>
    </section>

    <section id="skills" class="section skills">
        <div class="section-box">
            <h2>Skills & Education</h2>
            <ul>
               <b>--Skills--</b>
                <li>HTML, CSS, JavaScript</li>
                <li>Vektor Ai, Figma</li>
                <li>UI/UX Design, Editing Video</li>
                <b>--Education--</b>
                <li>SD Negeri 2 Ajibarang Kulon 
                <li>SMP Negeri 1 Ajibarang
                <li>SMK Telkom Purwokerto - Rekayasa Perangkat Lunak</li>
            </ul>
        </div>
    </section>

    <section id="portfolio" class="section portfolio">
        <div class="section-box">
            <h2>Portfolio</h2>
            <div class="portfolio-gallery">
                <div class="portfolio-item">
                    <img src="Telkom Medika.png" alt="Vektor Telkom Medika">
                    <p>Vektor Telkom Medika</p>
                </div>
                <div class="portfolio-item">
                    <img src="Figmapts.png" alt="Desain Figma E-commerce">
                    <p>Desain Figma E-commerce</p>
                </div>
                <div class="portfolio-item">
                    <img src="DPKC-VEKTORPTSselesaiges.png" alt="Vektor Tampilan Game">
                    <p>Vektor Tampilan Game</p>
                </div>
                <div class="portfolio-item">
                    <img src="vektor muka ahnaf.png" alt="Vektor Muka Saya">
                    <p>Vektor Muka Saya</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section contact-section">
        <div class="section-box">
            <h2>Contact Me</h2>
            <p>Jika Anda tertarik untuk bekerja sama atau ingin berdiskusi lebih lanjut mengenai proyek yang sedang Anda kerjakan, jangan ragu untuk menghubungi saya.</p>
            <form method="POST" action="">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="footer">
            <p>&copy; 2025 Ahnaf Ralip Jovian. SMK Telkom Purwokerto.</p>
        </div>
    </footer>
</body>
</html>