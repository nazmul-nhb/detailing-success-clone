export const loadGallery = () => {
    let currentIndex = 0;
    let images = [];
    const viewer = document.getElementById("viewer");
    const fullscreenImage = document.getElementById("fullscreen-image");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const imageCount = document.getElementById("image-count");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const closeFullscreenBtn = document.getElementById("close-fullscreen");

    let isFullscreen = false;
    let isDragging = false;
    let startX, startY;

    // Get all the thumbnail images
    const thumbImages = document.querySelectorAll("#image-viewer .thumb");
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
        fullscreenImage.style.transform = "scale(1)"; // Reset zoom
        fullscreenImage.style.cursor = "grab";
        updateImageCount();
        viewer.addEventListener("wheel", zoomImage); // Enable zooming
        fullscreenImage.addEventListener("mousedown", startDrag); // Start dragging
        fullscreenImage.addEventListener("mouseup", stopDrag); // Stop dragging
        fullscreenImage.addEventListener("mousemove", dragImage); // Drag image
    }

    // Update the image count (1/3, 2/3, etc.)
    function updateImageCount() {
        imageCount.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    // Zoom in/out with mouse wheel
    function zoomImage(event) {
        event.preventDefault();
        let scale = 1;
        const currentTransform = fullscreenImage.style.transform;

        if (currentTransform.includes("scale")) {
            scale = parseFloat(currentTransform.split("scale(")[1].split(")")[0]);
        }

        // Zoom in and out
        if (event.deltaY < 0) {
            scale += 0.1;
        } else {
            scale = Math.max(1, scale - 0.1); // Prevent zooming out too much
        }

        fullscreenImage.style.transform = `scale(${scale})`;
    }

    // Start dragging the image
    function startDrag(event) {
        isDragging = true;
        startX = event.clientX - fullscreenImage.getBoundingClientRect().left;
        startY = event.clientY - fullscreenImage.getBoundingClientRect().top;
        fullscreenImage.style.cursor = "grabbing";
    }

    // Stop dragging the image
    function stopDrag() {
        isDragging = false;
        fullscreenImage.style.cursor = "grab";
    }

    // Drag the image around
    function dragImage(event) {
        if (isDragging) {
            event.preventDefault();
            const offsetX = event.clientX - startX;
            const offsetY = event.clientY - startY;
            fullscreenImage.style.transform = `scale(1) translate(${offsetX}px, ${offsetY}px)`;
        }
    }

    // Close the fullscreen viewer with animation
    closeBtn.addEventListener("click", () => {
        viewer.classList.remove('show'); // Remove fade-in class to trigger fade-out animation
        setTimeout(() => {
            viewer.style.display = 'none'; // After fade-out, hide the viewer
        }, 300); // Match the transition duration
        fullscreenImage.src = "";
        viewer.removeEventListener("wheel", zoomImage); // Remove zoom listener
        fullscreenImage.removeEventListener("mousedown", startDrag); // Remove drag events
        fullscreenImage.removeEventListener("mouseup", stopDrag);
        fullscreenImage.removeEventListener("mousemove", dragImage);
    });

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
        if (fullscreenImage.requestFullscreen) {
            fullscreenImage.requestFullscreen();
        } else if (fullscreenImage.mozRequestFullScreen) { // Firefox
            fullscreenImage.mozRequestFullScreen();
        } else if (fullscreenImage.webkitRequestFullscreen) { // Chrome, Safari, Opera
            fullscreenImage.webkitRequestFullscreen();
        } else if (fullscreenImage.msRequestFullscreen) { // IE/Edge
            fullscreenImage.msRequestFullscreen();
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

    // Close fullscreen button
    closeFullscreenBtn.addEventListener("click", () => {
        exitFullscreen();
        viewer.style.display = 'none';
    });
};
