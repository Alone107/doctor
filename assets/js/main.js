document.querySelector(".btn-menu").addEventListener("click", OpenMenu);
document.querySelector(".btn-menu-2").addEventListener("click", OpenMenu);

function OpenMenu() {
  document.querySelector(".nav-btn").classList.toggle("open");
}

// ---------------main-slider-----------------------------

const swiper = new Swiper(".swiper-otziv", {
  // Optional parameters
  spaceBetween: 10,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 900px
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-otziv-button-next",
    prevEl: ".swiper-otziv-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
