import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

import messages from './messages';

class Home extends Component {
  onOpenMenu = () => this.props.openMenu();

  render() {
    return (
      <div
        className="flex items-center text-white cursor-pointer"
        onClick={this.onOpenMenu}
        onKeyDown={this.onOpenMenu}
        tabIndex={0}
        role="button"
      >
        <FontAwesomeIcon icon={faBars} />
        <p className="ml-3">
          <FormattedMessage {...messages.home} />
        </p>
      </div>
    );
  }
}

export default Home;
