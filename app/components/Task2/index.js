/**
 *
 * Task2
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Task2() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>This is taskComponent 2</h1>
    </div>
  );
}

Task2.propTypes = {};

export default memo(Task2);
