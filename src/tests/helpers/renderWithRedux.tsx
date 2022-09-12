import { configureStore } from "@reduxjs/toolkit";
import cart from '../../redux/reducers/cart';
import products from '../../redux/reducers/products';
import thunk from 'redux-thunk';
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const renderWithRedux = (
  component: ReactElement,
  {
    store = configureStore({
      reducer: { cart, products },
      middleware: [thunk],
    }),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});