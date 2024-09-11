function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var fullImage = document.getElementById("fullImage");
    
    modal.style.display = "block";
    fullImage.src = imageSrc; // Set the clicked image to the modal
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }  