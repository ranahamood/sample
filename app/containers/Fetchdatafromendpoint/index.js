/**
 *
 * Fetchdatafromendpoint
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector  } from 'reselect';
import { compose } from 'redux';
import { useDispatch, useSelector } from "react-redux";
import {CONSTANTLIST} from "./constants"
import {apiCallRequest} from "./actions"
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeUser} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MapData from '../../components/MapData/index'


export function Fetchdatafromendpoint() {

  const firstname = useSelector(makeUser())
  console.log('fname',firstname)

  const dispatch = useDispatch();
  // const fetchUser = () => dispatch();
  // console.log(fetchUser,"user")
useEffect(() => {
  // dispatch(apiCallRequest())
  setTimeout(function(){ dispatch(apiCallRequest()); }, 0);
}, [])

  useInjectReducer({ key: 'fetchdatafromendpoint', reducer });
  useInjectSaga({ key: 'fetchdatafromendpoint', saga });

  return (
    <div>
      <Helmet>
        <title>Fetchdatafromendpoint </title>
        <meta
          name="description"
          content="Description of Fetchdatafromendpoint"
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <MapData value= {firstname} />
    </div>
  );
}

Fetchdatafromendpoint.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // users: propTypes.array,
};

const mapStateToProps = createStructuredSelector({
  // fetchdatafromendpoint: makeSelectFetchdatafromendpoint()
  // users: makeUser(),
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
)(Fetchdatafromendpoint);
