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