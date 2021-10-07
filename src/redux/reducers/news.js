import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";

const initialState = {
  latestNews: [],
  popularNews: [],
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS: 
      return {
        ...state, 
        latestNews: [...state.latestNews, ...payload],
      };
    case SET_POPULAR_NEWS: 
      return {
        ...state, 
        popularNews: [...state.popularNews, ...payload],
      };
    default: return state;
  }
};

export default news;
