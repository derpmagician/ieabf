const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 55,
  slidesPerGroupAuto: true,
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  effect: "slide",
  autoplay: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: false,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});
