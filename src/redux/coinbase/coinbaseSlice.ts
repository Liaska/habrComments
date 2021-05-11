import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AsyncState } from './../Interfaces';

export const fetchCoinbaseData = createAsyncThunk('coinbase/fetchCoinbaseData', async () => {
  const coinbaseCurrencies = await fetch('https://api-public.sandbox.pro.coinbase.com/products');
  if (coinbaseCurrencies.ok) {
    return await coinbaseCurrencies.json();
  } else {
    alert('Ошибка HTTP: ' + coinbaseCurrencies.status);
  }
});

const initialState: AsyncState = {
  collection: null,
  errorMessages: [],
  loading: false,
};

const coinbase = createSlice({
  name: 'coinbase',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoinbaseData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoinbaseData.fulfilled, (state, action) => {
      state.loading = false;
      state.collection = action.payload;
    });
    builder.addCase(fetchCoinbaseData.rejected, (state, action) => {
      state.loading = false;
      state.errorMessages.push(action.payload);
    });
  },
});

export default coinbase.reducer;
