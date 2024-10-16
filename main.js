// Hamburger menu toggle functionality
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

// Select all images in the gallery and controls
const photos = document.querySelectorAll('.photo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Start at the first photo

// Function to update the visible photo
function updateGallery() {
    // Hide all photos
    photos.forEach((photo, index) => {
        photo.classList.remove('visible');
    });
    // Show the current photo
    photos[currentIndex].classList.add('visible');
}

// Show the previous image
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = photos.length - 1; // Loop back to the last image
    }
    updateGallery();
});

// Show the next image
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= photos.length) {
        currentIndex = 0; // Loop back to the first image
    }
    updateGallery();
});

// Initial display
updateGallery();