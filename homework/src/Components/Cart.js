// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateCartItem } from '../redux/CartActions';

const Cart = () => {
  const cartItems = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: Math.random(),
      name: 'Sample Product',
      price: 20,
    };
    dispatch(addToCart(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateItem = (id) => {
    const updatedItem = {
      id,
      name: 'Updated Product Name',
      price: 25,
    };
    dispatch(updateCartItem(updatedItem));
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleUpdateItem(item.id)}>Update</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
