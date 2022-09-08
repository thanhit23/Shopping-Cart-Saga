import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { ProductItemWrapper } from './ProductItemWrapper';
import { ProductItem } from './ProductItem';

import messages from './messages';

class ProductItems extends Component {
  render() {
    const { product } = this.props;
    const { name, image, price } = product;

    return (
      <ProductItemWrapper>
        <ProductItem>
          <div className="p-2.5 bg-[#fff] shadow-lg shadow-indigo-500/50 rounded">
            <img className="w-full" src={image} alt={name} />
            <p>{name}</p>
            <div className="flex justify-between items-center my-1">
              <p>{price}</p>
              <button type="button" className="btn btn-add-cart">
                <FormattedMessage {...messages.add_to_cart} />
              </button>
            </div>
          </div>
        </ProductItem>
      </ProductItemWrapper>
    );
  }
}

export default ProductItems;
