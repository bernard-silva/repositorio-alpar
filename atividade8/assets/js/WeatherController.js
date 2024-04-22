class WeatherController {
    static instance
    view
    model
    service
    constructor(apiKey) {
        this.view = new WeatherView()
        this.model = new WeatherModel()
        this.service = new WeatherService(apiKey)
    }

    async getWeather(city) {
        try {
            const data = await this.service.fetchWeather(city)
            this.model.update(
                data.name,
                data.main.temp,
                data.weather[0].description,
                data.weather[0].icon,
                data.main.humidity,
                data.wind.speed
            )
            this.renderWeather()
        } catch (error) {
            this.view.render(null);
            console.error(error);
        }
    }

    renderWeather() {
        const weatherData = this.model.getWeatherData()
        this.view.render(weatherData)
    }
}

WeatherController.instance = new WeatherController(apiKey)

