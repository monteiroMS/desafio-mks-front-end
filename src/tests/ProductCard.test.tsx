import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithRedux } from "./helpers/renderWithRedux";
import { products } from './helpers/mocks';
import { toReal } from "../helpers";

describe('Testa se o componente "ProductCard"', () => {
  it('Renderiza um produto com imagem, título, preço, descrição e botão "COMPRAR"', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ products })),
    })) as jest.Mock;

    const [product1] = products;

    renderWithRedux(<App />);
    const [productCard] = await screen.findAllByTestId('product-card');
    const [img] = await screen.findAllByTestId('product-card-photo');
    const title = await screen.findByText(product1.name);
    const [price] = await screen.findAllByTestId('product-card-price');
    const description = await screen.findByText(product1.description);
    const [buyButton] = await screen.findAllByRole('button', { name: /comprar/i });
    
    expect(productCard).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(price.textContent).toBe(toReal(product1.price));
    expect(description).toBeInTheDocument();
    expect(buyButton).toBeInTheDocument();
  });
});

export default {};
