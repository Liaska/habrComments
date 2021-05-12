import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState } from '../InterfacesAndTypes';

export interface coinbaseCurrencies {
  [index: string]: string | boolean;
}

export interface ICoinbase extends IAsyncState {
  collection: null | coinbaseCurrencies[],
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
