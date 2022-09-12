import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRedux } from "./helpers/renderWithRedux";
import { products } from './helpers/mocks';
import { toReal } from "../helpers";

describe('Testa se o componente "Cart"', () => {
  it('Possui título, botão de fechar, mensagem de carrinho vazio, valor total e botão finalizar compra', async () => {
    renderWithRedux(<App />);

    const cartButton = screen.getByTestId('cart-button');
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    const title = screen.getByText(/carrinho de compras/i);
    expect(title).toBeInTheDocument();

    const closeCartBtn = screen.getByTestId('close-cart-button');
    expect(closeCartBtn).toBeInTheDocument();

    const emptyCartText = screen.getByText(/você ainda não possui nenhum item em seu carrinho/i);
    expect(emptyCartText).toBeInTheDocument();

    const totalPrice = screen.getByTestId('total-price-container');
    expect(totalPrice).toBeInTheDocument();

    const finishPurchaseBtn = screen.getByRole('button', { name: /finalizar compra/i });
    expect(finishPurchaseBtn).toBeInTheDocument();
  });

  it('Ao clicar em comprar no card de produto, o número de itens renderizados aumenta sem repetir produtos', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ products })),
    })) as jest.Mock;

    renderWithRedux(<App />);

    const [buyButton1, buyButton2] = await screen.findAllByRole('button', { name: /comprar/i });
    const cartButton = screen.getByTestId('cart-button');

    expect(buyButton1).toBeInTheDocument();
    expect(buyButton2).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    const emptyCartText = screen.getByText(/você ainda não possui nenhum item em seu carrinho/i);
    expect(emptyCartText).toBeInTheDocument();

    userEvent.click(buyButton1);
    userEvent.click(buyButton2);

    expect(emptyCartText).not.toBeInTheDocument();

    const productCards = screen.getAllByTestId('in-cart-product-card');
    productCards.forEach((product) => {
      expect(product).toBeInTheDocument();
    });

    expect(productCards).toHaveLength(2);
    userEvent.click(buyButton1);
    userEvent.click(buyButton2);
    expect(productCards).toHaveLength(2);
  });

  it('O valor total da compra acompanha a quantidade de itens no carrinho', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ products })),
    })) as jest.Mock;

    renderWithRedux(<App />);

    const [buyButton1, buyButton2] = await screen.findAllByRole('button', { name: /comprar/i });
    const cartButton = screen.getByTestId('cart-button');

    expect(buyButton1).toBeInTheDocument();
    expect(buyButton2).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    const emptyCartText = screen.getByText(/você ainda não possui nenhum item em seu carrinho/i);
    expect(emptyCartText).toBeInTheDocument();

    userEvent.click(buyButton1);
    userEvent.click(buyButton2);

    expect(emptyCartText).not.toBeInTheDocument();

    const productCards = screen.getAllByTestId('in-cart-product-card');
    productCards.forEach((product) => {
      expect(product).toBeInTheDocument();
    });

    const [increaseQuantityFirstProduct] = screen.getAllByRole('button', { name: '+' });
    expect(increaseQuantityFirstProduct).toBeInTheDocument();    
    const [lowerQuantityFirstProduct] = screen.getAllByRole('button', { name: '-' });
    expect(lowerQuantityFirstProduct).toBeInTheDocument();

    [1, 2].forEach(() => userEvent.click(increaseQuantityFirstProduct));
    
    const totalContainer = screen.getByTestId('total-price-container');
    expect(totalContainer).toBeInTheDocument();

    let expectedTotalValue = ((Number(products[0].price) * 3) + Number(products[1].price)).toFixed(2);
    const totalValue = screen.getByText(toReal(expectedTotalValue));
    expect(totalValue).toBeInTheDocument();

    userEvent.click(lowerQuantityFirstProduct);
    userEvent.click(lowerQuantityFirstProduct);

    expectedTotalValue = ((Number(products[0].price) * 1) + Number(products[1].price)).toFixed(2);
    const newTotalValue = screen.getByText(toReal(expectedTotalValue));
    expect(newTotalValue).toBeInTheDocument();
  });

  it('Ao finalizar a compra, o carrinho é fechado e esvaziado', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ products })),
    })) as jest.Mock;

    renderWithRedux(<App />);

    const [buyButton1, buyButton2] = await screen.findAllByRole('button', { name: /comprar/i });
    const cartButton = screen.getByTestId('cart-button');

    expect(buyButton1).toBeInTheDocument();
    expect(buyButton2).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    const emptyCartText = screen.getByText(/você ainda não possui nenhum item em seu carrinho/i);
    expect(emptyCartText).toBeInTheDocument();

    userEvent.click(buyButton1);
    userEvent.click(buyButton2);

    expect(emptyCartText).not.toBeInTheDocument();

    const finishPurchase = screen.getByRole('button', { name: /finalizar compra/i });
    expect(finishPurchase).toBeInTheDocument();

    userEvent.click(finishPurchase);
    userEvent.click(cartButton);

    const newEmptyCartText = screen.getByText(/você ainda não possui nenhum item em seu carrinho/i);
    expect(newEmptyCartText).toBeInTheDocument();
  });
});

export default {};
