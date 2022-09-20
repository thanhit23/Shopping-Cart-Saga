import { API_ENDPOINT } from './constants';
import Service from '../service';

const url = '/products';

export const getList = () => {
  return Service.get(`${API_ENDPOINT}${url}`);
};
