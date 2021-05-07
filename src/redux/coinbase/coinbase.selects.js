import { createSelector } from '@reduxjs/toolkit';

const selectCoinbase = (state) => state.coinbase;

export const selectProducts = createSelector(
  [selectCoinbase],
  (coinbase) => coinbase.productsCollection
);
