import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  if (!weatherData) {
    return <div>Введите город, чтобы узнать погоду</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-info">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <div>
            <h2>Погода в {weatherData.name}</h2>
            <p>Температура: {weatherData.main.temp}°C</p>
            <p>Скорость ветра: {weatherData.wind.speed} m/s</p>
            <p>Влажность: {weatherData.main.humidity}%</p>
          </div>
        </div>
      </div>
      <h3>Прогноз на 5 дней</h3>
      <div className="forecast-container">
        {forecastData.list.slice(0, 5).map((forecast, index) => (
          <div key={index}>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
            <div>
              <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
              <p>Температура: {forecast.main.temp}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
