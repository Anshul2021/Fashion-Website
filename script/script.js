hamburger = document.querySelector('#hamburger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');


hamburger.addEventListener('click', () => {
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav-resp');
})