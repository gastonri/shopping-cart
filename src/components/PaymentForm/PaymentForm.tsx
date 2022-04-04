import { SyntheticEvent, useState } from 'react';
import { makePurchase } from 'api';
import useTranslation from 'hooks/useTranslation';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const PaymentForm = ({ handleNextStep, handlePrevStep }: PaymentFormProp) => {
  const t = useTranslation();
  const [storedValue, setStoredValue] = useLocalStorage('paymentData', {});
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(
    storedValue || { name: 'JANE M. DOE', card: '4242 4242 4242 4242' }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    makePurchase().then(data => {
      if (data === 'success') {
        setIsLoading(false);
        handleNextStep();
      }

      setIsError(true);
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{t('checkoutProcess.payment.name')}</label>
        <br />
        <input
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
          type="text"
          name="card"
          value={paymentInfo.card}
          onChange={event => {
            setPaymentInfo(currentValue => ({ ...currentValue, card: event.target.value }));
            setStoredValue({ ...storedValue, card: event.target.value });
          }}
        />
      </div>

      <hr />

      {isError && <div>{t('checkoutProcess.payment.error')}</div>}

      <button onClick={handlePrevStep}>{t('checkoutProcess.payment.back')}</button>
      <button type="submit">{t('checkoutProcess.payment.confirm')}</button>
    </form>
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
