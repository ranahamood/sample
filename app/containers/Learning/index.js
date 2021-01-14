/**
 *
 * Learning
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import H1 from 'components/H1';
import Button from 'components/Button'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLearning from './selectors';
import selectUserFname from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Learning() {

  const firstname = useSelector(selectUserFname)
  console.log('fname',firstname)

  const dispatch = useDispatch();
  const fetchUser = () => dispatch({ type: "API_CALL_REQUEST" });

  useInjectReducer({ key: 'learning', reducer });
  useInjectSaga({ key: 'learning', saga });

  return (
    <div>
      <Helmet>
        <title>Learning</title>
        <meta name="description" content="Description of Learning" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Button onClick={fetchUser}>Request User</Button>
      {users && users.map((user)=>(
        <H1 key={user.id}> users : {user.name }</H1>
       ) )}
    </div>
  );
}

Learning.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  learning: makeSelectLearning(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Learning);
