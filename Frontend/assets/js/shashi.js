const images = [
    './assets/img/banner/banner1.png',
    './assets/img/banner/banner2.jpg',
    './assets/img/banner/banner3.jpg',
    './assets/img/banner/banner4.jpg',
    './assets/img/banner/banner5.jpg',
    './assets/img/banner/banner6.jpg',
    './assets/img/banner/banner7.jpg',
    './assets/img/banner/banner8.jpg',
    './assets/img/banner/banner9.jpg'
];

const carouselContainer = document.querySelector('.shashi');
let currentIndex = 0;

// Create slides
images.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    slide.style.backgroundImage = `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(${img})`;


    if (index === 0) {
        slide.classList.add('active'); // Set the first image active
    }

    carouselContainer.appendChild(slide);
});

// Change slide every 5 seconds
function changeSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 5000); // Carousel auto changes every 5 seconds

// Manual slide movement (next/prev buttons)
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}
