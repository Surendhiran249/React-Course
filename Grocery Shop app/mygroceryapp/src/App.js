import React, { useState } from 'react';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Cart from './Components/Cart';
import Payment from './Components/Payment';

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


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage onAddToCart={handleAddToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
