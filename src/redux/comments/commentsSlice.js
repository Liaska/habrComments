import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import COMMENTS_DATA from './comments.data';

export const fetchCommentsStartAsync = createAsyncThunk(
  'users/fetchCommentsStartAsync',
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(COMMENTS_DATA);
      }, 1000);
    })
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    commentsCollection: null,
    commentsCount: 0,
    commentsLoading: false,
    openedAnswerForm: null,
    errorMessage: '',
  },
  reducers: {
    commentsCountIncrement: (state) => {
      state.commentsCount += 1;
    },
    commentsCountDecrement: (state) => {
      state.commentsCount -= 1;
    },
    addAuthor: (state, action) => {
      state.commentsAuthors[action.payload.author] = state.commentsAuthors[action.payload.author]
        ? [...state.commentsAuthors[action.payload.author], action.payload.message]
        : [action.payload.message];
    },
    openAnswerForm: (state, action) => {
      state.openedAnswerForm = action.payload;
    },
  },
  extraReducers: {
    [fetchCommentsStartAsync.pending]: (state) => {
      state.commentsLoading = true;
    },
    [fetchCommentsStartAsync.fulfilled]: (state, action) => {
      state.commentsLoading = false;
      state.commentsCollection = action.payload;
    },
    [fetchCommentsStartAsync.rejected]: (state, action) => {
      state.commentsLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  addAuthor,
  commentsCountDecrement,
  commentsCountIncrement,
  openAnswerForm,
} = commentsSlice.actions;

export default commentsSlice.reducer;
