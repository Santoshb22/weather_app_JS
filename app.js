const apiKey = "bb5f13072f084a2bb89142934232711";

const searchBtn= document.querySelector(".input-search button")
const input = document.querySelector(".input-search input")
const degree = document.querySelector(".city h1")
const nameCity = document.querySelector(".city h2")
const country = document.querySelector(".city p")
const humidityIs = document.querySelector("#humidity-js")
const windSpeed = document.querySelector("#wind-speed")

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

console.log(data)
}

searchBtn.addEventListener("click", () => {
    const cityName = input.value;
    showData(cityName); 
    input.value = "";
})

