//You rodrigo are a fucking idiot
// 1. you called the "code" in html with href instead of src dumbass
// 2. you put an id to an item and call it like a class, fucking retarded
// 3. fucking retarded x2 that generates the same fucking problem like 20 times asshole
// i hate you: Rodrigo Seguel.
// from: Rodrigo Seguel <3

//cambiar subtitulo
const subtitle = document.querySelector(".subtitle-text");

const subtitles = ["Programmer", "Game developer", "Web developer", "Front-end"];
let counter = 0;

setInterval(() => {subtitle.innerHTML = subtitles[counter]}, 4000);
setInterval(() => {
  let newCount = counter++;
  if (newCount == 2) {
    counter = 0;
}}, 5000);
//cambiar subtitulo

//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.2,
  spaceBetween: 30,
  initialSlide: 1,
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

function openItch(){
  window.open("https://khalzdev.itch.io/");
}

function openGit(){
  window.open("https://github.com/Khalzz");
}



let opcion = 1

function openNav(){
  document.querySelector(".navegation").style.height = "50vw";
  document.querySelector(".navegation").style.padding = "2vw";
  
  document.getElementById("button-know").style.display = "block"
  document.getElementById("button-know").style.height = "9vw"
  document.getElementById("button-know").style.padding = "2vw 12vw"
  document.getElementById("button-know").style.margin = "1vw 20vw"
  
  document.getElementById("button-find").style.display = "block"
  document.getElementById("button-find").style.height = "9vw"
  document.getElementById("button-find").style.padding = "2vw 12vw"
  document.getElementById("button-find").style.margin = "1vw 20vw"
  
  document.getElementById("button-blog").style.display = "block"
  document.getElementById("button-blog").style.height = "9vw"
  document.getElementById("button-blog").style.padding = "2vw 12vw"
  document.getElementById("button-blog").style.margin = "1vw 20vw"

  document.getElementById("button-cont").style.display = "block"
  document.getElementById("button-cont").style.height = "9vw"
  document.getElementById("button-cont").style.padding = "2vw 12vw"
  document.getElementById("button-cont").style.margin = "1vw 20vw"
  opcion = 2;
}

function closeNav() {   
  document.querySelector(".navegation").style.height = "0";
  document.querySelector(".navegation").style.padding = "0";
  
  document.getElementById("button-know").style.height = "0"
  document.getElementById("button-know").style.padding = "0"
  document.getElementById("button-know").style.margin = "0"
  document.getElementById("button-know").style.display = "none"
  
  document.getElementById("button-find").style.height = "0"
  document.getElementById("button-find").style.padding = "0"
  document.getElementById("button-find").style.margin = "0"
  document.getElementById("button-find").style.display = "none"
  
  document.getElementById("button-blog").style.height = "0"
  document.getElementById("button-blog").style.padding = "0"
  document.getElementById("button-blog").style.margin = "0"
  document.getElementById("button-blog").style.display = "none"
  
  document.getElementById("button-cont").style.height = "0"
  document.getElementById("button-cont").style.padding = "0"
  document.getElementById("button-cont").style.margin = "0"
  document.getElementById("button-cont").style.display = "none"
  opcion = 1;   
}

function action() {
  if (opcion == 1) {
    openNav()
  } else if (opcion == 2) {
    closeNav()
  }
}
