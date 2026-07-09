// Scroll suave com offset de 80px para compensar o header fixo
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href === '#') return;

    var target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    var top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

// Fade-in via IntersectionObserver — 15% visível já dispara a animação
var observer = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target); // anima uma única vez
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .fade-section').forEach(function (section) {
  observer.observe(section);
});
