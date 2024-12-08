/**
 * Load full screen image container
 * @param {HTMLElement} viewer HTML Element where fullscreen image should be
 */
export const loadFullScreenImage = (viewer) => {
    viewer.innerHTML = /*html*/`
        <div
            class="relative h-screen w-full flex items-center justify-center py-8"
        >
            <!-- Fullscreen Image -->
            <img
                id="fullscreen-image"
                class="h-full cursor-zoom-in"
                src=""
                alt=""
            />

            <!-- Image Count -->
            <div
                id="image-count"
                class="absolute top-2 left-2 text-white text-lg font-semibold z-10"
            ></div>

            <!-- Fullscreen and Close Buttons -->
            <div class="absolute top-2 right-2 flex items-center text-xl text-white">
                <button id="fullscreen-btn" class="bg-opacity-50 p-2">
                    <i class="fa-solid fa-expand"></i>
                </button>
                <button id="close-btn" class="bg-opacity-50 p-2">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Navigation Buttons -->
            <button
                id="prev-btn"
                class="absolute top-1/2 left-4 text-white bg-opacity-50 p-2 text-2xl"
            >
                <i class="fas fa-chevron-left"></i>
            </button>
            <button
                id="next-btn"
                class="absolute top-1/2 right-4 text-white bg-opacity-50 p-2 text-2xl"
            >
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
};
