import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '[data-toplist-item]'], () => {
  setTimeout(activate, 1000);
});
