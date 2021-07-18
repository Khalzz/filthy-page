const htmlId = document.querySelector(".html-id");
const cssId = document.querySelector(".css-id");
const jsId = document.querySelector(".js-id");
const csId = document.querySelector(".cs-id");
const pyId = document.querySelector(".py-id");
const klId = document.querySelector(".kl-id");
const allId = document.querySelector(".all-id");

const html = document.querySelector(".html-content");
const css = document.querySelector(".css-content");
const js = document.querySelector(".js-content");
const cs = document.querySelector(".cs-content");
const py = document.querySelector(".py-content");
const kl = document.querySelector(".kl-content");
const all = document.querySelector(".all-content");

const openHtml = () => {
    htmlId.style.filter = 'brightness(1)';
    cssId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    pyId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '90';
    css.style.zIndex = '80';
    js.style.zIndex = '80';
    cs.style.zIndex = '80';
    py.style.zIndex = '80';
    kl.style.zIndex = '80';
    all.style.zIndex = '80';
}

const openCss = () => {
    cssId.style.filter = 'brightness(1)';
    htmlId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    pyId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '90';
    js.style.zIndex = '80';
    cs.style.zIndex = '80';
    py.style.zIndex = '80';
    kl.style.zIndex = '80';
    all.style.zIndex = '80';
} 

const openJs = () => {
    jsId.style.filter = 'brightness(1)';
    cssId.style.filter = 'brightness(0.4)';
    htmlId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    pyId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '80';
    js.style.zIndex = '90';
    cs.style.zIndex = '80';
    py.style.zIndex = '80';
    kl.style.zIndex = '80';
    all.style.zIndex = '80';
}

const openCs = () => {
    csId.style.filter = 'brightness(1)';
    cssId.style.filter = 'brightness(0.4)';
    htmlId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    pyId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '80';
    js.style.zIndex = '80';
    cs.style.zIndex = '90';
    py.style.zIndex = '80';
    kl.style.zIndex = '80';
    all.style.zIndex = '80';
}

const openPy = () => {
    pyId.style.filter = 'brightness(1)';
    cssId.style.filter = 'brightness(0.4)';
    htmlId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '80';
    js.style.zIndex = '80';
    cs.style.zIndex = '80';
    py.style.zIndex = '90';
    kl.style.zIndex = '80';
    all.style.zIndex = '80';
}

const openKl = () => {
    klId.style.filter = 'brightness(1)';
    pyId.style.filter = 'brightness(0.4)';
    cssId.style.filter = 'brightness(0.4)';
    htmlId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    allId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '80';
    js.style.zIndex = '80';
    cs.style.zIndex = '80';
    py.style.zIndex = '80';
    kl.style.zIndex = '90';
    all.style.zIndex = '80';
}

const openAll = () => {
    allId.style.filter = 'brightness(1)';
    pyId.style.filter = 'brightness(0.4)';
    cssId.style.filter = 'brightness(0.4)';
    htmlId.style.filter = 'brightness(0.4)';
    jsId.style.filter = 'brightness(0.4)';
    csId.style.filter = 'brightness(0.4)';
    klId.style.filter = 'brightness(0.4)';
    html.style.zIndex = '80';
    css.style.zIndex = '80';
    js.style.zIndex = '80';
    cs.style.zIndex = '80';
    py.style.zIndex = '80';
    kl.style.zIndex = '80';
    all.style.zIndex = '90';
}