document.addEventListener("DOMContentLoaded", () => {
    const photoUpload = document.getElementById("photo-upload");
    const userPhoto = document.getElementById("user-photo");
  
    // Handle photo upload
    photoUpload.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        // Display uploaded photo and hide the file input
        reader.onload = (e) => {
          userPhoto.src = e.target.result;
          photoUpload.style.display = "none"; // Hide file input after upload
        };
  
        reader.readAsDataURL(file);
      }
    });
  });
  