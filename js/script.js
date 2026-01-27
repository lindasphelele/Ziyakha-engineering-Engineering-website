// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Optional: Mobile menu toggle (if you want a hamburger menu later)
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}
