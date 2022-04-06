import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_LANGUAGE } from 'constants/common';
import flatten from 'flat';
import locales from 'locales';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm';

const messages = locales['en'];

const IntlWrapper = ({ children }: any) => (
  <MemoryRouter>
    <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
      {children}
    </IntlProvider>
  </MemoryRouter>
);

const handleNextStep = jest.fn();

describe('Registration Form', () => {
  test('Should remove warning and allow to click next when all data in place', () => {
    const { getByText, getByLabelText, queryByText } = render(
      <RegistrationForm handleNextStep={handleNextStep} />,
      {
        wrapper: IntlWrapper,
      }
    );

    expect(getByText('All fields all required')).toBeInTheDocument();
    expect(getByText('Next')).toBeDisabled();

    userEvent.type(getByLabelText('name'), 'Batman');
    userEvent.type(getByLabelText('address'), 'First Gotham St. -80');

    expect(queryByText('All fields all required')).toBeNull();
    expect(getByText('Next')).not.toBeDisabled();
  });
});
