// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/trades
// https://api-public.sandbox.pro.coinbase.com/currencies
// https://pro.coinbase.com/trade/USDT-USD
// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/candles?granularity=86400

import React from 'react';

export const CoinbaseCard = ({name, price, yearBoost}) => {
  return (
    <div >
      <div>
        <a
          href={`https://pro.coinbase.com/trade/${name}`}
          target='_blank'
          >
          <span>
            {name}
          </span>
        </a>
      </div>
      <div>
        Med price 24 hours
        <span >{price}</span>
      </div>
      <div >
        Выросло за год
        <span >{yearBoost}</span>
      </div>
    </div>
  );
};

export default CoinbaseCard;
