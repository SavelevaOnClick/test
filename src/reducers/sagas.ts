import {all} from 'redux-saga/effects';
import {watchGlobal} from './global';
// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watchGlobal(),
    // ADD WATCHER
  ]);
}
