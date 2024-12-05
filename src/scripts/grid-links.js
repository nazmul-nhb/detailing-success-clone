const contents = [
    {
        title: "Advanced 5-Day Training",
        link: "advanced-5-day-training",
        image: "./src/assets/images/Advanced-5-Day-Training-001.jpg",
        body: "Our Advanced 5-Day Training program here at Detailing Success is an extensive, week-long educational experience where four students get to work directly with Renny Doyle on sharpening their skills and increasing their profitability as a detailer."
    },
    {
        title: "Extreme 1-Day Class",
        link: "extreme-one-day-detailing-training",
        image: "./src/assets/images/Justin-Labato-Detailing-Success-Melbourne-Florida.jpg",
        body: "Detailing Success has locations where detailers can join our Extreme 1-Day Class, getting a crash-course in basic refinement of your already-existing detailing skills that can then be expanded upon by joining our Advanced 5-Day Training"
    },
    {
        title: "Air Force One Detailing Team",
        link: "air-force-one-detailer",
        image: "./src/assets/images/Air-Force-One-Detailing-Team-17.jpg",
        body: "Want the opportunity to work on the same aircraft that flew the presidents from John F. Kennedy to Bill Clinton around? Sign up for our Advanced 5-Day Training and give yourself the opportunity to become part of the Air Force One Detailing Team!"
    },
    {
        title: "The Detail Mafia",
        link: "the-detail-mafia",
        image: "./src/assets/images/The-Detail-Mafia-07.jpg",
        body: "When you complete our Advanced 5-Day Training, you get the opportunity to apply to join The Detail Mafia - An exclusive network of detailing experts both nationally and around the world that have trained with Renny Doyle."
    }
];

export const loadGridLinks = () => {
    const gridContainer = document.querySelector('#grid-links');

    contents.forEach(content => {
        const sectionHTML = /*html*/`
                <div class="flex flex-col gap-5 p-6 border border-success-red">
                    <a href="${content.link}">
                        <figure class="relative overflow-hidden">
                            <img
                                class="aspect-[1.5] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                src="${content.image}"
                                alt="${content.title}"
                            />
                        </figure>
                    </a>
                    <div class="flex justify-between text-2xl font-bold">
                        <h3 class="font-garet-heavy">
                            ${content.title}
                        </h3>
                        <a
                            class="-rotate-45 hover:rotate-0 transition-all duration-500"
                            href="${content.link}"
                        >
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="border-t border-t-gray-100"></div>
                    <p>
                        ${content.body}
                    </p>
                </div>
        `;

        gridContainer.innerHTML += sectionHTML;
    });
}
