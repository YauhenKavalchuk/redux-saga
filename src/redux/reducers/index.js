import { combineReducers } from 'redux';

const test = (state = {}, action) => {
  return state;
}

const reducer = combineReducers({
  test,
});

export default reducer;
