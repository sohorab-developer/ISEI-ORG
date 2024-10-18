const slides = document.querySelectorAll('.slide-content');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const slideInterval = 6000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, slideInterval);

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentSlide = i;
        showSlide(i);
    });
});