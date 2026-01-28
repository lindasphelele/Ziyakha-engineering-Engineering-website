// -----------------------------
// General Slideshow functionality (for homepage or other sections using .slides)
// -----------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// -----------------------------
// Affiliations Slideshow functionality (for affiliations.html using .affiliationSlides)
// -----------------------------
let affiliationIndex = 0;
showAffiliations();

function showAffiliations() {
  let slides = document.getElementsByClassName("affiliationSlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  affiliationIndex++;
  if (affiliationIndex > slides.length) { affiliationIndex = 1 }
  if (slides.length > 0) {
    slides[affiliationIndex - 1].style.display = "block";
  }
  setTimeout(showAffiliations, 3000); // Change every 3 seconds
}

// -----------------------------
// Modern Action Bar Toggle
// -----------------------------
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

// -----------------------------
// Contact Form (Formspree)
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          responseDiv.innerText = "✅ Message sent successfully!";
          responseDiv.style.color = "green";
          form.reset();
        } else {
          responseDiv.innerText = "❌ Something went wrong. Please try again.";
          responseDiv.style.color = "red";
        }
      } catch (error) {
        responseDiv.innerText = "⚠️ Network error. Please check your connection.";
        responseDiv.style.color = "orange";
      }
    });
  }
});
