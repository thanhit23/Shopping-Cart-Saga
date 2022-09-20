import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
} from './constants';

const initialState = {
  listProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        listProduct: [],
      };
    case FETCH_PRODUCT_SUCCESS:
      const {
        payload: { data },
      } = action;
      return {
        ...state,
        listProduct: data,
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        listProduct: [],
      };
    default:
      return [];
  }
};

export default productReducer;
