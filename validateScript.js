const inputField = document.getElementById("inputField");
const form = document.getElementById("myForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateInput();

});

function validateInput () {
    const inputValue = inputField.value.trim();
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (!alphanumericRegex.test(inputValue)){
        errorMessage.textContent = "Invalid input! Only letters and numbers allowed.";
        errorMessage.style.color = "red";
    } else {
        errorMessage.textContent = "Input is valid! Form submitted successfully.";
        errorMessage.style.color = "green";

    }
}

