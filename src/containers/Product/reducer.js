/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

// The initial state of the Product
export const initialState = [
  {
    id: 1,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 3,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 4,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 5,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 6,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 7,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 129000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 8,
    name: 'Áo Khoác Bomber Chữ A, Áo Bomber Nam Nữ HOT TREND 2022',
    image: 'https://cf.shopee.vn/file/0a49535553022d6aee46e04d13f8d2b2',
    description:
      'kiểu dáng : tay phối da\n' +
      'xuất xứ : hàng việt nam\n' +
      'màu sắc : đen\n',
    price: 529000,
    inventory: 10,
    rating: 5,
  },
];

const productReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case 'thanh':
        draft.username = 'thanh';
        break;
      default:
        return [...state];
    }
  });

export default productReducer;
