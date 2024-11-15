// Function to add animation class
function animateElement() {
  const element = document.querySelector('.info-img img');
  if (element) {
    element.classList.add('animate');
  }
}

// Add event listener for DOMContentLoaded to trigger the animation
document.addEventListener('DOMContentLoaded', animateElement);