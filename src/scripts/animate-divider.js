/**
 * A Function to add animation effects on scroll
 * @param {string} id HTML `id` for the element to have animated scroll effects
 */
export const animateDivider = (id) => {
    const scrollingText = document.querySelector(id);
    const maxTranslateX = 20; // Initial 25% hidden to the right

    // Initially set the text to 25% hidden to the right
    scrollingText.style.transform = `translateX(${maxTranslateX}%)`;

    // Speed multiplier to make the text move faster or slower
    const speedMultiplier = 5;

    // Add event listener for scroll
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
        const scrollPercentage = scrollTop / scrollHeight; // Percentage of page scrolled (0 to 1)

        // Calculate the translateX value based on scroll percentage, with a faster movement multiplier
        // Proportional movement with faster/slower speed
        const translateX = maxTranslateX - (scrollPercentage * maxTranslateX * speedMultiplier);

        // Update the transform based on scroll direction
        scrollingText.style.transform = `translateX(${translateX}%)`;
    });
}
