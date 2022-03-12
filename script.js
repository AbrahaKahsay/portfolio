

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
    // console.log(workSection);
    counter += 1;
});