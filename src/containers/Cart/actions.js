import { ADD_TO_CART, DELETE_PRODUCT } from './constants';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id,
  };
}
