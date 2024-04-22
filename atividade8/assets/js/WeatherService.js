class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    }

    async fetchWeather(city) {
        const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`
        try {
            const response = await fetch(url)
            if (!response.ok) {
                const errorMessage = `Cidade não encontrada, por favor tente novamente. Status do Erro: ${response.status}`
                throw new Error(errorMessage)
            }
            const data = await response.json()
            return data
        } catch (error) {
            throw error
        }
    }
}

// OUTRA FORMA:
// fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`
//                 Cidade não encontrada, por favor tente novamente.
//                 Status do Erro: ${response.status}
//             `)
//         }
//         return response.json()
//     }).then((data) => data)
//     .catch((error) => {
//         throw error
//     })