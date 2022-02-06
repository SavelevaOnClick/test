import {call, put, takeLatest} from '@redux-saga/core/effects';
import {httpGet} from '@services';
import {TGlobalState} from '@types';

const SET_USERS = '[users] SET_USERS';
const GET_USERS = '[users] GET_USERS';
type TUsersState = TGlobalState['users'];
const initialState = {
  users: null,
};

export default (state: TUsersState = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return Object.assign({}, {...state, users: action.data});
    default:
      return state;
  }
};
const setUsers = (data: TUsersState['users']) => ({
  data,
  type: SET_USERS,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export function* getUsersWorker() {
  try {
    const {data} = yield call(httpGet, '/users');
    console.log('data');
    yield put(setUsers(data));
  } catch (e) {
    console.log('error');
  } finally {
    console.log('end');
  }
}

export function* watchUsers() {
  yield takeLatest(GET_USERS, getUsersWorker);
}
