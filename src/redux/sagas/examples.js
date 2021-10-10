/*
https://github.com/redux-saga/redux-saga/blob/master/examples/counter/src/sagas/index.js
https://github.com/redux-saga/redux-saga/blob/master/examples/async/src/sagas/index.js
https://github.com/redux-saga/redux-saga/blob/master/examples/error-demo/src/sagas/index.js
https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/sagas/index.js
*/

import { delay, takeEvery, put, fork, all, spawn, call } from 'redux-saga/effects';

// Abstract Sagas for example
export function* saga1() {
  yield delay(1000);
  yield put({ type: 'CALL_SAGA_1' });
}
export function* saga2() {
  yield delay(1000);
  yield put({ type: 'CALL_SAGA_2' });
}
export function* saga3() {
  yield delay(1000);
  yield put({ type: 'CALL_SAGA_3' });
}

// #1 takeEvery
export function* rootSaga1() {
  yield takeEvery('SAGA_1', saga1);
}

// #2 array
export function* rootSaga2() {
  yield [
    saga1(),
    saga2(),
    saga3(),
  ];
}

// #3 fork
export function* rootSaga3() {
  yield fork(saga1);
  yield fork(saga2);
  yield fork(saga3);
}

// #4 array + fork
export function* rootSaga4() {
  yield [
    fork(saga1),
    fork(saga2),
    fork(saga3),
  ];
}

// #5 all + takeEvery
export function* rootSaga5() {
  yield all([
    takeEvery('SAGA_1', saga1),
    takeEvery('SAGA_2', saga2),
    takeEvery('SAGA_3', saga3),
  ]);
}

// #6 all + fork
export default function* rootSaga6() {
  yield all([
    fork(saga1),
    fork(saga2),
    fork(saga3),
  ]);
}

// #7 spawn
export function* rootSaga7() {
  yield spawn(saga1); // authoring
  yield spawn(saga2); // news
  yield spawn(saga3); // users
}

// #8 keeping everything alive
// https://redux-saga.js.org/docs/advanced/RootSaga
export function* rootSaga8() {
  const sagas = [saga1, saga2, saga3];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    }))
  );
}
