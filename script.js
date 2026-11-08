
// Get the form
const contactForm = document.getElementById("contactForm");

// Get the success message element
const successMessage = document.getElementById("successMessage");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent the default form submission
    event.preventDefault();

    // Get input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get all error message elements
    const errorMessages = document.querySelectorAll(".error-message");

    // Clear previous errors
    errorMessages.forEach(error => {
        error.textContent = "";
    });

    successMessage.textContent = "";

    let isValid = true;

    // Validate Full Name
    if (fullName === "") {
        showError("fullName", "Full name is required.");
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError("email", "Email address is required.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    // Validate Subject
    if (subject === "") {
        showError("subject", "Subject is required.");
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        showError("message", "Message is required.");
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        // Clear the form
        contactForm.reset();

    }

});

// Function to display errors
function showError(inputId, message) {

    const input = document.getElementById(inputId);

    const errorElement = input.nextElementSibling;

    errorElement.textContent = message;

}
