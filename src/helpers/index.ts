export const STANDART_URL = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products';

export const getAll = `${STANDART_URL}?page=1&rows=8&sortBy=id&orderBy=ASC`;

export const toReal = (value: string) => `R$${value.split('.')[0]}`;