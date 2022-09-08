/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => initialState || state.global;

console.log(selectGlobal, 'selectGlobalselectGlobal');

const makeSelectIsToggleMenu = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isToggleMenu(),
  );

export {
  selectGlobal,
  makeSelectIsToggleMenu,
};
