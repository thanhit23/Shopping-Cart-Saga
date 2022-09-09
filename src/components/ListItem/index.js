import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <Wrapper>
      <Item className={props.class}>{props.item}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  class: PropTypes.any,
  item: PropTypes.any,
};

export default ListItem;
