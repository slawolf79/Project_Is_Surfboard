const hamMenu = document.querySelector('#burger');
const fullMenu = document.querySelector('#hamburgerMenu');

// при клике на список меню
hamMenu.addEventListener("click", (e) => {
    e.preventDefault();
    hamMenu.classList.toggle('active');
    fullMenu.classList.toggle('active');
    


});









  
