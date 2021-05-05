// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/trades
// https://api-public.sandbox.pro.coinbase.com/currencies
// https://pro.coinbase.com/trade/USDT-USD
// https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/candles?granularity=86400

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCoinbaseData = createAsyncThunk('coinbase/fetchCoinbaseData', async () => {
  const coinbaseCurrencies = await fetch('https://api-public.sandbox.pro.coinbase.com/products');
  return coinbaseCurrencies.json();
});

const initialState = {
  products: [],
  errorMessages: [],
  coinbaseLoading: false,
};

export const coinbase = createSlice({
  name: 'coinbase',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinbaseData.pending, (state) => {
      state.coinbaseLoading = true;
    });
    builder.addCase(fetchCoinbaseData.fulfilled, (state, action) => {
      state.coinbaseLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchCoinbaseData.rejected, (state, action) => {
      state.coinbaseLoading = false;
      state.errorMessages.push(action.payload);
    });
  },
});

export const {} = coinbase.actions;

export default coinbase.reducer;
