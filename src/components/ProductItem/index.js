import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { ProductItemWrapper } from './ProductItemWrapper';
import { ProductItem } from './ProductItem';

import messages from '../Product/messages';

class ProductItems extends Component {
  render() {
    return (
      <ProductItemWrapper>
        <ProductItem>
          <div className="p-2.5 bg-[#fff] shadow-lg shadow-indigo-500/50 rounded">
            <img
              className="w-full"
              src="https://i.picsum.photos/id/1/250/300.jpg?hmac=SjXl8hpUiMGjDggTWBEPKbL-Y3PVQCPySP63BjyQPpU"
              alt="anh-moi"
            />
            <p>
              <FormattedMessage {...messages.name_product} />
            </p>
            <div className="flex justify-between">
              <p>
                <FormattedMessage {...messages.price_product} />
              </p>
              <button type="button">Thêm giỏ hàng</button>
            </div>
          </div>
        </ProductItem>
      </ProductItemWrapper>
    );
  }
}

export default ProductItems;
