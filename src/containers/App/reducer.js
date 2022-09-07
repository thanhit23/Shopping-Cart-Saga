/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import * as types from './constants';

export const initialState = {
  isToggleMenu: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, data => {
    switch (action.type) {
      case types.OPEN_MENU:
        // data.isToggleMenu = true;
        console.log(data, 'data');
        break;
    }
  })

export default appReducer;
