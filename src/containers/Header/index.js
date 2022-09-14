/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

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
