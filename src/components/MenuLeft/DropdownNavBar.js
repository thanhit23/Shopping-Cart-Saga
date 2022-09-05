import React from 'react';
import { FormattedMessage } from 'react-intl';

import List from '../Header/List';
import Item from '../ListItem';
import messages from './messages';

function DropDownNavBar() {
  return (
    <>
      <div className="product-page flex justify-center py-4 btn-dropdown-navbar">
        <p>
          <FormattedMessage {...messages.title_product} />
        </p>
      </div>
      <List className="bg-white text-black shadow-lg shadow-indigo-500/40 rounded">
        <Item item={<FormattedMessage {...messages.all_item_product} />} />
        <Item item={<FormattedMessage {...messages.detail_product} />} />
      </List>
    </>
  );
}

export default DropDownNavBar;
