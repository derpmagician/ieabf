const btns = document.querySelectorAll(".btn-banner");
const slides = document.querySelectorAll(".img-slide");
let currentIndex = 0;

const sliderNav = function (index) {
  btns.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Cambiar imagen automáticamente cada 5 segundos
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  sliderNav(nextIndex);
}, 3000);