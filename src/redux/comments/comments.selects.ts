import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

import { CommentsState } from './commentsSlice';

const selectComments = (state:RootState): CommentsState => state.comments;

export const selectCommentsCollection = createSelector(
  [selectComments],
  (comments): any[] | null => comments.collection
);
export const selectCommentsCount = createSelector(
  [selectComments],
  (comments): number => comments.commentsCount
);
export const selectOpenedAnswerForm = createSelector(
  [selectComments],
  (comments) => comments.openedAnswerForm
);
export const selectCommentsLoading = createSelector(
  [selectComments],
  (comments):boolean => comments.loading
);
