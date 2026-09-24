/* =========================================================================
   Render & interaksi. Isi konten ada di data.js.
   ========================================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Ikon (SVG inline) ---------- */
  const stroke = (d) =>
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const fill = (d) => `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;

  const ICONS = {
    sun: stroke('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>'),
    moon: stroke('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'),
    menu: stroke('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    x: stroke('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrowDown: stroke('<path d="M12 5v14M19 12l-7 7-7-7"/>'),
    arrowUp: stroke('<path d="M12 19V5M5 12l7-7 7 7"/>'),
    arrowUpRight: stroke('<path d="M7 17 17 7M7 7h10v10"/>'),
    download: stroke('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'),
    send: stroke('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'),
    code: stroke('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
    pen: stroke('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>'),
    gamepad: stroke('<path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/>'),
    images: stroke('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>'),
    external: stroke('<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
    chevronLeft: stroke('<path d="m15 18-6-6 6-6"/>'),
    chevronRight: stroke('<path d="m9 18 6-6-6-6"/>'),
    briefcase: stroke('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
    school: stroke('<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
    mail: stroke('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    github: fill('<path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>'),
    instagram: stroke('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
    linkedin: fill('<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>'),
    whatsapp: fill('<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41"/>'),
  };
  const icon = (name) => ICONS[name] || "";

  /* ---------- Util ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* abaikan */ } },
  };

  const projectImg = (p, file) => `projects/${p.slug}/${file}`;

  /* ---------- Kontak ---------- */
  const contactLinks = () => {
    const c = CONTACT;
    const out = [];
    if (c.whatsapp) out.push({ key: "whatsapp", label: "WhatsApp", value: "+" + c.whatsapp, href: `https://wa.me/${c.whatsapp}` });
    if (c.email) out.push({ key: "mail", label: "Email", value: c.email, href: `mailto:${c.email}` });
    if (c.instagram) out.push({ key: "instagram", label: "Instagram", value: "@" + c.instagram, href: `https://instagram.com/${c.instagram}` });
    if (c.linkedin) out.push({ key: "linkedin", label: "LinkedIn", value: c.linkedin, href: `https://www.linkedin.com/in/${c.linkedin}` });
    if (c.github) out.push({ key: "github", label: "GitHub", value: c.github, href: `https://github.com/${c.github}` });
    return out;
  };

  /* ---------- Render: profil & hero ---------- */
  function renderProfile() {
    $$("[data-bind]").forEach((el) => { el.textContent = PROFILE[el.dataset.bind] || ""; });

    $("#heroPhoto").src = PROFILE.photo;
    $("#aboutPhoto").src = PROFILE.photoAlt || PROFILE.photo;
    if (!PROFILE.available) $("#availableBadge").remove();

    const cv = $("#cvButton");
    if (PROFILE.cv) { cv.href = PROFILE.cv; $("#contactButton").remove(); }
    else cv.remove();

    const links = contactLinks();
    $("#heroSocials").innerHTML = links
      .map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener" aria-label="${esc(l.label)}" title="${esc(l.label)}">${icon(l.key)}</a>`)
      .join("");

    $("#aboutText").innerHTML = PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#facts").innerHTML = PROFILE.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("");

    const skillCount = SKILLS.reduce((n, g) => n + g.items.length, 0);
    const catCount = new Set(PROJECTS.map((p) => p.category)).size;
    const stats = [
      { value: PROJECTS.length, label: "Projek selesai" },
      { value: CERTIFICATES.length, label: "Sertifikat" },
      { value: catCount, label: "Bidang karya", exact: true },
      { value: skillCount, label: "Skill & tools" },
      { value: EXPERIENCES.length, label: "Pengalaman" },
    ].filter((s) => s.value > 0).slice(0, 4);
    $("#stats").innerHTML = stats.map((s) => `<div><dt>${esc(s.label)}</dt><dd>${s.value}${s.exact ? "" : "+"}</dd></div>`).join("");
    $("#stats").dataset.count = stats.length;

    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Render: skill ---------- */
  function renderSkills() {
    $("#skillsGrid").innerHTML = SKILLS.map(
      (g) => `
      <div class="card skill-group reveal">
        <h3>${esc(g.group)}</h3>
        <ul class="skill-list">
          ${g.items.map((s) => `<li class="skill">${s.icon ? `<i class="${esc(s.icon)}" aria-hidden="true"></i>` : '<span class="skill__dot"></span>'}${esc(s.name)}</li>`).join("")}
        </ul>
      </div>`
    ).join("");
  }

  /* ---------- Render: projek ---------- */
  function renderProjects() {
    const used = PROJECT_CATEGORIES.filter((c) => PROJECTS.some((p) => p.category === c));
    const cats = ["Semua", ...used];
    const count = (c) => (c === "Semua" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length);

    const filters = $("#projectFilters");
    filters.innerHTML = cats
      .map((c, i) => `<button type="button" role="tab" class="filter${i === 0 ? " is-active" : ""}" aria-selected="${i === 0}" data-filter="${esc(c)}">${esc(c)}<span class="filter__count">${count(c)}</span></button>`)
      .join("");
    if (used.length < 2) filters.hidden = true;

    // Projek unggulan (featured) tampil lebih dulu
    const ordered = PROJECTS.map((p, i) => ({ p, i })).sort((a, b) => (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0) || a.i - b.i);

    $("#projectsGrid").innerHTML = ordered
      .map(({ p, i }) => {
        const imgs = p.images || [];
        return `
        <button type="button" class="project reveal" data-index="${i}" data-category="${esc(p.category)}" aria-label="Lihat detail ${esc(p.title)}">
          <div class="project__media">
            ${imgs.length ? `<img src="${esc(projectImg(p, imgs[0]))}" alt="${esc(p.title)}" loading="lazy" />` : ""}
            ${imgs.length > 1 ? `<span class="project__count">${icon("images")} ${imgs.length}</span>` : ""}
          </div>
          <div class="project__body">
            <div class="project__meta"><span class="project__cat">${esc(p.category)}</span><span>${esc(p.year || "")}</span></div>
            <h3 class="project__title">${esc(p.title)} ${icon("arrowUpRight")}</h3>
            <p class="project__summary">${esc(p.summary)}</p>
            <div class="tags">${(p.tools || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          </div>
        </button>`;
      })
      .join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", filters).forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
      const f = btn.dataset.filter;
      $$(".project").forEach((card) => card.classList.toggle("is-hidden", f !== "Semua" && card.dataset.category !== f));
    });

    $("#projectsGrid").addEventListener("click", (e) => {
      const card = e.target.closest(".project");
      if (card) openProject(PROJECTS[+card.dataset.index], card);
    });
  }

  /* ---------- Render: sertifikat ---------- */
  function renderCertificates() {
    if (!CERTIFICATES.length) {
      $("#certificates").remove();
      $$('[data-section="certificates"]').forEach((a) => a.remove());
      return;
    }
    $("#certsGrid").innerHTML = CERTIFICATES.map(
      (c, i) => `
      <button type="button" class="cert reveal" data-index="${i}" aria-label="Lihat sertifikat ${esc(c.title)}">
        <div class="cert__media">${c.image ? `<img src="certificates/${esc(c.image)}" alt="${esc(c.title)}" loading="lazy" />` : ""}</div>
        <div class="cert__body">
          <h3 class="cert__title">${esc(c.title)}</h3>
          <p class="cert__meta">${esc([c.issuer, c.date].filter(Boolean).join(" · "))}</p>
        </div>
      </button>`
    ).join("");

    $("#certsGrid").addEventListener("click", (e) => {
      const card = e.target.closest(".cert");
      if (card) openCert(CERTIFICATES[+card.dataset.index], card);
    });
  }

  /* ---------- Render: pengalaman & pendidikan ---------- */
  function renderJourney() {
    const block = (title, iconName, items) => `
      <div class="card timeline-card reveal">
        <h3>${icon(iconName)} ${esc(title)}</h3>
        <ol class="timeline">
          ${items
            .map(
              (it) => `
            <li class="timeline__item">
              ${it.period ? `<p class="timeline__period">${esc(it.period)}</p>` : ""}
              <p class="timeline__role">${esc(it.role)}</p>
              <p class="timeline__place">${esc(it.place)}</p>
              ${it.description ? `<p class="timeline__desc">${esc(it.description)}</p>` : ""}
            </li>`
            )
            .join("")}
        </ol>
      </div>`;
    let html = "";
    if (EXPERIENCES.length) html += block("Pengalaman", "briefcase", EXPERIENCES);
    if (EDUCATION.length) html += block("Pendidikan", "school", EDUCATION);
    $("#journeyGrid").innerHTML = html;
  }

  /* ---------- Render: kontak ---------- */
  function renderContact() {
    $("#contactList").innerHTML = contactLinks()
      .map(
        (l) => `
        <li><a class="contact__item" href="${esc(l.href)}" target="_blank" rel="noopener">
          <span class="contact__icon">${icon(l.key)}</span>
          <span><span class="contact__label">${esc(l.label)}</span><span class="contact__value">${esc(l.value)}</span></span>
          ${icon("arrowUpRight")}
        </a></li>`
      )
      .join("");

    const form = $("#contactForm");
    const via = CONTACT.whatsapp ? "whatsapp" : CONTACT.email ? "email" : null;
    if (!via) { form.remove(); return; }
    $("#cfHint").textContent = via === "whatsapp" ? "Pesan akan dibuka di WhatsApp." : "Pesan akan dibuka di aplikasi email kamu.";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const msg = form.message.value.trim();
      const err = $("#cfError");
      if (!name || !msg) { err.hidden = false; (name ? form.message : form.name).focus(); return; }
      err.hidden = true;
      const text = `Halo ${PROFILE.nickname}, saya ${name}.\n\n${msg}`;
      const url =
        via === "whatsapp"
          ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
          : `mailto:${CONTACT.email}?subject=${encodeURIComponent("Pesan dari " + name)}&body=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Modal ---------- */
  let lastFocus = null;
  function openModal(modal, trigger) {
    lastFocus = trigger || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    $(".modal__close", modal).focus();
  }
  function closeModal(modal) {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
  }
  $$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(m); }));

  const linkBtn = (href, label, iconName, primary) =>
    `<a class="btn ${primary ? "btn--primary" : "btn--ghost"} btn--sm" href="${esc(href)}" target="_blank" rel="noopener">${icon(iconName)} ${esc(label)}</a>`;

  let current = { project: null, index: 0 };
  function showImage(i) {
    const p = current.project;
    const imgs = p.images || [];
    if (!imgs.length) return;
    current.index = (i + imgs.length) % imgs.length;
    const img = $("#modalImage");
    img.src = projectImg(p, imgs[current.index]);
    img.alt = `${p.title} — gambar ${current.index + 1}`;
    $$(".modal__thumb").forEach((t, k) => t.classList.toggle("is-active", k === current.index));
  }

  function openProject(p, trigger) {
    current = { project: p, index: 0 };
    const imgs = p.images || [];
    const multi = imgs.length > 1;
    $("#modalPrev").hidden = !multi;
    $("#modalNext").hidden = !multi;
    $("#modalThumbs").innerHTML = multi
      ? imgs.map((f, k) => `<button type="button" class="modal__thumb" data-k="${k}" aria-label="Gambar ${k + 1}"><img src="${esc(projectImg(p, f))}" alt="" /></button>`).join("")
      : "";
    $(".modal__gallery").hidden = !imgs.length;
    showImage(0);

    $("#modalMeta").textContent = [p.category, p.year].filter(Boolean).join(" · ");
    $("#modalTitle").textContent = p.title;
    $("#modalDesc").textContent = p.description || p.summary;
    $("#modalTools").innerHTML = (p.tools || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");

    const l = p.links || {};
    const links = [];
    if (l.demo) links.push(linkBtn(l.demo, "Lihat Demo", "external", true));
    if (l.download) links.push(linkBtn(l.download, "Download", "download", !l.demo));
    if (l.figma) links.push(linkBtn(l.figma, "Buka di Figma", "external", !l.demo && !l.download));
    if (l.github) links.push(linkBtn(l.github, "Source Code", "github", false));
    $("#modalLinks").innerHTML = links.join("");

    openModal($("#projectModal"), trigger);
  }
  $("#modalPrev").addEventListener("click", () => showImage(current.index - 1));
  $("#modalNext").addEventListener("click", () => showImage(current.index + 1));
  $("#modalThumbs").addEventListener("click", (e) => {
    const t = e.target.closest(".modal__thumb");
    if (t) showImage(+t.dataset.k);
  });

  function openCert(c, trigger) {
    const img = $("#certImage");
    img.hidden = !c.image;
    if (c.image) { img.src = `certificates/${c.image}`; img.alt = c.title; }
    $("#certTitle").textContent = c.title;
    $("#certMeta").textContent = [c.issuer, c.date].filter(Boolean).join(" · ");
    $("#certLinks").innerHTML = c.link ? linkBtn(c.link, "Verifikasi Sertifikat", "external", true) : "";
    openModal($("#certModal"), trigger);
  }

  document.addEventListener("keydown", (e) => {
    const open = $$(".modal").find((m) => !m.hidden);
    if (!open) return;
    if (e.key === "Escape") closeModal(open);
    if (open.id === "projectModal" && current.project && (current.project.images || []).length > 1) {
      if (e.key === "ArrowLeft") showImage(current.index - 1);
      if (e.key === "ArrowRight") showImage(current.index + 1);
    }
    if (e.key === "Tab") {
      // Jaga fokus tetap di dalam modal
      const f = $$("button:not([hidden]), a[href]", open).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Navbar, tema, reveal ---------- */
  function initNav() {
    const nav = $("#nav");
    const links = $("#navLinks");
    const burger = $("#navBurger");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setOpen = (open) => {
      links.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open);
      burger.innerHTML = icon(open ? "x" : "menu");
    };
    burger.addEventListener("click", () => setOpen(!links.classList.contains("is-open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setOpen(false); });

    // Tandai menu aktif sesuai section yang terlihat
    const navAnchors = $$("a[href^='#']", links);
    const sections = navAnchors.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navAnchors.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        }),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach((s) => io.observe(s));
    }
  }

  function initTheme() {
    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      store.set("theme", next);
    });
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el, i) => {
      // Efek muncul bertahap untuk elemen dalam satu grid
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
      const pos = siblings.indexOf(el);
      if (pos > 0) el.style.transitionDelay = Math.min(pos * 70, 350) + "ms";
      io.observe(el);
    });
  }

  /* ---------- Jalankan ---------- */
  renderProfile();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderJourney();
  renderContact();
  $$("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
  initNav();
  initTheme();
  initReveal();
})();
