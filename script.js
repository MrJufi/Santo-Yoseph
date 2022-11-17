
    //Header Toogle Menu
const navLinks = document.querySelector('.nav-links');
//button and event listener nya
const closeBtn = document.querySelector('#close-btn');
closeBtn.addEventListener('click', function(){
//inget selalu pake petik, nanti ga berfungsi loh
    navLinks.style.right = '-200px';
});
const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', function(){
    navLinks.style.right = '0';
});