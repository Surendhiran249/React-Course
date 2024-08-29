import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, InputBase } from '@mui/material';
import { Menu as MenuIcon, AccountCircle as ProfileIcon } from '@mui/icons-material';

function Homepage({ onAddToCart }) {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'Apple', price: 150, image: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg' },
    { id: 2, name: 'Banana', price: 80, image: 'https://m.media-amazon.com/images/I/51ebZJ+DR4L.jpg' },
    { id: 3, name: 'Orange', price: 130, image: 'https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg' },
    { id: 3, name: '285g Cadbury Silk Chocolate', price: 600, image: 'https://m.media-amazon.com/images/I/51s2pkKOJRL.AC_SX250.jpg' },
    { id: 3, name: 'Tata Salt, 1kg', price: 70, image: 'https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL._AC_UL165_SR165,165_.jpg' },
    { id: 3, name: 'Mr. Gold Refined Sunflower Oil Can, 5 L', price: 110, image: 'https://m.media-amazon.com/images/I/71k0TKsECpL._SY550_.jpg' },
    { id: 3, name: 'Bajaj Dry Fruits Premium Cranberries', price: 450, image: 'https://m.media-amazon.com/images/I/61sbawlFKDL._SX522_.jpg' },
    { id: 3, name: 'Healthy Dried Blueberry (200g)', price: 560, image: 'https://m.media-amazon.com/images/I/41yneT3mZ0L._SX522_.jpg' },
    { id: 3, name: 'Pomegranate Anar Seeds Organic 1kg', price: 145, image: 'https://m.media-amazon.com/images/I/51S2Kmhr5xL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Premium Dried Fruits (Strawberry, 200g)', price: 200, image: 'https://www.health.com/thmb/zvfL1rCWAPg3XzidfAqURuCmttk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FreshCart
          </Typography>
          <InputBase
            placeholder="Search products…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: 'primary', backgroundColor: 'white', padding: '0 8px', borderRadius: '4px' , border: '1px solid black' }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" color='inherit' onClick={handleCartClick}>
            cart
          </Button>
          <IconButton edge="end" color="inherit" aria-label="user profile" onClick={handleProfileClick}>
            <ProfileIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 345 ,border:'1px solid green'}}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₹{product.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 1 }}
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Homepage;
