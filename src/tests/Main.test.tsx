import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithRedux } from "./helpers/renderWithRedux";
import { products } from './helpers/mocks';

describe('Testa se o componente "Main"', () => {
  it('Renderiza skeletons ao carregar os produtos', () => {
    renderWithRedux(<App />);
    const skeletons = screen.getAllByTestId('skeleton');

    expect(skeletons).toHaveLength(8);

    skeletons.forEach((skeleton) => {
      expect(skeleton).toBeInTheDocument();
    });
  });

  it('Renderiza todos os produtos', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ products })),
    })) as jest.Mock;

    renderWithRedux(<App />);
    const productCards = await screen.findAllByTestId('product-card');

    expect(productCards).toHaveLength(8);

    productCards.forEach((productCard) => {
      expect(productCard).toBeInTheDocument();
    });
  });
});

export default {};
