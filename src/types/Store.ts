import { CartReducer } from "./Cart";
import { ProductsReducer } from "./Product";

export type Store = {
  cart: CartReducer,
  products: ProductsReducer,
};
