document.addEventListener('scroll', function () {
  const scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > window.innerHeight * 0.75) {
      scrollToTopButton.classList.add('show'); // Muestra el botón con transición
      scrollToTopButton.disabled = false; // Habilita el botón
  } else {
      scrollToTopButton.classList.remove('show'); // Oculta el botón con transición
      scrollToTopButton.disabled = true; // Deshabilita el botón
  }
});

// Función para desplazar hacia el inicio de la página
document.getElementById('scrollToTop').addEventListener('click', function () {
  if (!this.disabled) { // Solo funciona si el botón no está deshabilitado
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
});
