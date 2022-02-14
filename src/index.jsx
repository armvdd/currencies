import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Rate from './components/Rate';
import './style.css';

const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [kurz, setKurz] = useState("");

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${currency}&to=CZK`)
    .then(response => response.json())
    .then(data => {setKurz(data.rates.CZK)})
  }, [currency]
  )

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container">
      <h1>Kurzovní lístek</h1>
      <div className="currency-info">
        <form>
          <div className="form-field">
            <label htmlFor="currency-select">Měna:</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">Americký dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Britská libra</option>
            </select>
          </div>
        </form>
        <Rate from={currency} rateValue={kurz}/>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
