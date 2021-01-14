/**
 *
 * Asynchronously loads the component for Task5
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
