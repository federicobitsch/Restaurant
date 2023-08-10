const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += 100;
  if (currentPosition > 0) {
    currentPosition = -200; // Vuelve al final si ya estás en la primera imagen
  }
  carouselContainer.style.transform = `translateX(${currentPosition}%)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= 100;
  if (currentPosition < -200) {
    currentPosition = 0; // Vuelve al principio si ya estás en la última imagen
  }
  carouselContainer.style.transform = `translateX(${currentPosition}%)`;
});
