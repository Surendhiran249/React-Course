import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && favoriteFruit) {
      alert(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}.`);
    } else {
      alert('Please fill out all the fields.');
    }
  };

  return (<>
  <h1><code>Enter Your name Favourite fruit : </code></h1>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="filled"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
        style={{background :  'white',borderRadius:'4px', }}
      />
      <Autocomplete
        options={['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry']}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Favorite Fruit"
            variant="filled"
            data-testid="autocomplete"
            style={{background :  'white',borderRadius:'4px' }}
          />
        )}
        value={favoriteFruit}
        onChange={(event, newValue) => setFavoriteFruit(newValue)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{margin:'5px 0px'}}
        data-testid="button"
      >
        Submit
      </Button>
    </form>
    </>
  );
};

export default FruitSurvey;