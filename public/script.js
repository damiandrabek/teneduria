document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Create a FormData object to capture the form's input data
    const formData = new FormData(form);

    try {
      // Send the form data using fetch
      const response = await fetch("https://example.com/submit-form", {
        method: "POST",
        body: formData,
      });

      // Check if the response was successful
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset(); // Optionally, reset the form
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  });
});
