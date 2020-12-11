//You rodrigo are a fucking idiot (edition 1)
// 1. you called the "code" in html with href instead of src dumbass
// 2. you put an id to an item and call it like a class, fucking retarded
// 3. fucking retarded x2 that generates the same fucking problem like 20 times asshole
// i hate you: Rodrigo Seguel.
// from: Rodrigo Seguel <3

//change sub title
const subtitle = document.querySelector('.subtitle-text');
const subtitles = ['Programmer', 'Game developer', 'Web developer', 'Front-end'];
let counter = 0;

setInterval(() => {subtitle.innerHTML = subtitles[counter]}, 4000);
setInterval(() => {
  let newCount = counter++;
  if (newCount == 2) {
    counter = 0;
  }}, 4000);
//change sub title
  
//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.2,
  spaceBetween: 30,
  initialSlide: 2,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//swiper

//const gotoExperience = () => window.location.href = '#scroller'; hiperlink to experience
const openItch = () => window.open('https://khalzdev.itch.io/');
const openGit = () => window.open('https://github.com/Khalzz');
const openStack = () => window.open('https://es.stackoverflow.com/users/175478/khals')
const openIg = () => window.open('https://www.instagram.com/moon.drawner.chu.p0u/')
const gotoBlog = () => window.open('html/blog.html');
const gotoContact = () => window.open('html/contact.html');
const gotoAbout = () => window.open('html/about.html');
const gotoProjects = () => window.open('html/projects.html');

const nav = document.querySelector(".navegation");
const portButton = document.getElementById("button-port");
const aboutButton = document.getElementById("button-about");
const blogButton = document.getElementById("button-blog");
const contactButton = document.getElementById("button-contact");

//nav
let opcion = 1;

function openNav(){
  nav.style.height = '50vw';
  nav.style.padding = '5vw';
  
  portButton.style.height = '9vw';
  portButton.style.width = '50vw';
  portButton.style.padding = '2vw 12vw';
  portButton.style.margin = '1vw 20vw';
  portButton.style.fontSize = '4vw';
  portButton.style.border = '2px solid #E5E9F0';
  
  aboutButton.style.height = '9vw';
  aboutButton.style.width = '50vw';
  aboutButton.style.padding = '2vw 12vw';
  aboutButton.style.margin = '1vw 20vw';
  aboutButton.style.fontSize = '4vw';
  aboutButton.style.border = '2px solid #E5E9F0';
  
  blogButton.style.height = '9vw';
  blogButton.style.width = '50vw';
  blogButton.style.padding = '2vw 12vw';
  blogButton.style.margin = '1vw 20vw';
  blogButton.style.fontSize = '4vw';
  blogButton.style.border = '2px solid #E5E9F0';

  contactButton.style.height = '9vw';
  contactButton.style.width = '50vw';
  contactButton.style.padding = '2vw 12vw';
  contactButton.style.margin = '1vw 20vw';
  contactButton.style.fontSize = '4vw';
  contactButton.style.border = '2px solid #E5E9F0';
  opcion = 2;
}

function closeNav() {   
  nav.style.height = '0';
  nav.style.padding = '0';
  
  portButton.style.height = '0';
  portButton.style.width = '100%';
  portButton.style.padding = '0';
  portButton.style.margin = '0';
  portButton.style.fontSize = '0';
  portButton.style.border = '0 solid #816877';
  portButton.style.boxShadow = '0px 0px 0px rgba(0,0,0,0)';
  
  aboutButton.style.height = '0';
  aboutButton.style.width = '100%';
  aboutButton.style.padding = '0';
  aboutButton.style.margin = '0';
  aboutButton.style.fontSize = '0';
  aboutButton.style.border = '0 solid #816877';
  aboutButton.style.boxShadow = '0px 0px 0px rgba(0,0,0,0)';
  
  blogButton.style.height = '0';
  blogButton.style.width = '100%';
  blogButton.style.padding = '0';
  blogButton.style.margin = '0';
  blogButton.style.fontSize = '0';
  blogButton.style.border = '0 solid #816877';
  blogButton.style.boxShadow = '0px 0px 0px rgba(0,0,0,0)';
 
  contactButton.style.height = '0';
  contactButton.style.width = '100%';
  contactButton.style.padding = '0';
  contactButton.style.margin = '0';
  contactButton.style.fontSize = '0';
  contactButton.style.border = '0 solid #816877';
  contactButton.style.boxShadow = '0px 0px 0px rgba(0,0,0,0)';
  opcion = 1;   
}

function action() {
  if (opcion == 1) {
    openNav();
  } else if (opcion == 2) {
    closeNav();
  }
}
//nav

//version
console.log('v0.0.2');
console.log('end main page')
console.log('you need to se the projects in a popup window/box')
//version