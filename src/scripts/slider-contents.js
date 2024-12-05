import slide1 from "../assets/slider-images/Advanced-5-Day-Training-1656w.jpg"
import slide2 from "../assets/slider-images/Extreme-1-Day-02-1656w.jpg"
import slide3 from "../assets/slider-images/Air-Force-One-Detailing-Team-02-1656w.jpg"
import slide4 from "../assets/slider-images/The-Detail-Mafia-03-1656w.jpg"

const sliderImages = [
    {
        image: slide1,
        alt: "Advanced 5-Day Training"
    },
    {
        image: slide2,
        alt: "Extreme 1-Day Class"
    },
    {
        image: slide3,
        alt: "Air Force One Detailing Team"
    },
    {
        image: slide4,
        alt: "The Detail Mafia"
    }
];

// Function to dynamically load slider images
export const loadSliderImages = () => {
    const sliderContainer = document.querySelector('#slider-images-container');

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

        sliderContainer.innerHTML += sliderImageHTML;
    });
};
