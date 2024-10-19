let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Show the correct slide by translating each slide to the correct position
function showSlide(index) {
    slides.forEach((slide, i) => {
        // Position each slide based on the current slideIndex
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

// Move to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Wrap around if at the end
    showSlide(slideIndex);
}

// Move to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Wrap around if at the beginning
    showSlide(slideIndex);
}

// Show the initial slide when the page loads
showSlide(slideIndex);

// Attach event listeners to the buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
