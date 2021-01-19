const backButton = document.querySelector('.back-button')

window.onscroll = () => {
    let y = window.scrollY;
    if (y >= 200) {
        
        setTimeout(() => {
            backButton.style.marginTop = "4vh"
            backButton.style.position = 'fixed'
          }, 200);
    } else {
        setTimeout(() => {
            backButton.style.marginTop = "-10vh"
            backButton.style.marginTop = "3vh"
              }, 200);
        setTimeout(() => {
            backButton.style.position = 'absolute'
              }, 300);
    }
}