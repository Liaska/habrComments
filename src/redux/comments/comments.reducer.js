import CommentsTypes from './comments.types';

const INITIAL_STATE = {
  commentsCollection: null,
  commentsCount: 0,
  commentsAuthors: {},
  commentsLoading: false,
  highlightedAuthor: null,
  openedAnswerForm: null
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsTypes.COMMENTS_COUNT:
      return {
        ...state,
        commentsCount: action.payload,
      };
    case CommentsTypes.COMMENTS_COUNT_INCREMENT:
      return {
        ...state,
        commentsCount: state.commentsCount + 1,
      };
    case CommentsTypes.COMMENTS_COUNT_DECREMENT:
      return {
        ...state,
        commentsCount: state.commentsCount - 1,
      };
    case CommentsTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        commentsLoading: true,
      };

    case CommentsTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        commentsCollection: action.payload,
      };
    case CommentsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        commentsLoading: false,
        errorMessage: action.payload,
      };
    case CommentsTypes.ADD_AUTHOR:
      return {
        ...state,
        commentsAuthors: {
          ...state.commentsAuthors,
          // добавляем автора с именем, если такой автоа уже есть добавляем ему комментарий (спредя прошлые комменты, если такие были)
          [action.payload.author]: state.commentsAuthors[action.payload.author]
            ? [...state.commentsAuthors[action.payload.author], action.payload.message]
            : [action.payload.message],
        },
      };
    case CommentsTypes.HIGHLIGHT_AUTHOR:
      return {
        ...state,
        highlightedAuthor: state.highlightedAuthor === action.payload ? null : action.payload,
      };
    case CommentsTypes.OPEN_ANSWER_FORM:
      return {
        ...state,
        openedAnswerForm: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
