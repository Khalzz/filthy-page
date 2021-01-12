const transitionScuare = document.querySelector('.transition')

const transitionClose = () => {transitionScuare.style.left = '0'}
const transitionOpen = () => {transitionScuare.style.left = '200vw'}

window.onload = () => {
  setTimeout(() => {
      transitionOpen()
  }, 800);
}