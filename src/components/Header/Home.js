import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import styled from 'styled-components';

import messages from './messages';

const HomeWrapper = styled.div`
  display: flex;
`

function Home() {
  return (
    <HomeWrapper className="flex items-center text-white cursor-pointer">
      <FontAwesomeIcon icon={faBars} />
      <p className="ml-3">
        <FormattedMessage {...messages.home} />
      </p>
    </HomeWrapper>
  )
}

export default Home;
