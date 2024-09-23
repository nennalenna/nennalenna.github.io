function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const fullImage = document.getElementById("fullImage");
  fullImage.src = imageSrc; // Set the source of the modal image
  modal.style.display = "flex"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Hide the modal
}


const images = document.querySelectorAll('.zoomable-image');
const overlay = document.getElementById('overlay');

images.forEach(image => {
    image.addEventListener('click', () => {
        const clonedImage = image.cloneNode();
        clonedImage.classList.add('full-size');

        overlay.innerHTML = ''; // Clear previous content
        overlay.appendChild(clonedImage);
        overlay.style.display = 'flex'; // Show overlay with flex for centering
    });
});

// Close overlay when clicking on it
overlay.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide overlay
});

// contact form

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add further validation here if needed

  // Example of a simple alert to show submission
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form
  this.reset();
});

