let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Ensure that each card is shown fully within the carousel container
function showSlide(index) {
    slides.forEach((slide, i) => {
        // Position each slide by calculating its position based on index
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    // Move to the next slide; wrap around if at the end
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    // Move to the previous slide; wrap around if at the beginning
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Show the initial slide when the page loads
showSlide(slideIndex);

// Attach event listeners to the buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);