/**
 *
 * Task4
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Task4() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>This is taskComponent 4</h1>
    </div>
  );
}

Task4.propTypes = {};

export default memo(Task4);
