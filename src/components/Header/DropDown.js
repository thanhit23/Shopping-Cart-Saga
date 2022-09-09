import React from 'react';
import { FormattedMessage } from 'react-intl';

import Item from '../ListItem';
import messages from './messages';
import List from './List';

function DropDown() {
  return (
    <List className="account-navbar">
      <Item item={<FormattedMessage {...messages.information} />} />
      <Item item={<FormattedMessage {...messages.logout} />} />
    </List>
  );
}

export default DropDown;
