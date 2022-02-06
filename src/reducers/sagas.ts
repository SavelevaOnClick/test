import {all} from 'redux-saga/effects';
import {watchUsers} from '@reducers/users/reduser';
import {watchGlobal} from './global';

// ADD IMPORT

export default function* rootSaga() {
  yield all([watchGlobal(), watchUsers()]);
}
