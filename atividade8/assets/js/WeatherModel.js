class WeatherModel {
    constructor() {
        this.weatherData = null
    }

    update(city, temperature, conditions, icon, humidity, speed) {
        this.weatherData = {
            city: city,
            temperature: temperature,
            conditions: conditions,
            icon: icon,
            humidity: humidity,
            speed: speed
        }
    }

    getWeatherData() {
        return this.weatherData
    }
}

