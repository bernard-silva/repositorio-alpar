const cityInput = document.querySelector('#city-input')
const searchButton = document.querySelector('#search-button')

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim()
    if (city !== '') {
        WeatherController.instance.getWeather(city)
    }
})

cityInput.addEventListener("keyup", (e) => {
    const city = cityInput.value.trim()
    if (e.code === "Enter" || e.keyCode === 13) {
        WeatherController.instance.getWeather(city)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (defaultCity !== '') {
        WeatherController.instance.getWeather(defaultCity)
    }
})
