import { combineReducers } from "redux";

import commentsReducer from "./comments/commentsSlice"

const rootReducer = combineReducers({
  comments: commentsReducer
})

export default rootReducer;