import { toastError } from '../../helpers/toast';
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from './constants';

export const fetchListProduct = () => ({
  type: FETCH_PRODUCT,
});

export const fetchListProductSuccess = data => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListProductError = error => {
  toastError(error);
  return {
    type: FETCH_PRODUCT_ERROR,
    payload: {
      error,
    },
  };
};
