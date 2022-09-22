import { fork, take, call, put, delay } from 'redux-saga/effects';

import { getList } from '../../apis';
import { FETCH_PRODUCT, STATUS_SUCCESS } from './constants';
import { fetchListProductSuccess, fetchListProductError } from './actions';
import { showLoading, hideLoading } from '../LoadingIndicator/actions';

function* watchFetchListProductAction() {
  while (true) {
    yield take(FETCH_PRODUCT);
    yield put(showLoading());
    const res = yield call(getList);
    const { data, status } = res;
    if (status === STATUS_SUCCESS) {
      yield put(fetchListProductSuccess(data));
    } else {
      yield put(fetchListProductError(data));
    }
    yield delay(500);
    yield put(hideLoading());
  }
}

function* productSaga() {
  yield fork(watchFetchListProductAction);
}

export default productSaga;
