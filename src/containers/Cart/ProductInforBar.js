import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class ProductInformationBar extends Component {
  render() {
    return (
      <thead className="table-thead">
        <tr>
          <th>
            <p>
              <FormattedMessage {...messages.bar_img} />
            </p>
          </th>
          <th>
            <p>
              <FormattedMessage {...messages.bar_name} />
            </p>
          </th>
          <th>
            <p>
              <FormattedMessage {...messages.bar_price} />
            </p>
          </th>
          <th>
            <p>
              <FormattedMessage {...messages.bar_quantity} />
            </p>
          </th>
          <th>
            <p>
              <FormattedMessage {...messages.bar_total} />
            </p>
          </th>
          <th>
            <p>
              <FormattedMessage {...messages.bar_feature} />
            </p>
          </th>
        </tr>
      </thead>
    );
  }
}

export default ProductInformationBar;
