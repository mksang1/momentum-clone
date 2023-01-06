const API_KEY = "00cf42217ff0bfc84b56ba0576abcc3d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert("위치 정보 얻을 수 없어 날씨 정보를 표시할 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
