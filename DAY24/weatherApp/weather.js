const apiKey = 'dcc48a7cd342d6de553381c6c5c030e8';

//Weather query function
async function queryWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if(!response.ok) throw new Error(`${city} not found!`);
        const data =  await response.json();
        displayWeather(data);

    } catch (error) {
        showError(error);
    }
}


//Getting user search value after clicking the searchBtn
document.querySelector("#searchBtn").addEventListener('click', () => {
    const city = document.querySelector('#cityInput').value;
    queryWeather(city);
});


//Displaying weather data
displayWeather = (data) => {
    const html = `
    <h2> ${data.name} </h2>
    <p> Temp: ${data.main.temp} </p>
    <p> Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    `
    document.getElementById('result').innerHTML = html;
}


//Show error
function showError(message) {
  document.querySelector('#result').innerHTML = `<p style="color:red;">❌ ${message}</p>`;
}