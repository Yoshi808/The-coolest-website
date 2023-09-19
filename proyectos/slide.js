// Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;

function slideLeft() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
}

function slideRight() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}