document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video"); // Select all video elements
    const overlay = document.createElement("div"); // Create overlay dynamically
    overlay.classList.add("overlay");
    document.body.appendChild(overlay); // Append overlay to body

    videos.forEach(video => {
        video.addEventListener("click", () => {
            // Clone the clicked video
            const expandedVideo = video.cloneNode(true);
            expandedVideo.classList.add("expanded-video", "active");
            expandedVideo.setAttribute("controls", "true"); // Ensure controls are available
            document.body.appendChild(expandedVideo);

            // Show overlay
            overlay.classList.add("active");

            // Auto-play the video when opened
            expandedVideo.play();

            // Close when clicking overlay
            overlay.addEventListener("click", () => closeZoom(expandedVideo), { once: true });
        });
    });

    function closeZoom(expandedVideo) {
        overlay.classList.remove("active");
        expandedVideo.classList.remove("active");

        // Pause the video before removing
        expandedVideo.pause();

        // Remove the element after transition
        expandedVideo.addEventListener("transitionend", () => expandedVideo.remove());
    }
});