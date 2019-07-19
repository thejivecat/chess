import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import errorReducer from './errorReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
});

export default rootReducer;