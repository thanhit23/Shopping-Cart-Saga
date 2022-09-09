import React from 'react';
import { FormattedMessage } from 'react-intl';

import List from './List';
import Item from '../ListItem';
import messages from './messages';

function DropDownNavBar() {
  return (
    <div className="product-page btn-dropdown-navbar">
      <p className="product-page_title">
        <FormattedMessage {...messages.title_product} />
      </p>
      <List className="product-page_list">
        <Item
          class="text-[#111]"
          item={<FormattedMessage {...messages.all_item_product} />}
        />
        <Item
          class="text-[#111]"
          item={<FormattedMessage {...messages.detail_product} />}
        />
      </List>
    </div>
  );
}

export default DropDownNavBar;
