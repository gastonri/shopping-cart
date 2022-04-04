import { SyntheticEvent, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const RegistrationForm = ({ handleNextStep }: RegistrationFormProps) => {
  const t = useTranslation();
  const [name, setName] = useState('Jane Doe');
  const [address, setAddress] = useState('1234 Neat Street');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{t('checkoutProcess.registration.name')}</label>
        <br />
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="name">{t('checkoutProcess.registration.address')}</label>
        <br />
        <textarea name="address" value={address} onChange={event => setAddress(event.target.value)} />
      </div>

      <hr />

      <Link to={routes.cart}>{t('checkoutProcess.registration.cancel')}</Link>
      <button type="submit">
        {t('checkoutProcess.registration.next')}
      </button>
    </form>
  );
};

interface RegistrationFormProps {
  handleNextStep: () => void;
}
