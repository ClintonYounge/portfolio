const menuBtn = document.querySelector('hamburger');
const menu = document.getElementById('theMenu');
const xBtn = document.getElementById('xBtn');
const navLinks = document.querySelectorAll('navs');
const introSection = document.querySelector('introduction');
const workSection = document.getElementById('work-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact');

function openMenu() {
  menu.style.display = block;
  introSection.style.filter = 'blur(2px)';
  workSection.style.filter = 'blur(2px)';
  aboutSection.style.filter = 'blur(2px)';
  contactSection.style.filter = 'blur(2px)';
}

function closeMenu() {
  introSection.style.filter = none;
  workSection.style.filter = none;
  aboutSection.style.filter = none;
  contactSection.style.filter = none;
  menu.style.display = none;
}

menuBtn.addEventListener(click, openMenu);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener(click, closeMenu);
}

xBtn.addEventListener(click, closeMenu);