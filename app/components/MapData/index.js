/**
 *
 * MapData
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MapData(props) {
  console.log('mapData',props.value)
  return (

    <div>
      <FormattedMessage {...messages.header} />
      {props.value && props.value.map((user)=>(
        <p key={user.id}> id: {user.id} Name : {user.name } </p>
       ) )}

    </div>
  );
}

MapData.propTypes = {};

export default memo(MapData);
