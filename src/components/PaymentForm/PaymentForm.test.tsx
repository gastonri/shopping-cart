import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_LANGUAGE } from 'constants/common';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { PaymentForm } from './PaymentForm';

const messages = locales['en'];

const IntlWrapper = ({ children }: any) => (
  <MemoryRouter>
    <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
      {children}
    </IntlProvider>
  </MemoryRouter>
);

const handleNextStep = jest.fn();
const handlePreviousStep = jest.fn();

describe('Payment Form', () => {
  test('Should remove warning and allow to click next when all data in place', async () => {
    const { getByText, getByLabelText, queryByText } = render(
      <PaymentForm handleNextStep={handleNextStep} handlePrevStep={handlePreviousStep} />,
      {
        wrapper: IntlWrapper,
      }
    );

    expect(getByText('All fields are required and It must be a valid credit card')).toBeInTheDocument();
    expect(getByText('Confirm Purchase')).toBeDisabled();

    fireEvent.input(getByLabelText('name'), { target: { value: 'Batman' } });
    fireEvent.input(getByLabelText('card'), { target: { value: '378282246310005' } });

    expect(queryByText('All fields are required and It must be a valid credit card')).not.toBeInTheDocument();
    expect(getByText('Confirm Purchase')).not.toBeDisabled();
  });
});
