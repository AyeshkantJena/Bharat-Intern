// Fetch the weather data from the OpenWeatherMap API
export async function fetchWeatherData(city, apiKey) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  }
  
  // Update the DOM with the fetched weather data
  export function updateWeatherInfo(data) {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById(
      "description"
    ).textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById("weatherResult").style.display = "block";
  }
  
  // Handle the form submission
  async function handleFormSubmit(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "3057e2df5e87ecd54287735da0ecce79"; // Replace with your OpenWeatherMap API key
  
    try {
      const weatherData = await fetchWeatherData(city, apiKey);
      updateWeatherInfo(weatherData);
    } catch (error) {
      alert(error.message);
    }
  }
  
  // Set up event listeners when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("weatherForm")
      .addEventListener("submit", handleFormSubmit);
  });