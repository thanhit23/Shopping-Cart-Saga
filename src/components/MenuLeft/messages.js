import { defineMessages } from 'react-intl';

export const scope = 'container.Header';
export default defineMessages({
  search: {
    id: `${scope}.navigation.search`,
    defaultMessage: '',
  },
  title_product: {
    id: `${scope}.dropdown.product.title`,
    defaultMessage: '',
  },
  all_item_product: {
    id: `${scope}.dropdown.product.item.all`,
    defaultMessage: '',
  },
  detail_product: {
    id: `${scope}.dropdown.product.item.detail`,
    defaultMessage: '',
  },
});
