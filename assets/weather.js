/* all the global variables */
var city = "London";
const apikey = 'ff6b3036415b6c713a948b9abb79f243';
var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`;

/* variables for renderForecast function */
const forecastContainer = document.querySelector('.forecast');

/* to get the latitude and longtitude of the city (used GEOCODING API) */
function getCoords(){
    console.log("GeoURL: " + geoUrl); // TODO: delete this before submitting
    fetch(geoUrl)
        .then(response => response.json())
        .then(data => extractLatLon(data))
        .catch(error => console.log('error: ', error));
};

getCoords(city);


/* to extract latitude and longtitude data (used GEOCODING API) */
function extractLatLon(data){
    var latitude = data[0].lat;
    var longtitude = data[0].lon;
    console.log("Latitude: "+ latitude);
    console.log("Longtitude: "+ longtitude);
    getForecast(latitude, longtitude);
}

/* to get the weather forecast data (used OPENWEATHER API) */
function getForecast(lat, lon) {
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => renderForecast(data))
        .catch(error => console.log('error: ', error));
}

/* to render the weather data retrieved */
function renderForecast(weatherData){
    /* to filter the weather data at 12:00 pm */
    const forecastData = weatherData.list.filter(item => item.dt_txt.includes('12:00:00'));
    console.log(forecastData);
    
    /* loop through 5 leftover weather data lists to render it on html */
    forecastData.forEach(element => {
        console.log(element);

        /* date */
        var date = new Date(element.dt_txt);
        var formatDate = date.getDate() + '/' + (date.getMonth()+1) + '/' +  date.getFullYear();;
        console.log(formatDate);

        /* icon image source */
        iconSrc = "https://openweathermap.org/img/wn/"+ element.weather[0].icon + "@2x.png";
        iconDesc = element.weather[0].description;

        /* temperature */
        temperature = element.main.temp;

        /* humidity */
        humidityPercent = element.main.humidity;

        /* wind */
        windSpeed = element.wind.speed;

        /* to add the data into html */
        const forecastItem = document.createElement('div'); // create html element
            forecastItem.classList.add('forecast-item'); // add class to an html element
            forecastItem.innerHTML = `
                <div class="forecast-date">${formatDate}</div>
                <img class="forecast-icon" src=${iconSrc} alt="${iconDesc}">
                <div class="forecast-weather">Temperature: ${temperature}°C</div>
                <div class="forecast-weather">Wind: ${windSpeed}km/h</div>
                <div class="forecast-weather">Humidity: ${humidityPercent}%</div>
            `;
            forecastContainer.appendChild(forecastItem);
    });
}