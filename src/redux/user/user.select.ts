import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

const selectUser = (state:RootState) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
export const selectUsers = createSelector([selectUser], (user) => user.collection);