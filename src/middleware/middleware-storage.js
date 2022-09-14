import { ADD_TO_CART, DELETE_PRODUCT } from '../containers/Cart/constants';
import { set } from '../storeManager';

const middlewareLocalStorage = store => next => action => {
  next(action);
  const nextState = store.getState();
  const { cart } = nextState;
  switch (action.type) {
    case ADD_TO_CART:
      set('cart', cart);
      break;
    case DELETE_PRODUCT:
      set('cart', cart);
      break;
    default:
      break;
  }
};

export default middlewareLocalStorage;
