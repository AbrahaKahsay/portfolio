

//mobile menu
// functions for changing the navbar or dropdown menu's style 

function openNav() {
  document.getElementById('navBar').style.width = '100%';
}
//bugs here
function closeNav() {
  document.getElementById(navBar).style.width = '0%';
}

 // add event listner to open and close buttons.

document.getElementById('hum').addEventListener('click', () => {
  openNav();
});

//bugs here
document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
})

// bugs here
document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => [
  document.getElementById('navBar').style.width = '0%';
]));
