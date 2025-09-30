const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__menu");
const logo = document.querySelector(".nav__logo");
const menuLinks = document.querySelectorAll(".nav__item-link");

function toggleMenu() {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
  logo.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
}

function closeMenu() {
  burger.classList.remove("is-active");
  nav.classList.remove("is-open");
  logo.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

burger.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
