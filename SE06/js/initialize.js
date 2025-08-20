const visiblePart = document.querySelector('header')
const progressBar = document.querySelector(".progressBar");
let progress = 1;


visiblePart.style.opacity = 0
progressBar.style.width = 0;


setTimeout(() => {
    visiblePart.style.opacity = 1
}, 800);