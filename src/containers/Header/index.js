/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';
import * as actions from './action';

class Header extends Component {
  onOpenMenu = () => this.props.openMenuLeft();

  onCloseMenu = () => this.props.closeMenuLeft();

  render() {
    const { isToggleMenu } = this.props;
    const menuElement = isToggleMenu ? (
      <MenuLeft closeMenu={this.onCloseMenu} />
    ) : (
      ''
    );
    return (
      <>
        <HeaderComponent openMenu={this.onOpenMenu} />
        {menuElement}
      </>
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

const mapDispatchToProps = dispatch => {
  return {
    openMenuLeft: () => dispatch(actions.openMenu()),
    closeMenuLeft: () => dispatch(actions.closeMenu()),
  };
};

const AppComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

export default AppComponent;
