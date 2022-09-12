export type InCartProduct = {
  id: number,
  name: string,
  brand: string,
  description: string,
  price: string,
  photo: string,
  quantity: number,
};

export type CartReducer = {
  items: InCartProduct[],
  showCart: boolean,
};

export type ChangeCartAction = {
  type: string,
  payload: InCartProduct,
};

export type CartAction = (product: InCartProduct) => ChangeCartAction;

export type NoPayloadAction = () => { type: string };