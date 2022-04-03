import { useState } from 'react';

export const PaymentForm = () => {
  const [name, setName] = useState('');
  const [card, setCard] = useState('');

  return (
    <>
      <h3>Congrats!</h3>
      <p>You've successfully purchased a MasterClass account.</p>
    </>
  );
};
