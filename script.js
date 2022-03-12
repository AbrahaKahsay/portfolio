

//mobile menu
// functions for changing the navbar or dropdown menu's style 

function openNav() {
  document.getElementById('navBar').style.width = '100%';
}

function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}

 // add event listner to open and close buttons.

document.getElementById('hum').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('navBar').style.width = '0%';
}));


// creating cards Dynamically using DOM 

let workSection = document.querySelector('.container-works-section');
let counter = 0;
// create an array of objects to store the cards
const data = [
  {
      //  first card 
    title: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(1).svg",
    technologies: ["html", "css", "javascript"],
  },
  {
    // second card
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(2).svg",
    technologies: ["html", "css", "javascript"],
  },
  {
    // third card
    title: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(3).svg",
    technologies: ["html", "css", "javascript"],

  },
  {
    // fourth card
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(4).svg",
    technologies: ["html", "css", "javascript"],
  }
];

// looping through workSection to put the cards
data.forEach(works => {
  const {title, description, image, technologies, live, source} = works;

  let listOfTechs = '';
  technologies.forEach(tech => {
    listOfTechs += `<li class="list">${tech}</li>`;
  });

  const cardHTML = `
  <div class="card" id="card${counter+1}">
    <div class="desktop-card-image">
          <img
            class="image1"
            src="images/Snapshoot-Portfolio(${counter+1}).svg"
            alt="Porfolio-image1"
          />
        </div>
        <div class="desktop-card-content">
          <div class="headline1">
            <ul class="tonic">
              <li><h3>${title}</h3></li>
            </ul>
            <ul class="card-head">
              <li class="canopy1">CANOPY</li>
              <li class="canopy">Back End Dev</li>
              <li class="canopy">2015</li>
            </ul>
          </div>
          <p>${description}</p>
          <ul class="cardsub">${listOfTechs}</ul>
          <button type="button" class="btn-work" data-works="${counter}">See Project</button>
        </div>
   </div>
    `;
    workSection.insertAdjacentHTML('beforeend', cardHTML);
    counter += 1;
});

// Select cards button for popup

const popupButtons = document.querySelectorAll('.btn-work');
popupButtons.forEach(popBtn => {
  popBtn.addEventListener('click', ()=> {
    const btnWorkIndex = popBtn.dataset.works;
    const {title, description, image, technologies} = data[btnWorkIndex];
    
    let listOfTechs = '';
    technologies.forEach(tech => {
    listOfTechs += `<li class="list">${tech}</li>`;
  });

  const modalPopup = `
  <div class="modal-content">
    <div class="title-x">
      <div><h3 class="title-mod">${title}</h3></div>
      <div><a id="close-modal" class="cls-btn">&times;</a></div>
    </div>
      <ul class="pop-card-heads">
        <li style="list-style: none" class="canopy1 campany">CANOPY</li>
        <li class="canopy">Back End Dev</li>
        <li class="canopy">2015</li>
      </ul>
      <div class="popup-card">
            <img
              class="modal-image"
              src="${image}"
              alt="Porfolio-image1"
            />
      </div>
      <div><p class="modal-text">${description}</p></div>
      <ul class="modal-tags">${listOfTechs}</ul>
      <div class="modal-btn">
        <button id="live-btn" type="button" class="btn">
          <span>See live <img src="images/Icon-Export.svg" alt="live icon button" /></span>
        </button>
        <button id="source-btn" type="button" class="btn">
          <span>See source <img src="images/Icon-gitHub.png" alt="source icon button" /></span>
        </button>
      </div>

  </div>
  `;
  const modalSelection = document.getElementById('modal');
  modalSelection.innerHTML = modalPopup;
  modalSelection.style.display = 'flex';

<<<<<<< HEAD
  const popCloseBtn = document.querySelector('.cls-btn');
  popCloseBtn.addEventListener('click', ()=> {
=======
  const popCloseBtn = document.getElementById('close-modal');
  popCloseBtn.onclick = function closeOnClick() {
>>>>>>> b8e07f14cbcb2761e67525979c4a44fa535d4cb5
    modalSelection.style.display = 'none';
  };

  window.onclick = function closeOnEvent(event) {
    if (event.target === modalSelection) {
      modalSelection.style.display = 'none';
    }
  };

  });
});