import { fireEvent, render } from '@testing-library/react';
import { DEFAULT_LANGUAGE } from 'constants/common';
import { CartProvider } from 'contexts/CartContext';
import products from 'data/products.json';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { Cart } from './Cart';

const messages = locales['en'];

const IntlWrapper = ({ children }: any) => (
  <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
    {children}
  </IntlProvider>
);

const selectedProducts = [
  { ...products[1], amount: 3 },
  { ...products[2], amount: 2 },
];

const addProduct = jest.fn();
const cartAmount = () => selectedProducts.reduce((acc, cartProduct) => acc + cartProduct.amount, 0);
const clearCart = jest.fn();
const removeProduct = jest.fn();

describe('Cart', () => {
  test('should be empty', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CartProvider>
          <Cart />
        </CartProvider>
      </MemoryRouter>,
      {
        wrapper: IntlWrapper,
      }
    );

    expect(getByText(/Your cart is empty/)).toBeInTheDocument();
  });

  test('should render correct amount of items and amount', () => {
    const { getAllByText, getByText } = render(
      <MemoryRouter>
        <CartProvider
          props={{
            selectedProducts: [...selectedProducts],
            addProduct,
            cartAmount,
            clearCart,
            removeProduct,
          }}
        >
          <Cart />
        </CartProvider>
      </MemoryRouter>,
      {
        wrapper: IntlWrapper,
      }
    );

    expect(getAllByText('-')).toBeTruthy();
    expect(getByText(/Clear Cart/)).toBeInTheDocument();
    expect(getByText(/Proceed to checkout/)).toBeInTheDocument();
    expect(getByText(/Cart \(5\)/)).toBeInTheDocument();
  });

  test('should call correctly add and minus when clicked', () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <CartProvider
          props={{
            selectedProducts: [...selectedProducts],
            addProduct,
            cartAmount,
            clearCart,
            removeProduct,
          }}
        >
          <Cart />
        </CartProvider>
      </MemoryRouter>,
      {
        wrapper: IntlWrapper,
      }
    );

    const minusButton = getAllByText('-')[0];
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(removeProduct).toHaveBeenCalledTimes(2);

    const plusButton = getAllByText('+')[0];
    fireEvent.click(plusButton);
    expect(removeProduct).toHaveBeenCalled();
  });
});
