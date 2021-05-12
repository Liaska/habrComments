import { coinbaseCurrencies, ICoinbase } from './coinbaseSlice';
import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

const selectCoinbase = (state:RootState): ICoinbase => state.coinbase;

export const selectProducts = createSelector(
  [selectCoinbase],
  (coinbase): 
  coinbaseCurrencies[] | null => coinbase.collection
);
