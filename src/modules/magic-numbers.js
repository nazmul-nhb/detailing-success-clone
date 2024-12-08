// @ts-check

const contents = [
    {
        number: 2,
        title: "Interns",
        body: "Up to two interns, Detailing Success Alumni return to assist Renny in our Advanced 5-Day Training. Their goal is to share real-world knowledge about detailing, paint correction, managing a business and more to help you find your detailing success!"
    },
    {
        number: 4,
        title: "Students",
        body: "This is the MOST important number at Detailing Success. We take FOUR students total during our training sessions, selected from HUNDREDS who apply to learn from Renny Doyle. This limit gives Renny and his team the opportunity to provide one-on-one attention to these students, which is something that no one else in the auto detailing and training industry offers."
    },
    {
        number: 5,
        title: "Days",
        body: "You train for five days at the Detailing Success training center in Big Bear, California. Those days will be long, intensive and hands-on! It’s not uncommon for us to train for 60 hours or more during the week. The challenges you will face as a professional detailer will not abide by the nine-to-five mindset of an average job. When the training tasks are done, we are done."
    },
    {
        number: 6,
        title: "Nights",
        body: "Six nights stay at The Robinhood Resort in Big Bear are included as part of your Advanced 5-Day Training at Detailing Success. Each student get their own private room, which allows you a comfortable place to recharge your batteries. You’ll also be within walking distance to Big Bear Lake and all the shops and restaurants at The Village."
    },
    {
        number: 7,
        title: "Certifications",
        body: "Following the completion of your Advanced 5-Day Training with Detailing Success, you will walk away with seven different certifications and countless credentials to help you make significant impacts in both the detailing industry and your life. In addition, we provide testing for IDA (International Detailing Association) CD, SV, WC and MC certifications."
    },
    {
        number: 10,
        title: "Meals",
        body: "Much like having the opportunity to network and even apply to join The Detail Mafia, Renny Doyle feels that collaboration and connecting with fellow detailers is key to the success of the industry. We provide ten meals, lunch and dinner daily, which double as opportunities to get to know everyone better and even dedicate more time to your training."
    }
]

export const loadMagicNumbers = () => {
    const gridContainer = document.querySelector('#magic-numbers');

    contents.forEach(content => {
        const sectionHTML = /*html*/`
            <div
            		class="flex flex-col gap-5 p-6 border border-success-red"
            	>
            		<div class="flex gap-3 items-center font-bold">
            			<div
            				class="w-11 aspect-square font-extrabold border-2 text-success-red border-success-red rounded-full text-2xl flex items-center justify-center"
            			>
            				${content.number}
            			</div>
            			<h3 class="text-white text-xl">${content.title}</h3>
            		</div>
            		<p class="text-gray-100">${content.body}</p>
            	</div>
        `;

        if (gridContainer) gridContainer.innerHTML += sectionHTML;
    });

}