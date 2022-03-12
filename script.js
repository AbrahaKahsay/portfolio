

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

let workSection = document.querySelector('container-works-section');
let counter = 0;
// create an array of objects to store the cards
const data = [
  {
      //  first card 
    title: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(1).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"

  },
  {
    // second card
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(2).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"
  },
  {
    // third card
    title: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(3).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"

  },
  {
    // fourth card
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/Snapshoot-Portfolio(4).svg",
    technologies: ["html", "css", "javascript"],
    live: "images/Icon-Export.svg",
    source: "images/Icon-gitHub.png"
  }
]

// looping through workSection to put the cards
data.forEach(works => {
  const {title, description, image, technologies, live, source} = works;
  let listOfTechs = '';
  technologies.forEach(tech => {
    listOfTechs += `<li class="list">${tech}</li>`;
  });
});