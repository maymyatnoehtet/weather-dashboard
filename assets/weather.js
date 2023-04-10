/* will fetch the data from OpenWeather api */
apikey = 'ff6b3036415b6c713a948b9abb79f243';
url = "https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}";

/* request header */
requestHeader = {
    method: "GET"
}