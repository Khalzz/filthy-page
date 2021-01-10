//projects
const htmlProjects = document.querySelector('.html-projects')
const htmlBackground = document.querySelector('#html-background')
const css = document.querySelector('.css-projects')
const cssBackground = document.querySelector('#css-background')
const js = document.querySelector('.javascript-projects')
const jsBackground = document.querySelector('#js-background')
const cs = document.querySelector('.csharp-projects')
const csBackground = document.querySelector('#cs-background')
const python = document.querySelector('.python-projects')
const pyBackground = document.querySelector('#py-background')
const kotlin = document.querySelector('.kotlin-projects')
const klBackground = document.querySelector('#kl-background')

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

const htmlDivider = document.querySelector('#html-divisor')
const cssDivider = document.querySelector('#css-divisor')
const jsDivider = document.querySelector('#js-divisor')
const csDivider = document.querySelector('#cs-divisor')
const pyDivider = document.querySelector('#py-divisor')
const klDivider = document.querySelector('#kl-divisor')

let count = 0;
let openCount = 0;

function openHtml(){
  gotoThird();
  htmlBackground.style.backgroundColor = '#1E1F27'
  htmlBackground.style.height = '95vh'
  swiper.autoplay.stop()
  htmlProjects.style.height = '100vh'
  pHtml.style.width = '90%'
  pHtml.style.fontSize = '4vw'
  pHtml.style.top = '0vw'
  pHtml.style.marginTop = '18vw'
  titleHtml.style.fontSize = '8vw'
  titleHtml.style.top = '2.2vw'
  titleHtml.style.position = 'relative'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  openCount = 1
}

function closeHtml(){
  titleHtml.style.position = 'absolute'
  htmlBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  swiper.autoplay.start()
  htmlBackground.style.height = '0vh'
  pHtml.style.fontSize = '0vw'
  pHtml.style.width = '0%'
  pHtml.style.top = '-80vh'
  pHtml.style.marginTop = '0vw'
  titleHtml.style.top = '-80vh'
  titleHtml.style.fontSize = '0'
  htmlProjects.style.height = '0vh'
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
  openCount = 0
}

function openCss(){
  cssBackground.style.backgroundColor = '#1E1F27'
  cssBackground.style.height = '95vh'
  gotoThird();
  pCss.style.fontSize = '4vw'
  pCss.style.top = '0vw'
  pCss.style.marginTop = '18vw'
  pCss.style.width = '90%'
  swiper.autoplay.stop()
  titleCss.style.top = '2.2vw'
  titleCss.style.position = 'relative'
  css.style.height = '100vh'
  titleCss.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  openCount = 3
}

function closeCss(){
  titleCss.style.position = 'absolute'
  cssBackground.style.backgroundColor = 'rgba(0,0,0,0.8)'
  cssBackground.style.height = '0vh'
  swiper.autoplay.start()
  pCss.style.fontSize = '0'
  pCss.style.width = '0%'
  pCss.style.top = '-80vh'
  pCss.style.marginTop = '0vw'
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
  openCount = 0
}

function openJs(){
  gotoThird();
  jsBackground.style.backgroundColor = '#1E1F27'
  jsBackground.style.height = '95vh'
  swiper.autoplay.stop()
  pJs.style.fontSize = '4vw'
  pJs.style.top = '0vw'
  pJs.style.marginTop = '18vw'
  titleJs.style.top = '2.2vw'
  titleJs.style.position = 'relative'
  pJs.style.width = '90%'
  js.style.height = '100vh'
  titleJs.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  openCount = 5
}

function closeJs(){
  titleJs.style.position = 'absolute'
  jsBackground.style.backgroundColor = 'rgba(0,0,0,0.8)'
  jsBackground.style.height = '0vh'
  swiper.autoplay.start()
  pJs.style.fontSize = '0'
  pJs.style.top = '-80vh'
  pJs.style.marginTop = '18vw'
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
  openCount = 0
}

