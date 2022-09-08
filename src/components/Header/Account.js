import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

import messages from './messages';
import DropDown from './DropDown';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="account-wrapper">
        <FontAwesomeIcon icon={faUser} />
        <p className="ml-3">
          <FormattedMessage {...messages.account} />
        </p>
        <DropDown />
      </div>
    );
  }
}

export default Account;
