import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fetchdatafromendpoint state domain
 */

const selectFetchdatafromendpointDomain = state =>
  state.fetchdatafromendpoint || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Fetchdatafromendpoint
 */

const makeSelectFetchdatafromendpoint = () =>
  createSelector(
    selectFetchdatafromendpointDomain,
    substate => substate,
  );
  

const makeUser = () =>
// console.log('Selector')
  createSelector(
    selectFetchdatafromendpointDomain,
    substate => substate.users,
  );

export default makeSelectFetchdatafromendpoint;
export { selectFetchdatafromendpointDomain , makeUser };
