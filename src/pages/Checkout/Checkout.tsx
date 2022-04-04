import { OrderConfirmation } from 'components/OrderConfirmation/OrderConfirmation';
import { PaymentForm } from 'components/PaymentForm/PaymentForm';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { useState } from 'react';

export const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePrevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

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
      <h1>{steps[currentStep].title}</h1>
      {steps[currentStep].component}
    </div>
  );
};
