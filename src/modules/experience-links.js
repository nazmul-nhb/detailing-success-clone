import experience1 from "../assets/images/experience-1.jpg"
import experience2 from "../assets/images/experience-2.jpg"
import experience3 from "../assets/images/experience-3.jpg"

const experienceContents = [
    {
        title: "New to Detailing",
        link: "new-to-detailing",
        image: experience1,
        alt: "Detailing Experience 1"
    },
    {
        title: "Current Shop Owner",
        link: "small-detailing-business-owner",
        image: experience2,
        alt: "Detailing Experience 2"
    },
    {
        title: "Veteran Detailer",
        link: "veteran-detailer",
        image: experience3,
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
                        loading="eager"
                    />
                </figure>
                <h3 class="bg-success-yellow py-3">${content.title}</h3>
            </a>
        `;

        if (experienceContainer) experienceContainer.innerHTML += experienceHTML;
    });
};
