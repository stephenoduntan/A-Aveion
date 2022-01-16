const menuBtn = document.querySelector('.menu-icon');
const pageNav = document.querySelector('.page-nav');

menuBtn.onclick = function(){
    pageNav.classList.toggle('menu-block')
}

window.onload = function(){
    const rotateImg = document.querySelector('.nav-item--image img');
    setInterval(function(){
        rotateImg.style.transform += 'rotate(3deg)'
    }, 75)
}