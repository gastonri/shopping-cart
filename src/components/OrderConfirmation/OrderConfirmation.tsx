import useTranslation from 'hooks/useTranslation';

import './OrderConfirmation.scss';

export const OrderConfirmation = () => {
  const t = useTranslation();

  return (
    <div className="order-confirmation">
      <h3 className='order-confirmation__title'>{t('checkoutProcess.confirmation.congrats')}</h3>
      <p>{t('checkoutProcess.confirmation.successfulPurchase')}</p>
    </div>
  );
};
