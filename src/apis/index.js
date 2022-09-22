import { API_ENDPOINT } from './constants';
import Service from '../service';

const url = '/products';

export const getList = () => Service.get(`${API_ENDPOINT}${url}`);
export const addProduct = data => Service.post(`${API_ENDPOINT}${url}`, data);
