let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideContainer = document.querySelector('.carousel-slide');
const visibleSlides = 3; // Number of visible slides

// Calculate how much we need to move the slideContainer
function showSlide(index) {
    const slideWidth = slides[0].clientWidth + 20; // Width of one slide + margin (10px on each side)
    const maxIndex = slides.length - visibleSlides; // Maximum index we can slide to
    if (index > maxIndex) slideIndex = maxIndex;
    if (index < 0) slideIndex = 0;
    slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Move to the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Move to the previous slide
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Show the first slide when the page loads
showSlide(slideIndex);

// Attach event listeners to the buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
