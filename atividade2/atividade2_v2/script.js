const btnHamburguer = document.getElementById('btnHamburguer')
const btnOpen = document.querySelector('#btnHamburguer .fa-bars')
const btnClose = document.querySelector('#btnHamburguer .fa-xmark')

function toggleHamburguer(e) {
    if (e.type === 'touchstart') e.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    btnOpen.classList.toggle('deactivate')
    btnClose.classList.toggle('active')
}

btnHamburguer.addEventListener('click', toggleHamburguer)
btnHamburguer.addEventListener('touchstart', toggleHamburguer)
