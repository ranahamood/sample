/**
 *
 * ProgressBar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ProgressBar(props) {
  const { bgcolor, completed } = props;
  const completedd = completed*20
  

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completedd}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        
      </div>
    </div>
  );
}

ProgressBar.propTypes = {};

export default memo(ProgressBar);
