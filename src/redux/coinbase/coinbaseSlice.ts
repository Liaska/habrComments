import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState } from '../InterfacesAndTypes';

export interface coinbaseCurrencies {
  id: string;
  base_currency: string;
  quote_currency: string;
  base_min_size: string;
  base_max_size: string;
  quote_increment: string;
  base_increment: string;
  display_name: string;
  min_market_funds: string;
  max_market_funds: string;
  margin_enabled: boolean;
  post_only: boolean;
  limit_only: boolean;
  cancel_only: boolean;
  trading_disabled: boolean;
  status: string;
  status_message: string;
}

export interface ICoinbase extends IAsyncState {
  collection: null | coinbaseCurrencies[];
}

export const fetchCoinbaseData = createAsyncThunk<coinbaseCurrencies[]>(
  'coinbase/fetchCoinbaseData',
  async () => {
    const coinbaseCurrencies = await fetch('https://api-public.sandbox.pro.coinbase.com/products');
    const data: coinbaseCurrencies[] = await coinbaseCurrencies.json();
    return data;
  }
);

const initialState: ICoinbase = {
  collection: null,
  errorMessages: null,
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
    builder.addCase(
      fetchCoinbaseData.fulfilled,
      (state, { payload }: PayloadAction<coinbaseCurrencies[]>) => {
        state.loading = false;
        state.collection = payload;
      }
    );
    builder.addCase(fetchCoinbaseData.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorMessages = `${payload}`;
    });
  },
});

export default coinbase.reducer;
