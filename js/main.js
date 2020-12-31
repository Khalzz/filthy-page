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
  initialSlide: -1,
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
const css = document.querySelector('.css-projects')
const js = document.querySelector('.javascript-projects')
const cs = document.querySelector('.csharp-projects')
const python = document.querySelector('.python-projects')
const kotlin = document.querySelector('.kotlin-projects')

const htmlWorks = document.querySelector('#html-works')
const htmlBaseText = document.querySelector('.html-uh-oh')

const cssWorks = document.querySelector('#css-works')
const cssBaseText = document.querySelector('.css-uh-oh')

const jsWorks = document.querySelector('#javascript-works')
const jsBaseText = document.querySelector('.javascript-uh-oh')

const csWorks = document.querySelector('#csharp-works')
const csBaseText = document.querySelector('.csharp-uh-oh')

const pyWorks = document.querySelector('#python-works')
const pyBaseText = document.querySelector('.python-uh-oh')

const klWorks = document.querySelector('#kotlin-works')
const klBaseText = document.querySelector('.kotlin-uh-oh')

const titleHtml = document.querySelector('.title-html')
const pHtml = document.querySelector('.p-html')
const titleCss = document.querySelector('.title-css')
const pCss = document.querySelector('.p-css')
const titleJs = document.querySelector('.title-js')
const pJs = document.querySelector('.p-js')
const titleCs = document.querySelector('.title-cs')
const pCs = document.querySelector('.p-cs')
const titlePython = document.querySelector('.title-python')
const pPy = document.querySelector('.p-py')
const titleKotlin = document.querySelector('.title-kotlin')
const pKl = document.querySelector('.p-kl')

const closeButton = document.querySelector('.close-button')
const bar1 = document.querySelector('.bar-1');
const bar2 = document.querySelector('.bar-2');

const portfolioButton = document.querySelector('.portfolio')
const sectionTitle = document.querySelector('.title-section-3')

let count = 0;

function openHtml(){
  gotoThird();
  htmlWorks.style.border = '1px solid #DBDCE4'
  htmlWorks.style.height = '110vw'
  htmlBaseText.style.fontSize = '4vw'
  htmlWorks.style.top = '30vh'
  swiper.autoplay.stop()
  pHtml.style.width = '90%'
  htmlProjects.style.height = '100vh'
  pHtml.style.fontSize = '4.3vw'
  pHtml.style.top = '18vw'
  titleHtml.style.fontSize = '8vw'
  titleHtml.style.top = '3vw'
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
  pHtml.style.fontSize = '0vw'
  htmlWorks.style.height = '0vw'
  htmlBaseText.style.fontSize = '0'
  htmlWorks.style.top = '0vh'
  htmlWorks.style.border = '0px solid #DBDCE4'
  pHtml.style.width = '0%'
  pHtml.style.top = '-80vh'
  titleHtml.style.top = '-80vh'
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
  cssWorks.style.border = '1px solid #DBDCE4'
  cssWorks.style.height = '110vw'
  cssBaseText.style.fontSize = '4vw'
  cssWorks.style.top = '30vh'
  pCss.style.fontSize = '4.3vw'
  pCss.style.top = '18vw'
  pCss.style.width = '90%'
  swiper.autoplay.stop()
  titleCss.style.top = '3vw'
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
  cssWorks.style.border = '0px solid #DBDCE4'
  cssWorks.style.height = '0vw'
  cssBaseText.style.fontSize = '0vw'
  cssWorks.style.top = '0vh'
  pCss.style.fontSize = '0'
  pCss.style.width = '0%'
  pCss.style.top = '-80vh'
  css.style.height = '0vh'
  titleCss.style.top = '-80vh'
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
  jsWorks.style.border = '1px solid #DBDCE4'
  jsWorks.style.height = '110vw'
  jsBaseText.style.fontSize = '4vw'
  jsWorks.style.top = '30vh'
  swiper.autoplay.stop()
  pJs.style.fontSize = '4.3vw'
  pJs.style.top = '18vw'
  titleJs.style.top = '3vw'
  pJs.style.width = '90%'
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
  jsWorks.style.border = '0px solid #DBDCE4'
  jsWorks.style.height = '0vw'
  jsBaseText.style.fontSize = '0vw'
  jsWorks.style.top = '0vh'
  pJs.style.fontSize = '0'
  pJs.style.top = '-80vH'
  pJs.style.width = '0%'
  js.style.height = '0vh'
  titleJs.style.top = '-80vh'
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
  csWorks.style.border = '1px solid #DBDCE4'
  csWorks.style.height = '110vw'
  csBaseText.style.fontSize = '4vw'
  csWorks.style.top = '30vh'
  pCs.style.fontSize = '4.3vw'
  pCs.style.top = '18vw'
  pCs.style.width = '90%'
  swiper.autoplay.stop()
  titleCs.style.top = '3vw'
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
  csWorks.style.border = '0px solid #DBDCE4'
  csWorks.style.height = '0'
  csBaseText.style.fontSize = '0'
  csWorks.style.top = '0'
  swiper.autoplay.start()
  pCs.style.fontSize = '0'
  pCs.style.top = '-80vh'
  pCs.style.width = '0%'
  cs.style.height = '0vh'
  titleCs.style.top = '-80vh'
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
  pyWorks.style.border = '1px solid #DBDCE4'
  pyWorks.style.height = '110vw'
  pyBaseText.style.fontSize = '4vw'
  pyWorks.style.top = '30vh'
  swiper.autoplay.stop()
  pPy.style.fontSize = '4.3vw'
  pPy.style.top = '18vw'
  pPy.style.width = '90%'
  python.style.height = '100vh'
  titlePython.style.top = '3vw'
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
  pyWorks.style.border = '0px solid #DBDCE4'
  pyWorks.style.height = '0'
  pyBaseText.style.fontSize = '0'
  pyWorks.style.top = '0'
  swiper.autoplay.start()
  pPy.style.fontSize = '0'
  pPy.style.top = '-80vh'
  pPy.style.width = '0%'
  python.style.height = '0vh'
  titlePython.style.top = '-80vh'
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
  klWorks.style.border = '1px solid #DBDCE4'
  klWorks.style.height = '110vw'
  klBaseText.style.fontSize = '4vw'
  klWorks.style.top = '30vh'
  swiper.autoplay.stop()
  pKl.style.fontSize = '4.3vw'
  pKl.style.top = '18vw'
  pKl.style.width = '90%'
  kotlin.style.height = '100vh'
  titleKotlin.style.fontSize = '8vw'
  titleKotlin.style.top = '3vw'
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
  klWorks.style.border = '0px solid #DBDCE4'
  klWorks.style.height = '0'
  klBaseText.style.fontSize = '0'
  klWorks.style.top = '0'
  swiper.autoplay.start()
  pKl.style.fontSize = '0'
  pKl.style.top = '-80vh'
  pKl.style.width = '0%'
  kotlin.style.height = '0vh'
  titleKotlin.style.top = '-80vh'
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