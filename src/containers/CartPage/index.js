/*
 * CartPage
 *
 * List all product
 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Cart from '../Cart';

class CartPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Cart Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <Cart />
      </div>
    );
  }
}

export default CartPage;
