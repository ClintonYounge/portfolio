const menuBtn = document.querySelector('.hamburger');
const menu = document.getElementById('theMenu');
const xBtn = document.getElementById('xBtn');
const navLinks = document.querySelectorAll('.navs');

function openMenu() {
  menu.style.opacity = '90%';
}

function closeMenu() {
  menu.style.opacity = 0;
}

menuBtn.addEventListener('click', openMenu);
navLinks[0].addEventListener('click', closeMenu);
navLinks[1].addEventListener('click', closeMenu);
navLinks[2].addEventListener('click', closeMenu);
xBtn.addEventListener('click', closeMenu);