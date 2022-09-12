import { ADD_TO_CART, CLEAN_CART, REMOVE_FROM_CART, SHOW_CART, UPDATE_DOWN, UPDATE_UP } from "../actions/cart";
import { CartReducer, InCartProduct } from "../../types/Cart";
import { AnyAction } from "redux";

const INITIAL_STATE: CartReducer = {
  items: [],
  showCart: false,
};

const cart = (state = INITIAL_STATE, action: AnyAction): CartReducer => {
  const riseQuantity = (product: InCartProduct) => {
    if (product.id === action.payload.id) {
      product.quantity += 1;
    }
    return product;
  };

  const lowerQuantity = (product: InCartProduct) => {
    if (product.id === action.payload.id) {
      product.quantity -= 1;
    }
    return product;
  };

  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.some((product) => product.id === action.payload.id)) {
        return {
          ...state,
          items: state.items.map(riseQuantity),
        }
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload.id),
      }
    case UPDATE_UP:
      return {
        ...state,
        items: state.items.map(riseQuantity),
      }
    case UPDATE_DOWN:
      return {
        ...state,
        items: state.items.map(lowerQuantity),
      }
    case SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      }
    case CLEAN_CART:
      return {
        ...state,
        showCart: false,
        items: [],
      }
    default:
      return state;
  }
};

export default cart;