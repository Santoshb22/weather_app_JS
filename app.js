const apiKey = "bb5f13072f084a2bb89142934232711";
//weatherapi.com

const searchBtn= document.querySelector(".input-search button")
const input = document.querySelector(".input-search input")
const degree = document.querySelector(".city h1")
const nameCity = document.querySelector(".city h2")
const country = document.querySelector(".city p")
const humidityIs = document.querySelector("#humidity-js")
const windSpeed = document.querySelector("#wind-speed")
const weatherImg = document.querySelector(".weather-details img")
const weatherDisplay = document.querySelector(".weather-details")


const showData = async (city) => {

const cityName = city
let response  = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}
`);

const data = await response.json();

degree.innerHTML = Math.round(data.current.temp_c) + "°C";
nameCity.innerHTML = data.location.name
country.innerHTML = `Country: ${data.location.country} and region: ${data.location.region}`
humidityIs.innerHTML = data.current.humidity
windSpeed.innerHTML = data.current.wind_kph + "km/h"

//showing weather image according to weather condition 
if (data.current.condition.text === "Mist") {
      weatherImg.src = "./img/mist.png"
} else if(data.current.condition.text === "Clouds" || "Partly cloudy"){
    weatherImg.src = "./img/clouds.png"
} else if(data.current.condition.text === "Clear"){
    weatherImg.src = "./img/clear.png"
} else if(data.current.condition.text === "Rain"){
    weatherImg.src = "./img/rain.png"
} else if(data.current.condition.text === "Drizzle"){
    weatherImg.src = "./img/dizzle.png"
} else if(data.current.condition.text === "Snow") {
    weatherImg.src = "./img/snow.png"
}

weatherDisplay.style.display = "block"

console.log(data)
}

searchBtn.addEventListener("click", () => {
    const cityName = input.value;
    showData(cityName); 
    input.value = "";
})

