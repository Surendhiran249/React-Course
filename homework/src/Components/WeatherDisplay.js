// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ location }) {
  // Mock data for weather conditions
  const weatherData = {
    temperature: '20°C',
    condition: 'Sunny',
  };

  return (
    <div>
      <h2>Current Weather in {location}</h2>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
}

export default WeatherDisplay;
