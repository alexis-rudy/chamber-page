// url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=6f2a7533354fb40a48dbf874156b15aa'

forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=6f2a7533354fb40a48dbf874156b15aa';
// lat 33.1581
// long 117.3506
const currentTemp = document.querySelector('#temp');
const captionDesc = document.querySelector('#weatherDescription');
const currentHumidity = document.querySelector('#currentHumidity');
const dayOne = document.querySelector('#dayOne');
const dayTwo = document.querySelector('#dayTwo');
const dayThree = document.querySelector('#dayThree');
const message = document.querySelector('#note');


async function apiFetch() {
    try {
      const response = await fetch(forcastUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function  displayResults(weatherData) {
    currentTemp.textContent = weatherData.list[0].main.temp.toFixed(0);
    const desc = weatherData.list[0].weather[0].description;
    captionDesc.textContent = desc;
    if (weatherData.list[0].weather[0].description = "clear sky"){
        message.textContent = "That means today's a good day to get a drink and cool off!";
    }
    currentHumidity.textContent = weatherData.list[0].main.humidity;
    dayOne.textContent = weatherData.list[1].main.temp.toFixed(0);
    dayTwo.textContent = weatherData.list[2].main.temp.toFixed(0);
    dayThree.textContent = weatherData.list[3].main.temp.toFixed(0);

}