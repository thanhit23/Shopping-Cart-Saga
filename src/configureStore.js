/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';

import createReducer from './reducers';
import middlewareLocalStorage from './middleware/middleware-storage';

const enhancer = compose(
  applyMiddleware(middlewareLocalStorage),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function configureStore(initialState = {}) {
  const store = createStore(createReducer(), initialState, enhancer);

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
