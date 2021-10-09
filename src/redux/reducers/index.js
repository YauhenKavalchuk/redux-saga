import { combineReducers } from 'redux';
import news from "./news";
import errors from "./errors";

const reducer = combineReducers({
  news,
  errors,
});

export default reducer;
