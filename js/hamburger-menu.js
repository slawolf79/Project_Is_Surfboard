const hamMenu = document.querySelector('#burger');
const fullMenu = document.querySelector('#hamburgerMenu');

// при клике на список меню
hamMenu.addEventListener("click", (e) => {
    e.preventDefault();
    
    fullMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');
    


});









  
