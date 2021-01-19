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

const openContact = () => {
  transitionClose();
  setTimeout(() => {
    window.open('html/contact.html', '_self');
  }, 800);
}
const openBlog = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/blog.html', '_self');
  }, 800);
}
const openAbout = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/about.html', '_self');
  }, 800);
}
const openProjects = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/portfolio.html', '_self');
  }, 800);
}

const openHtml = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/htmlProjects.html', '_self')
  }, 800);
}
const openCss = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/cssProjects.html', '_self')
  }, 800);
}
const openJs = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/jsProjects.html', '_self')
  }, 800);
}
const openCs = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/csharpProjects.html', '_self')
  }, 800);
}
const openPython = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/pythonProjects.html', '_self')
  }, 800);
}
const openKotlin = () => {
  transitionClose()
  setTimeout(() => {
    window.open('html/kotlinProjects.html', '_self')
  }, 800);
}

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

console.log('v0.0.2');