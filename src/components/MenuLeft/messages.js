import { defineMessages } from 'react-intl';

export const scope = 'container.Header';
export default defineMessages({
  search: {
    id: `${scope}.navigation.search`,
    defaultMessage: 'Search',
  },
  title_product: {
    id: `${scope}.dropdown.product.title`,
    defaultMessage: 'Page Product',
  },
  all_item_product: {
    id: `${scope}.dropdown.product.item.all`,
    defaultMessage: 'All Product',
  },
  detail_product: {
    id: `${scope}.dropdown.product.item.detail`,
    defaultMessage: 'Product Detail',
  },
  title_cart: {
    id: `${scope}.dropdown.cart.title`,
    defaultMessage: 'Cart',
  },
});
