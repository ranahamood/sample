import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the taskcontainer state domain
 */

const selectTaskcontainerDomain = state => state.taskcontainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Taskcontainer
 */

const makeSelectTaskcontainer = () =>
  createSelector(
    selectTaskcontainerDomain,
    substate => substate,
  );

export default makeSelectTaskcontainer;
export { selectTaskcontainerDomain };
