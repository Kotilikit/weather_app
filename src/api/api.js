const API_KEY = 'f697cb8d9e77664c4e381b0affadd4e4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Город не найден или произошла ошибка при запросе');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка данных:', error);
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Город не найден или произошла ошибка при запросе');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка данных:', error);
    throw error;
  }
};
