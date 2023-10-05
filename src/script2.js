let start = document.getElementById("start");
let latitude;
let longitude;
const apiUrl = "https://api.weatherapi.com/v1/current.json?";

const apikey = "1243f23a41df434aa6a150725232809";
window.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      latitude = data.coords.latitude;
      longitude = data.coords.longitude;
      console.log(longitude);
      console.log(latitude);
      async function fetchWeather() {
        if (latitude !== undefined && longitude !== undefined) {
          let response = await fetch(
            `${apiUrl}q=${latitude},${longitude}&key=${apikey}`
          );
          let data = await response.json();
          console.log(data);
          start.addEventListener("click", () => {
            document.getElementById("name").innerHTML = data.location.name;
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
