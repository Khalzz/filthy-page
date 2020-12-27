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
  loop: true,
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
const openStack = () => window.open('https://es.stackoverflow.com/users/175478/khals');
const openIg = () => window.open('https://www.instagram.com/moon.drawner.chu.p0u/');

const gotoTitle = () => window.location.href = '#section-1';
const gotoSecond = () => window.location.href = '#section-2';
const gotoThird = () => window.location.href = '#section-3';
const gotoFourth = () => window.location.href = '#section-4';
const gotoFooter = () => window.location.href = '#footer';

const openContact = () => window.open('html/contact.html');
const openBlog = () => window.open('html/blog.html');
const openAbout = () => window.open('html/about.html');
const openProjects = () => window.open('html/portfolio.html');

const nav = document.querySelector('.nav');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const navButton = document.querySelector('.nav-button');
const html = document.querySelector('html');
const topBar = document.querySelector('#up-bar');
const midBar = document.querySelector('.mid-bar');
const botBar = document.querySelector('#bottom-bar');
const title = document.querySelector('#name');

let option = 1;

function openNav() {
  gotoTitle();
  title.style.marginLeft = '-300vw';
  subtitle.style.marginLeft = '300vw';
  nav.style.height = '100vh';

  button1.style.top = '0vw';
  button2.style.top = '0vw';
  button3.style.top = '0vw';
  button4.style.top = '0vw';
  html.style.overflowY = 'hidden';

  topBar.style.height = '0.5vw';
  topBar.style.marginBottom = '-1.25vw';
  topBar.style.transform = 'rotate(45deg)';
  midBar.style.backgroundColor = 'rgba(0,0,0,0)';
  botBar.style.height = '0.5vw';
  botBar.style.marginTop = '-1.25vw';
  botBar.style.transform = 'rotate(-45deg)';
  
  navButton.style.backgroundColor = 'rgba(0,0,0,0)';
  option = 2;
}

function closeNav() {
  title.style.marginLeft = '0';
  subtitle.style.marginLeft = '0';
  nav.style.height = '0vh';

  button1.style.top = '-300vw';
  button2.style.top = '-300vw';
  button3.style.top = '-300vw';
  button4.style.top = '-300vw';
  html.style.overflowY = 'auto';
  
  topBar.style.height = '1vw';
  topBar.style.marginBottom = '0.5vw';
  topBar.style.transform = 'rotate(0)';
  midBar.style.backgroundColor = '#DBDCE4'
  botBar.style.height = '1vw';
  botBar.style.marginTop = '0.5vw';
  botBar.style.transform = 'rotate(0)';

  option = 1;
}

function action() {
  if (option == 1) {
    button1.style.transition = '0.8s';
    button2.style.transition = '0.6s';
    button3.style.transition = '0.4s';
    button4.style.transition = '0.2s';
    openNav();
  } else if (option == 2) {
    button1.style.transition = '0.3s';
    button2.style.transition = '0.3s';
    button3.style.transition = '0.3s';
    button4.style.transition = '0.3s';
    closeNav();
  }
}

//projects
const htmlProjects = document.querySelector('.html-projects')
const css = document.querySelector('.html-projects')
const js = document.querySelector('.html-projects')
const cs = document.querySelector('.html-projects')
const python = document.querySelector('.html-projects')
const kotlin = document.querySelector('.html-projects')

const titleHtml = document.querySelector('.title-html')
const titleCss = document.querySelector('.title-css')
const titleJs = document.querySelector('.title-js')
const titleCs = document.querySelector('.title-cs')
const titlePython = document.querySelector('.title-python')
const titleKotlin = document.querySelector('.title-kotlin')

const closeButton = document.querySelector('.close-button')
const bar1 = document.querySelector('.bar-1');
const bar2 = document.querySelector('.bar-2');

const portfolioButton = document.querySelector('.portfolio')
const sectionTitle = document.querySelector('.title-section-3')

let count = 0;

function openHtml(){
  gotoThird();
  swiper.autoplay.stop()
  htmlProjects.style.height = '100vh'
  titleHtml.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  sectionTitle.style.color = '#15161C'
  count = 1
}

function closeHtml(){
  swiper.autoplay.start()
  htmlProjects.style.height = '0vh'
  titleHtml.style.fontSize = '0'
  html.style.overflowY = 'auto';
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  bar2.style.transform = 'rotate(-45deg)'
  sectionTitle.style.color = '#ffffff'
}

function openCss(){
  gotoThird();
  swiper.autoplay.stop()
  css.style.height = '100vh'
  titleCss.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.color = '#15161C'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  count = 2

}

function closeCss(){
  swiper.autoplay.start()
  css.style.height = '0vh'
  titleCss.style.fontSize = '0'
  html.style.overflowY = 'auto';
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  sectionTitle.style.color = '#ffffff'
  bar2.style.transform = 'rotate(-45deg)'
}

function openJs(){
  gotoThird();
  swiper.autoplay.stop()
  js.style.height = '100vh'
  titleJs.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.color = '#15161C'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  count = 3
}

function closeJs(){
  swiper.autoplay.start()
  js.style.height = '0vh'
  titleJs.style.fontSize = '0'
  html.style.overflowY = 'auto';
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  sectionTitle.style.color = '#ffffff'
  bar2.style.transform = 'rotate(-45deg)'
}

function openCs(){
  gotoThird();
  swiper.autoplay.stop()
  cs.style.height = '100vh'
  titleCs.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.color = '#15161C'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  count = 4
}

function closeCs(){
  swiper.autoplay.start()
  cs.style.height = '0vh'
  titleCs.style.fontSize = '0'
  html.style.overflowY = 'auto';
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  sectionTitle.style.color = '#ffffff'
  bar2.style.transform = 'rotate(-45deg)'
}

function openPython(){
  gotoThird();
  swiper.autoplay.stop()
  python.style.height = '100vh'
  titlePython.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.color = '#15161C'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  count = 5
}

function closePython(){
  swiper.autoplay.start()
  python.style.height = '0vh'
  titlePython.style.fontSize = '0'
  html.style.overflowY = 'auto';
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  sectionTitle.style.color = '#ffffff'
  bar2.style.transform = 'rotate(-45deg)'
}

function openKotlin(){
  gotoThird();
  swiper.autoplay.stop()
  kotlin.style.height = '100vh'
  titleKotlin.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '3vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  portfolioButton.style.marginBottom = '-200vh'
  sectionTitle.style.color = '#15161C'
  sectionTitle.style.webkitTextStroke = '1px #15161C'
  count = 6
}

function closeKotlin(){
  swiper.autoplay.start()
  kotlin.style.height = '0vh'
  titleKotlin.style.fontSize = '0'
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  portfolioButton.style.marginBottom = '0'
  bar2.style.transform = 'rotate(-45deg)'
  sectionTitle.style.webkitTextStroke = '1px #ffffff'
  sectionTitle.style.color = '#ffffff'
  html.style.overflowY = 'auto';
}

function closeProjects() {
  if (count == 1) {
    closeHtml();
  } else if (count == 2){
    closeCss();
  } else if (count == 3) {
    closeJs();
  } else if (count == 4) {
    closeCs();
  } else if (count == 5) {
    closePython();
  } else if (count == 6) {
    closeKotlin();
  }
}
//projects

console.log('v0.0.2');