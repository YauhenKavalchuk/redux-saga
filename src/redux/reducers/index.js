import { combineReducers } from 'redux';
import counter from "./counter";
import news from "./news";

const reducer = combineReducers({
  counter,
  news,
});

export default reducer;
