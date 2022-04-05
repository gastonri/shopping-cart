import { OrderConfirmation } from 'components/OrderConfirmation/OrderConfirmation';
import { PaymentForm } from 'components/PaymentForm/PaymentForm';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { storage } from 'constants/common';
import { useStorage } from 'hooks/useStorage';
import { useEffect, useState } from 'react';

import './Checkout.scss';

export const Checkout = () => {
  const [personalInfo] = useStorage(storage.personalInfo, {});
  const [paymentData] = useStorage(storage.paymentData, {});
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePrevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  useEffect(() => {
    if (Object.keys(personalInfo).length) {
      setCurrentStep(0);
      if (Object.keys(paymentData).length) {
        setCurrentStep(1);
      }
    }
  }, [personalInfo, paymentData, setCurrentStep]);

  const steps = [
    { title: 'Registration', component: <RegistrationForm handleNextStep={handleNextStep} /> },
    {
      title: 'Payment',
      component: <PaymentForm handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />,
    },
    {
      title: 'Order Confirmation',
      component: <OrderConfirmation />,
    },
  ];

  return (
    <div>
      <h1 className="checkout__title">{steps[currentStep].title}</h1>
      {steps[currentStep].component}
    </div>
  );
};
