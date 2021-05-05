import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { convertUserSnapshotToMap, firestore } from '../../firebase/index';

const initialState = {
  currentUser: null,
  users: null,
  errorMessages: [],
  usersLoading: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  const usersRef = firestore.collection('users');
  return usersRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertUserSnapshotToMap(snapshot);
        return collectionsMap
      })
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersLoading = false;
      action.payload && state.errorMessages.push(action.payload);
    });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
