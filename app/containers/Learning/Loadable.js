/**
 *
 * Asynchronously loads the component for Learning
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
