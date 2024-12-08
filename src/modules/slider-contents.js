// @ts-check

/**
 * @typedef {Object} SliderImage
 * @property {string} image - The URL or path to the image.
 * @property {string} alt - The alt text for the image.
 */

/**
 * Function to dynamically load slider images
 * 
 * @param {string} container HTML ID for slider image containers
 * @param {SliderImage[]} sliderImages An array of slider images with `alt` texts and `image` URLs.
 */
export const loadSliderImages = (container, sliderImages) => {
    const imageContainer = document.querySelector(container);

    sliderImages.forEach((content, index) => {
        const sliderImageHTML = /*html*/`
            <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out ${index > 0 ? 'opacity-0' : ''}">
                <img
                    src="${content.image}"
                    alt="${content.alt}"
                    loading="eager"
                    class="w-full h-full object-cover"
                />
            </div>
        `;

        if (imageContainer) imageContainer.innerHTML += sliderImageHTML;
    });
};
