import {combineReducers} from 'redux';
import global from './global';
import users from './users/reduser';

const rootReducer = combineReducers({
  global,
  users,
  // ADD NEW REDUCER
});

export type TAppState = ReturnType<typeof rootReducer>;
export default rootReducer;
