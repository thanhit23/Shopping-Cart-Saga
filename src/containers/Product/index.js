import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { ProductWrapper } from './ProductWrapper';
import reducer from './reducer';
import ProductItems from '../../components/ProductItem';
import messages from './messages';
import injectReducer from '../../utils/injectReducer';

class Product extends Component {
  // eslint-disable-next-line react/sort-comp
  showProduct(products = []) {
    return products.map((i, k) => <ProductItems key={k} product={i} />);
  }

  render() {
    const { products } = this.props;
    return (
      <ProductWrapper>
        <div className="flex py-4 px-12 justify-between">
          <p>
            <FormattedMessage {...messages.title} />
          </p>
        </div>
        <ul className="flex flex-wrap">{this.showProduct(products)}</ul>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
};

const mapStateToProps = state => {
  const { products } = state;
  return {
    products,
  };
};

const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'products', reducer });

export default compose(withReducer, withConnect)(Product);
