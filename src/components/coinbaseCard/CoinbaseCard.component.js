// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/trades
// https://api-public.sandbox.pro.coinbase.com/currencies
// https://pro.coinbase.com/trade/USDT-USD
// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/candles?granularity=86400

import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

import { CoinbaseCardWrapper } from './CoinbaseCard.styles';

const CoinbaseCard = ({ id, base_currency }) => {
  const [price, setPrice] = useState();
  const [yearBoost, setYearBoost] = useState();
  const [coinData, setCoinData] = useState();

  const chartRef = useRef(null);

  useEffect(async () => {
    const fetchCoinData = await fetch(
      `https://api-public.sandbox.pro.coinbase.com/products/${id}/candles?granularity=86400`
    );
    const json = await fetchCoinData.json();
    setCoinData(json);
    if (json) {
      setPrice(json[0][4].toFixed(2));
      setYearBoost((json[json.length - 1][4].toFixed(2) / json[0][4].toFixed(2)).toFixed(2) * 100);
    }
  }, []);

  useEffect(() => {
    if (!coinData) {
      return;
    }
    const coinDataReverse = coinData.reverse();
    
    const data = {
      labels: coinDataReverse.reduce((acc, coinInfo, index) => {
        if (coinData.length > 40) {
          if (index % 7 === 0) {
            acc.push(new Date(coinInfo[0] * 1000).toLocaleDateString());
          }
        } else {
          acc.push(new Date(coinInfo[0] * 1000).toLocaleDateString());
        }
        return acc;
      }, []),

      datasets: [
        {
          data: coinDataReverse.reduce((acc, coinInfo, index) => {
            if (coinData.length > 70) {
              if (index % 7 === 0) {
                acc.push(coinInfo[4]);
              }
            } else {
              acc.push(coinInfo[4]);
            }
            return acc;
          }, []),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    const options = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, options);
  }, [coinData]);

  return (
    <CoinbaseCardWrapper>
      <div>
        <a href={`https://pro.coinbase.com/trade/${id}`} target='_blank'>
          <span>{id}</span>
        </a>
      </div>
      <div>
        Цена:
        <span>
          {' '}
          {price} {base_currency}
        </span>
      </div>
      <div>
        Рост за год:
        <span> {yearBoost} %</span>
      </div>
      <canvas ref={chartRef} width='400' height='100'></canvas>
    </CoinbaseCardWrapper>
  );
};

export default CoinbaseCard;
