import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import Ready from './Ready';
import InProgress from './InProgress';
import Completed from './Completed';
import reducer from './reducers';
import saga from './saga';
import * as productActions from './actions';

class ProductBoard extends Component {
  componentDidMount() {
    const { productAction } = this.props;
    const { fetchListProduct } = productAction;
    fetchListProduct();
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4 w-[1200px] m-auto">
        <div className="ready p-2">
          <Ready />
        </div>
        <div className="in-progress">
          <InProgress />
        </div>
        <div className="completed">
          <Completed />
        </div>
      </div>
    );
  }
}

ProductBoard.propTypes = {
  productAction: propTypes.shape({
    fetchListProduct: propTypes.func,
  }),
};

const mapStateToProps = state => {
  const {
    products: { listProduct },
  } = state;
  return {
    listProduct,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productAction: bindActionCreators(productActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'products', reducer });
const withSaga = injectSaga({ key: 'products', saga });

export default compose(withReducer, withSaga, withConnect)(ProductBoard);
