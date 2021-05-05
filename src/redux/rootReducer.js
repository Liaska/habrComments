import { combineReducers } from 'redux';

import commentsReducer from './comments/commentsSlice';
import userReducer from './user/userSlice';
import coinbaseReducer from './coinbase/coinbaseSlice';

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
  coinbase: coinbaseReducer,
});

export default rootReducer;
