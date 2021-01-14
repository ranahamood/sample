/*
 *
 * Fetchdatafromendpoint reducer
 *
 */
import produce from 'immer';
import { CONSTANTLIST } from './constants';

export const initialState = {
  users:[]
};

/* eslint-disable default-case, no-param-reassign */
const fetchdatafromendpointReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // case DEFAULT_ACTION:
      //   break;
      case CONSTANTLIST.REQUEST:
        draft;
        break;
      case CONSTANTLIST.SUCCESS:
        draft.users = action.users;
        break
    }
  });

export default fetchdatafromendpointReducer;

////////////

// produce(state, draft => {
//   switch (action.type) {
//     case CHANGE_USERNAME:
//       // Delete prefixed '@' from the github username
//       draft.username = action.username.replace(/@/gi, '');
//       break;
//   }
// }