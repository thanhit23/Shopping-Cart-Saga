import produce from 'immer';

import { SHOW_LOADING, HIDE_LOADING } from './constants';

const initialState = {
  showLoading: false,
};

const loadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SHOW_LOADING:
        draft.showLoading = true;
        break;
      case HIDE_LOADING:
        draft.showLoading = false;
        break;
    }
  });

export default loadingReducer;
