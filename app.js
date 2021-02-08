const menu = document.querySelector('.mobile-navigation');
const menuButtonOpen = document.querySelector('.menu-button');
const menuButtonClose = document.querySelector('.close');

menuButtonOpen.addEventListener('click', () => {
  menu.classList.toggle('unleash');
});

menuButtonClose.addEventListener('click', () => {
  menu.classList.toggle('unleash');
});
