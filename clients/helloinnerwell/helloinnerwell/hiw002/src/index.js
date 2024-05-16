/*eslint-disable no-underscore-dangle */
import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#root', '#__NEXT_DATA__', () => window.__NEXT_DATA__ !== undefined], () => {
  setTimeout(activate, 2000);
});
