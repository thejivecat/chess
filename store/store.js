import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';


const preloadedState = {};

const middleware = [thunk];

const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(...middleware)));

export default store;