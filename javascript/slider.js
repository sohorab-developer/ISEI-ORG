// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// let currentIndex = 0;


// function moveToNextSlide() {
//     slides[currentIndex].classList.remove('active');
//     slides[currentIndex].classList.add('inactive');

//     currentIndex = (currentIndex + 1) % totalSlides;

//     slides[currentIndex].classList.add('active');
//     slides[currentIndex].classList.remove('inactive');

//     updateSlidePosition();
// }

// function updateSlidePosition() {
//     const offset = -currentIndex * 100;
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(${offset}%)`;
//     });
// }

// setInterval(moveToNextSlide, 2000);