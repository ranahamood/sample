/**
 *
 * Asynchronously loads the component for Task2
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
