import { put, call, all, take, fork } from 'redux-saga/effects';
import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
} from '../constants';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';
import { getLatestNews, getPopularNews } from '../../api/index';

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch {
    yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' });
  }
}

export function* watchPopularSaga() {
  yield take(GET_POPULAR_NEWS);
  yield call(handlePopularNews);
}

export function* watchLatestSaga() {
  yield take(GET_LATEST_NEWS);
  yield call(handleLatestNews);
}

export default function* rootSaga() {
  yield all([
    fork(watchPopularSaga), 
    fork(watchLatestSaga),
  ]);
}
