import { createSelector } from '@reduxjs/toolkit';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
export const selectUsers = createSelector([selectUser], (user) => user.users);