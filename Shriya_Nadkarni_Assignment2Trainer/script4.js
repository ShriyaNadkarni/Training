document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        errorMessage.innerHTML = "";

        // Check if Name field is empty
        if (nameInput.value.trim() === "") {
            errorMessage.innerHTML += "Name is required.<br>";
            isValid = false;
        }

        // Check if Email field is empty
        if (emailInput.value.trim() === "") {
            errorMessage.innerHTML += "Email Address is required.<br>";
            isValid = false;
        }

        // Check if Phone field is empty
        if (phoneInput.value.trim() === "") {
            errorMessage.innerHTML += "Phone is required.<br>";
            isValid = false;
        }

        // Check if Subject field is empty
        if (subjectInput.value.trim() === "") {
            errorMessage.innerHTML += "Subject is required.<br>";
            isValid = false;
        }

        // Check if Message field is empty
        if (messageInput.value.trim() === "") {
            errorMessage.innerHTML += "Message is required.<br>";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
        console.log('this is working')
    });
});