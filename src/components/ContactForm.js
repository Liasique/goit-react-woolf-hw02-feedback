import React, { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Number
        <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
