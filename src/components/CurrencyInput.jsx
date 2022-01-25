import React from 'react';
import PropTypes from 'prop-types';

const CurrencyInput = (props) => {
  return (
    <div className="Input">
      <input
        className="Input-inp"
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        className="select"
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency, index) => (
          <option className="options" key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export { CurrencyInput };
