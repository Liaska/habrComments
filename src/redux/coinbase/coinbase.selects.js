import { createSelector } from '@reduxjs/toolkit';

const selectComments = (state) => state.coinbase;

export const selectCommentsCollection = createSelector(
  [selectComments],
  (coinbase) => coinbase.products
);
