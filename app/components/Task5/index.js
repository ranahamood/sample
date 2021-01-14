/**
 *
 * Task5
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Task5() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>This is taskComponent 5</h1>
    </div>
  );
}

Task5.propTypes = {};

export default memo(Task5);
