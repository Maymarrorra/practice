let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideContainer = document.querySelector('.carousel-slide'); // Target the container

// Ensure that each slide is properly positioned
function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // Get the width of the first slide
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`; // Shift the container
}

// Move to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop to the first slide if at the end
    showSlide(slideIndex);
}

// Move to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop to the last slide if at the beginning
    showSlide(slideIndex);
}

// Show the first slide when the page loads
showSlide(slideIndex);

// Attach event listeners to the buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
