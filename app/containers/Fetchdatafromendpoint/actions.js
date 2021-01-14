/*
 *
 * Fetchdatafromendpoint actions
 *
 */

import { DEFAULT_ACTION, CONSTANTLIST } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }
export function apiCallRequest() {
  console.log('in action')
  return {
    type: CONSTANTLIST.REQUEST,
  };
}

export function apiCallSuccess(users) {
  return {
    type: CONSTANTLIST.SUCCESS,
    users,
  };
}