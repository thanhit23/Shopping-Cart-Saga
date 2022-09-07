import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import styled from 'styled-components';

import messages from './messages';

const HomeWrapper = styled.div`
  display: flex;
`;

class Home extends Component {
  onOpenMenu = () => this.props.openMenu;

  render() {
    return (
      <HomeWrapper
        className="flex items-center text-white cursor-pointer"
        onClick={this.onOpenMenu}
      >
        <FontAwesomeIcon icon={faBars} />
        <p className="ml-3">
          <FormattedMessage {...messages.home} />
        </p>
      </HomeWrapper>
    );
  }
}

export default Home;
