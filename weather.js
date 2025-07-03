document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();
var city = document.getElementById('cityInput').value;
var apiKey ='ac6f296c8ddf6868959dc14f078cfc79';
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = ` <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°F</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p> Wind Speed: ${data.wind.speed}mph</p>
    <p> Cloudiness ${data.clouds.all}%</p>
    <p> Feels Like ${data.main.feels_like}°F</p>
 
    `;
  })
  .catch(() => {
  document.getElementById('weatherResult').innerHTML =`<p>
      Something went wrong. Please try again.</p>`;
  });
});
