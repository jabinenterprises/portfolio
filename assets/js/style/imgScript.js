document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img"); // Select all images
  const overlay = document.createElement("div"); // Create overlay dynamically
  overlay.classList.add("overlay");
  document.body.appendChild(overlay); // Append overlay to the body

  images.forEach(image => {
    image.addEventListener("click", () => {
      // Clone the clicked image
      const expandedImage = image.cloneNode();
      expandedImage.classList.add("expanded-image", "active");
      document.body.appendChild(expandedImage);

      // Show overlay
      overlay.classList.add("active");

      // Close when clicking overlay (only once)
      overlay.addEventListener("click", () => closeZoom(expandedImage), { once: true });
    });
  });

  function closeZoom(expandedImage) {
    overlay.classList.remove("active");
    expandedImage.classList.remove("active");

    // Remove the element after transition
    expandedImage.addEventListener("transitionend", () => expandedImage.remove());
  }
});










// // Select the elements
// const image = document.querySelector('.zoomable-image');
// const overlay = document.querySelector('.overlay');

// // Function to expand the image
// image.addEventListener('click', () => {
//   // Clone the image for zoom effect
//   const expandedImage = image.cloneNode();
//   expandedImage.classList.add('expanded-image', 'active');
//   document.body.appendChild(expandedImage);

//   // Show the overlay
//   overlay.classList.add('active');

//   // Add event listener to close on overlay click
//   overlay.addEventListener('click', () => closeZoom(expandedImage));
// });

// // Function to close the zoomed image
// function closeZoom(expandedImage) {
//   overlay.classList.remove('active');
//   expandedImage.classList.remove('active');

//   // Wait for animation to complete before removing the element
//   expandedImage.addEventListener('transitionend', () => {
//     expandedImage.remove();
//   });
// }
