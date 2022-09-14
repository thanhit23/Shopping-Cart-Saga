import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ProductInformationBar extends Component {
  onDeleteProduct = id => this.props.deleteProduct(id);

  render() {
    const {
      product: { product, quantity },
    } = this.props;
    const { id, image, name, price } = product;

    return (
      <tr>
        <td className="product-item w-[10%]">
          <img className="w-[80px] h-[80px] m-auto" src={image} alt={name} />
        </td>
        <td className="product-item w-[50%]">
          <p>{name}</p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">đ{price.toLocaleString()}</p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">{quantity}</p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">
            đ{(+quantity * +price).toLocaleString()}
          </p>
        </td>
        <td className="product-item w-[10%] text-center">
          <button
            className="btn btn-delete"
            type="button"
            onClick={() => this.onDeleteProduct(id)}
          >
            <FormattedMessage {...messages.button_delete} />
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductInformationBar;
