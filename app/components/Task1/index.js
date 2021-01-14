/**
 *
 * Task1
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Task1() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>This is taskComponent 1</h1>
      

    </div>
  );
}

Task1.propTypes = {};

export default memo(Task1);
