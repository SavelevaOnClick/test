import {all} from 'redux-saga/effects';
import {watch_global} from './global';
// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watch_global(),
    // ADD WATCHER
  ]);
}
