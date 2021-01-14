/**
 *
 * Asynchronously loads the component for Task3
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
