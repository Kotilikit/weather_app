import { useState } from 'react';
import './WeatherForm.css';

const WeatherForm = ({ onCitySubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Узнать погоду!</button>
    </form>
  );
};

export default WeatherForm;
