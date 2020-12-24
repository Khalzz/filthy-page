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
  if (newCount == 3) {
    counter = 0;
  }}, 4000);
//change sub title

window.onload=function(){ setTimeout(function(){ 		window.scrollTo(0, 1); 	}, 0); }

//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.2,
  spaceBetween: 45,
  initialSlide: 2,
  //loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
//swiper
const openItch = () => window.open('https://khalzdev.itch.io/');
const openGit = () => window.open('https://github.com/Khalzz');
const openStack = () => window.open('https://es.stackoverflow.com/users/175478/khals')
const openIg = () => window.open('https://www.instagram.com/moon.drawner.chu.p0u/')

const gotoSecond = () => window.location.href = '#section-2'
const gotoThird = () => window.location.href = '#section-3'
const gotoFourth = () => window.location.href = '#section-4'
const gotoFooter = () => window.location.href = '#footer'

const openContact = () => window.open('html/contact.html')
const openBlog = () => window.open('html/blog.html')
const openAbout = () => window.open('html/about.html')

function openProjects() {
  console.log('open projects screen')
}

console.log('v0.0.1');