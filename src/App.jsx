import { useState } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { fetchWeatherData, fetchForecastData } from './api/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleCitySubmit = async (city) => {
    try {
      const weather = await fetchWeatherData(city);
      const forecast = await fetchForecastData(city);
      setWeatherData(weather);
      setForecastData(forecast);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className="App">
      <h1>Прогноз погоды</h1>
      <WeatherForm onCitySubmit={handleCitySubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />
    </div>
  );
}

export default App;
