import {combineReducers} from 'redux';
import global from './global';
// ADD IMPORT

const rootReducer = combineReducers({
  global,
  // ADD NEW REDUCER
});

export type TAppState = ReturnType<typeof rootReducer>;
export default rootReducer;
