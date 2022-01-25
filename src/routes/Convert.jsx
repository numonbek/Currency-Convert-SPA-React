import React from 'react';
import { CurrencyInput } from '../components/CurrencyInput';

const Convert = (props) => {
  const { rates } = props;
  const [amount1, setAmount1] = React.useState(1);
  const [amount2, setAmount2] = React.useState(1);
  const [currency1, setCurrency1] = React.useState('USD');
  const [currency2, setCurrency2] = React.useState('RUB');
  console.log('from convert', rates);
  React.useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(0);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }
  function handleAmount2Change(amount2) {
    setAmount2(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount1(amount2);
  }
  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  return (
    <div className="convert">
      <div className="convert__container">
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </div>
  );
};

export { Convert };
