import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import COMMENTS_DATA from './comments.data';

export const fetchCommentsStartAsync = createAsyncThunk(
  'users/fetchCommentsStartAsync',
  () =>
    new Promise<Object>((resolve) => {
      setTimeout(() => {
        resolve(COMMENTS_DATA);
      }, 1000);
    })
);

type CommentsState = {
  commentsCollection: Object;
  commentsLoading: Boolean;
  commentsCount: number;
  openedAnswerForm: Object;
  errorMessages?: any[];
};

const initialState = {
  commentsCollection: null,
  commentsCount: 0,
  commentsLoading: false,
  openedAnswerForm: null,
  errorMessages: [],
} as CommentsState;

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsCountIncrement: (state) => {
      state.commentsCount += 1;
    },
    commentsCountDecrement: (state) => {
      state.commentsCount -= 1;
    },
    openAnswerForm: (state, action: PayloadAction<Object>) => {
      state.openedAnswerForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsStartAsync.pending, (state) => {
      state.commentsLoading = true;
    });
    builder.addCase(fetchCommentsStartAsync.fulfilled, (state, action) => {
      state.commentsLoading = false;
      state.commentsCollection = action.payload;
    });
    builder.addCase(fetchCommentsStartAsync.rejected, (state, action) => {
      state.commentsLoading = false;
      state.errorMessages.push(action.payload);
    });
  },
});

export const {
  commentsCountDecrement,
  commentsCountIncrement,
  openAnswerForm,
} = commentsSlice.actions;

export default commentsSlice.reducer;
