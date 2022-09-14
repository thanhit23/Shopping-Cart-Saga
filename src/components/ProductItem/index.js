import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';

import { ProductItemWrapper } from './ProductItemWrapper';
import { ProductItem } from './ProductItem';
import messages from './messages';

class ProductItems extends Component {
  onAddToCart = () => {
    const { product } = this.props;
    this.props.addToCart(product);
  };

  showRating(rating) {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        result.push(
          <FontAwesomeIcon className="text-[#ee4d2d]" key={i} icon={faStar} />,
        );
      } else {
        result.push(
          <FontAwesomeIcon className="text-[#ee4d2d]" key={i} icon={faStarO} />,
        );
      }
    }

    return result;
  }

  render() {
    const { product } = this.props;
    const { name, image, price, rating } = product;

    return (
      <ProductItemWrapper>
        <ProductItem>
          <div className="p-2.5 bg-[#fff] shadow-lg shadow-indigo-500/50 rounded">
            <img className="w-full" src={image} alt={name} />
            <p className="mt-1">{name}</p>
            <p className="mt-1">đ{price.toLocaleString()}</p>
            <div>
              <ul>
                <li>{this.showRating(rating)}</li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-add-cart mt-1"
              onClick={this.onAddToCart}
            >
              <FormattedMessage {...messages.add_to_cart} />
            </button>
          </div>
        </ProductItem>
      </ProductItemWrapper>
    );
  }
}

export default ProductItems;
