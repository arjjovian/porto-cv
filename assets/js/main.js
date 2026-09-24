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
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const projectImg = (p, file) => `projects/${p.slug}/${file}`;

  const socials = () => {
    const c = CONTACT;
    const out = [];
    if (c.whatsapp) out.push({ label: "WhatsApp", href: `https://wa.me/${c.whatsapp}` });
    if (c.instagram) out.push({ label: "Instagram", href: `https://instagram.com/${c.instagram}` });
    if (c.github) out.push({ label: "GitHub", href: `https://github.com/${c.github}` });
    if (c.linkedin) out.push({ label: "LinkedIn", href: `https://www.linkedin.com/in/${c.linkedin}` });
    if (c.email) out.push({ label: "Email", href: `mailto:${c.email}` });
    return out;
  };
  const bracketLink = (l, extra = "") =>
    `<a class="bracket" href="${esc(l.href)}"${/^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : ""}${extra}>${esc(l.label)}</a>`;

  /* ---------- Profil & teks umum ---------- */
  function renderProfile() {
    $$("[data-bind]").forEach((el) => { el.textContent = PROFILE[el.dataset.bind] || ""; });
    $("#year").textContent = new Date().getFullYear();

    const links = socials();
    $("#menuSocials").innerHTML = links.map((l) => bracketLink(l)).join("");
    $("#footerSocials").innerHTML = links.map((l) => `<li>${bracketLink(l)}</li>`).join("");
    $("#footerServices").innerHTML = SERVICES.map((s, i) => `<li><a class="bracket" href="#services" data-svc="${i}">${esc(s.title)}</a></li>`).join("");
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    $("#heroPhoto").src = PROFILE.photo;
    const shots = PROJECTS.filter((p) => p.images && p.images.length).slice(0, 4);
    $("#heroShots").innerHTML = shots.map((p) => `<div class="shot"><img src="${esc(projectImg(p, p.images[0]))}" alt="" /></div>`).join("");

    if (!finePointer || reduceMotion) return;
    const stage = $("#heroStage");
    const hero = $("#home");
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      stage.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5) * 2);
      stage.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5) * 2);
    });
    hero.addEventListener("mouseleave", () => { stage.style.setProperty("--mx", 0); stage.style.setProperty("--my", 0); });
  }

  /* ---------- Pita berjalan ---------- */
  function renderMarquees() {
    $$("[data-marquee]").forEach((track) => {
      const words = track.dataset.marquee === "stack" ? STACK.flatMap((g) => g.items) : MARQUEE;
      const set = Array(4).fill(words).flat().map((w) => `<span class="tape__item">${esc(w)}</span>`).join("");
      track.innerHTML = set + set; // dua set identik supaya loop mulus
    });
  }

  /* ---------- What I Do ---------- */
  const serviceDetail = (s) => `
    <span class="chip">${s.cta ? "Jasa" : "Deliverables"}</span>
    <p class="panel__lead">${esc(s.lead)}</p>
    <ul class="points">${s.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    ${s.cta ? `<a href="#contact" class="bracket panel__cta">Pesan Sekarang</a>` : ""}`;

  let activeService = -1;
  function setService(i) {
    if (i === activeService) return;
    activeService = i;
    $$(".svc").forEach((li, k) => {
      li.classList.toggle("is-active", k === i);
      $(".svc__btn", li).setAttribute("aria-expanded", k === i);
    });
    const s = SERVICES[i];
    $("#servicesPanel").innerHTML = `
      <div class="panel">
        ${s.image ? `<div class="panel__bg"><img src="${esc(s.image)}" alt="" /></div>` : ""}
        <div class="panel__body">${serviceDetail(s)}</div>
      </div>`;
  }

  function renderServices() {
    $("#servicesList").innerHTML = SERVICES.map(
      (s, i) => `
      <li class="svc">
        <button type="button" class="svc__btn" data-i="${i}" aria-expanded="false"><span class="svc__name">${esc(s.title)}</span></button>
        <div class="svc__detail panel"><div class="panel__body">${serviceDetail(s)}</div></div>
      </li>`
    ).join("");
    setService(0);

    const list = $("#servicesList");
    list.addEventListener("click", (e) => {
      const b = e.target.closest(".svc__btn");
      if (b) setService(+b.dataset.i);
    });
    if (finePointer) {
      list.addEventListener("mouseover", (e) => {
        const b = e.target.closest(".svc__btn");
        if (b) setService(+b.dataset.i);
      });
    }
    $("#footerServices").addEventListener("click", (e) => {
      const a = e.target.closest("[data-svc]");
      if (a) setService(+a.dataset.svc);
    });
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    $("#eduPhoto").src = PROFILE.photoAlt || PROFILE.photo;
    $("#eduStory").textContent = EDUCATION_STORY;
    $("#eduList").innerHTML = EDUCATION.map(
      (e) => `
      <li class="edu-item reveal">
        <p class="edu-item__school"><span class="dots"></span>${esc(e.school)}</p>
        <div>
          <p class="edu-item__meta">${esc([e.level, e.period].filter(Boolean).join(" · "))}</p>
          ${e.description ? `<p class="edu-item__desc">${esc(e.description)}</p>` : ""}
          ${e.map ? `<a class="link-arrow" href="${esc(e.map)}" target="_blank" rel="noopener">Lihat Lokasi ↗</a>` : ""}
        </div>
      </li>`
    ).join("");
  }

  /* ---------- Work ---------- */
  function renderWork() {
    const keys = Object.keys(PROJECT_CATEGORIES).filter((k) => PROJECTS.some((p) => p.category === k));
    const count = (k) => (k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === k).length);
    const filters = $("#filters");
    filters.innerHTML = ["all", ...keys]
      .map(
        (k, i) =>
          `<button type="button" role="tab" class="filter${i === 0 ? " is-active" : ""}" aria-selected="${i === 0}" data-filter="${esc(k)}">${esc(k === "all" ? "All" : PROJECT_CATEGORIES[k])}<sup>${count(k)}</sup></button>`
      )
      .join("");

    $("#workList").innerHTML = PROJECTS.map(
      (p, i) => `
      <li class="work-item" data-category="${esc(p.category)}">
        <button type="button" class="work-row" data-i="${i}" data-cursor="View" aria-label="Lihat projek ${esc(p.title)}">
          <span class="work-row__num">(${pad(i + 1)})</span>
          ${p.images && p.images.length ? `<span class="work-row__thumb"><img src="${esc(projectImg(p, p.images[0]))}" alt="" loading="lazy" /></span>` : ""}
          <span class="work-row__title">${esc(p.title)}</span>
          <span class="work-row__role">${esc(PROJECT_CATEGORIES[p.category] || p.category)} — ${esc(p.role || "")}</span>
          <span class="work-row__year">${esc(p.year || "")}</span>
          <span class="work-row__arrow">↗</span>
        </button>
      </li>`
    ).join("");

    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      $$(".filter", filters).forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
      const f = b.dataset.filter;
      $$(".work-item").forEach((li) => li.classList.toggle("is-hidden", f !== "all" && li.dataset.category !== f));
    });

    $("#workList").addEventListener("click", (e) => {
      const row = e.target.closest(".work-row");
      if (!row) return;
      const p = PROJECTS[+row.dataset.i];
      openModal(
        {
          images: (p.images || []).map((f) => projectImg(p, f)),
          meta: [PROJECT_CATEGORIES[p.category] || p.category, p.year].filter(Boolean).join(" · "),
          title: p.title,
          desc: p.description,
          tags: p.tools,
          links: projectLinks(p.links),
        },
        row
      );
    });

    // Preview gambar yang mengikuti kursor
    if (!finePointer) return;
    const preview = $("#workPreview");
    const img = $("img", preview);
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      preview.style.left = cx + "px"; preview.style.top = cy + "px";
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    $("#workList").addEventListener("mousemove", (e) => {
      x = e.clientX + 190; y = e.clientY;
      if (!preview.classList.contains("is-visible")) { cx = x; cy = y; }
      if (!raf) raf = requestAnimationFrame(loop);
    });
    $("#workList").addEventListener("mouseover", (e) => {
      const row = e.target.closest(".work-row");
      if (!row) return;
      const p = PROJECTS[+row.dataset.i];
      if (!p.images || !p.images.length) { preview.classList.remove("is-visible"); return; }
      img.src = projectImg(p, p.images[0]);
      preview.classList.add("is-visible");
    });
    $("#workList").addEventListener("mouseleave", () => preview.classList.remove("is-visible"));
  }

  const projectLinks = (l = {}) => {
    const out = [];
    if (l.demo) out.push({ label: "Kunjungi Situs ↗", href: l.demo });
    if (l.figma) out.push({ label: "Buka Figma ↗", href: l.figma });
    if (l.download) out.push({ label: "Download ↓", href: l.download });
    if (l.github) out.push({ label: "Source Code ↗", href: l.github });
    return out;
  };

  /* ---------- Certificates ---------- */
  function renderCertificates() {
    if (!CERTIFICATES.length) {
      $("#certificates").remove();
      $$('[data-needs="certificates"]').forEach((el) => el.remove());
      return;
    }
    const src = (c) => (c.image ? `certificates/${c.image}` : "");
    const show = (i) => {
      const c = CERTIFICATES[i];
      $$(".cert-row").forEach((r, k) => r.classList.toggle("is-active", k === i));
      const img = $("#certImg");
      img.src = src(c); img.alt = c.title; img.hidden = !c.image;
      $("#certMeta").textContent = [c.issuer, c.year].filter(Boolean).join(" · ");
      $("#certDesc").textContent = c.description || "";
      $("#certTags").innerHTML = (c.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    };
    $("#certList").innerHTML = CERTIFICATES.map(
      (c, i) => `
      <li><button type="button" class="cert-row" data-i="${i}" data-cursor="Open" aria-label="Buka sertifikat ${esc(c.title)}">
        <span class="cert-row__num">(${pad(i + 1)})</span>
        <span class="cert-row__title">${esc(c.title)}</span>
        <span class="cert-row__year">${esc(c.year || "")}</span>
      </button></li>`
    ).join("");
    show(0);

    const list = $("#certList");
    if (finePointer) list.addEventListener("mouseover", (e) => { const r = e.target.closest(".cert-row"); if (r) show(+r.dataset.i); });
    list.addEventListener("click", (e) => {
      const r = e.target.closest(".cert-row");
      if (!r) return;
      const i = +r.dataset.i;
      const c = CERTIFICATES[i];
      show(i);
      openModal(
        {
          images: c.image ? [src(c)] : [],
          meta: [c.issuer, c.year].filter(Boolean).join(" · "),
          title: c.title,
          desc: c.description,
          tags: c.tags,
          links: c.link ? [{ label: "Verifikasi ↗", href: c.link }] : [],
        },
        r
      );
    });
  }

  /* ---------- Stack ---------- */
  function renderStack() {
    $("#stackRows").innerHTML = STACK.map(
      (g, i) => `
      <div class="stack-row reveal">
        <p class="stack-row__label">(${pad(i + 1)}) ${esc(g.group)}</p>
        <p class="stack-row__items">${g.items.map((t) => `<span>${esc(t)}</span>`).join("<em>/</em>")}</p>
      </div>`
    ).join("");
  }

  /* ---------- Statement (kata menyala saat scroll) ---------- */
  function initStatement() {
    const el = $("#statementText");
    el.innerHTML = PROFILE.statement.split(/\s+/).map((w) => `<span class="w">${esc(w)}</span> `).join("");
    const words = $$(".w", el);
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.6 + r.height * 0.4)));
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- CV ---------- */
  function renderCV() {
    const actions = [];
    if (PROFILE.cv) {
      actions.push(`<a class="bracket" href="${esc(PROFILE.cv)}" target="_blank" rel="noopener">Lihat CV</a>`);
      actions.push(`<a class="bracket" href="${esc(PROFILE.cv)}" download>Download PDF</a>`);
      if (PROFILE.cvUpdated) actions.push(`<span class="cv__note">Diperbarui ${esc(PROFILE.cvUpdated)}</span>`);
    } else {
      actions.push(`<a class="bracket" href="#contact">Minta CV</a>`);
      actions.push(`<span class="cv__note">Versi PDF segera tersedia</span>`);
    }
    $("#cvActions").innerHTML = actions.join("");

    const skills = STACK.flatMap((g) => g.items).slice(0, 10);
    const contact = socials().slice(0, 3);
    $("#cvCard").innerHTML = `
      <div class="cv-card__side">
        <div class="cv-card__photo"><img src="${esc(PROFILE.photoAlt || PROFILE.photo)}" alt="" loading="lazy" /></div>
        <div><h4>Kontak</h4><ul>${contact.map((c) => `<li>${esc(c.label)}</li>`).join("")}</ul></div>
        <div><h4>Skills</h4><ul>${skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
      </div>
      <div class="cv-card__main">
        <div><p class="cv-card__name">${esc(PROFILE.name)}</p><p class="cv-card__role">${esc(PROFILE.role)}</p></div>
        <div><h4>Pendidikan</h4><ul>${EDUCATION.map((e) => `<li>${esc(e.school)}</li>`).join("")}</ul></div>
        <div><h4>Projek</h4><ul>${PROJECTS.slice(0, 5).map((p) => `<li>${esc(p.title)} — ${esc(p.role || p.category)}</li>`).join("")}</ul></div>
        <div><h4>Keahlian</h4><ul>${SERVICES.filter((s) => !s.cta).map((s) => `<li>${esc(s.title)}</li>`).join("")}</ul></div>
      </div>`;
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const direct = socials().slice(0, 3).map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`);
    $("#contactDirect").innerHTML = direct.length ? `Atau hubungi langsung: ${direct.join(" · ")}` : "";

    const form = $("#contactForm");
    const via = CONTACT.whatsapp ? "whatsapp" : CONTACT.email ? "email" : null;
    if (!via) { form.remove(); return; }
    $("#formHint").textContent = via === "whatsapp" ? "Terkirim lewat WhatsApp" : "Terkirim lewat email";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const topic = form.topic.value.trim();
      const msg = form.message.value.trim();
      const err = $("#formError");
      if (!name || !msg) { err.hidden = false; (name ? form.message : form.name).focus(); return; }
      err.hidden = true;
      const text = `Halo ${PROFILE.wordmark}, saya ${name}.${topic ? `\nKebutuhan: ${topic}` : ""}\n\n${msg}`;
      const url =
        via === "whatsapp"
          ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
          : `mailto:${CONTACT.email}?subject=${encodeURIComponent("Pesan dari " + name)}&body=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let gallery = [], gIndex = 0, lastFocus = null;

  function showImage(i) {
    if (!gallery.length) return;
    gIndex = (i + gallery.length) % gallery.length;
    $("#mImage").src = gallery[gIndex];
    $$(".modal__thumb").forEach((t, k) => t.classList.toggle("is-active", k === gIndex));
  }

  function openModal(d, trigger) {
    lastFocus = trigger || document.activeElement;
    gallery = d.images || [];
    const multi = gallery.length > 1;
    $(".modal__media", modal).hidden = !gallery.length;
    $("#mPrev").hidden = $("#mNext").hidden = !multi;
    $("#mThumbs").innerHTML = multi
      ? gallery.map((src, k) => `<button type="button" class="modal__thumb" data-k="${k}" aria-label="Gambar ${k + 1}"><img src="${esc(src)}" alt="" /></button>`).join("")
      : "";
    $("#mImage").alt = d.title;
    showImage(0);
    $("#mMeta").textContent = d.meta || "";
    $("#mTitle").textContent = d.title;
    $("#mDesc").textContent = d.desc || "";
    $("#mTags").innerHTML = (d.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#mLinks").innerHTML = (d.links || []).map((l) => bracketLink(l)).join("");
    modal.hidden = false;
    document.body.classList.add("is-locked");
    $(".modal__close", modal).focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  $("#mPrev").addEventListener("click", () => showImage(gIndex - 1));
  $("#mNext").addEventListener("click", () => showImage(gIndex + 1));
  $("#mThumbs").addEventListener("click", (e) => { const t = e.target.closest(".modal__thumb"); if (t) showImage(+t.dataset.k); });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft" && gallery.length > 1) showImage(gIndex - 1);
    if (e.key === "ArrowRight" && gallery.length > 1) showImage(gIndex + 1);
    if (e.key === "Tab") {
      const f = $$("button, a[href]", modal).filter((el) => el.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Navbar & menu ---------- */
  function initNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menu = $("#menu");
    const btn = $("#menuBtn");
    const setMenu = (open) => {
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "Close" : "Menu";
      document.body.classList.toggle("is-locked", open);
    };
    btn.addEventListener("click", () => setMenu(menu.hidden));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) setMenu(false); });

    // Tandai menu aktif
    const links = $$(".nav__left a");
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

  /* ---------- Efek huruf acak pada nama ---------- */
  function initScramble() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&∑Ø";
    $$(".scramble").forEach((el) => {
      const original = el.textContent;
      let timer = null;
      el.addEventListener("mouseenter", () => {
        if (reduceMotion) return;
        let frame = 0;
        clearInterval(timer);
        timer = setInterval(() => {
          el.textContent = original
            .split("")
            .map((ch, i) => (i < frame / 2 ? ch : chars[Math.floor(Math.random() * chars.length)]))
            .join("");
          if (++frame > original.length * 2) { clearInterval(timer); el.textContent = original; }
        }, 35);
      });
    });
  }

  /* ---------- Kursor ---------- */
  function initCursor() {
    if (!finePointer) return;
    const cur = $(".cursor");
    const label = $(".cursor__label");
    let x = -100, y = -100, cx = -100, cy = -100;
    document.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; cur.classList.add("is-visible"); });
    document.addEventListener("mouseleave", () => cur.classList.remove("is-visible"));
    document.addEventListener("mouseover", (e) => {
      const t = e.target.closest("[data-cursor]");
      cur.classList.toggle("is-label", !!t);
      if (t) label.textContent = t.dataset.cursor;
    });
    const loop = () => {
      cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ---------- Nama raksasa di footer selalu pas selebar layar ---------- */
  function initFitWordmark() {
    const el = $(".footer__word");
    el.innerHTML = `<span>${esc(el.textContent)}</span>`;
    const span = $("span", el);
    const fit = () => {
      el.style.fontSize = "100px";
      const w = span.getBoundingClientRect().width;
      if (w) el.style.fontSize = (100 * el.clientWidth) / w * 0.985 + "px";
    };
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    let t;
    window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(fit, 120); });
  }

  /* ---------- Muncul saat scroll ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Jalankan ---------- */
  renderProfile();
  renderHero();
  renderMarquees();
  renderServices();
  renderEducation();
  renderWork();
  renderCertificates();
  renderStack();
  renderCV();
  renderContact();
  initStatement();
  initNav();
  initScramble();
  initCursor();
  initFitWordmark();
  initReveal();
})();
