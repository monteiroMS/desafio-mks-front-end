import { Dispatch } from "redux";
import * as Endpoint from '../../helpers/endpoints';
import { ProductReducerAction } from "../../types/Product";
import { Product } from "../../types/Product";
import { Store } from "../../types/Store";

export const SET_LOADING = 'SET_LOADING';
export const SET_FAILED = 'SET_FAILED';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products: Product[]): ProductReducerAction => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLoading = (): ProductReducerAction => ({
  type: SET_LOADING,
  payload: [],
});

export const failedRequest = (): ProductReducerAction => ({
  type: SET_FAILED,
  payload: [],
});

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const res = await fetch(Endpoint.getAll);
      const { products } = await res.json();
      dispatch(setProducts(products));
    } catch (error) {
      dispatch(failedRequest());
    }
  };
}

export const selectProducts = ({ products: { items } }: Store) => items;