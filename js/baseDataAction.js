const title = document.querySelector('#project-h1');
const text = document.querySelector('#project-p');
const divisor = document.querySelector('.project-divisor');

const elementsDiv = document.querySelector('.project-elements')

const projectImg = document.querySelector('#container')

const gotoFilthy = () => window.location.href = '#container';

let count = 1;

const hideData = () => {
    title.style.marginTop = '-50vw'
    text.style.marginTop = '-50vw'
    divisor.style.marginTop = '-50vw'
    divisor.style.marginBottom = '98vw'
}

const showData = () => {
    title.style.marginTop = '0'
    text.style.marginTop = '0'
    divisor.style.marginTop = '5vw'
    divisor.style.marginBottom = '0'
}

const openData = () => {
    hideData();
    elementsDiv.style.marginTop = '0'
    elementsDiv.style.marginLeft = '0'
}

const closeData = () => {
    showData()
    elementsDiv.style.marginTop = '-70vw'
    elementsDiv.style.marginLeft = '200vw'
}

const openFilthy = () => {
    openData()
    gotoFilthy();
    projectImg.style.paddingTop = '27vw'
    projectImg.style.marginBottom = '90vh'
    count = 2
}

const closeFilthy = () => {
    closeData();
    projectImg.style.paddingTop = '0'
    projectImg.style.marginBottom = '0'
}

const backButton = () => {
    if (count == 1) {
        backToIndex()
    } else if (count == 2) {
        closeFilthy()
        count = 1
    }
}