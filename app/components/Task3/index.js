/**
 *
 * Task3
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Task3() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>This is taskComponent 3</h1>
    </div>
  );
}

Task3.propTypes = {};

export default memo(Task3);
