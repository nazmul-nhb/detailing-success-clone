// @ts-check

/**
 * Adds a scroll-based animation effect to a specified HTML element.
 * The element moves horizontally in proportion to the user's scroll position,
 * creating a marquee-like effect. Initially, 25% of the element is hidden to the right.
 *
 * @param {string} id - The CSS selector or HTML `id` of the target element (e.g., `"#elementId"`).
 *                      Ensure the provided selector uniquely identifies a valid DOM element.
 * @param {number} [speed=5] - The optional speed multiplier to control the pace of the animation. Default is 5.
 *                             Higher values result in faster scrolling, while lower values slow it down.
 *
 * Functionality:
 * - Initializes the element's position with a horizontal offset (hidden 25% to the right).
 * - Adjusts the horizontal position dynamically as the user scrolls the page.
 * - Includes a configurable speed multiplier for animation customization.
 *
 * Example Usage:
 * ```javascript
 * animateDivider("#myAnimatedElement"); // With default speed 5
 * animateDivider("#myAnimatedElement", 7); // Faster animation with speed 7
 * animateDivider("#anotherElement", 3);   // Slower animation with speed 3
 * ```
 *
 * Notes:
 * - Ensure the target element has sufficient width to create a noticeable scrolling effect.
 * - The `speed` parameter is optional and defaults to `5` if not provided.
 * - Choose an appropriate speed value to match the desired visual effect.
 */
export const animateTextOnScroll = (id, speed = 5) => {
    const scrollingText = document.querySelector(id);
    const maxTranslateX = 20; // Initial 25% hidden to the right

    // Initially set the text to 25% hidden to the right
    if (scrollingText instanceof HTMLElement) {
        scrollingText.style.transform = `translateX(${maxTranslateX}%)`;

        // Add event listener for scroll
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollRatio = scrollTop / scrollHeight; // Ratio of page scrolled (0 to 1)

            // Calculate the translateX value based on scroll ratio, with a faster movement multiplier
            // Proportional movement with faster/slower speed
            const translateX = maxTranslateX - (scrollRatio * maxTranslateX * speed);

            // Update the transform based on scroll direction
            scrollingText.style.transform = `translateX(${translateX}%)`;
        });
    }
};
