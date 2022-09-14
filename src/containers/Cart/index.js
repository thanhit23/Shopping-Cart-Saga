import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductInformationBar from './ProductInforBar';
import ProductPayment from './ProductPayment';
import ProductItem from './ProductItem';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import EmptyCart from './EmptyCart';
import { deleteProduct } from './actions';

class Cart extends Component {
  onDeleteProduct = id => this.props.deleteProduct(id);

  showProductItem = cart => {
    let product = null;
    if (cart.length) {
      product = cart.map((i, k) => (
        <ProductItem key={k} product={i} deleteProduct={this.onDeleteProduct} />
      ));
    } else {
      product = <EmptyCart />;
    }

    return product;
  };

  render() {
    const { cart } = this.props;

    return (
      <div id="Cart">
        <div className="cart-wrapper">
          <div className="information-product">
            <table className="table-auto w-full">
              <thead className="table-header">
                <ProductInformationBar />
              </thead>
              <tbody className="table-tbody">
                {this.showProductItem(cart)}
              </tbody>
              <tfoot className="table-header">
                <ProductPayment products={cart} />
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ),
};

const mapStateToProps = state => {
  const { cart } = state;
  return {
    cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: id => dispatch(deleteProduct(id)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'cart', reducer });

export default compose(withReducer, withConnect)(Cart);
