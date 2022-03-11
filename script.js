

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

// Local Storage

const inpName = document.getElementById('name');
const inpEmail = document.getElementById('email');
const inpMessage = document.getElementById('message');

function change(){
  const formObject = {
  name: inpName.value,
  email: inpEmail.value,
  message: inpMessage.value,
};
localStorage.setItem('form', JSON.stringify(formObject));
}

document.addEventListener('DOMContentLoaded', () => {
  const formVal = localStorage.getItem('form');
  if (formVal) {
    const formObjectPar = JSON.parse(formVal);
    inpName.value = formObjectPar.name;
    inpEmail.value = formObjectPar.email;
    inpMessage.value = formObjectPar.message;
  }
});

inpName.onchange = change;
inpEmail.onchange = change;
inpMessage.onchange = change;

