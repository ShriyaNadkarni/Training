const weatherData = [
    {
      city: "New York",
      temperature: "25°C",
      humidity: "50%",
      windSpeed: "10 Km/h",
      image : "images/rain.png"
    },
    {
      city: "London",
      temperature: "18°C",
      humidity: "65%",
      windSpeed: "82 Km/h",
     image : "images/drizzle.png"
    },
  ];
  
var serchInput = document.getElementById('search');
var searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function () {
    const cityName = serchInput.value;
    updateWeatherDetails(cityName);
  });
  


function updateWeatherDetails(cityName) {
   
    const cityData = weatherData.find((items) => items.city.toLowerCase() === cityName.toLowerCase());
  
   
    if (cityData) {
      const weatherIcon = document.querySelector('.weather-icon');
      const temp = document.querySelector('.temp');
      const city = document.querySelector('.city');
      const humidity = document.querySelector('.humidity');
      const wind= document.querySelector('.wind');
  
      weatherIcon.src = cityData.image;
      temp.textContent = cityData.temperature;
      city.textContent = cityData.city;
      humidity.textContent = cityData.humidity;
      wind.textContent = cityData.windSpeed;
      
    } else {
      alert('City not found');
    }
  }
  

