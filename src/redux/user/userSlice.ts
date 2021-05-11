import { IAsyncState } from './../Interfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { convertUserSnapshotToMap, firestore } from '../../firebase/index';

interface InitialState extends IAsyncState {
  currentUser: null | {};
}

const initialState: InitialState = {
  currentUser: null,
  errorMessages: null,
  loading: false,
  collection: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const usersRef = firestore.collection('users');
  return usersRef.get().then((snapshot) => {
    const collectionsMap = convertUserSnapshotToMap(snapshot);
    return collectionsMap;
  });
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
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.collection = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) state.errorMessages = `${action.payload}`;
    });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
