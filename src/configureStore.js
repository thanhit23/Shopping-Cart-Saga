/**
 * Create the store with dynamic reducers
 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createReducer from './reducers';
import middlewareLocalStorage from './middleware/middleware-storage';

const enhancer = compose(
  applyMiddleware(thunk, middlewareLocalStorage),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function configureStore(initialState = {}) {
  const store = createStore(createReducer(), initialState, enhancer);

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
