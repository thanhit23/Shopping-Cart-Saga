import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import A from './A';
import Modal from './Modal';
import Item from '../ListItem';
import messages from './messages';
import DropDownNavBar from './DropdownNavBar';
library.add(fab);

function MenuLeft() {
  return (
    <Modal className="inset-0">
      <div className="absolute inset-y-0 left-0 w-1/5 bg-indigo-500 py-12">
        <div className="flex justify-center">
          <A href="https://www.facebook.com/">
            <FontAwesomeIcon className="text-xl" icon={['fab', 'facebook']} />
          </A>
          <A href="https://www.facebook.com/" className="ml-1.5">
            <FontAwesomeIcon
              className="text-xl"
              icon={['fab', 'google-plus-g']}
            />
          </A>
          <A href="https://www.facebook.com/" className="mx-1.5">
            <FontAwesomeIcon className="text-xl" icon={['fab', 'twitter']} />
          </A>
          <A href="https://www.facebook.com/">
            <FontAwesomeIcon className="text-xl" icon={['fab', 'instagram']} />
          </A>
        </div>
        <Item item={<FormattedMessage {...messages.search} />} />
        <DropDownNavBar />
      </div>
      <div className="absolute inset-y-0 right-0 w-4/5" />
    </Modal>
  );
}

export default MenuLeft;
