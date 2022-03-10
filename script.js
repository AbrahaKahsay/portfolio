

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
function openNav() {
  document.getElementById('navBar').style.width = '100%';
}

function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}

document.getElementById('hum').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('navBar').style.width = '0%';
}));

//Popup window modal

// declearing project objects for the work section

const projects = [
  {
      //  first card 
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(1).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"

  },
  {
    // second card
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(2).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"
  },
  {
    // third card
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(3).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"

  },
  {
    // fourth card
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(4).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"
  }
]

// put some query selectors and functions here to call the modal
function modal(){
  const projectDetails = document.querySelector('.card');
  const seenProject = document.querySelectorAll('.proj');
  const main = document.querySelector('.main-pop');

  seenProject.forEach((button) => {
    button.addEventListener('click', () => {
      const btnId = button.getAttribute('id');
      projectDetails.classList.add('showpopup');
      main.classList.add('blur');
    
      const content = `<div class="popup-header">
          <h1 id="project-name">${projects[btnId].name}</h1>
          <a class="card-close-btn" id="popup-close">&times;</a>
        </div>
        <div class="info-list">
          <ul class="list">
            <li class="canopy1">CANOPY</li>
            <li class="canopy">Back End Dev</li>
            <li class="canopy">2015</li>
          </ul>
        </div>
        <img class="pop-image" src="${projects[btnId].image}" alt="Snapshoot" />
        <div class="description">
            <p class="detail">${projects[btnId].description}</p>
        </div>
        <ul class="tech-button" id="technologies">
         <li>
          <button type="button" class="html-p">html</button>
         </li>
         <li>
          <button type="button" class="css-p">css</button>
         </li>
         <li>
          <button type="button" class="js-p">javaScript</button>
         </li>
        </ul>
        <div class="live-btns">
         <button type="button" class="live">See live
            <img
            src="${projects[btnId].live}"
            class="liveimage"
            alt="live"
            />
           </button>
           <button type="button" class="Source">See Source
            <img
            src="${projects[btnId].source}"
            class="sourceimage"
            alt="Source"
            />
            </button>
          </div>
        </div>
        
      `;
      projectDetails.innerHTML = content;
      const closePopup = projectDetails.querySelectorAll('.card-close-btn');
      closePopup[btnId].addEventListener('click', () => {
        projectDetails.classList.remove('showpopup');
        main.classList.remove('blur');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  modal();
});

