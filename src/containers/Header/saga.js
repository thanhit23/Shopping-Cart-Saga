import { takeLatest, select, put } from 'redux-saga/effects';

import { FILTER_PRODUCT } from './constants';
import { filterProductSuccess } from './actions';

function* filterProductSaga({ payload: { keyword } }) {
  const list = yield select(({ products: { listProduct } }) => listProduct);
  const search = [];
  list.map(({ name }) => {
    if (name.toLowerCase().search(keyword.toLowerCase()) !== -1) {
      search.push(name);
    }
  });
  yield put(filterProductSuccess(search));
}

function* headerSaga() {
  yield takeLatest(FILTER_PRODUCT, filterProductSaga);
}

export default headerSaga;
