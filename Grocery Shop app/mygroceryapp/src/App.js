import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import About from './Components/About';
import ContactUs from './Components/ContactUs';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeCartItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage onAddToCart={handleAddToCart} />} />
      </Routes>
      <Routes>
        <Route 
          path="/Cart" 
          element={
            <Cart 
            cartItems={cartItems} 
            updateCartItem={updateCartItem} 
            removeCartItem={removeCartItem} 
            />
          } 
        />
        <Route path="/Payment" element={<Payment cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
