const navbar = document.querySelector('nav')
const openMenu = document.querySelector('#menuBtn')
const closeMenu = document.querySelector('#closeMenuBtn')

openMenu.addEventListener('click', ()=>{
    navbar.classList.add('open')
})

closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('open')

})