function openCs(){
  gotoThird();
  csBackground.style.backgroundColor = '#1E1F27'
  csBackground.style.height = '95vh'
  pCs.style.fontSize = '4vw'
  pCs.style.top = '0vw'
  pCs.style.marginTop = '18vw'
  pCs.style.width = '90%'
  swiper.autoplay.stop()
  titleCs.style.top = '2.2vw'
  titleCs.style.position = 'relative'
  cs.style.height = '100vh'
  titleCs.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  titleCs.style.position = 'absolute'
  csBackground.style.backgroundColor = '#rgba(0,0,0,0.8)'
  csBackground.style.height = '0vh'
  swiper.autoplay.start()
  pCs.style.fontSize = '0'
  pCs.style.top = '-80vh'
  pCs.style.marginTop = '18vw'
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
  pyBackground.style.backgroundColor = '#1E1F27'
  pyBackground.style.height = '95vh'
  swiper.autoplay.stop()
  pPy.style.fontSize = '4vw'
  pPy.style.top = '0vw'
  pPy.style.marginTop = '18vw'
  pPy.style.width = '90%'
  python.style.height = '100vh'
  titlePython.style.top = '2.2vw'
  titlePython.style.position = 'relative'
  titlePython.style.fontSize = '8vw'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  titlePython.style.position = 'absolute'
  pyBackground.style.backgroundColor = 'rgba(0,0,0,0.8)'
  pyBackground.style.height = '0vh'
  swiper.autoplay.start()
  pPy.style.fontSize = '0'
  pPy.style.top = '-80vh'
  pPy.style.marginTop = '18vw'
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
  klBackground.style.backgroundColor = '#1E1F27'
  klBackground.style.height = '95vh'
  swiper.autoplay.stop()
  pKl.style.fontSize = '4vw'
  pKl.style.top = '0vw'
  pKl.style.marginTop = '18vw'
  pKl.style.width = '90%'
  kotlin.style.height = '100vh'
  titleKotlin.style.fontSize = '8vw'
  titleKotlin.style.top = '2.2vw'
  titleKotlin.style.position = 'relative'
  html.style.overflowY = 'hidden';
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
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
  titleKotlin.style.position = 'absolute'
  swiper.autoplay.start()
  klBackground.style.backgroundColor = 'rgba(0,0,0,0.8)'
  klBackground.style.height = '0vh'
  pKl.style.fontSize = '0'
  pKl.style.top = '-80vh'
  pHtml.style.marginTop = '0vw'
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

let projetsCount = 0

function hideHtml() {
  showBackButton();
  filthyPageHtml.style.top = '0'
  htmlDivider.style.marginTop = '-10vh'
  htmlDivider.style.marginBottom = '14vh'
  pHtml.style.fontSize = '0vw'
  pHtml.style.width = '0%'
  pHtml.style.top = '-80vh'
  pHtml.style.marginTop = '0vw'
  titleHtml.style.top = '-80vh'
  titleHtml.style.fontSize = '0'
  projetsCount = 1
}
function hideCss() {
  showBackButton();
  filthyPageCss.style.top = '0'
  cssDivider.style.marginTop = '-10vh'
  cssDivider.style.marginBottom = '14vh'
  pCss.style.fontSize = '0vw'
  pCss.style.width = '0%'
  pCss.style.top = '-80vh'
  pCss.style.marginTop = '0vw'
  titleCss.style.top = '-80vh'
  titleCss.style.fontSize = '0'
  projetsCount = 2
}
function hideJs() {
  showBackButton();
  filthyPageJs.style.top = '0'
  jsDivider.style.marginTop = '-10vh'
  jsDivider.style.marginBottom = '14vh'
  pJs.style.fontSize = '0vw'
  pJs.style.width = '0%'
  pJs.style.top = '-80vh'
  pJs.style.marginTop = '0vw'
  titleJs.style.top = '-80vh'
  titleJs.style.fontSize = '0'
  projetsCount = 3
}

const filthyPageHtml = document.querySelector('#filthy-page-html')
const htmlDescription = document.querySelector('.html-description')
const htmlFilthyButton = document.querySelector('.filthy-project-html')

const filthyPageCss = document.querySelector('#filthy-page-css')
const cssDescription = document.querySelector('.css-description')
const cssFilthyButton = document.querySelector('.filthy-project-css')

const filthyPageJs = document.querySelector('#filthy-page-js')
const jsDescription = document.querySelector('.js-description')
const jsFilthyButton = document.querySelector('.filthy-project-js')

let hideCount = 0;

function openFilthyProjectHtml() {
  hideHtml();
  filthyPageHtml.style.height = '150vh'
  filthyPageHtml.style.marginBottom = '50vh'
  filthyPageHtml.style.left = '0'
  htmlBackground.style.overflowY = 'hidden'
  htmlDescription.style.fontSize = '4vw'
  htmlDescription.style.width = '90%'
  hideCount = 1;
  openCount = 2
}

function openFilthyProjectCss() {
  hideCss();
  filthyPageCss.style.height = '150vh'
  filthyPageCss.style.marginBottom = '50vh'
  filthyPageCss.style.left = '0'
  cssBackground.style.overflowY = 'hidden'
  cssDescription.style.fontSize = '4vw'
  cssDescription.style.width = '90%'
  hideCount = 1;
  openCount = 4
}

function openFilthyProjectJs() {
  hideJs();
  filthyPageJs.style.height = '150vh'
  filthyPageJs.style.marginBottom = '50vh'
  filthyPageJs.style.left = '0'
  jsBackground.style.overflowY = 'hidden'
  jsDescription.style.fontSize = '4vw'
  jsDescription.style.width = '90%'
  hideCount = 1;
  openCount = 6
}

function goBack() {
  if (projetsCount == 1) {
    hideBackButton()
    htmlDivider.style.marginTop = '5vw'
    htmlDivider.style.marginBottom = '4vh'
    pHtml.style.fontSize = '4vw'
    pHtml.style.width = '90%'
    pHtml.style.top = '0vw'
    pHtml.style.marginTop = '18vw'
    titleHtml.style.top = '2.2vw'
    titleHtml.style.fontSize = '8vw'
    if (hideCount == 1) {
      hideCount = 0;
      filthyPageHtml.style.left = '180vw'
      filthyPageHtml.style.marginBottom = '0'
      filthyPageHtml.style.height = '0'
      htmlBackground.style.overflowY = 'auto'
      htmlDescription.style.fontSize = '0'
      htmlDescription.style.width = '0'
      openCount = 1
    }
  } else if (projetsCount == 2) {
    hideBackButton()
    cssDivider.style.marginTop = '5vw'
    cssDivider.style.marginBottom = '4vh'
    pCss.style.fontSize = '4vw'
    pCss.style.width = '90%'
    pCss.style.top = '0vw'
    pCss.style.marginTop = '18vw'
    titleCss.style.top = '2.2vw'
    titleCss.style.fontSize = '8vw'
    if (hideCount == 1) {
      hideCount = 0;
      filthyPageCss.style.left = '180vw'
      filthyPageCss.style.marginBottom = '0'
      filthyPageCss.style.height = '0'
      cssBackground.style.overflowY = 'auto'
      cssDescription.style.fontSize = '0'
      cssDescription.style.width = '0'
      openCount = 3
    }
  } else if (projetsCount == 3) {
    hideBackButton()
    jsDivider.style.marginTop = '5vw'
    jsDivider.style.marginBottom = '4vh'
    pJs.style.fontSize = '4vw'
    pJs.style.width = '90%'
    pJs.style.top = '0vw'
    pJs.style.marginTop = '18vw'
    titleJs.style.top = '2.2vw'
    titleJs.style.fontSize = '8vw'
    if (hideCount == 1) {
      hideCount = 0;
      filthyPageJs.style.left = '180vw'
      filthyPageJs.style.marginBottom = '0'
      filthyPageJs.style.height = '0'
      jsBackground.style.overflowY = 'auto'
      jsDescription.style.fontSize = '0'
      jsDescription.style.width = '0'
      openCount = 5
    }
  }
}

const backButton = document.querySelector('.back-button')
const backBar1 = document.querySelector('.bar-1-back');
const backBar2 = document.querySelector('.bar-2-back');

function showBackButton() {
  closeButton.style.height = '0'
  closeButton.style.top = '-80vw'
  bar1.style.height = '0'
  bar1.style.width = '0'
  bar1.style.transform = 'rotate(45)'
  bar2.style.height = '0'
  bar2.style.width = '0'
  backButton.style.height = '10vw'
  backButton.style.top = '7vw'
  backBar1.style.height = '0.8vw'
  backBar1.style.width = '6vw'
  backBar2.style.height = '0.8vw'
  backBar2.style.width = '6vw'
}

function hideBackButton() {
  closeButton.style.height = '10vw'
  closeButton.style.top = '7vw'
  bar1.style.height = '0.5vw'
  bar1.style.width = '8vw'
  bar1.style.transform = 'rotate(45deg)'
  bar2.style.height = '0.5vw'
  bar2.style.width = '8vw'
  bar2.style.transform = 'rotate(-45deg)'
  backButton.style.height = '0vw'
  backButton.style.top = '-80vw'
  backBar1.style.height = '0vw'
  backBar1.style.width = '0vw'
  backBar2.style.height = '0vw'
  backBar2.style.width = '0vw'
}

function openFilthyPageHtml() {
  if (openCount == 1) {
    openFilthyProjectHtml()
  } else if (openCount == 2) {
    location.reload() //the idea is to enter int othe same page, not reload it but it works by now
  }
}

function openFilthyPageCss() {
  if (openCount == 3) {
    openFilthyProjectCss()
  } else if (openCount == 4) {
    location.reload() //the idea is to enter int othe same page, not reload it but it works by now
  }
}

function openFilthyPageJs() {
  if (openCount == 5) {
    openFilthyProjectJs()
  } else if (openCount == 6) {
    location.reload() //the idea is to enter int othe same page, not reload it but it works by now
  }
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