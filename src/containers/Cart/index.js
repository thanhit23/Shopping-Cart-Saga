import React, { Component } from 'react';

import ProductInformationBar from './ProductInforBar';

class Cart extends Component {
  render() {
    return (
      <div id="Cart">
        <div className="cart-wrapper">
          <ProductInformationBar />
        </div>
      </div>
    );
  }
}

export default Cart;
