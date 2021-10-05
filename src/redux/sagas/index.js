import { takeEvery } from 'redux-saga/effects';
import { GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from '../../api/index';

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
