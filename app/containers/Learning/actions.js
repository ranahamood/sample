/*
 *
 * Learning actions
 *
 */

import { API_CALL_SUCCESS, DEFAULT_ACTION, } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function apiCallRequest() {
  return {
    type: API_CALL_REQUEST,
  };
}

export function apiCallSuccess() {
  return {
    type: API_CALL_SUCCESS,
  };
}