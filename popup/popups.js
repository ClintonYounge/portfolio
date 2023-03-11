const projects = [
  {
    id: 'popup1',
    Title: 'Experience Guyana',
    closeButt: '&times;',
    Client: 'CANOPY',
    counter1: 'images/Dot-shape.png',
    Role: 'Back End Dev',
    counter2: 'images/Dot-shape.png',
    year: '2023',
    snapshot: 'images/Snap1.png',
    description: "A chance to expeience the country Guyana. An event filled tour awaits any who enroll. The scheduled events will have all your senses experience Guyana. A chance to expeience the country Guyana. An event filled tour awaits any who enroll. The scheduled events will have all your senses experience Guyana",
    badges: ['html', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup2',
    Title: 'Multi-Post Stories',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'images/Dot-shape.png',
    Role: 'Full Stack Dev',
    counter2: 'images/Dot-shape.png',
    year: '2015',
    snapshot: 'images/Snap2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    badges: ['html', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup3',
    Title: 'Facebook 360',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'images/Dot-shape.png',
    Role: 'Full Stack Dev',
    counter2: 'images/Dot-shape.png',
    year: '2015',
    snapshot: 'images/Snap3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    badges: ['html', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup4',
    Title: 'Uber Navigation',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'images/Dot-shape.png',
    Role: 'Lead Developer',
    counter2: 'images/Dot-shape.png',
    year: '2018',
    snapshot: 'images/Snap4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    badges: ['html', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
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

  const mq = window.matchMedia('(min-width: 1720px)');

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
  const liveBtn = document.createElement('button');
  liveBtn.textContent = projects[i].liveBtn;
  liveBtn.style.width = '130px';
  liveBtn.append(liveIcon);
  liveBtn.classList.add('liveBtnPty');

  btnArea.append(liveBtn);

  const sourceIcon = document.createElement('img');
  sourceIcon.src = 'images/popup/source-icon.png';
  const sourceBtn = document.createElement('button');
  sourceBtn.textContent = projects[i].sourceBtn;
  sourceBtn.style.width = '146px';
  sourceBtn.append(sourceIcon);
  sourceBtn.classList.add('liveBtnPty');
  btnArea.append(sourceBtn);
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