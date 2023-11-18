const projects = [
  {
    id: 'popup1',
    Title: 'Doctor Appointments Backend',
    closeButt: '&times;',
    Client: 'CANOPY',
    counter1: 'images/Dot-shape.png',
    Role: 'Back End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/dr-globe.png',
    description: "A complete project separated into two apps. A ruby on rails backend app to store all necessary data and a react/redux front end app that allows users to signup, login, and interact with doctors and make appointments. All interactions manipulate data in the backend app.",
    badges: ['HTML5', 'Ruby on Rails', 'PostgreSQL'],
    liveBtn: 'https://doctorappoinments.netlify.app/',
    sourceBtn: 'https://github.com/benja27/Doctor-Appoinments---Front-End',
  },
  {
    id: 'popup2',
    Title: 'Catalog of Things',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'images/Dot-shape.png',
    Role: 'Back End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/catalog-of-things.png',
    description: "A console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games.",
    badges: ['HTML5', 'Ruby on Rails', 'PostgreSQL'],
    liveBtn: 'https://github.com/ClintonYounge/Catalog-Of-Things-Ruby-Capstone',
    sourceBtn: 'https://github.com/ClintonYounge/Catalog-Of-Things-Ruby-Capstone',
  },
  {
    id: 'popup3',
    Title: 'Meals Budgeting App',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'images/Dot-shape.png',
    Role: 'Front End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/meal-budgeting.jpg',
    description: "A mobile web application where you can manage your budget to spend on meals: you have a list of orders associated with a meal, so that you can see how much money you spent and on what.",
    badges: ['HTML5', 'Ruby on Rails', 'PostgreSQL', 'CSS3'],
    liveBtn: 'https://meals-budgetting-app.onrender.com/',
    sourceBtn: 'https://github.com/ClintonYounge/Meals-Budgeting-App',
  },
  {
    id: 'popup4',
    Title: 'Mobile Tech Financial Digest',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'images/Dot-shape.png',
    Role: 'Front End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/MTFD.png',
    description: "Mobile Tech Financial Digest is a react redux project which allows users to go through financial data of Apple, Samsung, Xiaomi and Google by interacting.",
    badges: ['React', 'Redux', 'JavaScript', 'CSS3'],
    liveBtn: 'https://mobile-tech-financial-digest.onrender.com/',
    sourceBtn: 'https://github.com/ClintonYounge/Mobile-Tech-Financial-Digest',
  },
  {
    id: 'popup5',
    Title: 'Space Traveller',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'images/Dot-shape.png',
    Role: 'Front End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/space-traveler.jpeg',
    description: "In this project, I collaborated with another developer and worked with live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join space missions.",
    badges: ['React', 'Redux', 'JavaScript', 'CSS3'],
    liveBtn: 'https://dev--bespoke-frangollo-05512c.netlify.app/',
    sourceBtn: 'https://github.com/mpa-mxiang/space-traveller',
  },
  {
    id: 'popup6',
    Title: 'JavaScript Capstone',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'images/Dot-shape.png',
    Role: 'Full Stack Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/js-capstone.png',
    description: "A JavaScript capstone project about building a web application based on an external API. In a group with 2 other programmers, we selected the Meals API that provides data about meals then built the webapp around it.",
    badges: ['React', 'Redux', 'JavaScript', 'CSS3'],
    liveBtn: 'https://clintonyounge.github.io/JS-Capstone-Group-Project/dist/',
    sourceBtn: 'https://github.com/ClintonYounge/JS-Capstone-Group-Project',
  },
  {
    id: 'popup7',
    Title: 'Experience Guyana',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'images/Dot-shape.png',
    Role: 'Front End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/projects/exp-gy.png',
    description: "A chance to experience the country Guyana. An event filled tour awaits.",
    badges: ['React', 'Redux', 'JavaScript', 'CSS3'],
    liveBtn: 'https://clintonyounge.github.io/Experience-Guyana/',
    sourceBtn: 'https://github.com/ClintonYounge/Experience-Guyana',
  },
];

const desktopDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.";

const modalArray = [];

