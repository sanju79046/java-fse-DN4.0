import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(amount) * 0.011).toFixed(2); // INR to Euro
    setCurrency(converted);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Amount: </label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <label>Currency: </label>
      <input type="text" value={currency} readOnly />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CurrencyConvertor;
