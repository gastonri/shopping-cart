import { storage } from 'constants/common';
import { useStorage } from 'hooks/useStorage';
import useTranslation from 'hooks/useTranslation';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

import './RegistrationForm.scss';

export const RegistrationForm = ({ handleNextStep }: RegistrationFormProps) => {
  const t = useTranslation();
  const [storedValue, setStoredValue] = useStorage(storage.personalInfo, {});
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(storedValue);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handleNextStep();
  };

  const isFormValid = (): boolean => Boolean(personalInfo.name && personalInfo.address);

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit} className="registration-form__form">
        <div>
          <label htmlFor="name">{t('checkoutProcess.registration.name')}</label>
          <br />
          <input
            className="registration-form__input"
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
            className="registration-form__text-area"
            name="address"
            value={personalInfo.address}
            onChange={event => {
              setPersonalInfo(currentValue => ({ ...currentValue, address: event.target.value }));
              setStoredValue({ ...storedValue, address: event.target.value });
            }}
          />
        </div>

        {!isFormValid() && (
          <span className="registration-form__error">{t('checkoutProcess.registration.error')}</span>
        )}

        <div className="registration-form__buttons">
          <Link className="registration-form__button-cancel" to={routes.cart}>
            {t('checkoutProcess.registration.cancel')}
          </Link>
          <button disabled={!isFormValid()} className="registration-form__button-next" type="submit">
            {t('checkoutProcess.registration.next')}
          </button>
        </div>
      </form>
    </div>
  );
};

interface RegistrationFormProps {
  handleNextStep: () => void;
}

interface PersonalInfo {
  name: string;
  address: string;
}
