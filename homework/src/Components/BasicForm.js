// BasicForm.js
import React, { useState } from 'react';

function BasicForm() {
  // State variables to store input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh on form submission
    
    // Log form data to the console
    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
