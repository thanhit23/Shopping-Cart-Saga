/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../../utils/injectReducer';
import HeaderComponent from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';
import reducer from './reducer';
import { makeSelectIsToggleMenu } from './selectors';
import { openMenu, closeMenu } from './action';

const key = 'header';

function HeaderContainer({ isToggleMenu, onOpenMenu, onCloseMenu }) {
  useInjectReducer({ key, reducer });
  const menuElement = isToggleMenu ? <MenuLeft closeMenu={onCloseMenu} /> : '';

  return (
    <>
      <HeaderComponent openMenu={onOpenMenu} />
      {menuElement}
    </>
  );
}

HeaderContainer.propTypes = {
  isToggleMenu: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isToggleMenu: makeSelectIsToggleMenu(),
});

export const mapDispatchToProps = dispatch => {
  return {
    onOpenMenu: () => dispatch(openMenu()),
    onCloseMenu: () => dispatch(closeMenu()),
  };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default Header;
=======
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
>>>>>>> 59ffdad330e8d52328de20020de207d05e516ddf
