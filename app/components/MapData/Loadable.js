/**
 *
 * Asynchronously loads the component for MapData
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
