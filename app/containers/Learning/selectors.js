import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the learning state domain
 */

const selectLearningDomain = state => state.learning || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Learning
 */

export const selectUserFname = ()=> 
createSelector(
  selectLearningDomain,
  state => state.fname
);

export const makeSelectLearning = () =>
  createSelector(
    selectLearningDomain,
    substate => substate,
  );

export { selectLearningDomain };
