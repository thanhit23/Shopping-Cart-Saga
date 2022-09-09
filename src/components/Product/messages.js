import { defineMessages } from 'react-intl';

export const scope = 'container.Product';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'List Product',
  },
  name_product: {
    id: `${scope}.name.product.item`,
    defaultMessage: 'Macbook',
  },
  price_product: {
    id: `${scope}.price.product.item`,
    defaultMessage: 'Macbook',
  },
});
