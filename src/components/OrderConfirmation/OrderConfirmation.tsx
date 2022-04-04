import useTranslation from 'hooks/useTranslation';
import { useState } from 'react';

export const OrderConfirmation = () => {
  const t = useTranslation();

  return (
    <>
      <h3>{t('checkoutProcess.confirmation.congrats')}</h3>
      <p>{t('checkoutProcess.confirmation.successfulPurchase')}</p>
    </>
  );
};
