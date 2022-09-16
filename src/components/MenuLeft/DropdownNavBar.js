import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import List from './List';
import Item from '../ListItem';
import messages from './messages';

function DropDownNavBar() {
  return (
    <>
      <div className="product-page btn-dropdown-navbar">
        <NavLink
          style={({ isActive }) => ({ color: isActive && 'red' })}
          to="/product"
          className="product-page_link"
        >
          <p className="product-page_title">
            <FormattedMessage {...messages.title_product} />
          </p>
        </NavLink>
        <List className="product-page_list hidden">
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
      <div className="product-page btn-dropdown-navbar">
        <NavLink
          style={({ isActive }) => ({ color: isActive && 'red' })}
          className="product-page_link"
          to="/cart"
        >
          <p className="product-page_title">
            <FormattedMessage {...messages.title_cart} />
          </p>
        </NavLink>
      </div>
    </>
  );
}

export default DropDownNavBar;
