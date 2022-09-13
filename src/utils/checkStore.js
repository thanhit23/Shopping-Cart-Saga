import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
<<<<<<< HEAD
    injectedReducers: isObject,
=======
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
