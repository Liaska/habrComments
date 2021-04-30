import { combineReducers } from 'redux';

import commentsReducer from './comments/commentsSlice';
import authorReducer from './authors/authorsSlice.ts';

const rootReducer = combineReducers({
  comments: commentsReducer,
  authors: authorReducer,
});

export default rootReducer;
