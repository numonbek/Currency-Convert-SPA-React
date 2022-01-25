import React from 'react';
import { CurrencyTable } from '../components/CurrencyTable';

const Home = (props) => {
  const { rates } = props;

  return (
    <div className="home">
      <CurrencyTable currencies={Object.keys(rates)} amount={Object.values(rates)} />
    </div>
  );
};

export { Home };
