const roomBtn = document.querySelector('.room-button')
const kitchenBtn = document.querySelector('.kitchen-button')
const roomViewEl = document.querySelector('.room-view')
const kitchenViewEl = document.querySelector('.kitchen-view')

roomBtn.addEventListener('click', () => {
    console.log('click room')
    AutomacaoLuzes.instance.toggle('room')
})

kitchenBtn.addEventListener('click', () => {
    console.log('click kitchen')
    AutomacaoLuzes.instance.toggle('kitchen')
})

console.log('fora inscrito room')
AutomacaoLuzes.instance.inscrever(() => {
    console.log('dentro inscrito room')
    if (AutomacaoLuzes.instance.getState('room')) {
        console.log('getState room add active')
        roomViewEl.classList.add('active')
    } else {
        console.log('getState room remove active')
        roomViewEl.classList.remove('active')
    }
})

console.log('fora inscrito kitchen')
AutomacaoLuzes.instance.inscrever(() => {
    console.log('dentro inscrito kitchen')
    if (AutomacaoLuzes.instance.getState('kitchen')) {
        console.log('getState kitchen add active')
        kitchenViewEl.classList.add('active')
    } else {
        console.log('getState kitchen remove active')
        kitchenViewEl.classList.remove('active')
    }
})

// AutomacaoLuzes.instance.toggle()