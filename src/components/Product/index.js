import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { ProductWrapper } from './ProductWrapper';
import ProductItems from '../ProductItem';

class Product extends Component {
  render() {
    return (
      <ProductWrapper>
        <div className="flex py-4 px-12 justify-between">
          <p>
            <FormattedMessage {...messages.title} />
          </p>
        </div>
        <ul className="flex flex-wrap">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </ul>
      </ProductWrapper>
    );
  }
}

export default Product;
