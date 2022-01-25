import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Layout } from './layout';
import { Convert, Home } from './routes';

function App() {
  const [rates, setRates] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://data.fixer.io/api/latest?access_key=7f1f26ab8a3773f52c7bfbd72a23db66')
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home rates={rates} />} />
          <Route path="/convert" element={<Convert rates={rates} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
