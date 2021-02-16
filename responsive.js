burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('visibility')
    navlist.classList.toggle('visibility')
    navbar.classList.toggle('h-nav')
})