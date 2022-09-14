import styled from 'styled-components';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const P = styled.p`
  text-align: center;
  padding: 0.75rem;
  color: #9ca3af;
  border-top: 1px solid #111;
`;

class EmptyCart extends Component {
  render() {
    return (
      <tr>
        <td className="product-item" colSpan={6}>
          <P>
            <FormattedMessage {...messages.empty_cart} />
          </P>
        </td>
      </tr>
    );
  }
}

export default EmptyCart;
