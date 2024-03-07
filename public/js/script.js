// Menu Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active")
}


window.onscroll = () => {
  // Sticky navbar
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Removing navbar when clicking on a link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active")
}

// Swiper init
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Dark Mode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// Scroll Reveal
ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-form", { origin: "bottom"})
