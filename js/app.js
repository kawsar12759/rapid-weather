const API_Key = '713f7081e5c42ef076be447b1a4d983f';

//Loads the weather data through API
async function loadWeatherData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    const data = await res.json();
    if (data.length === 0) {
        alert('City Not Found');
        return;
    }
    console.log(data);
    displayWeatherData(data);
}

//Displays the obtained data
function displayWeatherData(data) {

    const weatherStatusSection = document.getElementById('weather-status-section');
    weatherStatusSection.innerHTML = `
        <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1 id="city-name">${data.name}</h1>
                <h3><span id="temperature">${data.main.temp}</span>&deg;C</h3>
                <h1 class="lead" id="condition">${data.weather[0].main}</h1>
        </div>
    `
}

//Eventhandler on the Search Button
document.getElementById('search-btn').addEventListener('click', function () {
    processSearch();
})

//Gets The city name from the input field and passes it to the loadfunction
function processSearch() {
    const cityName = document.getElementById('input-city').value;
    if (cityName === '') {
        alert('Please Insert a City Name');
        return;
    }
    loadWeatherData(cityName);
}


//Handles Enter Keypress
document.getElementById('input-city').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        processSearch();
    }
})