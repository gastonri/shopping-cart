import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_LANGUAGE } from 'constants/common';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { Checkout } from './Checkout';

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

    userEvent.type(getByLabelText('name'), 'Gastón');
    userEvent.type(getByLabelText('address'), 'Fake st. 123');

    fireEvent.click(getByText('Next'));
    expect(getByText('Payment')).toBeInTheDocument();
  });

  test('should move to next step and then previous', () => {
    const { getByText, getByLabelText } = render(<Checkout />, {
      wrapper: IntlWrapper,
    });

    userEvent.type(getByLabelText('name'), 'Gastón');
    userEvent.type(getByLabelText('address'), 'Fake st. 123');
    fireEvent.click(getByText('Next'));

    expect(getByText('Payment')).toBeInTheDocument();

    fireEvent.click(getByText('Back'));

    expect(getByText('Registration')).toBeInTheDocument();
  });
});
