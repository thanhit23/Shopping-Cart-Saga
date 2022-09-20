import * as productApi from '../../apis';
import { toastError } from '../../helpers/toast';
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from './constants';

export const fetchListProduct = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

export const fetchListProductSuccess = data => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListProductError = error => {
  toastError(error);
  return {
    type: FETCH_PRODUCT_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchListProductReq = () => {
  return dispatch => {
    dispatch(fetchListProduct());
    productApi
      .getList()
      .then(({ data }) => dispatch(fetchListProductSuccess(data)))
      .catch(err => dispatch(fetchListProductError(err)));
  };
};
