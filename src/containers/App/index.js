/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Product from '../Product';
import Cart from '../Cart';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/product" component={Product} />
          </Routes>
        </BrowserRouter>
        <Product />
        <Cart />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  const {
    global: { isToggleMenu },
  } = state;

  return {
    isToggleMenu,
  };
};

const AppComponent = connect(mapStateToProps, null)(App);

export default AppComponent;