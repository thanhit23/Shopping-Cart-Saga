import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ProductBoard from '../ProductBoard';

class HomePage extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="m-[10px]">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[rgb(37,99,235)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(29,78,216)] hover:shadow-lg focus:bg-[rgb(29,78,216)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Product
          </button>
        </div>
        <ProductBoard />
      </section>
    );
  }
}

export default HomePage;
