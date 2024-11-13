// LoginDialog.js
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function LoginDialog() {
  // State for controlling dialog visibility and input fields
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Opens the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Closes the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handles the login process
  const handleLogin = () => {
    // Add login logic here (e.g., validation)
    console.log('Username:', username);
    console.log('Password:', password);
    handleClose(); // Closes dialog upon successful login
  };

  return (
    <div>
      {/* Login Button to open dialog */}
      <Button variant="contained" color="primary" onClick={handleOpen} data-testid="login">
        Login
      </Button>

      {/* Dialog for login */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>

        <DialogContent>
          {/* Username TextField */}
          <TextField
            label="Username"
            type="text"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
          />
          {/* Password TextField */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
        </DialogContent>

        <DialogActions>
          {/* Cancel Button */}
          <Button onClick={handleClose} data-testid="cancel" color="secondary">
            Cancel
          </Button>
          {/* Login Button */}
          <Button onClick={handleLogin} data-testid="dia-login" color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
