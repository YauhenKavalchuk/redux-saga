import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_LATEST_NEWS } from '../constants';
import { setLatestNews } from '../actions/actionCreator';
import { getLatestNews } from '../../api/index';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
