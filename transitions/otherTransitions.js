const backToIndex = () => {
    transitionClose();
    setTimeout(() => {
      window.open('../index.html', '_self');
    }, 800);
}