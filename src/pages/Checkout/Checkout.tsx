import { OrderConfirmation } from 'components/OrderConfirmation/OrderConfirmation';
import { PaymentForm } from 'components/PaymentForm/PaymentForm';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { storage } from 'constants/common';
import { useStorage } from 'hooks/useStorage';
import { useEffect, useState } from 'react';
import { keySteps } from 'constants/common';

import './Checkout.scss';

export const Checkout = () => {
  const [personalInfo] = useStorage(storage.personalInfo, {});
  const [paymentData] = useStorage(storage.paymentData, {});
  const [currentStep, setCurrentStep] = useState<string>(keySteps.registration);

  const handleNextStep = (nextStep: string) => setCurrentStep(nextStep);

  useEffect(() => {
    if (Object.keys(personalInfo).length) {
      setCurrentStep(keySteps.registration);

      if (Object.keys(paymentData).length) {
        setCurrentStep(keySteps.payment);
      }
    }
  }, [personalInfo, paymentData, setCurrentStep]);

  const steps = {
    [keySteps.registration]: {
      key: 'registration',
      title: 'Registration',
      component: <RegistrationForm handleNextStep={() => handleNextStep(keySteps.payment)} />,
    },
    [keySteps.payment]: {
      key: 'payment',
      title: 'Payment',
      component: (
        <PaymentForm
          handlePrevStep={() => handleNextStep(keySteps.registration)}
          handleNextStep={() => handleNextStep(keySteps.orderConfirmation)}
        />
      ),
    },
    [keySteps.orderConfirmation]: {
      key: 'orderConfirmation',
      title: 'Order Confirmation',
      component: <OrderConfirmation />,
    },
  };

  return (
    <div>
      <h1 className="checkout__title">{steps[currentStep].title}</h1>
      {steps[currentStep].component}
    </div>
  );
};
