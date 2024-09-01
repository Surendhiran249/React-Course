import React from 'react';
import { Typography, IconButton, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Navbar from './Navbar';
function Cart({ cartItems, updateCartItem, removeCartItem }) {
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { totalAmount } });
  };

  return (
    <div>      
    <Navbar />
    <div className="cart-container">
      <div className="cart-header">
        <Typography variant="h4">
          Shopping Cart
        </Typography>
      </div>
      {cartItems.length === 0 ? (
        <Typography variant="h6" className="cart-empty-message">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card className="cart-item-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <CardContent className="cart-item-content">
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ₹{item.price.toFixed(2)} x {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <div className="cart-item-buttons">
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
        <div className="total-amount-container">
          <Typography variant="h5">Total Amount: ₹{totalAmount}</Typography>
          <Button
            variant="contained"
            className="proceed-button"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </div>
      )}
    </div>
    </div>

  );
}

export default Cart;
