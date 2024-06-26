const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.getElementById('close-modal');
console.log("hii");


// Show all images by default
images.forEach((image) => {
  image.style.display = 'block';
});

searchButton.addEventListener('click', () => {
    console.log("hii");
  const searchTerm = searchInput.value.trim().toLowerCase();
  images.forEach((image) => {
    const altText = image.getAttribute('data-alt').toLowerCase();
    if (altText.includes(searchTerm)) {
      // Show the modal window with the selected image
      modalImage.src = image.src;
      modal.classList.add('show');
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});

// Add click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Show the modal window with the selected image
    modalImage.src = image.src;
    modal.classList.add('show');
  });
});