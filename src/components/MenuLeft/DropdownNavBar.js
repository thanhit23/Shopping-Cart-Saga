import React from 'react';
import { FormattedMessage } from 'react-intl';

import List from './List';
import Item from '../ListItem';
import messages from './messages';

function DropDownNavBar() {
  return (
    <div className="product-page flex flex-col justify-center btn-dropdown-navbar">
      <p className="product-page_title py-4 text-center">
        <FormattedMessage {...messages.title_product} />
      </p>
      <List className="bg-white text-black ease-in duration-300">
        <Item item={<FormattedMessage {...messages.all_item_product} />} />
        <Item item={<FormattedMessage {...messages.detail_product} />} />
      </List>
    </div>
  );
}

export default DropDownNavBar;
