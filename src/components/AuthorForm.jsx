import React, { useState } from 'react';
import axios from 'axios';

function AuthorForm() {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3 || quote.length < 3) {
      setError('Both name and quote must be at least 3 characters long.');
      return;
    }

    try {
      await axios.post('/api/authors', { name, quote });
      setName('');
      setQuote('');
      setError('');
    } catch (err) {
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quote">Quote:</label>
        <input
          type="text"
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthorForm;
