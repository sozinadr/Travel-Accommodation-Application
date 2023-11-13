// CurrencyConverterPage.js
import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState({});
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");

  useEffect(() => {
    // Fetch exchange rates. In a real application, you would use a live API.
    const mockExchangeRates = {
      USD: 1,
      EUR: 0.88,
      GBP: 0.75,
      JPY: 110,
      IQD: 1460,
      CAD: 1.25,
      AUD: 1.37,
    };
    setExchangeRate(mockExchangeRates);
  }, []);

  useEffect(() => {
    const rate = exchangeRate[currencyTo] / exchangeRate[currencyFrom];
    setConvertedAmount(amount * rate);
  }, [amount, currencyFrom, currencyTo, exchangeRate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
          Currency Converter
        </h1>
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 mb-2 sm:mb-0 border rounded-md w-full sm:w-1/2 mr-0 sm:mr-2"
            placeholder="Amount"
          />
          <select
            value={currencyFrom}
            onChange={(e) => setCurrencyFrom(e.target.value)}
            className="p-2 border rounded-md w-full sm:w-1/2"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="font-medium text-2xl text-gray-800 mb-2 sm:mb-0">
            =
          </span>
          <span className="text-2xl text-blue-800 mb-2 sm:mb-0">
            {convertedAmount?.toFixed(2)}
          </span>
          <select
            value={currencyTo}
            onChange={(e) => setCurrencyTo(e.target.value)}
            className="p-2 border rounded-md w-full sm:w-1/2"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <p className="text-center text-gray-600 italic">
          Current exchange rates for your destination are displayed above.
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
