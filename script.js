const pass = document.getElementById("password");
const cPass = document.getElementById("confirm-password");

const form = document.getElementById("get-started-form");
const submitBtn = document.getElementById("submit-button");

const inputs = form.querySelectorAll("input[required]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

submitBtn.addEventListener("click", () => {
  var isValid = true;

  console.log(inputs);
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      isValid = false;
      input.classList.add("invalid");
    }
  });

  if (pass.value != cPass.value) {
    isValid = false;
    pass.classList.add("invalid");
    cPass.classList.add("invalid");
    alert("Passwords must match.");
  }

  if (isValid) {
    form.submit();
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("invalid");
  });
});
