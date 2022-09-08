import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class ProductInformationBar extends Component {
  render() {
    return (
      <div className="information-product">
        <table className="information-product-wrapper">
          <thead>
            <tr>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_img} />
                </p>
              </th>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_name} />
                </p>
              </th>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_price} />
                </p>
              </th>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_quantity} />
                </p>
              </th>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_total} />
                </p>
              </th>
              <th className="information-item">
                <p>
                  <FormattedMessage {...messages.bar_feature} />
                </p>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default ProductInformationBar;
