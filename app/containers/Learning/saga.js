 import {takeLatest, put , call, all } from 'redux-saga/effects';
 import axios from "axios";

// Individual exports for testing
// export default function* learningSaga() {
//   // See example in containers/HomePage/saga.js
// }

const getUsers = () => {
    return axios('https://api.mocki.io/v1/ac5f9163')
      .then(response => (
         {response }      
        ))
      .catch(error => ({ error }))   
  }
  
  function* getUsersSaga() {
    const { response, error } = yield call(getUsers)
    if (response) {
      if(response.data && response.data.results && response.data.results.manufacturers){
        yield put({ type: "API_CALL_SUCCESS", payload: response.data.results.manufacturers })
      }
      else{

      }
    } else {
      console.log('error: ', error.message)
    }
  }
  
  export default function* learningSaga() {
    yield all( [
      takeLatest('API_CALL_REQUEST' , getUsersSaga)
    ]
    )
  }