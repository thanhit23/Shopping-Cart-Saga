import React, { Component } from 'react';

import Account from './Account';
import Home from './Home';

class Header extends Component {
  onOpenMenu = () => this.props.openMenu();

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <Home openMenu={this.onOpenMenu} />
          <Account />
        </div>
      </header>
    );
  }
}

export default Header;
