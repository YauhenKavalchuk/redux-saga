import { put, call, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  SET_LOADING_DATA,
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

export function* watchNewsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  const path = yield select(({ router }) => router.location.pathname);
  if (path === '/popular-news') {
    yield call(handlePopularNews);
  }
  if (path === '/latest-news') {
    yield call(handleLatestNews);
  }
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchNewsSaga);
}
