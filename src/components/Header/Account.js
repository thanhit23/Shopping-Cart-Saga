import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

import messages from './messages';
import DropDown from './DropDown';

const AccountWrapper = styled.div`
  &:hover .account-navbar {
    display: block;
    cursor: pointer;
  }
`;
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onOpenMenu = () => {
    const { abc } = this.props;
    console.log(abc, 'thanh');
  };

  render() {
    return (
      <AccountWrapper
        onClick={this.onOpenMenu}
        className="flex items-center text-white cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} />
        <p className="ml-3">
          <FormattedMessage {...messages.account} />
        </p>
        <DropDown />
      </AccountWrapper>
    );
  }
}

export default Account;
