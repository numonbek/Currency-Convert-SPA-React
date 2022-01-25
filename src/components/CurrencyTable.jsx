import React from 'react';
import PropTypes from 'prop-types';

const CurrencyTable = (props) => {
  const { currencies, amount } = props;
  let count = 0;
  return (
    <div className="table">
      <div className="table__container">
        <div className="table__header">
          <div>№</div>
          <div>CURRENCY</div>
          <div>AMOUNT</div>
        </div>
        <div className="table__body">
          {currencies.map((currency, index) => {
            count++;
            return (
              <div className="table__list">
                <div>{count}</div>
                <div>{currency}</div>
                <div>{amount[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CurrencyTable.propTypes = {
  amount: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  count: PropTypes.number,
  currency: PropTypes.string,
};

export { CurrencyTable };
