const Weather_details = document.querySelector(".Weather_container");
const popularCities = document.querySelector(".Popular_cities");
const loader = document.querySelector("#loader");
let cityName = document.querySelector(".cityName");
let weatherIcon = document.querySelector("#WeatherIcon");
let Time = document.querySelector(".Time");
let Temp = document.querySelector("#Temp");
let degreeCelcius = document.getElementById("degreeCelcius");
let Search = document.getElementById("Search");
let cityContainer = document.getElementById("city-container");
let cityContainer2 = document.getElementById("city-container2");
let cityContainer3 = document.getElementById("city-container3");

// variable for second popular cities with small size
const popularCities2 = document.querySelector("#Popular_cities2");
let popWeatherIcon = document.querySelector("#pop_city2_WeatherIcon");
let popCity_name = document.querySelector(".pop_cities2-city-name");
let popCity_time = document.getElementById("popCity_time");
let popCity_temp = document.querySelector("#pop_city_temp");
let popCity_condition = document.querySelector(".pop_cities2-city-condition");
console.log(popCity_time);

window.addEventListener("load", () => {
  hideLoader();
  popularCities2.classList.add("hide");

  Weather_details.classList.add("hide");

  // loader.addEventListener("transitionend", () => {
  //   document.body.removeChild(".loader");
  // });
});

//show and hide loader function

function showLoader() {
  loader.classList.remove("loader-hidden");
  loader.classList.add("loader");
}

function hideLoader() {
  loader.classList.remove("loader");
  loader.classList.add("loader-hidden");
}

// function to view weather based on location

let view_current_weather = document.getElementById("view_weather");
let latitude;
let longitude;
const apiUrl1 = "https://api.weatherapi.com/v1/current.json?";

const apikey = "1243f23a41df434aa6a150725232809";
view_current_weather.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      latitude = data.coords.latitude;
      longitude = data.coords.longitude;
      console.log(longitude);
      console.log(latitude);
      async function fetchWeather() {
        showLoader();
        if (latitude !== undefined && longitude !== undefined) {
          let response = await fetch(
            `${apiUrl1}q=${latitude},${longitude}&key=${apikey}`
          );
          hideLoader();
          let data = await response.json();
          console.log(data);
          view_current_weather.addEventListener("click", () => {
            Weather_details.style.display = "block";
            popularCities.style.display = "none";

            document.querySelector("#cityName4").innerHTML = data.location.name;
            document.querySelector("#time").innerHTML = data.location.localtime;
            document.querySelector("#Temp4").textContent =
              Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
            document.getElementById("WeatherIcon4").src =
              data.current.condition.icon;
            document.getElementById("condition3").innerHTML =
              data.current.condition.text;
            document.getElementById("country").innerHTML =
              data.location.country;
            document.getElementById("condition4").innerHTML =
              data.current.condition.text;
            document.getElementById("precipitation").innerHTML =
              data.current.precip_mm + "mm";
            document.getElementById("humidity").innerHTML =
              data.current.humidity + "%";
            document.getElementById("wind-speed").innerHTML =
              data.current.wind_kph + "km/h";
          });
        } else {
          console.log("Latitude and longitude are undefined.");
        }
      }
      fetchWeather();
    },
    (error) => console.log(error)
  );
});

// function to change from degree celcius to fahrenheit

unitChange = document.getElementById("Temp4");
fahrenheit_Temp = document.getElementById("fahrenheit_temp");
let isFahenheit = true;

function changeUnit() {
  const currentTemp = parseFloat(unitChange.textContent);
  let convertedTemp;

  if (isFahenheit) {
    convertedTemp = currentTemp * (9 / 5) + 32;
    fahrenheit_Temp.textContent = Math.round(convertedTemp) + "\xB0F";
  } else {
    convertedTemp = (currentTemp - 32) * (5 / 9);
    unitChange.textContent =
      Math.round(convertedTemp) + degreeCelcius.innerHTML;
  }

  isFahenheit = isFahenheit;

  // isFahenheit = !isFahenheit;
}

// function to fetch popular cities data
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=Nigeria(Port-Harcourt)";

async function fetchWeather() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);

  cityName.innerHTML = data.location.name;
  Time.innerHTML = data.location.localtime;
  Temp.textContent = Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  weatherIcon.src = data.current.condition.icon;
  document.getElementById("condition").innerHTML = data.current.condition.text;

  // popular cities 2 parameters
  popWeatherIcon.src = data.current.condition.icon;
  popCity_name.innerHTML = data.location.name;
  popCity_time.innerHTML = data.location.localtime;
  popCity_temp.innerHTML =
    Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  popCity_condition.innerHTML = data.current.condition.text;

  cityContainer.addEventListener("click", function () {
    console.log("clickd");
    Weather_details.style.display = "block";
    popularCities.style.display = "none";

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
  });
  // cancleAction();
}
fetchWeather();

const apiUrl2 =
  "https://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=London&aqi=no";

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

  // popular cities 2 parameter
  document.querySelector(".pop_cities2-icon2").src =
    data.current.condition.icon;
  document.querySelector(".pop_cities2-city-name2").innerHTML =
    data.location.name;
  document.querySelector(".pop_cities2-city-time2").innerHTML =
    data.location.localtime;
  document.querySelector(".pop_cities2-city-temp2").innerHTML =
    Math.round(data.current.temp_c) + degreeCelcius.innerHTML;
  document.querySelector(".pop_cities2-city-condition2").innerHTML =
    data.current.condition.text;

  cityContainer2.addEventListener("click", function () {
    console.log("clickd");
    Weather_details.style.display = "block";
    popularCities.style.display = "none";

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
  });
}
fetchWeather2();

const apiUrl3 =
  "https://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=America(New York)&aqi=no";

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

  // popular cities 2 parameter

  cityContainer3.addEventListener("click", function () {
    console.log("clickd");
    Weather_details.style.display = "block";
    popularCities.style.display = "none";

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
  });
}
fetchWeather3();

// function to fetch searched cities
const apiUrl4 =
  "https://api.weatherapi.com/v1/current.json?key=1243f23a41df434aa6a150725232809&q=";

async function fetchWeatherAll(city) {
  showLoader();

  let response = await fetch(apiUrl4 + city);
  hideLoader();

  if (response.status == 400) {
    document.querySelector("#errorMessage").style.display = "block";
    Search.style.borderColor = "red";
    Search.style.borderWidth = "1px";
    Weather_details.style.display = "none";
    popularCities.style.display = "block";
    popularCities2.style.display = "none";
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
    popularCities2.style.display = "block";
    popularCities.style.display = "none";
  }
}

Search.addEventListener("keypress", function (event) {
  document.querySelector("#errorMessage").style.display = "none";
  Search.style.borderColor = "";
  Search.style.borderWidth = "";

  if (event.key === "Enter") {
    fetchWeatherAll(Search.value);

    Search.value = "";
    popularCities.classList.add("hide");
    Weather_details.classList.add("show");
    popularCities2.classList.add("show");
  }
});

// Function to return home

function cancelAction() {
  Search.value = "";
}
function returnHome() {
  Weather_details.style.display = "none";
  popularCities2.style.display = "none";
  popularCities.style.display = "block";

  if (Weather_details.classList.contains("show")) {
    Weather_details.style.display = "none";
    popularCities.style.display = "block";
    popularCities2.style.display = "none";
  } else {
    return;
  }
}
