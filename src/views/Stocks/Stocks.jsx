import React, { useState } from 'react';
import axios from 'axios';
import './Stocks.css'; // Import the CSS file

const Stock = () => {
  const [formData, setFormData] = useState({
    ticker: '',
    multiplier: 1,
    timespan: 'day',
    from: '',
    to: '',
    adjusted: true,
    sort: 'asc',
    investment: 0,
  });

  const [startPrice, setStartPrice] = useState(null);
  const [endPrice, setEndPrice] = useState(null);
  const [profit, setProfit] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    const { ticker, multiplier, timespan, from, to, adjusted, sort, investment } = formData;
    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=${adjusted}&sort=${sort}&apiKey=JIVDV2rDykj_O_el59g_9bQson3CQ427`;

    try {
      const response = await axios.get(url);
      const results = response.data.results;

      if (results && results.length > 0) {
        const initialPrice = results[0].c;
        const finalPrice = results[results.length - 1].c;

        setStartPrice(initialPrice);
        setEndPrice(finalPrice);

        const profitAmount = ((finalPrice - initialPrice) / initialPrice) * investment;
        setProfit(profitAmount.toFixed(2)); // Display profit to 2 decimal places
      } else {
        setProfit('No data available for the given range.');
        setStartPrice(null);
        setEndPrice(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setProfit('Failed to fetch data. Check inputs or try again later.');
      setStartPrice(null);
      setEndPrice(null);
    }
  };

  return (
    <div className="stock-container">
      <h1 className="stock-header">Stock Profit Calculator</h1>
      <form className="stock-form">
        <input
          type="text"
          name="ticker"
          placeholder="Stock Ticker (e.g., AAPL)"
          value={formData.ticker}
          onChange={handleChange}
          className="stock-input"
        />
        <input
          type="number"
          name="multiplier"
          placeholder="Multiplier (e.g., 1)"
          value={formData.multiplier}
          onChange={handleChange}
          className="stock-input"
        />
        <select
          name="timespan"
          value={formData.timespan}
          onChange={handleChange}
          className="stock-select"
        >
          <option value="second">Second</option>
          <option value="minute">Minute</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
          <option value="quarter">Quarter</option>
        </select>
        <input
          type="date"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="stock-input"
        />
        <input
          type="date"
          name="to"
          value={formData.to}
          onChange={handleChange}
          className="stock-input"
        />
        <input
          type="number"
          name="investment"
          placeholder="Investment Amount"
          value={formData.investment}
          onChange={handleChange}
          className="stock-input"
        />
        <button type="button" onClick={fetchData} className="stock-button">
          Calculate Profit
        </button>
      </form>

      <div className="icon">
        {profit !== null ? (
          <div>
            <p>Start Price: ${startPrice}</p>
            <p>End Price: ${endPrice}</p>
            <p>Profit: ${profit}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Stock;
