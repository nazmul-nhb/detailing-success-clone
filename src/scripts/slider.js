export const initSlider = () => {
    const sliderContainer = document.querySelector('#custom-slider');
    const slides = sliderContainer.querySelectorAll('.absolute.inset-0.transition-opacity');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    let currentSlide = 0;
    let isAnimating = false;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('w-3', 'h-3', 'rounded-full', 'mx-1', 'bg-gray-400');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.children;

    function updateSlider() {
        if (isAnimating) return;
        isAnimating = true;

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.remove('opacity-0');
            } else {
                slide.classList.add('opacity-0');
            }
        });

        Array.from(dots).forEach((dot, index) => {
            dot.classList.toggle('bg-white', index === currentSlide);
            dot.classList.toggle('bg-gray-400', index !== currentSlide);
        });

        setTimeout(() => {
            isAnimating = false;
        }, 1000); // Match this to the transition duration in the HTML
    }

    function goToSlide(n) {
        if (isAnimating) return;
        currentSlide = (n + slides.length) % slides.length;
        updateSlider();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    let autoAdvance = setInterval(nextSlide, 5000);

    // Pause auto-advance when hovering over the slider
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 5000);
    });

    // Initial update
    updateSlider();
}