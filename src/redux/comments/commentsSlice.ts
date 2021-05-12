import { TCommentsData } from './../InterfacesAndTypes';
import { IAsyncState } from '../InterfacesAndTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import COMMENTS_DATA from './comments.data';

export const fetchCommentsStartAsync = createAsyncThunk(
  'comments/fetchCommentsStartAsync',
  () =>
    new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve(COMMENTS_DATA);
      }, 1000);
    })
);
export interface IAuthors {
  [author: string]: string[];
}
export interface CommentsState extends IAsyncState {
  commentsCount: number;
  openedAnswerForm: any;
  authors: IAuthors;
  highlightedAuthor: null;
  collection: TCommentsData | null;
}

const initialState: CommentsState = {
  authors: {},
  commentsCount: 0,
  loading: false,
  openedAnswerForm: null,
  highlightedAuthor: null,
  collection: null,
  errorMessages: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsCountIncrement: (state) => {
      state.commentsCount += 1;
    },
    commentsCountDecrement: (state) => {
      state.commentsCount -= 1;
    },
    openAnswerForm: (state, action: PayloadAction<any>) => {
      state.openedAnswerForm = action.payload;
    },

    addAuthor: (
      state,
      { payload: { message, author } }: PayloadAction<{ author: string; message: string }>
    ) => {
      if (state.authors[author]) {
        state.authors[author] = [...state.authors[author], message];
      } else {
        state.authors[author] = [message];
      }
    },
    highlightAuthor: (state, action) => {
      state.highlightedAuthor = state.highlightedAuthor === action.payload ? null : action.payload;
    },
    clearCollection: (state) => {
      state.commentsCount = 0;
      state.authors = {};
      state.highlightedAuthor = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsStartAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCommentsStartAsync.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.collection = action.payload;
    });
    builder.addCase(fetchCommentsStartAsync.rejected, (state, action) => {
      state.loading = false;
      state.errorMessages = `${action.payload}`;
    });
  },
});

export const {
  commentsCountDecrement,
  commentsCountIncrement,
  openAnswerForm,
  clearCollection,
  addAuthor,
  highlightAuthor,
} = commentsSlice.actions;

export default commentsSlice.reducer;
