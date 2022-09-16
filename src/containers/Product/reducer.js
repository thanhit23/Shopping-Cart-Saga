/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

// The initial state of the Product
import { get } from '../../storeManager';
const data = get('product');
const initialState = data || [];

const productReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, () => {
    switch (action.type) {
      default:
        return [...state];
    }
  });

export default productReducer;
