import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "700c594000eea26b130f84992ecc4942";
  const city = "Richardson"; // The city does not change.

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, [city, apiKey]);

  if (!weatherData) {
    return null;
  }

  const temperatureCelsius = weatherData.main.temp - 273.15;

  const temperature = ((temperatureCelsius * 9) / 5 + 32).toFixed(0); //May show a few degrees off depending on weather app used to look but live updates

  return (
    <span>{temperature}°</span>
  );
};

export default Weather;