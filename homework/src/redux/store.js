// src/redux/store.js
import { createStore } from 'redux';
import { cartReducer } from './CartReducer';

const store = createStore(cartReducer);

export default store;
