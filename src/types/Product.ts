export type Product = {
  id: number,
  name: string,
  brand: string,
  description: string,
  photo: string,
  price: string,
};

export type ProductsReducer = {
  loading: boolean,
  items: Product[],
};

export type ProductReducerAction = {
  type: string,
  payload: Product[],
};

export type PropProduct = {
  key: string,
  product: Product,
};
