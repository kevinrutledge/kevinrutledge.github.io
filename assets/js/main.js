document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let valid = true;
    let errorMessage = "";

    if (name === "") {
      valid = false;
      errorMessage += "Name is required.\n";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      valid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    if (message === "") {
      valid = false;
      errorMessage += "Message is required.\n";
    }

    if (!valid) {
      alert(errorMessage);
      event.preventDefault();
    }
  });
});
