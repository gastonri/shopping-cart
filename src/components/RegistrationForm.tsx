import { SyntheticEvent, useState } from 'react';

export const RegistrationForm = () => {
  const [name, setName] = useState('Jane Doe');
  const [address, setAddress] = useState('1234 Neat Street');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="name">Street Address</label>
        <br />
        <textarea name="address" value={address} onChange={event => setAddress(event.target.value)} />
      </div>

      <hr />

      <button>Cancel</button>
      <button type="submit">Next</button>
    </form>
  );
};
