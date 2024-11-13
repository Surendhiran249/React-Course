// SimpleForm.jsx
import React, { useRef, useState } from 'react';

const SimpleForm = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputValue) {
      setError('Input cannot be empty.');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:8080/submit', { // Change endpoint to submissions
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      setMessage('Form submitted successfully.');
      setInputValue(''); // Clear input after submission
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h3>Simple Form with API Validation</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text"
        />
        <button type="button" onClick={focusInput}>
          Focus Input
        </button>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default SimpleForm;
