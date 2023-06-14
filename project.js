/** @format */

const navmenu = document.querySelector("#mobile-menu");
const navlinks = document.querySelector(".navbarMenu");
const navLogo = document.querySelector("#navbar_logo");

const dropdownMenu = () => {
  navmenu.classList.toggle("is-active");
  navlinks.classList.toggle("active");
};

navmenu.addEventListener("click", dropdownMenu);

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const namecheck = name.value.trim();
  const emailcheck = email.value.trim();

  console.log("Name: " + namecheck);
  console.log("Email: " + emailcheck);

  if (namecheck === "") {
    alert("Name field can't be blank. Required this field.");
    name.focus();
  } else {
    setSuccessMessage(name);
  }

  if (emailcheck === "") {
    alert("Email field can't be blank. Required this field.");
    email.focus();
  } else {
    setSuccessMessage(email);
  }

  validateForm();
}

function validateForm() {
  var radios = document.getElementsByClassName("pref");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }

  if (!formValid) alert("Must select a pronoun set from the options");
  return formValid;
}

function setSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
