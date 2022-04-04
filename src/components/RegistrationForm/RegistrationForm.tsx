import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useLocalStorage } from 'hooks/useLocalStorage';
import useTranslation from 'hooks/useTranslation';

export const RegistrationForm = ({ handleNextStep }: RegistrationFormProps) => {
  const t = useTranslation();
  const [storedValue, setStoredValue] = useLocalStorage('PersonalInfo', {});
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(
    storedValue || { name: 'JANE M. DOE', address: '123 Fake st.' }
  );
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{t('checkoutProcess.registration.name')}</label>
        <br />
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={event => {
            setPersonalInfo(currentValue => ({ ...currentValue, name: event.target.value }));
            setStoredValue({ ...storedValue, name: event.target.value });
          }}
        />
      </div>

      <div>
        <label htmlFor="name">{t('checkoutProcess.registration.address')}</label>
        <br />
        <textarea
          name="address"
          value={personalInfo.address}
          onChange={event => {
            setPersonalInfo(currentValue => ({ ...currentValue, address: event.target.value }));
            setStoredValue({ ...storedValue, address: event.target.value });
          }}
        />
      </div>

      <hr />

      <Link to={routes.cart}>{t('checkoutProcess.registration.cancel')}</Link>
      <button type="submit">{t('checkoutProcess.registration.next')}</button>
    </form>
  );
};

interface RegistrationFormProps {
  handleNextStep: () => void;
}

interface PersonalInfo {
  name: string;
  address: string;
}
