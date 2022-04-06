import { render } from '@testing-library/react';
import { DEFAULT_LANGUAGE } from 'constants/common';
import { CartProvider } from 'contexts/CartContext';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { Products } from './Products';

const messages = locales['en'];

const IntlWrapper = ({ children }: any) => (
  <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
    {children}
  </IntlProvider>
);

describe('Products', () => {
  test('should render loading and then products', async () => {
    const { getByText, findAllByText, getAllByText } = render(
      <CartProvider>
        <Products />
      </CartProvider>,
      {
        wrapper: IntlWrapper,
      }
    );

    expect(getByText(/Loading.../)).toBeInTheDocument();

    await findAllByText(/Add to cart/);

    expect(getAllByText(/Add to cart/).length).toBe(5);
  });
});
