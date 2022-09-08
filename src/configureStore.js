/**
 * Create the store with dynamic reducers
 */

import { createStore } from 'redux';

import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
