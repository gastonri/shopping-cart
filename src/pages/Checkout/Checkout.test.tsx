import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import { DEFAULT_LANGUAGE } from 'constants/common';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { Checkout } from './Checkout';
import { MemoryRouter } from 'react-router-dom';

const messages = locales['en'];

const IntlWrapper = ({ children }: any) => (
  <MemoryRouter>
    <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
      {children}
    </IntlProvider>
  </MemoryRouter>
);

describe('Checkout', () => {
  test('should render with initial step and form', () => {
    const { getByText } = render(<Checkout />, {
      wrapper: IntlWrapper,
    });

    expect(getByText('Registration')).toBeInTheDocument();
  });

  test('should move to next step', () => {
    const { getByText, getByLabelText } = render(<Checkout />, {
      wrapper: IntlWrapper,
    });

    expect(getByText('Registration')).toBeInTheDocument();

    fireEvent.change(getByLabelText('name'), { target: { value: 'Gastón' } });
    fireEvent.change(getByLabelText('address'), { target: { value: 'Fake st. 123' } });

    fireEvent.click(getByText('Next'));
    expect(getByText('Payment')).toBeInTheDocument();
  });

  test('should move to next step and then previous', () => {
    const { getByText, getByLabelText } = render(<Checkout />, {
      wrapper: IntlWrapper,
    });

    fireEvent.change(getByLabelText('name'), { target: { value: 'Gastón' } });
    fireEvent.change(getByLabelText('address'), { target: { value: 'Fake st. 123' } });
    fireEvent.click(getByText('Next'));

    expect(getByText('Payment')).toBeInTheDocument();

    fireEvent.click(getByText('Back'));

    expect(getByText('Registration')).toBeInTheDocument();
  });
});
