import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', () => window.location.pathname !== '/'], () => {
  setTimeout(activate, 2000);
});
