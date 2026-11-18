
// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const words = [
    "B.Tech Student",
    "PHP Developer",
    "Laravel Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formStatus = document.getElementById("formStatus");

    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    // Replace with your actual email address
    const receiverEmail = "yourmail@gmail.com";

    const emailBody =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message: " + message;

    const mailtoLink =
        "mailto:" + receiverEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    formStatus.textContent =
        "Opening your email application...";

    window.location.href = mailtoLink;
});


// MOBILE NAVBAR AUTO CLOSE
const navLinks = document.querySelectorAll(".nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarMenu.classList.contains("show")) {

            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();

        }

    });

});
