// JavaScript for Form Validation
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email) && email.endsWith(".com");
}


signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add("error");
    alert("Email harus sesuai format email dengan akhiran .com.");
  } else {
    emailInput.classList.remove("error");
    alert("Pendaftaran berhasil!");
  }
});

