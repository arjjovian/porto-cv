/* =========================================================================
   Render & interaksi. Isi konten ada di data.js.
   ========================================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Util ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const projectImg = (p, file) => `projects/${p.slug}/${file}`;
  const cover = (p) => (p.images && p.images.length ? projectImg(p, p.images[0]) : "");
  const chips = (list) => (list || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("");

  const socials = () => {
    const c = CONTACT;
    const out = [];
    if (c.whatsapp) out.push({ label: "WhatsApp", value: "+" + c.whatsapp, href: `https://wa.me/${c.whatsapp}` });
    if (c.instagram) out.push({ label: "Instagram", value: "@" + c.instagram, href: `https://instagram.com/${c.instagram}` });
    if (c.github) out.push({ label: "GitHub", value: c.github, href: `https://github.com/${c.github}` });
    if (c.linkedin) out.push({ label: "LinkedIn", value: c.linkedin, href: `https://www.linkedin.com/in/${c.linkedin}` });
    if (c.email) out.push({ label: "Email", value: c.email, href: `mailto:${c.email}` });
    return out;
  };
  const ext = (href) => (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "");

  /* ---------- Profil & teks umum ---------- */
  function renderProfile() {
    $$("[data-bind]").forEach((el) => { el.textContent = PROFILE[el.dataset.bind] || ""; });
    $$(".year").forEach((el) => { el.textContent = new Date().getFullYear(); });
    if (!PROFILE.available) $("#status").remove();

    $("#footerSocials").insertAdjacentHTML("beforeend", socials().map((s) => `<a href="${esc(s.href)}"${ext(s.href)}>${esc(s.label)}</a>`).join(""));
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    $("#heroTitle").innerHTML = PROFILE.heroLines
      .map((l, i) => `<span class="hero__line${i === 1 ? " hero__line--outline" : ""}${i === 2 ? " hero__line--accent" : ""}">${esc(l)}</span>`)
      .join("");
    $("#heroPhoto").src = PROFILE.photo;

    // Jam live
    const clock = $("#clock");
    const fmt = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: PROFILE.timezone || "Asia/Jakarta" });
    const tick = () => { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 20000);

    // Strip karya terbaru
    const latest = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => cover(p)).slice(0, 3);
    $("#latest").innerHTML = latest
      .map(
        ({ p, i }) => `
        <button type="button" class="mini" data-project="${i}">
          <img src="${esc(cover(p))}" alt="" />
          <span><strong>${esc(p.title)}</strong><span>${esc(PROJECT_CATEGORIES[p.category] || p.category)}${p.year ? " · " + esc(p.year) : ""}</span></span>
        </button>`
      )
      .join("");
  }

  /* ---------- Marquee ---------- */
  function renderMarquee() {
    const set = Array(3).fill(MARQUEE).flat().map((w) => `<span class="marquee__item">${esc(w)}</span>`).join("");
    $("#marquee").innerHTML = set + set; // dua set identik supaya loop mulus
  }

  /* ---------- About ---------- */
  function renderAbout() {
    $("#aboutPhoto").src = PROFILE.photoAlt || PROFILE.photo;
    $("#aboutBody").innerHTML = PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#facts").innerHTML = PROFILE.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("");
  }

  /* ---------- Services (bento) ---------- */
  function renderServices() {
    let n = 0;
    $("#bento").innerHTML = SERVICES.map((s) => {
      n++;
      if (s.cta) {
        return `
        <article class="svc svc--wide reveal">
          <div>
            <p class="svc__num">${pad(n)} — Jasa</p>
            <h3 class="svc__title">${esc(s.title)}</h3>
            <p class="svc__lead">${esc(s.lead)}</p>
            <a href="#contact" class="btn btn--dark" data-topic="Pembuatan website">Pesan Sekarang <span aria-hidden="true">→</span></a>
          </div>
          <div class="chips">${chips(s.points)}</div>
        </article>`;
      }
      return `
        <article class="svc reveal">
          ${s.image ? `<div class="svc__bg"><img src="${esc(s.image)}" alt="" loading="lazy" /></div>` : ""}
          <p class="svc__num">${pad(n)}</p>
          <h3 class="svc__title">${esc(s.title)}</h3>
          <p class="svc__lead">${esc(s.lead)}</p>
          <div class="chips">${chips(s.points)}</div>
        </article>`;
    }).join("");
  }

  /* ---------- Education (timeline, terlama → terbaru) ---------- */
  function renderEducation() {
    $("#timeline").innerHTML = EDUCATION.slice()
      .reverse()
      .map(
        (e, i) => `
        <li class="step reveal${e.current ? " is-current" : ""}">
          <div class="step__card">
            <p class="step__top"><span>${pad(i + 1)}</span>${e.current ? `<span class="step__now">${esc(e.period || "Sekarang")}</span>` : `<span>${esc(e.period || "")}</span>`}</p>
            <h3 class="step__school">${esc(e.school)}</h3>
            <p class="step__level">${esc(e.level)}</p>
            ${e.description ? `<p class="step__desc">${esc(e.description)}</p>` : ""}
            ${e.map ? `<a class="link" href="${esc(e.map)}" target="_blank" rel="noopener">Lihat lokasi <span aria-hidden="true">↗</span></a>` : ""}
          </div>
        </li>`
      )
      .join("");
  }

  /* ---------- Work ---------- */
  function renderWork() {
    const keys = Object.keys(PROJECT_CATEGORIES).filter((k) => PROJECTS.some((p) => p.category === k));
    const count = (k) => (k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === k).length);
    const tabs = $("#tabs");
    tabs.innerHTML = ["all", ...keys]
      .map((k, i) => `<button type="button" role="tab" class="tab${i === 0 ? " is-active" : ""}" aria-selected="${i === 0}" data-filter="${esc(k)}">${esc(k === "all" ? "Semua" : PROJECT_CATEGORIES[k])}<sup>${count(k)}</sup></button>`)
      .join("");

    const ordered = PROJECTS.map((p, i) => ({ p, i })).sort((a, b) => (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0) || a.i - b.i);
    $("#works").innerHTML = ordered
      .map(({ p, i }) => {
        const n = (p.images || []).length;
        return `
        <button type="button" class="work reveal${p.featured ? " work--featured" : ""}" data-project="${i}" data-category="${esc(p.category)}" aria-label="Lihat detail ${esc(p.title)}">
          <div class="work__media">
            ${n ? `<img src="${esc(cover(p))}" alt="${esc(p.title)}" loading="lazy" />` : ""}
            ${n > 1 ? `<span class="work__count">${n} gambar</span>` : ""}
            <span class="work__open">Lihat detail ↗</span>
          </div>
          <div class="work__info">
            <div>
              <h3 class="work__title">${esc(p.title)}</h3>
              <p class="work__summary">${esc(p.summary || "")}</p>
            </div>
            <p class="work__meta"><b>${esc(PROJECT_CATEGORIES[p.category] || p.category)}</b>${esc(p.year || "")}</p>
          </div>
        </button>`;
      })
      .join("");

    tabs.addEventListener("click", (e) => {
      const t = e.target.closest(".tab");
      if (!t) return;
      $$(".tab", tabs).forEach((x) => { x.classList.toggle("is-active", x === t); x.setAttribute("aria-selected", x === t); });
      const f = t.dataset.filter;
      $$(".work").forEach((w) => w.classList.toggle("is-hidden", f !== "all" && w.dataset.category !== f));
    });
  }

  function openProject(i, trigger) {
    const p = PROJECTS[i];
    const l = p.links || {};
    const links = [];
    if (l.demo) links.push({ label: "Kunjungi situs", href: l.demo, primary: true });
    if (l.figma) links.push({ label: "Buka di Figma", href: l.figma, primary: !l.demo });
    if (l.download) links.push({ label: "Download", href: l.download, primary: !l.demo && !l.figma });
    if (l.github) links.push({ label: "Source code", href: l.github });
    openDrawer(
      {
        meta: [PROJECT_CATEGORIES[p.category] || p.category, p.role, p.year].filter(Boolean).join(" · "),
        title: p.title,
        images: (p.images || []).map((f) => projectImg(p, f)),
        desc: p.description || p.summary,
        tags: p.tools,
        links,
      },
      trigger
    );
  }

  /* ---------- Certificates ---------- */
  function renderCertificates() {
    if (!CERTIFICATES.length) {
      $("#certificates").remove();
      $$('[data-needs="certificates"]').forEach((el) => el.remove());
      return;
    }
    const carousel = $("#carousel");
    carousel.innerHTML = CERTIFICATES.map(
      (c, i) => `
      <button type="button" class="cert" data-cert="${i}" aria-label="Lihat sertifikat ${esc(c.title)}">
        <div class="cert__img">${c.image ? `<img src="certificates/${esc(c.image)}" alt="${esc(c.title)}" loading="lazy" />` : ""}</div>
        <div class="cert__body">
          <h3 class="cert__title">${esc(c.title)}</h3>
          <p class="cert__meta">${esc([c.issuer, c.year].filter(Boolean).join(" · "))}</p>
        </div>
      </button>`
    ).join("");

    const step = () => ($(".cert", carousel) ? $(".cert", carousel).getBoundingClientRect().width + 20 : 300);
    $("#certPrev").addEventListener("click", () => carousel.scrollBy({ left: -step(), behavior: "smooth" }));
    $("#certNext").addEventListener("click", () => carousel.scrollBy({ left: step(), behavior: "smooth" }));
    carousel.addEventListener("click", (e) => {
      const b = e.target.closest(".cert");
      if (!b) return;
      const c = CERTIFICATES[+b.dataset.cert];
      openDrawer(
        {
          meta: [c.issuer, c.year].filter(Boolean).join(" · "),
          title: c.title,
          images: c.image ? [`certificates/${c.image}`] : [],
          desc: c.description,
          tags: c.tags,
          links: c.link ? [{ label: "Verifikasi sertifikat", href: c.link, primary: true }] : [],
        },
        b
      );
    });
  }

  /* ---------- Stats (angka menghitung naik) ---------- */
  function renderStats() {
    const tools = STACK.reduce((n, g) => n + g.items.length, 0);
    const stats = [
      { value: PROJECTS.length, suffix: "+", label: "Projek selesai" },
      { value: SERVICES.filter((s) => !s.cta).length, suffix: "", label: "Bidang keahlian" },
      { value: tools, suffix: "+", label: "Tools & bahasa" },
      CERTIFICATES.length
        ? { value: CERTIFICATES.length, suffix: "", label: "Sertifikat" }
        : { value: 100, suffix: "%", label: "Semangat belajar" },
    ];
    const el = $("#stats");
    el.innerHTML = stats
      .map((s) => `<div class="stat reveal"><p class="stat__num"><span data-count="${s.value}">${reduceMotion ? s.value : 0}</span><sup>${esc(s.suffix)}</sup></p><p class="stat__label">${esc(s.label)}</p></div>`)
      .join("");
    if (reduceMotion || !("IntersectionObserver" in window)) { $$("[data-count]", el).forEach((n) => { n.textContent = n.dataset.count; }); return; }

    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      $$("[data-count]", el).forEach((n) => {
        const target = +n.dataset.count;
        const start = performance.now();
        const run = (t) => {
          const k = Math.min(1, (t - start) / 1400);
          n.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      });
    }, { threshold: 0.4 });
    io.observe(el);
  }

  /* ---------- Stack ---------- */
  function renderStack() {
    $("#stackGrid").innerHTML = STACK.map(
      (g) => `
      <div class="stack__group reveal">
        <h3>${esc(g.group)}</h3>
        <div class="stack__list">${g.items.map((t) => `<span class="tool">${t.icon ? `<i class="${esc(t.icon)}" aria-hidden="true"></i>` : '<span class="tool__dot"></span>'}${esc(t.name)}</span>`).join("")}</div>
      </div>`
    ).join("");
  }

  /* ---------- CV ---------- */
  function renderCV() {
    const actions = [];
    if (PROFILE.cv) {
      actions.push(`<a class="btn btn--accent" href="${esc(PROFILE.cv)}" target="_blank" rel="noopener">Lihat CV <span aria-hidden="true">↗</span></a>`);
      actions.push(`<a class="btn btn--ghost" href="${esc(PROFILE.cv)}" download>Download PDF</a>`);
      if (PROFILE.cvUpdated) actions.push(`<span class="cv__note">Diperbarui ${esc(PROFILE.cvUpdated)}</span>`);
    } else {
      actions.push(`<a class="btn btn--accent" href="#contact" data-topic="Magang / kerja">Minta CV <span aria-hidden="true">→</span></a>`);
      actions.push(`<span class="cv__note">Versi PDF segera tersedia</span>`);
    }
    $("#cvActions").innerHTML = actions.join("");

    const tools = STACK.flatMap((g) => g.items.map((t) => t.name));
    $("#paper").innerHTML = `
      <div class="paper__bar"></div>
      <div class="paper__head">
        <img src="${esc(PROFILE.photoAlt || PROFILE.photo)}" alt="" loading="lazy" />
        <div><p class="paper__name">${esc(PROFILE.name)}</p><p class="paper__role">${esc(PROFILE.role)}</p></div>
      </div>
      <div class="paper__cols">
        <div><h4>Pendidikan</h4><ul>${EDUCATION.map((e) => `<li>${esc(e.school)}</li>`).join("")}</ul></div>
        <div><h4>Keahlian</h4><ul>${SERVICES.filter((s) => !s.cta).map((s) => `<li>${esc(s.title)}</li>`).join("")}</ul></div>
        <div><h4>Projek</h4><ul>${PROJECTS.slice(0, 4).map((p) => `<li>${esc(p.title)}</li>`).join("")}</ul></div>
        <div><h4>Tools</h4><ul>${tools.slice(0, 6).map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
      </div>`;
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    $("#quick").innerHTML = socials()
      .map((s) => `<li><a href="${esc(s.href)}"${ext(s.href)}><b>${esc(s.label)}</b><span>${esc(s.value)} ↗</span></a></li>`)
      .join("");

    const form = $("#form");
    const via = CONTACT.whatsapp ? "whatsapp" : CONTACT.email ? "email" : null;
    if (!via) { form.remove(); return; }
    $("#formHint").textContent = via === "whatsapp" ? "↳ terkirim lewat WhatsApp" : "↳ terkirim lewat email";

    // Tombol yang membawa "kebutuhan" tertentu ke form
    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-topic]");
      if (a) form.topic.value = a.dataset.topic;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const msg = form.message.value.trim();
      const err = $("#formError");
      if (!name || !msg) { err.hidden = false; (name ? form.message : form.name).focus(); return; }
      err.hidden = true;
      const text = `Halo ${PROFILE.nickname}, saya ${name}.\nKebutuhan: ${form.topic.value}\n\n${msg}`;
      const url =
        via === "whatsapp"
          ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
          : `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.topic.value + " — " + name)}&body=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Drawer detail ---------- */
  const drawer = $("#drawer");
  let gallery = [], gIndex = 0, lastFocus = null;

  function showImage(i) {
    if (!gallery.length) return;
    gIndex = (i + gallery.length) % gallery.length;
    $("#dImage").src = gallery[gIndex];
    $("#dCount").textContent = `${gIndex + 1} / ${gallery.length}`;
    $$(".thumb", drawer).forEach((t, k) => t.classList.toggle("is-active", k === gIndex));
  }

  function openDrawer(d, trigger) {
    lastFocus = trigger || document.activeElement;
    gallery = d.images || [];
    const multi = gallery.length > 1;
    $("#dStage").hidden = !gallery.length;
    $("#dPrev").hidden = $("#dNext").hidden = $("#dCount").hidden = !multi;
    $("#dThumbs").innerHTML = multi
      ? gallery.map((src, k) => `<button type="button" class="thumb" data-k="${k}" aria-label="Gambar ${k + 1}"><img src="${esc(src)}" alt="" /></button>`).join("")
      : "";
    $("#dImage").alt = d.title;
    showImage(0);
    $("#dMeta").textContent = d.meta || "";
    $("#dTitle").textContent = d.title;
    $("#dDesc").textContent = d.desc || "";
    $("#dTags").innerHTML = chips(d.tags);
    $("#dLinks").innerHTML = (d.links || [])
      .map((l) => `<a class="btn ${l.primary ? "btn--accent" : "btn--ghost"} btn--sm" href="${esc(l.href)}"${ext(l.href)}>${esc(l.label)} <span aria-hidden="true">↗</span></a>`)
      .join("");
    drawer.hidden = false;
    document.body.classList.add("is-locked");
    $(".drawer__head .round", drawer).focus();
  }
  function closeDrawer() {
    drawer.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }
  drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeDrawer(); });
  $("#dPrev").addEventListener("click", () => showImage(gIndex - 1));
  $("#dNext").addEventListener("click", () => showImage(gIndex + 1));
  $("#dThumbs").addEventListener("click", (e) => { const t = e.target.closest(".thumb"); if (t) showImage(+t.dataset.k); });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-project]");
    if (b) openProject(+b.dataset.project, b);
  });
  document.addEventListener("keydown", (e) => {
    if (drawer.hidden) return;
    if (e.key === "Escape") closeDrawer();
    if (e.key === "ArrowLeft" && gallery.length > 1) showImage(gIndex - 1);
    if (e.key === "ArrowRight" && gallery.length > 1) showImage(gIndex + 1);
    if (e.key === "Tab") {
      const f = $$("button, a[href]", drawer).filter((el) => el.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Navbar ---------- */
  function initNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const pill = $("#navPill");
    const burger = $("#burger");
    const setOpen = (open) => {
      pill.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    };
    burger.addEventListener("click", () => setOpen(!pill.classList.contains("is-open")));
    pill.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("click", (e) => { if (!e.target.closest("#nav")) setOpen(false); });

    const links = $$("a", pill);
    const targets = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => {
          if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        }),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      targets.forEach((t) => io.observe(t));
    }
  }

  /* ---------- Muncul saat scroll ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add("is-visible");
        io.unobserve(el);
        // hapus jeda supaya efek hover tidak ikut tertunda
        setTimeout(() => { el.style.transitionDelay = ""; }, 1200);
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => {
      const sib = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
      const pos = sib.indexOf(el);
      if (pos > 0) el.style.transitionDelay = Math.min(pos * 60, 300) + "ms";
      io.observe(el);
    });
  }

  /* ---------- Jalankan ---------- */
  renderProfile();
  renderHero();
  renderMarquee();
  renderAbout();
  renderServices();
  renderEducation();
  renderWork();
  renderCertificates();
  renderStats();
  renderStack();
  renderCV();
  renderContact();
  initNav();
  initReveal();
})();
