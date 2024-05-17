// Open the modal with the clicked image
function openModal(imageUrl) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = imageUrl;
}

// Close the modal when the close button is clicked
function closeModal() {
  document.getElementById("modal").style.display = "none";
}


// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 1000,
//   touch: false
// })