import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.space-page-content'], () => {
  setTimeout(activate, 0);
});
