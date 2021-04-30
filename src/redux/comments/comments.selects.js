import { createSelector } from '@reduxjs/toolkit';

const selectComments = (state) => state.comments;

export const selectCommentsCollection = createSelector(
  [selectComments],
  (comments) => comments.commentsCollection
);
export const selectCommentsCount = createSelector(
  [selectComments],
  (comments) => comments.commentsCount
);
export const selectOpenedAnswerForm = createSelector(
  [selectComments],
  (comments) => comments.openedAnswerForm
);
export const selectCommentsLoading = createSelector(
  [selectComments],
  (comments) => comments.commentsLoading
);
