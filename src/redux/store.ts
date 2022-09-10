import { configureStore } from '@reduxjs/toolkit';
import cart from './reducers/cart';
import products from './reducers/products';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: { cart, products },
  middleware: [thunk],
});

export default store;
