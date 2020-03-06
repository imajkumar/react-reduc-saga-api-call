import { all, fork } from 'redux-saga/effects';

import app from './app';
import github from './github';
import user from './user';
import register from './register';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(app), fork(github),fork(register), fork(user)]);
}
