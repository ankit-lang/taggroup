/* =========================================================================
   TAG Group — Site scripts
   - Sticky header shadow on scroll
   - Mobile menu drawer
   - Hero slider (autoplay, dots, arrows, pause, keyboard, swipe)
   - Scroll reveal
   - Service page: active section highlight in side nav
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Enable JS-only enhancements (scroll reveal) ---- */
  document.documentElement.classList.add("js");

  /* ---- Header shadow ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu (drawer) ---- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    if (open && header) menu.style.top = Math.round(header.getBoundingClientRect().bottom) + "px";
    menu.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (header) header.classList.toggle("menu-open", open);
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle && menu) {
    toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
    menu.querySelectorAll("a, [data-newsletter]").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 1024 && menu.classList.contains("open")) setMenu(false); });
  }

  /* ---- Hero slider ---- */
  const hero = document.querySelector("[data-slider]");
  if (hero) {
    const slides = Array.from(hero.querySelectorAll(".hero-slide"));
    const dotsWrap = hero.querySelector(".hero-dots");
    const prevBtn = hero.querySelector("[data-prev]");
    const nextBtn = hero.querySelector("[data-next]");
    const pauseBtn = hero.querySelector("[data-pause]");
    let idx = 0;
    let timer = null;
    let playing = true;
    const DURATION = 6500;
    hero.style.setProperty("--slide-ms", DURATION + "ms");

    // build dots
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      b.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      slides.forEach((s, i) => s.classList.toggle("active", i === idx));
      dots.forEach((d, i) => {
        d.classList.remove("run");
        d.classList.toggle("active", i === idx);
      });
      // retrigger the progress-fill animation on the active dot
      const a = dots[idx];
      if (a) { void a.offsetWidth; if (playing) a.classList.add("run"); }
    }
    function go(i, user) {
      idx = (i + slides.length) % slides.length;
      render();
      if (user) restart();
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1, true); }
    function start() { timer = setInterval(next, DURATION); playing = true; setPauseIcon(); const a = dots[idx]; if (a){ a.classList.remove("run"); void a.offsetWidth; a.classList.add("run"); } }
    function stop() { clearInterval(timer); playing = false; setPauseIcon(); const a = dots[idx]; if (a) a.classList.remove("run"); }
    function restart() { clearInterval(timer); if (playing) start(); }
    function setPauseIcon() {
      if (!pauseBtn) return;
      pauseBtn.innerHTML = playing
        ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      pauseBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
    }

    if (nextBtn) nextBtn.addEventListener("click", () => go(idx + 1, true));
    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (pauseBtn) pauseBtn.addEventListener("click", () => (playing ? stop() : start()));

    // keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") go(idx + 1, true);
      if (e.key === "ArrowLeft") prev();
    });

    // swipe
    let sx = 0;
    hero.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    hero.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 45) (dx < 0 ? go(idx + 1, true) : prev());
    }, { passive: true });

    // pause on hover
    hero.addEventListener("mouseenter", () => clearInterval(timer));
    hero.addEventListener("mouseleave", () => restart());

    // subtle parallax on the world map layer
    const mapLayer = hero.querySelector(".hero-map");
    if (mapLayer && window.matchMedia("(pointer:fine)").matches) {
      hero.addEventListener("mousemove", (e) => {
        const r = hero.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5;
        const dy = (e.clientY - r.top) / r.height - 0.5;
        mapLayer.style.transform = `scale(1.12) translate(${dx * -14}px, ${dy * -10}px)`;
      });
    }

    render();
    setPauseIcon();
    start();
  }

  /* ---- Scroll reveal (with MutationObserver for Next.js support) ---- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add("in"); 
          io.unobserve(e.target); 
        } 
      }),
      { threshold: 0.12 }
    );
    
    const observeReveals = (root) => {
      root.querySelectorAll(".reveal:not(.in)").forEach(r => io.observe(r));
      if (root.classList && root.classList.contains("reveal") && !root.classList.contains("in")) {
        io.observe(root);
      }
    };
    
    // Initial observation
    observeReveals(document);
    
    // Watch for Next.js page navigations/dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(n => {
          if (n.nodeType === 1) observeReveals(n);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
  }

  /* ---- Service/profile pages: active section in side nav + phone/tablet jump chips ---- */
  const svcNav = document.querySelector(".svc-nav");
  const chipBar = document.querySelector(".jump-chips");
  if ((svcNav || chipBar) && "IntersectionObserver" in window) {
    const links = [
      ...(svcNav ? svcNav.querySelectorAll(':scope > a[href^="#"]') : []),
      ...(chipBar ? chipBar.querySelectorAll('a[href^="#"]') : []),
    ];
    const ids = [...new Set(links.map((l) => l.getAttribute("href").slice(1)))].filter((id) => document.getElementById(id));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        const chip = chipBar && chipBar.querySelector('a[href="#' + e.target.id + '"]');
        if (chip && chipBar.scrollWidth > chipBar.clientWidth) {
          chipBar.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
        }
      }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => io.observe(document.getElementById(id)));
  }

  /* ---- Newsletter modal ---- */
  const modal = document.getElementById("newsletter-modal");
  if (modal) {
    let lastFocus = null;
    function openModal() {
      lastFocus = document.activeElement;
      if (typeof setMenu === "function") setMenu(false);
      modal.hidden = false;
      document.body.classList.add("modal-open");
      const first = modal.querySelector("input, button");
      if (first) first.focus();
    }
    
    function closeModal() {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    
    // Event delegation for opening and closing modal (Next.js support)
    document.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-newsletter]");
      if (openBtn) {
        e.preventDefault();
        openModal();
        return;
      }
      
      const closeBtn = e.target.closest("[data-close]");
      if (closeBtn && closeBtn.closest("#newsletter-modal")) {
        closeModal();
      }
    });
    
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
    // keep focus inside the dialog while open
    modal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const f = modal.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---- Tabs (Insights & Media) - Event Delegation for Next.js ---- */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tab]");
    if (!btn) return;
    
    const tabbar = btn.closest("[data-tabs]");
    if (!tabbar) return;

    const btns = Array.from(tabbar.querySelectorAll("button[data-tab]"));
    const panels = btns.map((b) => document.getElementById(b.dataset.tab));

    btns.forEach((b) => b.classList.toggle("active", b === btn));
    panels.forEach((p) => { if (p) p.classList.toggle("active", p.id === btn.dataset.tab); });

    history.replaceState(null, "", "#" + btn.dataset.tab.replace("tab-", ""));
  });

  // Re-check hash when it changes or on DOM mutations (for Next.js navigations)
  function checkHashTabs() {
    const h = (location.hash || "").replace("#", "");
    if (h === "media" || h === "insights") {
      const btn = document.querySelector(`button[data-tab="tab-${h}"]`);
      if (btn && !btn.classList.contains("active")) btn.click();
    }
  }
  window.addEventListener("hashchange", checkHashTabs);
  
  // We can hook into our existing MutationObserver to check tabs on navigation
  const tabObserver = new MutationObserver(() => checkHashTabs());
  tabObserver.observe(document.body, { childList: true, subtree: true });
  checkHashTabs();

  /* ---- Footer year ---- */
  const yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
