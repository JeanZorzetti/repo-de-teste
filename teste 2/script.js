/* VibeCoding — script.js */

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('is-open'));
  });
}

/* ── Navbar shadow on scroll ── */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 40px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

/* ── Prompt submit ── */
const promptInput  = document.getElementById('promptInput');
const promptSubmit = document.getElementById('promptSubmit');

function handlePrompt() {
  const val = promptInput?.value.trim();
  if (!val) {
    promptInput?.focus();
    return;
  }
  promptSubmit.textContent = '⚡ Gerando...';
  promptSubmit.disabled = true;

  setTimeout(() => {
    promptSubmit.textContent = '✓ No flow!';
    setTimeout(() => {
      promptSubmit.textContent = 'Gerar';
      promptSubmit.disabled = false;
    }, 2000);
  }, 1800);
}

promptSubmit?.addEventListener('click', handlePrompt);
promptInput?.addEventListener('keydown', e => {
  if (e.key === 'Enter') handlePrompt();
});

/* ── Intersection Observer — fade-in on scroll ── */
const fadeEls = document.querySelectorAll(
  '.feature-card, .step, .stat, .cta__content'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el, i) => {
  el.style.opacity  = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.visible').forEach(el => {
    el.style.opacity  = '1';
    el.style.transform = 'none';
  });
});

/* Add .visible class via CSS */
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible { opacity: 1 !important; transform: none !important; }
  </style>
`);
