import { DELETE_PRODUCT } from './constants';

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id,
  };
}
