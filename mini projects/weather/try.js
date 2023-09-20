const weatherData = [
    {
      city: "New York",
      temperature: "25°C",
      humidity: "50%",
      windSpeed: "10 Km/h",
      icon: "images/rain.png",
    },
    {
      city: "London",
      temperature: "18°C",
      humidity: "65%",
      windSpeed: "8 Km/h",
      icon: "cloud.png",
    },
    // Add more city data here
  ];

  const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const weatherDisplay = document.getElementById("weatherDisplay");

searchButton.addEventListener("click", () => {
  const cityName = searchInput.value.toLowerCase();
  const cityData = weatherData.find((city) => city.city.toLowerCase() === cityName);

  if (cityData) {
    displayWeather(cityData);
  } else {
    weatherDisplay.innerHTML = "City not found";
  }
});

function displayWeather(data) {
  const { city, temperature, humidity, windSpeed, icon } = data;
  const weatherHtml = `
    <div class="weather-card">
      <h1>${city}</h1>
      <img src="${icon}" alt="Weather Icon">
      <p>Temperature: ${temperature}</p>
      <p>Humidity: ${humidity}</p>
      <p>Wind Speed: ${windSpeed}</p>
    </div>
  `;

  weatherDisplay.innerHTML = weatherHtml;
}
