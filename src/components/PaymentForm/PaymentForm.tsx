import { makePurchase } from 'api';
import { creditCardsRegex, storage } from 'constants/common';
import { useCart } from 'contexts/CartContext';
import { useStorage } from 'hooks/useStorage';
import useTranslation from 'hooks/useTranslation';
import { SyntheticEvent, useState } from 'react';

import './PaymentForm.scss';

export const PaymentForm = ({ handleNextStep, handlePrevStep }: PaymentFormProp) => {
  const { clearCart } = useCart();
  const t = useTranslation();
  const [, , clearPersonalInfo] = useStorage(storage.personalInfo, {});
  const [storedValue, setStoredValue, clearPaymentData] = useStorage(storage.paymentData, {});
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(storedValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    makePurchase().then(data => {
      if (data === 'success') {
        setIsLoading(false);
        clearCart();
        clearPaymentData();
        clearPersonalInfo();
        handleNextStep();
      }

      setIsError(true);
    });
  };

  const isValidForm = () =>
    Boolean(
      paymentInfo.name &&
        paymentInfo.card &&
        Boolean(creditCardsRegex.filter(regex => regex.test(paymentInfo.card)).length)
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="payment-form">
      <form className="payment-form__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{t('checkoutProcess.payment.name')}</label>
          <br />
          <input
            className="payment-form__input"
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={event => {
              setPaymentInfo(currentValue => ({ ...currentValue, name: event.target.value }));
              setStoredValue({ ...storedValue, name: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="name">{t('checkoutProcess.payment.creditCard')}</label>
          <br />
          <input
            className="payment-form__input"
            type="text"
            name="card"
            value={paymentInfo.card}
            onChange={event => {
              setPaymentInfo(currentValue => ({ ...currentValue, card: event.target.value }));
              setStoredValue({ ...storedValue, card: event.target.value });
            }}
          />
        </div>
        {isError && <div>{t('checkoutProcess.payment.error')}</div>}
        {!isValidForm() && (
          <div className="payment-form__error">{t('checkoutProcess.payment.formError')}</div>
        )}
        <div className="payment-form__buttons">
          <button className="payment-form__button-back" onClick={handlePrevStep}>
            {t('checkoutProcess.payment.back')}
          </button>
          <button disabled={!isValidForm()} className="payment-form__button-confirm" type="submit">
            {t('checkoutProcess.payment.confirm')}
          </button>
        </div>
      </form>
    </div>
  );
};

interface PaymentFormProp {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

interface PaymentInfo {
  name: string;
  card: string;
}
