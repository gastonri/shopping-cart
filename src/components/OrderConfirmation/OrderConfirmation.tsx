import useTranslation from 'hooks/useTranslation';

export const OrderConfirmation = () => {
  const t = useTranslation();

  return (
    <>
      <h3>{t('checkoutProcess.confirmation.congrats')}</h3>
      <p>{t('checkoutProcess.confirmation.successfulPurchase')}</p>
    </>
  );
};
