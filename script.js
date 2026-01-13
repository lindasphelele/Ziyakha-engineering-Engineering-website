// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Contact form feedback
const form = document.getElementById('contactForm');
const responseEl = document.getElementById('formResponse');

if (form) {
  form.addEventListener('submit', async (e) => {
    // If using Formspree, you can let the browser submit normally.
    // For AJAX submission, uncomment below and set your endpoint.

    // e.preventDefault();
    // try {
    //   const formData = new FormData(form);
    //   const res = await fetch(form.action, {
    //     method: 'POST',
    //     body: formData,
    //     headers: { 'Accept': 'application/json' }
    //   });
    //   if (res.ok) {
    //     responseEl.textContent = 'Thanks—your message has been sent.';
    //     form.reset();
    //   } else {
    //     responseEl.textContent = 'Something went wrong. Please try again.';
    //   }
    // } catch {
    //   responseEl.textContent = 'Network error. Please try again.';
    // }

    // Basic inline feedback if not using AJAX:
    responseEl.textContent = 'Sending…';
    setTimeout(() => {
      responseEl.textContent = 'Thanks—your message has been sent.';
    }, 1000);
  });
}
