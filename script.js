const menuBtn = document.querySelector('#menu-btn')
const header = document.querySelector('header')
const menuClose = document.querySelector('#menu-close')
const navLinks = document.querySelectorAll('nav a'); // Select all nav links

menuBtn.addEventListener('click', () => {
    header.classList.toggle('open-menu')
})

menuClose.addEventListener('click',() =>{
    header.classList.toggle('open-menu')
})

// Close menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('open-menu'); // Close the menu
    });
});
