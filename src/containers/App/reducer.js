/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, data => {
    switch (action.type) {
      case 'a':
        console.log(data);
        break;
    }
  })

export default appReducer;
