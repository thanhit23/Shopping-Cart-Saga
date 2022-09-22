import produce from 'immer';

import {
  CLOSE_MODAL,
  OPEN_MODAL,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from './constants';
const initialState = {
  isModal: false,
  title: null,
  listProduct: [],
};

const headerReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CLOSE_MODAL:
        draft.title = null;
        draft.isModal = false;
        break;
      case OPEN_MODAL:
        const { title } = action;
        draft.title = title;
        draft.isModal = true;
        break;
      case ADD_PRODUCT:
        return {
          ...draft,
        };
      case ADD_PRODUCT_SUCCESS:
        const {
          payload: { data },
        } = action;
        return {
          ...draft,
          listProduct: draft.listProduct.concat([data]),
        };
      case ADD_PRODUCT_FAILED:
        const {
          payload: { error },
        } = action;
        return {
          ...draft,
          error,
        };
    }
  });

export default headerReducer;
