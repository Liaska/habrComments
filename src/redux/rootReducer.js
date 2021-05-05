import { combineReducers } from 'redux';

import commentsReducer from './comments/commentsSlice';
import userReducer from './user/userSlice'

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;
