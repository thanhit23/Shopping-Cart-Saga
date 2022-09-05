import React from 'react';
import { FormattedMessage } from 'react-intl';

import Item from '../ListItem';
import messages from './messages';
import List from './List';

function DropDown() {
  return (
    <List className="account-navbar hidden absolute w-32 top-full right-0 account-navbar bg-white text-black shadow-lg shadow-indigo-500/40 rounded">
      <Item item={<FormattedMessage {...messages.information} />} />
      <Item item={<FormattedMessage {...messages.logout} />} />
    </List>
  );
}

export default DropDown;
