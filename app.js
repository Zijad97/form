"use strict";
const icons = document.querySelectorAll("i");

icons.forEach((icon) => icon.classList.add("hide"));

const errors = document.querySelectorAll("small");

errors.forEach((error) => (error.textContent = ""));

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  check();
});

function check() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  console.log(emailValue);
  if (usernameValue === "") showError(username, "The input cannot be blank");
  else if (usernameValue.length < 4)
    showError(username, " 4 characters minimum");
  else if (usernameValue.length >= 4) noError(username);

  if (emailValue === "") showError(email, "The input cannot be blank");
  else if (
    emailValue.includes("@gmail.com") ||
    emailValue.includes("@outlook.com") ||
    emailValue.includes("@hotmail.com")
  )
    noError(email);
  else showError(email, "invalid email");
  if (passwordValue === "") showError(password, "The input cannot be blank");
  else if (passwordValue.length < 8)
    showError(password, "8 characters minimum");
  else noError(password);

  if (password2Value === "") showError(password2, "The input cannot be blank");
  else if (password2Value !== passwordValue)
    showError(password2, "passwords do not match");
  else noError(password2);
}

function showError(input, message) {
  const section = input.parentElement;
  input.classList.add("red");
  const small = section.querySelector("small");
  small.textContent = message;
  const x = section.querySelector(".error");
  x.classList.remove("hide");
}
function noError(input) {
  const section = input.parentElement;
  const small = section.querySelector("small");
  input.classList.remove("red");
  input.classList.add("green");
  const y = section.querySelector(".correct");
  y.classList.remove("hide");
  section.querySelector(".error").classList.add("hide");
  small.textContent = "";
}
