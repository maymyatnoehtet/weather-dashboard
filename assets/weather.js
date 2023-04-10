/* Will use OpenWeather API to retrieve the weather data of multiple cities */
const apiKey = 'ff6b3036415b6c713a948b9abb79f243';
var lat = 34.6937;
var lon = 135.5023;
const forecastContainer = document.querySelector('.forecast');

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => {
        console.log(response);
        response.json();
    })
    .then(data => {
        console.log(typeof data);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });
