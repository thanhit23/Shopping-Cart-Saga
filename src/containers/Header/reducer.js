/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { OPEN_MENU, CLOSE_MENU } from './constants';

export const initialState = {
  isToggleMenu: false,
};

const appReducer = (state = initialState, action) => {
  console.log(action, 'action');
  return produce(state, draft => {
    switch (action.type) {
      case OPEN_MENU:
        // draft.isToggleMenu = true;
        break;
      case CLOSE_MENU:
        console.log('thanh');
        draft.isToggleMenu = false;
        break;
      default:
        break;
    }
  });
};
export default appReducer;
