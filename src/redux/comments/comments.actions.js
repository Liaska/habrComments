import CommentsTypes from './comments.types';
import COMMENTS_DATA from './comments.data';

export const commentsCountIncrement = () => ({
  type: CommentsTypes.COMMENTS_COUNT_INCREMENT,
});

export const commentsCountDecrement = () => ({
  type: CommentsTypes.COMMENTS_COUNT_DECREMENT,
});

export const fetchCommentsStart = () => ({
  type: CommentsTypes.FETCH_COMMENTS_START,
});

export const fetchCommentsSuccess = (commentsColletction) => ({
  type: CommentsTypes.FETCH_COMMENTS_SUCCESS,
  payload: commentsColletction,
});

export const addAuthor = (author, message) => ({
  type: CommentsTypes.ADD_AUTHOR,
  payload: {
    author,
    message,
  },
});

// TODO - когда добавится асинхронный запрос
export const fetchCommentsFailure = (errorMessage) => ({
  type: CommentsTypes.FETCH_COMMENTS_FAILURE,
  payload: errorMessage,
});

export const fetchCommentsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCommentsStart());
    setTimeout(() => {
      dispatch(fetchCommentsSuccess(COMMENTS_DATA));
    }, 2000);
  };
};
