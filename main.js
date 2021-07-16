import "./assets/scss/main.scss";
import "lazysizes";

const btnMenu = document.getElementById("menu-btn");
const btnMenuOpen = document.getElementById("menu-btn__open");
const btnMenuClose = document.getElementById("menu-btn__close");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  btnMenuClose.classList.toggle("menuActive");
  btnMenuOpen.classList.toggle("menuActive");
  menu.classList.toggle("menuActive");
});

window.addEventListener("scroll", () => {
  const target = [...document.querySelectorAll(".js-parax")];
  console.log(target);
  console.log(123);
  target.forEach((el) => {
    const pos = window.pageYOffset * el.dataset.speed;
    console.log(pos);
    el.style.transform = `translate3d(0px,${pos}px,0px)`;
  });
});
