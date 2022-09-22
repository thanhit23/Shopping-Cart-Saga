import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { ADD_PRODUCT, STATUS_SUCCESS_CREATE } from './constants';
import { addProduct } from '../../apis';
import { addProductFailed, addProductSuccess, closeModal } from './actions';
import { hideLoading, showLoading } from '../LoadingIndicator/actions';

function* addProductSaga({ payload }) {
  const { username: name, priceProduct: price } = payload;
  const res = yield call(addProduct, {
    name,
    price,
  });
  const { status, data } = res;
  yield put(showLoading());
  if (STATUS_SUCCESS_CREATE === status) {
    yield put(addProductSuccess(data));
    yield put(closeModal());
    toast.success('Create Successfully');
  } else {
    yield put(addProductFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* homeSaga() {
  yield takeEvery(ADD_PRODUCT, addProductSaga);
}

export default homeSaga;
