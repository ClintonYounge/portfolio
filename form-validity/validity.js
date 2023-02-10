const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.contact-form');
const email = document.querySelector('#user-email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.visibility = 'visible';
    email.style.border = '2px solid #dd5353';
  }
});