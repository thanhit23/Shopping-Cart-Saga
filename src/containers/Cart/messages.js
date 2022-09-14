import { defineMessages } from 'react-intl';

export const scope = 'container.Cart';

export default defineMessages({
  empty_cart: {
    id: `${scope}.empty`,
    defaultMessage: 'No Products Yet',
  },
  bar_img: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Image',
  },
  bar_name: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Product Name',
  },
  bar_price: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Price',
  },
  bar_quantity: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Quantity',
  },
  bar_total: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Total',
  },
  bar_feature: {
    id: `${scope}.product.information.bar.img`,
    defaultMessage: 'Feature',
  },
  payment_total: {
    id: `${scope}.product.payment.total`,
    defaultMessage: 'Total',
  },
  button_delete: {
    id: `${scope}.product.button.delete`,
    defaultMessage: 'Delete',
  },
});
