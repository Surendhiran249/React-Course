// ToggleMessage.js
import React, { useState } from 'react';

function ToggleMessage() {
  // State to track if the message should be shown
  const [showMessage, setShowMessage] = useState(false);

  // Toggle function to handle button click
  const toggleMessage = () => {
    setShowMessage((prevShowMessage) => !prevShowMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Component' : 'Show Component'}
      </button>
      {showMessage && <p>Hi! How are You!!!</p>}
    </div>
  );
}

export default ToggleMessage;
