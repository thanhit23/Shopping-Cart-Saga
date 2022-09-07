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

import Header from '../../components/Header';
// import MenuLeft from '../../components/MenuLeft';
import Product from '../Product/index';
import * as actions from './action';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onOpenMenu = () => {
    console.log('thanh');
    const { openMenuLeft } = this.props;
    openMenuLeft();
  };

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
        <Header openMenu={this.onOpenMenu} />
        <BrowserRouter>
          <Routes>
            <Route exact path="/product" component={Product} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

const mapStateToProps = ({ isDisMenu }) => {
  return {
    isDisMenu,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openMenuLeft: () => dispatch(actions.openMenu()),
  };
};
const AppComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppComponent;
