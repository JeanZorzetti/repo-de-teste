(function () {
  'use strict';

  // ── 1. Intersection Observer: animate sections into view ──────────
  var fadeTargets = document.querySelectorAll(
    '.benefits, .how-it-works, .testimonials, .cta-final'
  );

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeTargets.forEach(function (el) {
      sectionObserver.observe(el);
    });
  } else {
    fadeTargets.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── 2. Header: add .scrolled class past 80px ─────────────────────
  var header = document.querySelector('.header');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── 3. Mobile menu toggle with hamburger / close icon swap ────────
  var menuToggle = document.querySelector('.header__menu-toggle');
  var mainNav = document.querySelector('.header__nav');

  var ICON_HAMBURGER =
    '<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
  var ICON_CLOSE =
    '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';

  function closeNav() {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    var svg = menuToggle.querySelector('svg');
    if (svg) svg.innerHTML = ICON_HAMBURGER;
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      mainNav.classList.toggle('is-open', willOpen);
      var svg = menuToggle.querySelector('svg');
      if (svg) svg.innerHTML = willOpen ? ICON_CLOSE : ICON_HAMBURGER;
    });

    mainNav.querySelectorAll('.header__nav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  // ── 4. Email validation with visual error / success feedback ──────
  var form = document.querySelector('.cta-final__form');
  var emailInput = document.getElementById('email-input');

  if (form && emailInput) {
    var feedback = document.createElement('p');
    feedback.className = 'cta-final__feedback';
    feedback.setAttribute('role', 'alert');
    feedback.setAttribute('aria-live', 'polite');

    var formGroup = form.querySelector('.cta-final__form-group');
    if (formGroup) {
      formGroup.insertAdjacentElement('afterend', feedback);
    }

    function isValidEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    function clearFeedback() {
      emailInput.classList.remove('cta-final__input--error', 'cta-final__input--success');
      feedback.textContent = '';
      feedback.className = 'cta-final__feedback';
    }

    emailInput.addEventListener('input', function () {
      if (!emailInput.value.trim()) {
        clearFeedback();
      } else if (emailInput.classList.contains('cta-final__input--error')) {
        if (isValidEmail(emailInput.value.trim())) {
          clearFeedback();
        }
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = emailInput.value.trim();

      if (!value) {
        emailInput.classList.remove('cta-final__input--success');
        emailInput.classList.add('cta-final__input--error');
        feedback.textContent = 'Por favor, insira seu e-mail.';
        feedback.className = 'cta-final__feedback cta-final__feedback--error';
        emailInput.focus();
        return;
      }

      if (!isValidEmail(value)) {
        emailInput.classList.remove('cta-final__input--success');
        emailInput.classList.add('cta-final__input--error');
        feedback.textContent = 'E-mail inválido. Verifique o formato e tente novamente.';
        feedback.className = 'cta-final__feedback cta-final__feedback--error';
        emailInput.focus();
        return;
      }

      emailInput.classList.remove('cta-final__input--error');
      emailInput.classList.add('cta-final__input--success');
      feedback.textContent = 'Ótimo! Em breve você receberá um e-mail de confirmação.';
      feedback.className = 'cta-final__feedback cta-final__feedback--success';
    });
  }

  // ── 5. Smooth scroll for anchor links (header-offset aware) ───────
  // CSS scroll-behavior: smooth is already set; this adds header-offset
  // correction and a polyfill for older browsers.
  var HEADER_OFFSET = 80;

  function smoothScrollTo(target) {
    var rect = target.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var targetY = rect.top + scrollTop - HEADER_OFFSET;

    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else {
      var startY = scrollTop;
      var distance = targetY - startY;
      var duration = 600;
      var startTime = null;

      function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * ease(progress));
        if (elapsed < duration) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }
  }

  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    var hash = anchor.getAttribute('href');
    if (!hash || hash === '#' || hash === '#privacy' || hash === '#terms') return;

    var target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    smoothScrollTo(target);
    closeNav();
  });
})();
