import { AnyAction } from "redux";
import { ProductsReducer } from "../../types/Product";
import { SET_FAILED, SET_LOADING, SET_PRODUCTS } from '../actions/products';

const INITIAL_STATE: ProductsReducer = {
  loading: false,
  items: [],
};

const products = (state = INITIAL_STATE, action: AnyAction): ProductsReducer => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        items: [],
      };
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case SET_FAILED:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default products;