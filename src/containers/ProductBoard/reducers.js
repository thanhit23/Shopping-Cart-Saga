import produce from 'immer';

import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
} from './constants';

const initialState = {
  listProduct: [],
};

const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case FETCH_PRODUCT:
        draft.listProduct = [];
        break;
      case FETCH_PRODUCT_SUCCESS:
        const {
          payload: { data },
        } = action;
        draft.listProduct = data;
        break;
      case FETCH_PRODUCT_ERROR:
        draft.listProduct = [];
        break;
    }
  });

export default productReducer;
