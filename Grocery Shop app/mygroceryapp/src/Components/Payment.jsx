import React, { useState } from 'react';
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
  const { totalAmount } = location.state || { totalAmount: 0 };

  // New states for form data and validation errors
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({ cardNumber: '', cvv: '', otp: '' });

  const validateFields = () => {
    let isValid = true;
    const newErrors = { cardNumber: '', cvv: '', otp: '' };

    // Card Number validation: Check if it's 16 digits
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
      isValid = false;
    }

    // CVV validation: Check if it's 3 digits
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
      isValid = false;
    }

    // OTP validation: Check if it's 6 digits
    if (!/^\d{6}$/.test(otp)) {
      newErrors.otp = 'OTP must be 6 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePayment = () => {
    if (validateFields()) {
      alert('Payment Successful!');
      navigate('/homepage');
    }
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
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              error={Boolean(errors.cardNumber)}
              helperText={errors.cardNumber}
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
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              error={Boolean(errors.cvv)}
              helperText={errors.cvv}
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
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              error={Boolean(errors.otp)}
              helperText={errors.otp}
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
