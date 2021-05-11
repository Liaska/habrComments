import { RootState } from './../store';
import {  IAsyncState } from './../Interfaces';
import { createSelector } from '@reduxjs/toolkit';

const selectCoinbase = (state:RootState): IAsyncState => state.coinbase;

export const selectProducts = createSelector(
  [selectCoinbase],
  (coinbase): object | null => coinbase.collection
);
