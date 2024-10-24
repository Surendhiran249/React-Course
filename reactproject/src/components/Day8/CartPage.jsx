import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from './cartActions';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleUpdateItem({...item, quantity: item.quantity + 1})}>
              Increase Quantity
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ id: 3, name: 'New Item', price: 100 })}>
        Add Item
      </button>
    </div>
  );
};

export default CartPage;
