import { combineReducers } from "redux";

import commentsReducer from "./comments/comments.reducer"

const rootReducer = combineReducers({
  comments: commentsReducer
})

export default rootReducer;