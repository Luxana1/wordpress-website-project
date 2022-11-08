// form validation
// variables
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

// validate form function
function validateName() {
    const name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "Please enter your name";
        return false;
    }
    if (!name.match(/^[\w'\-,.][^0-9_!¡?%"£^@#$+*÷?¿ˆ*(){}\[\]|~<>;:[\]]{0,}$/)) {
        nameError.innerHTML = "Please enter a valid name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    const email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = "Please enter your email";
        return false;
    }
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateSubject() {
    const subject = document.getElementById("contact-subject").value;

    if (subject.length === 0) {
        subjectError.innerHTML = "Please enter a subject";
        return false;
    }
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    const message = document.getElementById("contact-message").value;

    if (message.length === 0) {
        messageError.innerHTML = "Please enter a message";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateSubmit() {
    if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
        parent.document.getElementById("myForm").submit();
        return true;
    }
    submitError.innerHTML = "Please fill in all fields";
    submitError.style.display = "block";
    setTimeout(function () {
        submitError.style.display = "none";}, 3000);
    return false;
}

// event listeners
window.addEventListener("submit", function() {
    successMessage.innerHTML = "Form submitted successfully";
    setTimeout(function(){successMessage.innerHTML = "";}, 3000);
});

console.log("If you're reading this, you're awesome!");