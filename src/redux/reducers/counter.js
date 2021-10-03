import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

const counter = (state = { count: 0 }, { type }) => {
  switch (type) {
    case INCREASE_COUNT: return { ...state, count: state.count + 1 };
    case DECREASE_COUNT: return { ...state, count: state.count - 1 };
    default: return state;
  }
};

export default counter;
