/**
 * script.js — Lumen Landing Page
 * Interatividade: scroll suave + fade-in via IntersectionObserver
 */

// ── Scroll suave para links âncora ──────────────────────────────────────────
function inicializarScrollSuave() {
  // Seleciona todos os links cujo href começa com "#"
  const linksAncora = document.querySelectorAll('a[href^="#"]');

  linksAncora.forEach(function (link) {
    link.addEventListener('click', function (evento) {
      const alvo = link.getAttribute('href');

      // Ignora hrefs que sejam apenas "#" sem destino definido
      if (!alvo || alvo === '#') return;

      const secaoAlvo = document.querySelector(alvo);
      if (!secaoAlvo) return;

      // Cancela o comportamento padrão do navegador (salto brusco)
      evento.preventDefault();

      // Rola suavemente até o elemento de destino
      secaoAlvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Fade-in via IntersectionObserver ────────────────────────────────────────
function inicializarFadeIn() {
  // Seleciona todas as seções marcadas para o efeito de aparecimento
  const secoesFade = document.querySelectorAll('.fade-section');

  // Dispara o callback quando 15% do elemento entra na viewport
  const observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        // Adiciona a classe que ativa a transição de opacidade/transformação
        entrada.target.classList.add('visible');

        // Efeito one-shot: para de observar o elemento após a primeira aparição
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  // Registra cada seção no observer
  secoesFade.forEach(function (secao) {
    observer.observe(secao);
  });
}

// ── Ponto de entrada ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  inicializarScrollSuave();
  inicializarFadeIn();
});
