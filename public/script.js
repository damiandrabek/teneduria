seamless.polyfill();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[name="contact"]');

  form.addEventListener("submit", async function (event) {
    
    event.preventDefault(); // Prevent the default form submission

    // Perform custom validation here if needed
    const formData = new FormData(form);

    try {
      // Send form data to Netlify
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        form.reset(); // Clear the form
      } else {
        console.log("There was an issue with your submission.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      console.log("An error occurred. Please try again.");
    }
  });

  const menuIcon = document.getElementById("menu-icon");
  const navModal = document.getElementById("nav-modal");
  const closeBtn = document.getElementById("close-btn");
  console.log(menuIcon, navModal, closeBtn)

  // Open the modal when the menu icon is clicked
  menuIcon.addEventListener("click", function () {
    navModal.style.width = "100%";
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", function () {
    navModal.style.width = "0";
  });

  // Close the modal when clicking outside the nav-content
  navModal.addEventListener("click", function (event) {
    if (event.target === navModal) {
      navModal.style.width = "0";
    }
  });
});
