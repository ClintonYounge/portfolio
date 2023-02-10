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
if (rawData) {
  formObject = JSON.parse(rawData);
  inputName.value = formObject.name;
  email.value = formObject.mail;
  message.value = formObject['text-box'];
}

const dataStore = (event) => {
  const element = event.target;
  formObject[element.name] = element.value;
  localStorage.setItem('cachedFormData', JSON.stringify(formObject));
};

inputName.addEventListener('change', dataStore);
email.addEventListener('change', dataStore);
message.addEventListener('change', dataStore);
