import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume 1 Euro = 90 INR (change as needed)
    const result = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Convertor (INR ➝ EURO)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter amount in INR:{" "}
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          Equivalent Euro: <strong>€{euro}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
