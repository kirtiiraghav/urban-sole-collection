const menuBtn = document.querySelector('#menu-btn')
const header = document.querySelector('header')
const menuClose = document.querySelector('#menu-close')

menuBtn.addEventListener('click', () => {
    header.classList.toggle('open-menu')
})

menuClose.addEventListener('click',() =>{
    header.classList.toggle('open-menu')
})