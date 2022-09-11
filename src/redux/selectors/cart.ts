import { Store } from "../../types/Store";

export const selectCart = ({ cart: { items } }: Store) => items;

export const selectQuantity = ({ cart: { items } }: Store) => items
  .reduce((acc, product) => acc + product.quantity, 0);