class WeatherView {
    constructor() {
        this.weatherContainer = document.querySelector('#weather-container')
    }

    render(weatherData) {
        this.weatherContainer.innerHTML = `
            <h2>${weatherData.city}</h2>
            <p id="tempeture">${weatherData.temperature}°C</p>
            <p id="conditions">${weatherData.conditions}</p>
            <img id="weather-icon" src="http://openweathermap.org/img/wn/${weatherData.icon}.png" alt="Imagem do clima atual">
            <p class="others">Umidade: <span><i class="fa-solid fa-droplet"></i> ${weatherData.humidity}%</p>
            <p class="others">Vento: <span><i class="fa-solid fa-wind"></i> ${weatherData.speed}km/h</p>
        `
    }
}
