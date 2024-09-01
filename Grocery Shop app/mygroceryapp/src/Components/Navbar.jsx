// src/Components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate, } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#006600' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/homepage')}>
        𝙁𝙧𝙚𝙨𝙝𝘾𝙖𝙧𝙩
        </Typography>
        <div>
          <Button color="inherit" onClick={() => navigate('/homepage')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/cart')}>Cart</Button>
          <Button color="inherit" onClick={() => navigate('/payment')}>Payment</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About Us</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
