/* ═══════════════════════════════════════════════════════
   coaching.cool — Shared JavaScript
   ═══════════════════════════════════════════════════════ */

// ─── Scroll animations ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── Nav scroll effect ───
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  const closeBtn = document.querySelector('.nav-mobile-close');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.add('open'));
    closeBtn?.addEventListener('click', () => mobile.classList.remove('open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }
}

// ─── Init all on DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
});
