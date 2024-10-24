import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, InputBase } from '@mui/material';
import { AccountCircle as ProfileIcon } from '@mui/icons-material';

function Homepage({ onAddToCart }) {
  const navigate = useNavigate();
  
  // Ensure unique IDs for each product
  const [products] = useState([
    { id: 1, name: 'Apple', price: 150, image: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg' },
    { id: 2, name: 'Banana', price: 80, image: 'https://m.media-amazon.com/images/I/51ebZJ+DR4L.jpg' },
    { id: 3, name: 'Orange', price: 130, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yz1d_OrZBKB6TIWRyUtCIPBIjgyDOpybxw&s' },
    { id: 4, name: '285g Cadbury Silk Chocolate', price: 600, image: 'https://m.media-amazon.com/images/I/51s2pkKOJRL.AC_SX250.jpg' },
    { id: 5, name: 'Tata Salt, 1kg', price: 70, image: 'https://m.media-amazon.com/images/I/61-zRoFrfqL.jpg' },
    { id: 6, name: 'Mr. Gold Refined Sunflower Oil Can, 5 L', price: 110, image: 'https://m.media-amazon.com/images/I/71k0TKsECpL._SY550_.jpg' },
    { id: 7, name: 'Bajaj Dry Fruits Premium Cranberries', price: 450, image: 'https://m.media-amazon.com/images/I/61sbawlFKDL._SX522_.jpg' },
    { id: 8, name: 'Healthy Dried Blueberry (200g)', price: 560, image: 'https://m.media-amazon.com/images/I/41yneT3mZ0L._SX522_.jpg' },
    { id: 9, name: 'Pomegranate Anar Seeds Organic 1kg', price: 145, image: 'https://m.media-amazon.com/images/I/51S2Kmhr5xL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 10, name: 'Premium Dried Fruits (Strawberry, 200g)', price: 200, image: 'https://www.health.com/thmb/zvfL1rCWAPg3XzidfAqURuCmttk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg' },
    { id: 11, name: 'Avocado', price: 220, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCGedvavzdQnv2kpffyT2IZ3Alj60da4cJw&s' },
    { id: 12, name: 'Pineapple', price: 160, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCG2TLJjRBh1ijYajFux8X2f32Yz_S0wYVQ&s' },
    { id: 13, name: 'Grapes', price: 120, image: 'https://nativeindianorganics.com/wp-content/uploads/2023/07/green-grapes.jpg' },
    { id: 14, name: 'Kiwi', price: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE1p9xNBXToyhlx53v1Mx7wlaFKkbS4z0-A&s' },
    { id: 15, name: 'Blueberries', price: 350, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxAumUBt_fQ38H5fCd6W8yHQgUszAhWeWng&s' },
    { id: 16, name: 'Chocolate', price: 250, image: 'https://www.coldlove.in/cdn/shop/files/Healthy-AF-calories-mentioned_SFChoc1200x1200_68f36071-594f-4896-a072-fa380b5204cf.jpg?v=1723026075&width=1445' },
    { id: 17, name: 'Watermelon', price: 550, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZMefppM4pi-ygzOHTbInC84pjJF2bEJWXw&s' },
    { id: 18, name: 'Mango', price: 200, image: 'https://draxe.com/wp-content/uploads/2019/04/DrAxeMangoNutritionFB.jpg' },
    { id: 19, name: 'Cherries', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1dGinfC7vIjQoBbZBCNYbSS2_3pKy7wHkA&s' },
    { id: 20, name: 'Raspberries', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWPuQA-aaHdlRrC6z6wGMKXJvKGxoGTH8Yw&s' }
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

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#006600 !important' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
          </IconButton>
          <Typography variant="h6" noWrap>
            𝙁𝙧𝙚𝙨𝙝𝘾𝙖𝙧𝙩
          </Typography>
          <InputBase
            placeholder="Search products…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: 'primary', backgroundColor: 'white', padding: '0 8px', borderRadius: '4px', border: '1px solid black' }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleCartClick}
              sx={{
                marginRight: '7px',
                backgroundColor: '#ffffff',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                },
              }}
            >
              𝑪𝒂𝒓𝒕
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleAboutClick}
              sx={{
                marginRight: '7px',
                backgroundColor: '#ffffff',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                },
              }}
            >
              𝑨𝒃𝒐𝒖𝒕 𝒖𝒔
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleContactClick}
              sx={{
                backgroundColor: '#ffffff',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                },
              }}
            >
              𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝒔
            </Button>
          </div>
          <IconButton edge="end" color="inherit" aria-label="user profile" onClick={handleProfileClick}>
            <ProfileIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ 
              maxWidth: 345, 
              border: '1px solid green', 
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
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
