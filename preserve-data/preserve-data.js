const email = document.getElementById('user-email');
const inputName = document.getElementById('username');
const message = document.getElementById('text-area');
const rawData = localStorage.getItem('cachedFormData');

let formObject = {
  username: '',
  message: '',
  'user-email': '',
};

if (rawData) {
  formObject = JSON.parse(rawData);
  inputName.value = formObject.username;
  email.value = formObject['user-email'];
  text_area.value = formObject['text-area'];
}

const dataStore = (event) => {
  const element = event.target;
  formObject[element.name] = element.value;
  localStorage.setItem('cachedFormData', JSON.stringify(formObject));
};

inputName.addEventListener('change', dataStore);
email.addEventListener('change', dataStore);
message.addEventListener('change', dataStore);