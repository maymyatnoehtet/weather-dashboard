/* all the global variables */
var city = "London";
const apikey = 'ff6b3036415b6c713a948b9abb79f243';
var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`;

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

}