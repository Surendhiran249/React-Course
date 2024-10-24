import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add this if not already imported
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import './Login.css'

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      // Make POST request to the backend to store user data
      const response = await axios.post('http://localhost:5000/signup', { username, password });
  
      // If signup is successful, navigate to login
      if (response.status === 201) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Username already exists!');
      } else {
        console.error('Error during signup:', error);
      }
    }
  };
  

  return (
    <Container maxWidth="xs" className='login-container'>
      <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <Typography component="h2" variant="h4">

          Sign Up to
        </Typography>
        <Typography component="h2" variant="h3" color="success" >
          𝙁𝙧𝙚𝙨𝙝𝘾𝙖𝙧𝙩
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
            className='login-btn'
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Already have an account? Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
