import React, { Component } from 'react';

import ProductInformationBar from './ProductInforBar';
<<<<<<< HEAD
import ProductItem from './ProductItem';
=======
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf

class Cart extends Component {
  render() {
    return (
      <div id="Cart">
        <div className="cart-wrapper">
<<<<<<< HEAD
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
=======
          <ProductInformationBar />
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf
        </div>
      </div>
    );
  }
}

export default Cart;
