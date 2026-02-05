// -----------------------------
// Utility: cycle through slides with fade
// -----------------------------
function cycleSlides(className, interval, indexRef) {
  const slides = document.getElementsByClassName(className);

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Move to next slide
  indexRef.value++;
  if (indexRef.value > slides.length) indexRef.value = 1;

  // Show current slide
  if (slides.length > 0) {
    slides[indexRef.value - 1].classList.add("active");
  }

  // Repeat after interval
  setTimeout(() => cycleSlides(className, interval, indexRef), interval);
}

// -----------------------------
// General Slideshow (homepage)
// -----------------------------
let slideIndex = { value: 0 };
cycleSlides("slides", 4000, slideIndex);

// -----------------------------
// Affiliations Slideshow
// -----------------------------
let affiliationIndex = { value: 0 };
cycleSlides("affiliationSlides", 3000, affiliationIndex);

// -----------------------------
// Partnerships Slideshow
// -----------------------------
let partnershipIndex = { value: 0 };
cycleSlides("partnershipSlides", 3500, partnershipIndex);

// -----------------------------
// Modern Action Bar Toggle
// -----------------------------
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) {
    navMenu.classList.toggle("active");
    navMenu.style.transition = "right 0.4s ease";
  }
}

// -----------------------------
// Contact Form (Formspree)
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
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

  // -----------------------------
  // Services Page Button Actions
  // -----------------------------
  const serviceButtons = document.querySelectorAll(".service-btn");

  serviceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Highlight clicked button
      serviceButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Subtle scale animation
      button.style.transform = "scale(1.05)";
      setTimeout(() => (button.style.transform = "scale(1)"), 200);

      console.log(`Service selected: ${button.innerText}`);
    });

    // Ripple effect for outlined buttons
    button.addEventListener("mousedown", (e) => {
      const circle = document.createElement("span");
      circle.classList.add("ripple");
      const rect = button.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;
      button.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});
