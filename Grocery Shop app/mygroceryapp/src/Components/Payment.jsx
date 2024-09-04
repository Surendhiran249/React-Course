import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Card, IconButton } from '@mui/material';
import { CreditCard, AccountBalance, Google, Apple, ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/system';
import Navbar from './Navbar';

const UpiOption = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the total amount from location state
  const { totalAmount } = location.state || { totalAmount: 0 };

  const handlePayment = () => {
    // Payment processing logic here
    alert('Payment Successful!');
    navigate('/homepage');
  };

  return (
    <div>
      <Navbar />
      <div>
      <Typography variant="h4" sx={{ padding: 2 }}>
        Payment
      </Typography>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Total Amount: ₹{totalAmount}
      </Typography>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            type="number"
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: <CreditCard sx={{ marginRight: 1 }} />,
            }}
          />
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            type="number"
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: <AccountBalance sx={{ marginRight: 1 }} />,
            }}
          />
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Choose UPI Option
          </Typography>
          <UpiOption>
            <Typography>Google Pay</Typography>
            <IconButton>
              <Google color="primary" />
            </IconButton>
          </UpiOption>
          <UpiOption>
            <Typography>Apple Pay</Typography>
            <IconButton>
              <Apple color="primary" />
            </IconButton>
          </UpiOption>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: 2,
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          animation: 'pulse 1s infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
        onClick={handlePayment}
        endIcon={<ArrowForward />}
      >
        Proceed to Pay ₹{totalAmount}
      </Button>
    </div>
    </div>
  );
}

export default Payment;
