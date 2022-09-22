import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
} from './constants';
import { toastError } from '../../helpers/toast';

export const openModal = title => ({
  type: OPEN_MODAL,
  title,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const addProduct = data => {
  const { username, priceProduct } = data;
  return {
    type: ADD_PRODUCT,
    payload: {
      username,
      priceProduct,
    },
  };
};

export const addProductSuccess = data => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const addProductFailed = error => {
  toastError(error);
  return {
    type: ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
