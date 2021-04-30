import { createSlice } from '@reduxjs/toolkit';

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    authors: {},
    highlightedAuthor: null,
  },
  reducers: {
    addAuthor: (state, action) => {
      state.authors[action.payload.author] = state.authors[action.payload.author]
        ? [...state.authors[action.payload.author], action.payload.message]
        : [action.payload.message];
    },
    highlightAuthor: (state, action) => {
      state.highlightedAuthor = state.highlightedAuthor === action.payload ? null : action.payload;
    },
  },
});

export const { addAuthor, highlightAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
