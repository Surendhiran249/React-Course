import React, { useState } from 'react';

function FormValidation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({ firstName: '', lastName: '' }); // Object for detailed error messages

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure event object for cleaner code
    setFirstName(name === 'firstName' ? value : firstName); // Update state based on field
    setLastName(name === 'lastName' ? value : lastName);

    // Clear error messages when a field is filled
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.length > 0 ? '' : 'Field is Empty', // Set error based on field value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // No need for separate validation here, errors are already managed
    if (Object.values(errors).some((error) => error.length > 0)) {
      // Inform user about errors and prevent submission
      return; // Early return to prevent unnecessary code execution
    }

    // Submit the form (implementation depends on your backend)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName" // Set name attribute for handleChange
          value={firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.errors.firstName}</p>} {/* Display error message */}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName" // Set name attribute for handleChange
          value={lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>} {/* Display error message */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;