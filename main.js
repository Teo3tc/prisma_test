import './assets/scss/main.scss'
import 'lazysizes';

const btnMenu = document.getElementById('menu-btn')
const btnMenuOpen = document.getElementById('menu-btn__open')
const btnMenuClose = document.getElementById('menu-btn__close')
const menu = document.getElementById('menu')

btnMenu.addEventListener('click',()=>{
  btnMenuClose.classList.toggle('menuActive')
  btnMenuOpen.classList.toggle('menuActive')
  menu.classList.toggle('menuActive')
})


