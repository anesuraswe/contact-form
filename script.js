const contactForm = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const errorMessages = document.querySelectorAll(".error-message");

  errorMessages.forEach((error) => {
    error.textContent = "";
  });

  successMessage.textContent = "";

  let isValid = true;

  if (fullName === "") {
    showError("fullName", "Full name is required.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError("email", "Email address is required.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (subject === "") {
    showError("subject", "Subject is required.");
    isValid = false;
  }

  if (message === "") {
    showError("message", "Message is required.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent =
      "Thank you! Your message has been submitted successfully.";

    contactForm.reset();
  }
});

function showError(inputId, message) {
  const input = document.getElementById(inputId);

  const errorElement = input.nextElementSibling;

  errorElement.textContent = message;
}
