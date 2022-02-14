import React from 'react';
import './style.css';

const Rate = ({from, rateValue}) => {
  return (
    <div className="rate">
      <div className="rate__currency" value={from}>1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rateValue} CZK</div>
    </div>
  );
};

export default Rate;
