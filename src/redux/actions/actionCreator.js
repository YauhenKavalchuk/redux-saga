import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  GET_NEWS,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const getNews = () => ({
  type: GET_NEWS,
});
