import { useState, SyntheticEvent } from 'react';
import { makePurchase } from 'api';
import useTranslation from 'hooks/useTranslation';

export const PaymentForm = ({ handleNextStep, handlePrevStep }: PaymentFormProp) => {
  const t = useTranslation();
  const [name, setName] = useState('JANE M. DOE');
  const [card, setCard] = useState('4242 4242 4242 4242');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    console.log({ name, card });

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
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="name">{t('checkoutProcess.payment.creditCard')}</label>
        <br />
        <input type="text" name="card" value={card} onChange={event => setCard(event.target.value)} />
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
