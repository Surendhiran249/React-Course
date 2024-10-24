import React, { useState, useEffect } from 'react';

function Pah() {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log("useEffect hook called");
    const timer = setTimeout(() => {
      setMessage("Great... This is time to learn about HOOKS");
    }, 2000);

    // Cleanup function to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Pah;
