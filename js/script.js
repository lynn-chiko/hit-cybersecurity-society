const form = document.getElementById("joinForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for applying to join HIT CyberSec Society! 🔐 We will review your application.");
        form.reset();

    });

}
function checkPassword() {

    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    const hasLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    document.getElementById("length").classList.toggle("valid", hasLength);
    document.getElementById("lowercase").classList.toggle("valid", hasLowercase);
    document.getElementById("uppercase").classList.toggle("valid", hasUppercase);
    document.getElementById("number").classList.toggle("valid", hasNumber);

    if (!hasLength || !hasLowercase || !hasUppercase || !hasNumber) {

        result.textContent = "Weak Password";

    } else if (password.length >= 12) {

        result.textContent = "Strong Password";

    } else {

        result.textContent = "Good Password";
    }
}

const password = document.getElementById("password");

if (password) {
    password.addEventListener("input", checkPassword);
}

function changeTip() {

    const tips = [
        "Never share your passwords with anyone.",
        "Think before clicking suspicious links.",
        "Enable two-factor authentication on important accounts.",
        "Keep your software and devices updated.",
        "Avoid using the same password for multiple accounts."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("securityTip").textContent = randomTip;
}