import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Header from '../../components/Header';

function HomePage() {
  return (
    <Header />
  )
}

const mapStateToProps = createStructuredSelector({
  navbar: false,
});

function mapDispatchToProps(dispatch) {
  return {

  };
}

const HomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomeComponent;
