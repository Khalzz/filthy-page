const openAbout = () => {
    transitionClose()
    setTimeout(() => {
      window.open('about.html', '_self');
    }, 800);
  }