/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectIsToggleMenu = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isToggleMenu,
  );

export {
  selectGlobal,
  makeSelectIsToggleMenu,
};
