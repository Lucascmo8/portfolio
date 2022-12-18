// Variaveis e seleção de elementos
const apiKey = "0b17a7ab5c34074de275aa9994a7dd55"
const apiCountryURL = "https://countryflagsapi.com/png/"

const cityInput = document.querySelector(`#cityInput`)
const searchBtn = document.querySelector(`#search`)

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weatherData")

// funções
const getWeatherData = async (city) => {
    var erroMessage = document.getElementById(`erro`)
    erroMessage.innerHTML = ``
    try {
        const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

        const res = await fetch(apiweatherURL)
        const data = await res.json()

        if(data.message === "city not found"){
            throw Error("city not found")
        }
        return data
    }catch(erro){
        erroMessage.innerHTML = `<p>A cidade não foi encontrada</p>`
    }
}
const showWeatherData = async (city) => {
    console.log(city)
    const data = await getWeatherData(city)
    console.log(city)
    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`
    weatherContainer.classList.remove("hidden")
}

// Eventos
searchBtn.addEventListener(`click`, (e) => {
    e.preventDefault()

    const city = cityInput.value
    showWeatherData(city)
})

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value

        showWeatherData(city)
    }
})