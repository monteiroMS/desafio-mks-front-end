import { Product } from "../../types/Product";
import { Store } from "../../types/Store";

export const selectProducts = ({ products: { items } }: Store): Product[] => items;

export const selectLoading = ({ products: { loading } }: Store): boolean => loading;
