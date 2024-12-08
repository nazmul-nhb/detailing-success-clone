import { loadFullScreenImage } from "./full-screen-image";

export const loadGallery = () => {
    const viewer = document.getElementById("viewer");

    loadFullScreenImage(viewer);

    let currentIndex = 0;

    const images = [];

    const fullscreenImage = document.getElementById("fullscreen-image");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const imageCount = document.getElementById("image-count");
    const fullscreenBtn = document.getElementById("fullscreen-btn");

    // Zoom toggle state
    let isZoomedIn = false;

    // Get all the thumbnail images
    const thumbImages = document.querySelectorAll("#image-viewer img");
    thumbImages.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            // Open fullscreen viewer on thumbnail click
            currentIndex = index;
            openFullscreenView(thumb);
        });

        // Store full-size image sources for navigation
        images.push(thumb.getAttribute("src"));
    });

    // Open the fullscreen viewer with the selected image
    function openFullscreenView(thumb) {
        viewer.style.display = 'flex';
        viewer.classList.add('show'); // Fade in
        fullscreenImage.src = thumb.getAttribute("src");
        fullscreenImage.alt = thumb.getAttribute("alt");
        fullscreenImage.style.transform = "scale(1) translate(0, 0)"; // Reset zoom and pan
        fullscreenImage.style.cursor = "zoom-in"; // Initial cursor for zoom-in

        scale = 1; // Reset zoom
        translateX = 0;
        translateY = 0;
        isZoomedIn = false; // Reset zoom toggle

        updateImageCount();

        // Attach zoom and drag handlers
        viewer.addEventListener("wheel", zoomImage);
        fullscreenImage.addEventListener("mousedown", startDrag);
        fullscreenImage.addEventListener("click", toggleZoom);
        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("mousemove", dragImage);
    }

    // Update the image count (1/3, 2/3, etc.)
    function updateImageCount() {
        imageCount.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    let isDragging = false, isFullscreen = false;

    let startX = 0, startY = 0;
    let scale = 1, translateX = 0, translateY = 0;

    function toggleZoom(event) {
        event.preventDefault();

        const rect = fullscreenImage.getBoundingClientRect();

        if (!isZoomedIn) {
            // Zoom in
            scale = 2; // Set zoom scale

            // Center zoom around the click position
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            translateX = -(mouseX - rect.width / 2) / scale;
            translateY = -(mouseY - rect.height / 2) / scale;

            fullscreenImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
            fullscreenImage.style.cursor = "zoom-out"; // Update cursor
        } else {
            // Zoom out
            scale = 1;
            translateX = 0;
            translateY = 0;

            fullscreenImage.style.transform = "scale(1) translate(0, 0)";
            fullscreenImage.style.cursor = "zoom-in"; // Update cursor
        }

        isZoomedIn = !isZoomedIn; // Toggle zoom state
    }

    function zoomImage(event) {
        event.preventDefault();

        const rect = fullscreenImage.getBoundingClientRect();
        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9; // Zoom in or out
        const prevScale = scale;

        // Update scale
        scale *= zoomFactor;
        scale = Math.max(1, scale); // Prevent zooming out below original size

        // Mouse position relative to the image
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Adjust the translation based on the change in scale
        translateX -= (mouseX / prevScale) * (zoomFactor - 1);
        translateY -= (mouseY / prevScale) * (zoomFactor - 1);

        // Ensure the image stays within bounds after zooming out
        if (scale === 1) {
            translateX = 0;
            translateY = 0;
        }

        // Apply the transform (zoom and pan)
        fullscreenImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;

        // Update cursor based on zoom level
        fullscreenImage.style.cursor = scale > 1 ? "zoom-out" : "zoom-in";
        isZoomedIn = scale > 1;
    }

    function startDrag(event) {
        event.preventDefault(); // Prevent default browser behavior (like image selection)
        isDragging = true;

        // Capture the starting mouse position
        startX = event.clientX;
        startY = event.clientY;

        fullscreenImage.style.cursor = "grabbing";
    }

    function stopDrag() {
        isDragging = false;
        fullscreenImage.style.cursor = isZoomedIn ? "zoom-out" : "zoom-in";
    }

    function dragImage(event) {
        if (!isDragging) return;

        event.preventDefault();

        // Movement deltas
        const deltaX = (event.clientX - startX) / scale;
        const deltaY = (event.clientY - startY) / scale;

        // Update translations
        translateX += deltaX;
        translateY += deltaY;

        // Constrain translations
        const rect = fullscreenImage.getBoundingClientRect();
        const viewerWidth = viewer.clientWidth;
        const viewerHeight = viewer.clientHeight;

        const maxTranslateX = (rect.width * scale - viewerWidth) / 2;
        const maxTranslateY = (rect.height * scale - viewerHeight) / 2;

        translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
        translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

        // Apply transform
        fullscreenImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;

        // Update starting positions
        startX = event.clientX;
        startY = event.clientY;
    }

    // Close the fullscreen viewer with animation
    closeBtn.addEventListener("click", closeViewer);

    // Close the viewer when clicking outside the image
    viewer.addEventListener("click", (event) => {
        // Check if the click is on the background and NOT on the image or any buttons
        if (!isFullscreen && !fullscreenImage.contains(event.target) &&
            !closeBtn.contains(event.target) &&
            !prevBtn.contains(event.target) &&
            !nextBtn.contains(event.target) &&
            !imageCount.contains(event.target) &&
            !fullscreenBtn.contains(event.target)) {
            closeViewer();
        }
    });

    function closeViewer() {
        viewer.classList.remove("show");
        setTimeout(() => {
            viewer.style.display = "none"; // Hide after fade-out
        }, 300); // Match fade-out duration

        // Reset zoom and translations
        scale = 1;
        translateX = 0;
        translateY = 0;
        fullscreenImage.style.transform = "scale(1) translate(0px, 0px)";

        // Remove event listeners
        viewer.removeEventListener("wheel", zoomImage);
        fullscreenImage.removeEventListener("mousedown", startDrag);
        document.removeEventListener("mouseup", stopDrag);
        document.removeEventListener("mousemove", dragImage);
    }

    // Slide to the next image
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
        fullscreenImage.src = images[currentIndex];
        updateImageCount();
    });

    // Slide to the previous image
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
        fullscreenImage.src = images[currentIndex];
        updateImageCount();
    });

    // Toggle fullscreen mode
    fullscreenBtn.addEventListener("click", () => {
        if (!isFullscreen) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    });

    // Enter fullscreen mode
    function enterFullscreen() {
        if (viewer.requestFullscreen) {
            viewer.requestFullscreen();
        } else if (viewer.mozRequestFullScreen) { // Firefox
            viewer.mozRequestFullScreen();
        } else if (viewer.webkitRequestFullscreen) { // Chrome, Safari, Opera
            viewer.webkitRequestFullscreen();
        } else if (viewer.msRequestFullscreen) { // IE/Edge
            viewer.msRequestFullscreen();
        }
        isFullscreen = true;
    }

    // Exit fullscreen mode
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        isFullscreen = false;
    }

    // Exit fullscreen on Escape or X key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === "x" || e.key === "X") {
            exitFullscreen();
            viewer.style.display = 'none';
        }
    });
};
