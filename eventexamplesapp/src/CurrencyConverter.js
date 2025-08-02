import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // synthetic event use
    const converted = (parseFloat(inr) / 90).toFixed(2); // assuming 1 Euro ≈ ₹90
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Currency Converter (INR ➝ Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Equivalent Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConverter;
