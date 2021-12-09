import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import userReducer from './userReducer';
import loginReducer from './loginReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  loggedUser: loginReducer,
  loadingBar: loadingBarReducer,
  users: userReducer,
  questions: questionReducer,
});