for (let i = 0; i < projects.length; i += 1) {
  const modal = document.createElement('div');
  modal.classList.add('closePopup');
  modal.classList.add('modalPty');

  const card = document.createElement('div');
  card.classList.add('cardPty');

  modal.appendChild(card);

  const title = document.createElement('h2');
  title.textContent = projects[i].Title;
  title.classList.add('titlePty');

  const closeButt = document.createElement('span');
  closeButt.innerHTML = projects[i].closeButt;
  closeButt.classList.add('closeButtPty');

  card.append(title, closeButt);

  const counter1Img = document.createElement('img');
  counter1Img.src = projects[i].counter1;
  counter1Img.style.marginLeft = '5px';
  counter1Img.style.marginRight = '5px';

  const counter2Img = document.createElement('img');
  counter2Img.src = projects[i].counter2;
  counter2Img.style.marginLeft = '5px';
  counter2Img.style.marginRight = '5px';

  const positions = document.createElement('div');
  positions.classList.add('positionsPty');

  positions.append(projects[i].Client, counter1Img, projects[i].Role, counter2Img,
    projects[i].year);

  card.appendChild(positions);

  const snapshot = document.createElement('img');
  snapshot.classList.add('snapImages');
  snapshot.src = projects[i].snapshot;

  card.append(snapshot);
  const description = document.createElement('p');
  description.classList.add('card-desc');

  description.textContent = projects[i].description;

  card.append(description);

  const leftOverSpace = document.createElement('div');
  leftOverSpace.style.display = 'flex';
  leftOverSpace.style.flexWrap = 'wrap';
  card.append(leftOverSpace);

  leftOverSpace.append(description);

  const badges = document.createElement('ul');
  badges.classList.add('badges');

  for (let j = 0; j < projects[i].badges.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projects[i].badges[j];
    li.classList.add('liPty');

    badges.append(li);
  }

  const hr = document.createElement('hr');
  hr.classList.add('hrclass');
  badges.append(hr);

  const rightBlock = document.createElement('div');
  rightBlock.style.display = 'flex';
  rightBlock.style.flexDirection = 'column';
  rightBlock.append(badges);

  const btnArea = document.createElement('div');
  btnArea.classList.add('btnAreaPty');

  rightBlock.append(btnArea);

  const liveIcon = document.createElement('img');
  liveIcon.src = 'images/popup/live-icon.svg';
  
  const liveLink = document.createElement('a');
  liveLink.href = projects[i].liveBtn;
  liveLink.target = '_blank';
  liveLink.style.textDecoration = 'none';

  const liveBtn = document.createElement('button');
  liveBtn.textContent = 'See Live';
  liveBtn.style.width = '130px';
  liveBtn.append(liveIcon);
  liveBtn.classList.add('liveBtnPty');

  liveLink.appendChild(liveBtn);
  btnArea.append(liveLink);

  const sourceIcon = document.createElement('img');
  sourceIcon.src = 'images/popup/source-icon.png';
  
  const sourceLink = document.createElement('a');
  sourceLink.href = projects[i].sourceBtn;
  sourceLink.target = '_blank';
  sourceLink.style.textDecoration = 'none';

  const sourceBtn = document.createElement('button');
  sourceBtn.textContent = 'See Source';
  sourceBtn.style.width = '146px';
  sourceBtn.append(sourceIcon);
  sourceBtn.classList.add('liveBtnPty');
  
  sourceLink.appendChild(sourceBtn);
  btnArea.append(sourceLink);
  
  leftOverSpace.append(rightBlock);

  modalArray.push(modal);

  document.querySelector('body').appendChild(modal);

  const headerSection = document.querySelector('header');
  const introSection = document.querySelector('.introduction');
  const workSection = document.getElementById('work-section');
  const aboutSection = document.getElementById('about-section');
  const contactSection = document.getElementById('contact');

  closeButt.addEventListener('click', () => {
    modalArray[i].classList.remove('openPopup');
    modalArray[i].classList.add('closePopup');
    headerSection.style.filter = 'none';
    introSection.style.filter = 'none';
    workSection.style.filter = 'none';
    aboutSection.style.filter = 'none';
    contactSection.style.filter = 'none';
  });

  const seeProject = document.querySelectorAll('.see-project');

  seeProject[i].addEventListener('click', () => {
    modalArray[i].classList.remove('closePopup');
    modalArray[i].classList.add('openPopup');
    headerSection.style.filter = 'blur(3px)';
    introSection.style.filter = 'blur(3px)';
    workSection.style.filter = 'blur(3px)';
    aboutSection.style.filter = 'blur(3px)';
    contactSection.style.filter = 'blur(3px)';
  });
}