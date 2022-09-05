import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React from 'react';

import messages from './messages';
import DropDown from './DropDown';

const AccountWrapper = styled.div`
  &:hover .account-navbar {
    display: block;
    cursor: pointer;
  }
`;
function Account() {
  return (
    <AccountWrapper className="flex items-center text-white cursor-pointer">
      <FontAwesomeIcon icon={faBars} />
      <p className="ml-3">
        <FormattedMessage {...messages.home} />
      </p>
      <DropDown />
    </AccountWrapper>
  )
}

export default Account;
