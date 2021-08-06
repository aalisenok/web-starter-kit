const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', e => {
  e.preventDefault();
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
