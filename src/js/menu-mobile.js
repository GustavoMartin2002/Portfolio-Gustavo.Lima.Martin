let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
