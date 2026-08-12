const wrapper = document.getElementById("navWrapper");
const btn = document.getElementById("hamburgerBtn");

function setOpen(open) {
  wrapper.classList.toggle("is-open", open);
  btn.setAttribute("aria-expanded", open);
}

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  setOpen(!wrapper.classList.contains("is-open"));
});

document.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) setOpen(false);
});

// Klik item di dalam menu --> tutup menu
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => setOpen(false));
});

// Tekan Escape --> tutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

// ══ CUSTOM CURSOR ══

// 1. Buat elemen cursor
const cursorDot = document.createElement("div");
const cursorRing = document.createElement("div");

cursorDot.className = "cursor-dot";
cursorRing.className = "cursor-ring";

document.body.appendChild(cursorDot);
document.body.appendChild(cursorRing);

// 2. Posisi mouse (target) dan posisi cursor sekarang
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let dot = { x: mouse.x, y: mouse.y };
let ring = { x: mouse.x, y: mouse.y };

// 3. Fungsi LERP — inti dari smooth movement
function lerp(start, end, speed) {
  return start + (end - start) * speed;
}

// 4. Loop animasi — berjalan 60fps via requestAnimationFrame
function animateCursor() {
  dot.x = lerp(dot.x, mouse.x, 0.18);
  dot.y = lerp(dot.y, mouse.y, 0.18);
  ring.x = lerp(ring.x, mouse.x, 0.08);
  ring.y = lerp(ring.y, mouse.y, 0.08);

  cursorDot.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
  cursorRing.style.transform = `translate(${ring.x}px, ${ring.y}px)`;

  requestAnimationFrame(animateCursor);
}

// 5. Update posisi target setiap mouse bergerak
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// 6. Efek hover — ring membesar saat di atas elemen interaktif
//    (event delegation supaya tetap jalan setelah transisi tanpa reload)
const HOVER_SELECTOR = "a, button, .sk-card, .portfolio-card";

document.addEventListener("mouseover", (e) => {
  if (e.target.closest(HOVER_SELECTOR)) {
    cursorRing.classList.add("cursor-ring--hover");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(HOVER_SELECTOR)) {
    cursorRing.classList.remove("cursor-ring--hover");
  }
});

// 7. Sembunyikan cursor saat keluar dari window
document.addEventListener("mouseleave", () => {
  cursorDot.style.opacity = "0";
  cursorRing.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursorDot.style.opacity = "1";
  cursorRing.style.opacity = "1";
});

// 8. Jalankan!
animateCursor();
