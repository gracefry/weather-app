const weather = document.querySelector("#weather");

async function getWeather() {
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=cf3724283d3b82f5dde45ae74ac84577",
        {mode: "cors"}
    );
    const weatherData = await response.json();
    const temp = weatherData.main.temp;

    console.log(temp);
}

getWeather();


