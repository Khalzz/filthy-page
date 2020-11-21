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