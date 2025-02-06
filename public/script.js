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

const toggleExpand = (button) => {
  const targetId = button.getAttribute("data-target");
  const desc = document.getElementById(targetId);

  if (desc.classList.contains("expanded-desc")) {

    desc.style.height = desc.scrollHeight + "px";
    desc.offsetHeight;
    desc.style.height = "0";
    desc.classList.remove("expanded-desc");

    button.classList.remove("rotateIn")
    button.classList.add("rotateOut");

  } else {

    desc.style.height = desc.scrollHeight + "px";
    desc.classList.add("expanded-desc");

    desc.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "height") {
        desc.style.height = "auto";
        desc.removeEventListener("transitionend", handler);
      }
    })

    button.classList.remove("rotateOut");
    button.classList.add("rotateIn");
  }
};
