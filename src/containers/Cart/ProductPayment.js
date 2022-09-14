import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class ProductPayment extends Component {
  showTotal(products) {
    let total = 0;
    products.map(
      ({ product: { price }, quantity }) => (total += price * quantity),
    );

    return total.toLocaleString();
  }

  render() {
    const { products } = this.props;

    return (
      <tr>
        <th colSpan={3} />
        <th className="information-item">
          <p>
            <FormattedMessage {...messages.payment_total} />
          </p>
        </th>
        <th className="information-item">
          <p>đ{this.showTotal(products)}</p>
        </th>
        <th className="information-item">
          <button className="btn btn-delete" type="button">
            Payment
          </button>
        </th>
      </tr>
    );
  }
}

export default ProductPayment;
