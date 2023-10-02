const Weather_details = document.querySelector(".Weather_container");
const popularCities = document.querySelector(".Popular_cities");
const loader = document.querySelector(".loader");
let cityName = document.querySelector("#cityName");
let weatherIcon = document.querySelector("#WeatherIcon");
let Time = document.querySelector("#Time");
let Temp = document.querySelector("#Temp");
let degreeCelcius = document.getElementById("degreeCelcius");
let Search = document.getElementById("Search");

// variable for second popular cities with small size
const popularCities2 = document.querySelector("#Popular_cities2");
let weatherIcon2 = document.querySelector("#pop_city2_WeatherIcon");

window.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
  popularCities2.classList.add("hide");

  Weather_details.classList.add("hide");

  // loader.addEventListener("transitionend", () => {
  //   document.body.removeChild(".loader");
  // });
});

// function showLoader() {
//   html.classList.add("loader");
// }

// function hideLoader() {
//   loader.classList.add("loader-hidden");
// }

const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=Nigeria(Port-Harcourt)";

async function fetchWeather() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);

  cityName.innerHTML = data.location.name;
  Time.innerHTML = data.location.localtime;
  Temp.textContent = Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  weatherIcon.src = data.current.condition.icon;
  document.getElementById("condition").innerHTML = data.current.condition.text;
  weatherIcon2.src = data.current.condition.icon;
}
fetchWeather();

const apiUrl2 =
  "http://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=London&aqi=no";

async function fetchWeather2() {
  let response = await fetch(apiUrl2);
  let data = await response.json();
  console.log(data);

  document.querySelector("#cityName2").innerHTML = data.location.name;
  document.querySelector("#Time2").innerHTML = data.location.localtime;
  document.querySelector("#Temp2").textContent =
    Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  document.getElementById("WeatherIcon2").src = data.current.condition.icon;
  document.getElementById("condition2").innerHTML = data.current.condition.text;
}
fetchWeather2();

const apiUrl3 =
  "http://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=America(New York)&aqi=no";

async function fetchWeather3() {
  let response = await fetch(apiUrl3);
  let data = await response.json();
  console.log(data);

  document.querySelector("#cityName3").innerHTML = data.location.name;
  document.querySelector("#Time3").innerHTML = data.location.localtime;
  document.querySelector("#Temp3").textContent =
    Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  document.getElementById("WeatherIcon3").src = data.current.condition.icon;
  document.getElementById("condition3").innerHTML = data.current.condition.text;
}
fetchWeather3();

const apiUrl4 =
  "http://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=";

async function fetchWeatherAll(city) {
  let response = await fetch(apiUrl4 + city);

  if (response.status == 400) {
    document.querySelector("#errorMessage").style.display = "block";

    Weather_details.style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector("#cityName4").innerHTML = data.location.name;
    document.querySelector("#time").innerHTML = data.location.localtime;
    document.querySelector("#Temp4").textContent =
      Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
    document.getElementById("WeatherIcon4").src = data.current.condition.icon;
    document.getElementById("condition3").innerHTML =
      data.current.condition.text;
    document.getElementById("country").innerHTML = data.location.country;
    document.getElementById("condition4").innerHTML =
      data.current.condition.text;
    document.getElementById("precipitation").innerHTML =
      data.current.precip_mm + "mm";
    document.getElementById("humidity").innerHTML = data.current.humidity + "%";
    document.getElementById("wind-speed").innerHTML =
      data.current.wind_kph + "km/h";

    Weather_details.style.display = "block";
    document.querySelector("#errorMessage").style.display = "none";
  }
}

Search.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchWeatherAll(Search.value);

    Search.value = "";
    popularCities.classList.add("hide");
    Weather_details.classList.add("show");
    popularCities2.classList.add("show");
  }
});

function cancleAction() {
  if (Weather_details.classList.contains("show")) {
    Weather_details.style.display = "none";
    popularCities.classList.add("show");
    popularCities2.style.display = "none";
  } else {
    return;
  }
}
