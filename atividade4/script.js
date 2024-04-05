let btnAudio1 = document.getElementById('btnAudio1')
let btnAudio2 = document.getElementById('btnAudio2')
let btnAudio3 = document.getElementById('btnAudio3')

let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let audio3 = document.getElementById('audio3')

let btnMainPlay = document.getElementById('btnMainPlay')

let showControls1 = document.getElementById('showControls1')
let hideControls1 = document.getElementById('hideControls1')

let showControls2 = document.getElementById('showControls2')
let hideControls2 = document.getElementById('hideControls2')

let showControls3 = document.getElementById('showControls3')
let hideControls3 = document.getElementById('hideControls3')

let btnVideo = document.getElementById('btnVideo')
let videoPlayer = document.getElementById('videoPlayer')
let showControls = document.getElementById('showControls')
let hideControls = document.getElementById('hideControls')

let relative = document.querySelector('.relative')

showControls.addEventListener('click', () => {
    videoPlayer.setAttribute('controls', true)
    showControls.style.display = 'none'
    hideControls.style.display = 'inline'
    btnVideo.style.display = 'none'
})

hideControls.addEventListener('click', () => {
    videoPlayer.removeAttribute('controls')
    hideControls.style.display = 'none'
    showControls.style.display = 'inline'
    btnVideo.style.display = 'block'
})

btnVideo.addEventListener('click', () => {
    // console.log('clicou')
    if (btnVideo.classList.value == 'paused') {
        audio1.pause()
        audio2.pause()
        audio3.pause()
        btnAudio1.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio1.classList.remove('playing')
        btnAudio1.classList.add('paused')
        btnAudio2.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio2.classList.remove('playing')
        btnAudio2.classList.add('paused')
        btnAudio3.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio3.classList.remove('playing')
        btnAudio3.classList.add('paused')

        videoPlayer.play()
        btnVideo.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        btnVideo.classList.remove('paused')
        btnVideo.classList.add('playing')
        btnVideo.style.opacity = 0
        // console.log('dentro if')
    } else {
        videoPlayer.pause()
        btnVideo.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnVideo.classList.remove('playing')
        btnVideo.classList.add('paused')
        // console.log('dentro else')
    }
})

relative.addEventListener('mouseenter', () => {
    btnVideo.style.opacity = 0.8
})

relative.addEventListener('mouseleave', () => {
    btnVideo.style.opacity = 0
})

btnVideo.addEventListener('mouseenter', () => {
    btnVideo.style.opacity = 0.8
})

showControls1.addEventListener('click', () => {
    audio1.setAttribute('controls', true)
    showControls1.style.display = 'none'
    hideControls1.style.display = 'inline'
})

hideControls1.addEventListener('click', () => {
    audio1.removeAttribute('controls')
    hideControls1.style.display = 'none'
    showControls1.style.display = 'inline'
})

showControls2.addEventListener('click', () => {
    audio2.setAttribute('controls', true)
    showControls2.style.display = 'none'
    hideControls2.style.display = 'inline'
})

hideControls2.addEventListener('click', () => {
    audio2.removeAttribute('controls')
    hideControls2.style.display = 'none'
    showControls2.style.display = 'inline'
})

showControls3.addEventListener('click', () => {
    audio3.setAttribute('controls', true)
    showControls3.style.display = 'none'
    hideControls3.style.display = 'inline'
})

hideControls3.addEventListener('click', () => {
    audio3.removeAttribute('controls')
    hideControls3.style.display = 'none'
    showControls3.style.display = 'inline'
})

btnAudio1.addEventListener('click', () => {
    // console.log('clicou')
    if (btnAudio1.classList.value == 'paused') {
        videoPlayer.pause()
        btnVideo.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnVideo.classList.remove('playing')
        btnVideo.classList.add('paused')
        audio2.pause()
        audio3.pause()
        btnAudio2.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio2.classList.remove('playing')
        btnAudio2.classList.add('paused')
        btnAudio3.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio3.classList.remove('playing')
        btnAudio3.classList.add('paused')

        audio1.play()
        btnAudio1.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        btnAudio1.classList.remove('paused')
        btnAudio1.classList.add('playing')
        btnMainPlay.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        // console.log('dentro if')
    } else {
        audio1.pause()
        btnAudio1.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio1.classList.remove('playing')
        btnAudio1.classList.add('paused')
        btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        // console.log('dentro else')
    }
})

btnAudio2.addEventListener('click', () => {
    // console.log('clicou')
    if (btnAudio2.classList.value == 'paused') {
        videoPlayer.pause()
        btnVideo.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnVideo.classList.remove('playing')
        btnVideo.classList.add('paused')
        audio1.pause()
        audio3.pause()
        btnAudio1.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio1.classList.remove('playing')
        btnAudio1.classList.add('paused')
        btnAudio3.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio3.classList.remove('playing')
        btnAudio3.classList.add('paused')

        audio2.play()
        btnAudio2.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        btnAudio2.classList.remove('paused')
        btnAudio2.classList.add('playing')
        btnMainPlay.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        // console.log('dentro if')
    } else {
        audio2.pause()
        btnAudio2.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio2.classList.remove('playing')
        btnAudio2.classList.add('paused')
        btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        // console.log('dentro else')
    }
})

btnAudio3.addEventListener('click', () => {
    // console.log('clicou')
    if (btnAudio3.classList.value == 'paused') {
        videoPlayer.pause()
        btnVideo.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnVideo.classList.remove('playing')
        btnVideo.classList.add('paused')
        audio1.pause()
        audio2.pause()
        btnAudio1.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio1.classList.remove('playing')
        btnAudio1.classList.add('paused')
        btnAudio2.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio2.classList.remove('playing')
        btnAudio2.classList.add('paused')

        audio3.play()
        btnAudio3.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        btnAudio3.classList.remove('paused')
        btnAudio3.classList.add('playing')
        btnMainPlay.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
        // console.log('dentro if')
    } else {
        audio3.pause()
        btnAudio3.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        btnAudio3.classList.remove('playing')
        btnAudio3.classList.add('paused')
        btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
        // console.log('dentro else')
    }
})

videoPlayer.addEventListener('ended', () => {
    btnVideo.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
    btnVideo.classList.remove('playing')
    btnVideo.classList.add('paused')
})

audio1.addEventListener('ended', () => {
    btnAudio1.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
    btnAudio1.classList.remove('playing')
    btnAudio1.classList.add('paused')
    btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
})

audio2.addEventListener('ended', () => {
    btnAudio2.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
    btnAudio2.classList.remove('playing')
    btnAudio2.classList.add('paused')
    btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
})

audio3.addEventListener('ended', () => {
    btnAudio3.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
    btnAudio3.classList.remove('playing')
    btnAudio3.classList.add('paused')
    btnMainPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-2x"></i>'
})