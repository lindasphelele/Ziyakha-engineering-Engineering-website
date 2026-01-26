// Smooth scroll for anchor links
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });
});
