import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.entry-content ol'], () => {
  setTimeout(() => {
    activate();
  }, 2000);
});
