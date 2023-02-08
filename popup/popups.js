const projects = [
    {
      id: 'popup1',
      Title: 'Tonic',
      closeButt: '&times;',
      Client: 'CANOPY',
      counter1: 'images/Dot-shape.png',
      Role: 'Back End Dev',
      counter2: 'images/Dot-shape.png',
      year: '2015',
      snapshot: 'images/Snap1.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
      badges: ['html', 'css', 'ruby on rails', 'javascript'],
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
      badges: ['html', 'css', 'ruby on rails', 'javascript'],
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
      badges: ['html', 'css', 'ruby on rails', 'javascript'],
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
      badges: ['html', 'css', 'ruby on rails', 'javascript'],
      liveBtn: 'See live',
      sourceBtn: 'See Source',
    },
  ];
  
  const modalArray = [];
  
  for (let i = 0; i < projects.length; i += 1) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
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
      snapshot.style.width = '100%';
      snapshot.style.height = '300px';
  
      card.append(snapshot);
      const description = document.createElement('p');
      description.textContent = projects[i].description;
      
      card.append(description);
      description.style.width = '600px';
  
      const leftOverSpace = document.createElement('div');
      leftOverSpace.style.display = 'flex';
      leftOverSpace.style.flexWrap = 'wrap';
      card.append(leftOverSpace);
  
      leftOverSpace.append(description);
  
      const badges = document.createElement('ul');
  
      for (let j = 0; j < projects[i].badges.length; j += 1) {
        const li = document.createElement('li');
        li.textContent = projects[i].badges[j];
        li.classList.add('liPty');
  
        badges.append(li);
      }
  
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
  
      closeButt.addEventListener('click', () => { modalArray[i].classList.remove('openPopup'); modalArray[i].classList.add('closePopup'); });
  
      const seeProject = document.querySelectorAll('.see-project');
      seeProject[i].addEventListener('click', () => { modalArray[i].classList.remove('closePopup'); modalArray[i].classList.add('openPopup'); });
    } else {
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
      snapshot.src = projects[i].snapshot;
      snapshot.style.width = '100%';
      snapshot.style.height = '300px';
      snapshot.style.marginLeft = 'auto';
      snapshot.style.marginRight = 'auto';
  
      card.append(snapshot);
  
      const description = document.createElement('p');
      description.textContent = projects[i].description;
      description.style.marginTop = '12px';
      description.style.marginBottom = '24px';
      card.append(description);
      description.style.width = '700px';
  
      const leftOverSpace = document.createElement('div');
      leftOverSpace.style.display = 'flex';
      leftOverSpace.style.flexWrap = 'wrap';
      card.append(leftOverSpace);
  
      leftOverSpace.append(description);
  
      const badges = document.createElement('ul');
  
      for (let j = 0; j < projects[i].badges.length; j += 1) {
        const li = document.createElement('li');
        li.textContent = projects[i].badges[j];
        li.classList.add('liPty');
  
        badges.append(li);
      }
  
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
  
      closeButt.addEventListener('click', () => { modalArray[i].classList.remove('openPopup'); modalArray[i].classList.add('closePopup'); });
  
      const seeProject = document.querySelectorAll('.see-project');
      seeProject[i].addEventListener('click', () => { modalArray[i].classList.remove('closePopup'); modalArray[i].classList.add('openPopup'); });
    }
  }
  