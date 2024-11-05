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
});
