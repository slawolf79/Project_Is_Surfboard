const hamMenu = document.querySelector('#burger');
const fullMenu = document.querySelector('#hamburgerMenu');

// при клике на список меню
hamMenu.addEventListener("click", (e) => {
    e.preventDefault();
    
    hamMenu.classList.toggle('active');
    fullMenu.classList.toggle('active');

});

const links = document.querySelectorAll('.header-menu__link');

links.forEach(function(elem){
    elem.addEventListener('click', switcherFullMenu);
});

function switcherFullMenu () {
  hamMenu.classList.toggle('active');
  fullMenu.classList.toggle('active');
};











  
