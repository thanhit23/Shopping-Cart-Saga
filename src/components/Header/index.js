import React, { Component } from 'react';

import Account from './Account';
import Home from './Home';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'a',
    };
  }

  a = () => {
    this.state.name = 'thanh';
    console.log('thanh');
  };

  render() {
    return (
      <header className="bg-zinc-400">
        <div className="flex py-4 px-12 justify-between">
          <Home openMenu={this.a} />
          <Account abc={this.abc} />
        </div>
      </header>
    );
  }
}

export default Header;
