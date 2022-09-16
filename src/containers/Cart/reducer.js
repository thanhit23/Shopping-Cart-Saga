/*
 * cartReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import React from 'react';
import produce from 'immer';
import { findIndex } from 'lodash';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import { DELETE_PRODUCT } from './constants';
import messages from '../App/messages';
import { get } from '../../storeManager';
import { ADD_TO_CART } from '../Product/constants';
const initialState = get('cart') || [];

const cartReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CART:
        const { product } = action;
        const index = findIndex(
          state,
          ({ product: { id } }) => id === product.id,
        );
        if (index !== -1) {
          draft[index].quantity += 1;
          toast.success(<FormattedMessage {...messages.update_success} />);
        } else {
          draft.push({
            product,
            quantity: 1,
          });
          toast.success(<FormattedMessage {...messages.add_to_cart_success} />);
        }
        break;
      case DELETE_PRODUCT:
        const { id } = action;
        const indexId = findIndex(
          state,
          ({ product: { id: idItem } }) => idItem === id,
        );
        draft.splice(indexId, 1);
        toast.success(<FormattedMessage {...messages.delete_success} />);
        break;
      default:
        return [...state];
    }
  });

export default cartReducer;
