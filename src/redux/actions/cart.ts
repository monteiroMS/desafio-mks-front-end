import { CartAction } from "../../types/Cart";
import { Store } from "../../types/Store";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_UP = 'UPDATE_UP';
export const UPDATE_DOWN = 'UPDATE_DOWN';

export const addToCart: CartAction = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart: CartAction = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const riseQuantity: CartAction = (product) => ({
  type: UPDATE_UP,
  payload: product,
});

export const lowerQuantity: CartAction = (product) => ({
  type: UPDATE_DOWN,
  payload: product,
});

export const selectCart = ({ cart: { items } }: Store) => items;
