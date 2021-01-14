/**
 *
 * Taskcontainer
 *
 */

import React, { memo,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTaskcontainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Task1 from '../../components/Task1/index';
import Task2 from '../../components/Task2/index';
import Task3 from '../../components/Task3/index';
import Task4 from '../../components/Task4/index';
import Task5 from '../../components/Task5/index';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from '../../components/ProgressBar';
// import ProgressBar from '../../components/Task1/index';



export function Taskcontainer() {
  useInjectReducer({ key: 'taskcontainer', reducer });
  useInjectSaga({ key: 'taskcontainer', saga });

  const [count, setCount] = useState(1);
  console.log('count',count)

  const ComponentSelector = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  
  return (
    <div>
      <Helmet>
        <title>Taskcontainer</title>
        
        <meta name="description" content="Description of Taskcontainer" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      
      <ProgressBar bgcolor= {"#00695c"} completed={count}/>

      <h2>Current Page:{count}</h2>
      
      {
        ( count === 1 ? <Task1/> 
          :count === 2 ? <Task2/>
          :count === 3 ? <Task3/>
          :count === 4 ? <Task4/>
          :<Task5/>
      )
      }
      <Button onClick={() => setCount(count - 1)}>Previous</Button>
      <Button onClick={ComponentSelector}>next</Button>
    </div>
  );
}

Taskcontainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  taskcontainer: makeSelectTaskcontainer(),
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
)(Taskcontainer);
