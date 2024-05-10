let btnVideo = document.getElementById('btnVideo')
let videoPlayer = document.getElementById('videoPlayer')
let relative = document.querySelector('.relative')

let btnAudio1 = document.getElementById('btnAudio1')
let btnAudio2 = document.getElementById('btnAudio2')
let btnAudio3 = document.getElementById('btnAudio3')

let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let audio3 = document.getElementById('audio3')

let btnMainPlay = document.getElementById('btnMainPlay')

// CODE FOR THE WARNING
const warning = document.querySelector('.warning')
const closeBtn = document.querySelector('.close-warning-btn')

closeBtn.addEventListener('click', () => {
    warning.style.display = 'none'
})

// VIDE #OBSERVACAO - (START)
let showControls = document.getElementById('showControls')
let hideControls = document.getElementById('hideControls')

let showControls1 = document.getElementById('showControls1')
let hideControls1 = document.getElementById('hideControls1')

let showControls2 = document.getElementById('showControls2')
let hideControls2 = document.getElementById('hideControls2')

let showControls3 = document.getElementById('showControls3')
let hideControls3 = document.getElementById('hideControls3')
// VIDE #OBSERVACAO - (END)

const playIcon = '<i class="fa-solid fa-circle-play fa-2x"></i>'
const pauseIcon = '<i class="fas fa-pause-circle fa-2x"></i>'

function addPlayIcon(btnMedia) {
    btnMedia.innerHTML = playIcon
    btnMedia.classList.remove('playing')
    btnMedia.classList.add('paused')
    btnMainPlay.innerHTML = playIcon
}

function pauseAll() {
    videoPlayer.pause()
    audio1.pause()
    audio2.pause()
    audio3.pause()

    let arrBtnMedia = [btnVideo, btnAudio1, btnAudio2, btnAudio3]

    arrBtnMedia.forEach(btnMedia => {
        addPlayIcon(btnMedia)
    });
}

function playMedia(media, btnMedia) {
    media.play()
    btnMedia.innerHTML = pauseIcon
    btnMedia.classList.remove('paused')
    btnMedia.classList.add('playing')
    btnMainPlay.innerHTML = pauseIcon
}

function pauseMedia(media, btnMedia) {
    media.pause()
    addPlayIcon(btnMedia)
}

btnVideo.addEventListener('click', () => {
    if (btnVideo.classList.value == 'paused') {
        pauseAll()
        playMedia(videoPlayer, btnVideo)
        btnVideo.style.opacity = 0
    } else {
        pauseMedia(videoPlayer, btnVideo)
    }
})

relative.addEventListener('mouseleave', () => {
    btnVideo.style.opacity = 0
})

relative.addEventListener('mouseenter', () => {
    btnVideo.style.opacity = 0.8
})

btnVideo.addEventListener('mouseenter', () => {
    btnVideo.style.opacity = 0.8
})

btnAudio1.addEventListener('click', () => {
    if (btnAudio1.classList.value == 'paused') {
        pauseAll()
        playMedia(audio1, btnAudio1)
    } else {
        pauseMedia(audio1, btnAudio1)
    }
})

btnAudio2.addEventListener('click', () => {
    if (btnAudio2.classList.value == 'paused') {
        pauseAll()
        playMedia(audio2, btnAudio2)
    } else {
        pauseMedia(audio2, btnAudio2)
    }
})

btnAudio3.addEventListener('click', () => {
    if (btnAudio3.classList.value == 'paused') {
        pauseAll()
        playMedia(audio3, btnAudio3)
    } else {
        pauseMedia(audio3, btnAudio3)
    }
})

videoPlayer.addEventListener('ended', () => {
    addPlayIcon(btnVideo)
})

audio1.addEventListener('ended', () => {
    addPlayIcon(btnAudio1)
})

audio2.addEventListener('ended', () => {
    addPlayIcon(btnAudio2)
})

audio3.addEventListener('ended', () => {
    addPlayIcon(btnAudio3)
})

// #OBSERVACAO: MOSTRA OU OCULTA OS CONTROLES DO VIDEO E DOS AUDIOS
// SOLUÇÃO PALEATIVA DEVIDO A FALTA DA FEATURE DO PLAYER PRINCIPAL E BARRA DE PROGRESSO DO RODAPÉ
function showMediaControls(media, showControls, hideControls) {
    media.setAttribute('controls', true)
    showControls.style.display = 'none'
    hideControls.style.display = 'inline'
}

function hideMediaControls(media, hideControls, showControls) {
    media.removeAttribute('controls')
    hideControls.style.display = 'none'
    showControls.style.display = 'inline'
}

showControls.addEventListener('click', () => {
    showMediaControls(videoPlayer, showControls, hideControls)
    btnVideo.style.display = 'none'
})

hideControls.addEventListener('click', () => {
    hideMediaControls(videoPlayer, hideControls, showControls)
    btnVideo.style.display = 'block'
})

showControls1.addEventListener('click', () => {
    showMediaControls(audio1, showControls1, hideControls1)
})

hideControls1.addEventListener('click', () => {
    hideMediaControls(audio1, hideControls1, showControls1)
})

showControls2.addEventListener('click', () => {
    showMediaControls(audio2, showControls2, hideControls2)
})

hideControls2.addEventListener('click', () => {
    hideMediaControls(audio2, hideControls2, showControls2)
})

showControls3.addEventListener('click', () => {
    showMediaControls(audio3, showControls3, hideControls3)
})

hideControls3.addEventListener('click', () => {
    hideMediaControls(audio3, hideControls3, showControls3)
})