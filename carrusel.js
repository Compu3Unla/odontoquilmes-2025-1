let currentSlide = 0;

function moveSlide(direction) {
  const track = document.getElementById("carousel-track");
  const totalSlides = document.querySelectorAll(".slide").length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  updateDots();
}

function goToSlide(index) {
  currentSlide = index;
  const track = document.getElementById("carousel-track");
  track.style.transform = `translateX(-${index * 100}%)`;

  updateDots();
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function toggleCard(card) {
  // Cerrar todas las tarjetas excepto la actual
  document.querySelectorAll(".card").forEach(c => {
    if (c !== card) {
      c.classList.remove("open");
    }
  });

  // Abrir o cerrar la tarjeta clickeada
  card.classList.toggle("open");
}

