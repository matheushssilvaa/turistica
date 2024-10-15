let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransformValue = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransformValue;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa o carrossel com a primeira imagem visível
showSlide(currentSlide);

// Auto-slide a cada 5 segundos
setInterval(nextSlide, 5000);