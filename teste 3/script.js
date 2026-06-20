/* ============================================================
   Café Órbita — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Header scroll effect ── */
  const header = document.getElementById('header');
  let lastScrollY = 0;

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    lastScrollY = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── 2. Mobile hamburger / nav drawer ── */
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  let   navOpen   = false;

  function openNav() {
    navOpen = true;
    nav.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navOpen = false;
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => (navOpen ? closeNav() : openNav()));

  // Close when a nav link is clicked
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (navOpen && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeNav();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navOpen) closeNav();
  });

  /* ── 3. Active nav link on scroll ── */
  const sections  = document.querySelectorAll('section[id], footer[id]');
  const navLinks  = document.querySelectorAll('.nav__link[data-section]');
  const HEADER_H  = () => header.offsetHeight + 8;

  function updateActiveLink() {
    const scrollMid = window.scrollY + HEADER_H() + window.innerHeight * 0.35;
    let active = null;

    sections.forEach(section => {
      if (section.offsetTop <= scrollMid) active = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === active);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ── 4. Smooth scroll with header offset ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_H();
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  });

  /* ── 5. Fade-in on scroll (IntersectionObserver) ── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        // Stagger siblings in the same parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in:not(.visible)'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.max(0, idx * 80));
        fadeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ── 6. Animated counters ── */
  const statEls = document.querySelectorAll('.stat__number[data-target]');

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1600; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOutCubic(progress) * target);
      el.textContent = value.toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  statEls.forEach(el => counterObserver.observe(el));

  /* ── 7. "Pedir" button feedback ── */
  document.querySelectorAll('.card .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = 'Adicionado ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 1800);
    });
  });

})();
