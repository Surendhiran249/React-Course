// WeatherApp.js
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

function WeatherApp() {
  // State to store the current location
  const [location, setLocation] = useState('New York');

  // Handler to update location state when the form is submitted
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <h1>Weather Application</h1>
      <input 
        type="text" 
        placeholder="Enter location" 
        onChange={handleLocationChange} 
      />
      <button>Get Weather</button>

      <WeatherDisplay location={location} />
    </div>
  );
}

export default WeatherApp;
