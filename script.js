// ===============================
// Carousel Auto-Slide
// ===============================
let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide() {
  index++;
  if (index >= totalSlides) index = 0;
  slides.style.transform = "translateX(" + (-index * 100) + "%)";
}
setInterval(showSlide, 4000);

// ===============================
// Carousel Navigation Buttons
// ===============================
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = totalSlides - 1;
  slides.style.transform = "translateX(" + (-index * 100) + "%)";
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) index = 0;
  slides.style.transform = "translateX(" + (-index * 100) + "%)";
});

// ===============================
// Hamburger Menu Toggle
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ===============================
// Navigation Switching Between Sections
// ===============================
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-target");

    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) {
        sec.classList.add("active");
      }
    });
  });
});
