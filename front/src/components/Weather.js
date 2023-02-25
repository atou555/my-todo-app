import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const { latitude, longitude } = data;
        getWeather(latitude, longitude);
      } catch (error) {
        setError('Unable to retrieve location data');
        setLoading(false);
      }
    };
    getLocation();
  }, []);

  const getWeather = async (latitude, longitude) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError('Unable to retrieve weather data');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { name } = weather;
  const { temp, feels_like, humidity } = weather.main;
  const { main, description, icon } = weather.weather[0];

  return (
    <div>
      <h2>Météo pour {name}</h2>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />
        <span>{temp}°C</span>
        <span>{main}</span>
      </div>
      <div>
        <span>Sensation : {feels_like}°C</span>
        <span>Humidité : {humidity}%</span>
      </div>
    </div>
  );
};

export default Weather;
