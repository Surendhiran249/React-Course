import React from 'react';
import { Typography, IconButton, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, updateCartItem, removeCartItem }) {
  const navigate = useNavigate();

  // Calculate the total amount based on price and quantity
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleProceedToPayment = () => {
    // const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    navigate('/payment', { state: { totalAmount } });
  };
  
  return (
    <div>
      <Typography variant="h4" sx={{ padding: 2 }}>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ padding: 2 }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ${item.price} x {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <div>
                    <IconButton
                      aria-label="decrease quantity"
                      onClick={() => updateCartItem(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Remove />
                    </IconButton>
                    <IconButton
                      aria-label="increase quantity"
                      onClick={() => updateCartItem(item.id, item.quantity + 1)}
                    >
                      <Add />
                    </IconButton>
                    <IconButton
                      aria-label="remove item"
                      onClick={() => removeCartItem(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {cartItems.length > 0 && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5">Total Amount: ${totalAmount}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleProceedToPayment}
            sx={{ marginTop: 2 }}
          >
            Proceed to Payment
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
