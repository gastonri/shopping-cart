import { useState, SyntheticEvent } from 'react';

export const PaymentForm = () => {
  const [name, setName] = useState('JANE M. DOE');
  const [card, setCard] = useState('4242 4242 4242 4242');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log({ name, card });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="name">Credit Card</label>
        <br />
        <input type="text" name="card" value={card} onChange={event => setCard(event.target.value)} />
      </div>

      <hr />

      <button>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};
