/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHeader = state => {
  return state.header || initialState;
};

const makeSelectIsToggleMenu = () =>
  createSelector(selectHeader, headerState => headerState.isToggleMenu);

export { selectHeader, makeSelectIsToggleMenu };
