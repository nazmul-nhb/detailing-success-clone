const experienceContents = [
    {
        title: "New to Detailing",
        link: "new-to-detailing",
        image: "./src/assets/images/experience-1.jpg",
        alt: "Detailing Experience 1"
    },
    {
        title: "Current Shop Owner",
        link: "small-detailing-business-owner",
        image: "./src/assets/images/experience-2.jpg",
        alt: "Detailing Experience 2"
    },
    {
        title: "Veteran Detailer",
        link: "veteran-detailer",
        image: "./src/assets/images/experience-3.jpg",
        alt: "Detailing Experience 3"
    }
];

export const loadExperienceLinks = () => {
    const experienceContainer = document.querySelector('#experience-section');

    experienceContents.forEach(content => {
        const experienceHTML = /*html*/`
            <a class="flex-1" href="${content.link}">
                <figure class="relative overflow-hidden">
                    <img
                        class="transition-transform duration-300 ease-in-out transform hover:scale-110 aspect-square object-cover"
                        src="${content.image}"
                        alt="${content.alt}"
                    />
                </figure>
                <h3 class="bg-success-yellow py-3">${content.title}</h3>
            </a>
        `;

        experienceContainer.innerHTML += experienceHTML;
    });
};
