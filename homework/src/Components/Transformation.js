// Transformation.js
import React, { useState } from 'react';

function Transformation() {
  // State to track the current transformation
  const [transformation, setTransformation] = useState('Kaioken');

  // Toggle function to switch between "Kaioken" and "SuperSaiyan"
  const toggleTransformation = () => {
    setTransformation((prevTransformation) => 
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Current Transformation: {transformation}</h1>
      <button onClick={toggleTransformation}>
        Toggle Transformation
      </button>
    </div>
  );
}

export default Transformation;
