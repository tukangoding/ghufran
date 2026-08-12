// ============================================================
// router.js — transisi antar halaman tanpa reload (ala client-side
// routing Next.js) + lazy load gambar + filter blog.
// Dipakai di index.html, /blog/, dan /blog/<slug>/.
// ============================================================
(() => {
  "use strict";

  const main = () => document.querySelector("main");

  // ── ROUTER ──
  function isRoutable(a) {
    if (a.target === "_blank" || a.hasAttribute("download")) return false;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
    try {
      return new URL(a.href, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }

  function copyMeta(name, doc) {
    const next = doc.querySelector(`meta[name="${name}"]`);
    if (!next) return;
    let cur = document.querySelector(`meta[name="${name}"]`);
    if (cur) cur.setAttribute("content", next.getAttribute("content"));
    else document.head.appendChild(next.cloneNode());
  }

  function copyCanonical(doc) {
    const next = doc.querySelector('link[rel="canonical"]');
    if (!next) return;
    let cur = document.querySelector('link[rel="canonical"]');
    if (cur) cur.setAttribute("href", next.getAttribute("href"));
    else document.head.appendChild(next.cloneNode());
  }

  function copyOg(doc) {
    doc.querySelectorAll('meta[property^="og:"]').forEach((next) => {
      const prop = next.getAttribute("property");
      let cur = document.querySelector(`meta[property="${prop}"]`);
      if (cur) cur.setAttribute("content", next.getAttribute("content"));
      else document.head.appendChild(next.cloneNode());
    });
  }

  function scrollToTarget(hash, smooth) {
    const behavior = smooth ? "smooth" : "auto";
    if (!hash || hash === "#") {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior, block: "start" });
    else window.scrollTo({ top: 0, behavior });
  }

  async function navigate(url, push) {
    const target = new URL(url, location.href);
    if (target.origin !== location.origin) {
      location.href = target.href;
      return;
    }
    // Link anchor ke halaman yang sama: cukup scroll, tanpa fetch.
    if (target.pathname === location.pathname && target.search === location.search) {
      if (push) history.pushState({}, "", target.href);
      scrollToTarget(target.hash, true);
      return;
    }
    try {
      const res = await fetch(target.href, { headers: { accept: "text/html" } });
      if (!res.ok) throw new Error("fetch failed");
      const doc = new DOMParser().parseFromString(await res.text(), "text/html");
      const nextMain = doc.querySelector("main");
      if (!nextMain) throw new Error("no main element");

      const cur = main();
      if (cur) cur.replaceWith(nextMain);
      nextMain.classList.add("router-enter");

      const title = doc.querySelector("title");
      if (title) document.title = title.textContent;
      copyMeta("description", doc);
      copyCanonical(doc);
      copyOg(doc);

      if (push) history.pushState({}, "", target.href);
      scrollToTarget(target.hash, push);
      document.dispatchEvent(new CustomEvent("page:loaded"));
    } catch {
      location.href = target.href; // fallback: navigasi normal
    }
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || !isRoutable(a)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(a.href, true);
  });

  window.addEventListener("popstate", () => navigate(location.href, false));

  // ── LAZY LOAD GAMBAR ──
  const lazyObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              const img = en.target;
              if (img.dataset.src) img.src = img.dataset.src;
              img.classList.add("loaded");
              lazyObserver.unobserve(img);
            });
          },
          { rootMargin: "200px" },
        )
      : null;

  function initLazy() {
    document.querySelectorAll("img[data-src]").forEach((img) => {
      if (img.classList.contains("loaded")) return;
      if (lazyObserver) lazyObserver.observe(img);
      else img.src = img.dataset.src;
    });
  }

  // ── FILTER BLOG (/blog/) ──
  function initFilter() {
    const bar = document.getElementById("filterBar");
    if (!bar) return;
    let active = "all";

    const apply = () => {
      document.querySelectorAll(".blog-item[data-category]").forEach((item) => {
        item.style.display =
          active === "all" || item.dataset.category === active ? "" : "none";
      });
    };

    bar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        active = btn.dataset.filter;
        apply();
      });
    });

    apply();
  }

  // ── INIT ──
  function boot() {
    initLazy();
    initFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
  document.addEventListener("page:loaded", () => {
    initLazy();
    initFilter();
  });
})();
