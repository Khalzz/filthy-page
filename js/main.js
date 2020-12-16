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

const gotoSecond = () => window.location.href = "#section-2"
const gotoThird = () => window.location.href = "#section-3"
const gotoFourth = () => window.location.href = "#section-4"
const gotoFooter = () => window.location.href = "#footer"

//esconder barra de busqueda
function hideAddressBar(){
  if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
    document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
  setTimeout(window.scrollTo(1,1),0);
}
window.addEventListener("load",function(){hideAddressBar();});
window.addEventListener("orientationchange",function(){hideAddressBar();});
//esconder barra de busqueda

console.log('v0.0.0');