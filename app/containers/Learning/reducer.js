/*
 *
 * Learning reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION , API_CALL_REQUEST, API_CALL_SUCCESS, FETCH_MANUFACTURER,FETCH_MANUFACTURER_ERROR } from './constants';

export const initialState = {
  users:[],
  fetching:false,
};

/* eslint-disable default-case, no-param-reassign */
const learningReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case API_CALL_REQUEST:
        return { ...state, fetching: true };
      case API_CALL_SUCCESS:
        return { ...state, fetching: false, users: action.payload };
    };});

export default learningReducer;
