import { combineReducers } from 'redux';

const counter = (state = {}, action) => {
  return state;
}

const reducer = combineReducers({
  counter,
});

export default reducer;
