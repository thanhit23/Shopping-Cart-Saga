import React, { Component } from 'react';

import ProductInformationBar from './ProductInforBar';
import ProductItem from './ProductItem';

class Cart extends Component {
  render() {
    return (
      <div id="Cart">
        <div className="cart-wrapper">
          <div className="information-product">
            <table className="table-auto w-full">
              <ProductInformationBar />
              <tbody>
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
