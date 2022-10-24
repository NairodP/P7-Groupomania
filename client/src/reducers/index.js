import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import allPostsReducer from "./allPostsReducer";

export default combineReducers({
  userReducer,
  postReducer,
  errorReducer,
  allPostsReducer,
});
