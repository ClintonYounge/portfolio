const inputName = document.getElementById('username');
const message = document.getElementById('text-area');
const rawData = localStorage.getItem('cachedFormData');
const form = document.querySelector('form');
const email = document.getElementById('user-email');

let formObject = {
  name: '',
  mail: '',
  'text-area': '',
};