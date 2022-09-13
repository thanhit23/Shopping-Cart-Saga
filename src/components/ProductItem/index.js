import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { ProductItemWrapper } from './ProductItemWrapper';
import { ProductItem } from './ProductItem';

<<<<<<< HEAD
import messages from './messages';

class ProductItems extends Component {
  render() {
    const { product } = this.props;
    const { name, image, price } = product;

=======
import messages from '../Product/messages';

class ProductItems extends Component {
  render() {
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf
    return (
      <ProductItemWrapper>
        <ProductItem>
          <div className="p-2.5 bg-[#fff] shadow-lg shadow-indigo-500/50 rounded">
<<<<<<< HEAD
            <img className="w-full" src={image} alt={name} />
            <p>{name}</p>
            <div className="flex justify-between items-center my-1">
              <p>{price}</p>
              <button type="button" className="btn btn-add-cart">
                <FormattedMessage {...messages.add_to_cart} />
              </button>
=======
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
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf
            </div>
          </div>
        </ProductItem>
      </ProductItemWrapper>
    );
  }
}

export default ProductItems;
