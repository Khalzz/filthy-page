let menuId = 'none'

const transitionScuare = document.querySelector('.transition')
const transitionName = document.querySelector('.transition-name')
const transitionSubtitle = document.querySelector('.transition-subtitle')

const transitionClose = () => {
  transitionScuare.style.left = '0'
  transitionName.style.transition = '0.4s'
  transitionSubtitle.style.transition = '0.8s'
  transitionName.style.left = '0';
  transitionSubtitle.style.left = '0';
}
const transitionOpen = () => {
  transitionScuare.style.left = '200vw';
  transitionName.style.transition = '0.8s'
  transitionSubtitle.style.transition = '0.8s'
  transitionName.style.left = '200vw';
  transitionSubtitle.style.left = '200vw';
}

window.onload = () => {
  setTimeout(() => {
      transitionOpen()
  }, 800);
}

const backToIndex = () => {
  transitionClose();
  setTimeout(() => {
    window.open('../index.html', '_self');
  }, 800);
}

//back to language menus
const backToHtmlMenu = () => {
  transitionClose();
  setTimeout(() => {
    window.open('../htmlProjects.html', '_self');
  }, 800);
}

const backToCssMenu = () => {
  transitionClose();
  setTimeout(() => {
    window.open('../cssProjects.html', '_self');
  }, 800);
}

const backToJsMenu = () => {
  transitionClose();
  setTimeout(() => {
    window.open('../jsProjects.html', '_self');
  }, 800);
}
//back to language menus

//filthy project
const openFilthyHtml = () => {
  transitionClose();
  setTimeout(() => {
      window.open('projects/filthyProjectHtml.html', '_self');
    }, 800);
}
const openFilthyCss = () => {
  transitionClose();
  setTimeout(() => {
      window.open('projects/filthyProjectCss.html', '_self');
    }, 800);
}
const openFilthyJs = () => {
  transitionClose();
  setTimeout(() => {
      window.open('projects/filthyProjectJs.html', '_self');
    }, 800);
}
//filthy project

//open projects//
const openFilthy = () => window.open('https://khalzz.github.io/filthy-page/')
//open projects//