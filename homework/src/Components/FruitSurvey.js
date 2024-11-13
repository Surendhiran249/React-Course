// FruitSurvey.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function FruitSurvey() {
  // State to hold the name, selected fruit, and the message to display
  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState(null);
  const [message, setMessage] = useState('');

  // List of fruit options
  const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && favoriteFruit) {
      setMessage(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}.`);
    } else {
      setMessage("Please enter your name and choose a fruit.");
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Fruit Survey
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Name TextField */}
        <TextField 
          label="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Favorite Fruit Autocomplete */}
        <Autocomplete
          options={fruitOptions}
          value={favoriteFruit}
          onChange={(e, newValue) => setFavoriteFruit(newValue)}
          renderInput={(params) => (
            <TextField 
              {...params} 
              label="Choose a fruit" 
              variant="outlined"
            />
          )}
          data-testid="autocomplete"
          fullWidth
          margin="normal"
        />

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          data-testid="button"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      </form>

      {/* Display the message */}
      {message && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </div>
  );
}

export default FruitSurvey;
