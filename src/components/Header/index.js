import React from 'react';

import Account from './Account';
import Home from './Home';

function Header() {
  return (
    <header className="bg-zinc-400">
      <div className="flex py-4 px-12 justify-between">
        <Home />
        <Account />
      </div>
    </header>
  );
}

export default Header;
