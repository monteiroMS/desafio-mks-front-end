import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRedux } from "./renderWithRedux";

describe('Testa se o componente "Header"', () => {
  it('Renderiza um título e subtítulo', () => {
    renderWithRedux(<App />);
    const [pageTitle] = screen.getAllByText(/MKS/i);
    const [subtitle] = screen.getAllByText(/Sistemas/i);

    expect(pageTitle).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('Possui um carrinho de compra com a quantidade atualizada de itens no carrinho', () => {
    renderWithRedux(<App />);
    const cartLogo = screen.getByRole('img', { name: 'carrinho de compras' });
    const cartCounter = screen.getByTestId('cart-counter');

    expect(cartLogo).toBeInTheDocument();
    expect(cartCounter).toBeInTheDocument();
    expect(cartCounter.textContent).toBe('0');
  });

  it('Ao clicar no botão do carrinho, o carrinho de compras é renderizado', () => {
    renderWithRedux(<App />);
    const cartButton = screen.getByTestId('cart-button');
    userEvent.click(cartButton);

    const cart = screen.getByTestId('carrinho-de-compras');
    expect(cart).toBeInTheDocument();
  });

  it('Ao clicar no botão de compra, a quantidade de itens no carrinho sobe', async () => {
    renderWithRedux(<App />);
    const cartCounter = screen.getByTestId('cart-counter');
    const [buyButton1, buyButton2] = await screen.findAllByRole('button', { name: /comprar/i });

    expect(buyButton1).toBeInTheDocument();
    expect(buyButton2).toBeInTheDocument();
    expect(cartCounter).toBeInTheDocument();
    expect(cartCounter.textContent).toBe('0');

    userEvent.click(buyButton1);
    expect(cartCounter.textContent).toBe('1');

    userEvent.click(buyButton2);
    expect(cartCounter.textContent).toBe('2');

    userEvent.click(buyButton1);
    expect(cartCounter.textContent).toBe('3');
  });
});

export default {};
