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
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Header';
import Product from '../Product';
import NotFound from '../NotFoundPage';
import Cart from '../Cart';
import Login from '../LoginPage';

const AppWrapper = styled.div`
  position: relative;
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
        <ToastContainer />
        <Header />
        <Routes>
          <Route index element={<Product />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
