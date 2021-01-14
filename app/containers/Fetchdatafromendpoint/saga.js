import { takeLatest, put , call, all } from 'redux-saga/effects';
import { CONSTANTLIST } from './constants';
import request from 'utils/request';

// const getUsers = () => {
//   return  
//     .then(response => (
//        {response }      
//       ))
//     .catch(error => ({ error }))   
// }

function* getUsersSaga() {
  console.log('saga')
  const request_URL = ('https://api.mocki.io/v1/ac5f9163')
  const  response = yield call(request,request_URL)
  console.log('api data', response.results.manufacturers)

    try{
      yield put({ type: CONSTANTLIST.SUCCESS, users: response.results.manufacturers })
  }
    
    catch {
    console.log('error')
  }
 
}


// Individual exports for testing
export default function* fetchdatafromendpointSaga() {
  // See example in containers/HomePage/saga.js
  yield all( [
    takeLatest( CONSTANTLIST.REQUEST , getUsersSaga)
  ]
  )
}




