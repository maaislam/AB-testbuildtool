import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    () =>
      window.location.pathname.includes('signup-bonus/') ||
      window.location.pathname.includes('sign-up-bonus/'),
    '#td-outer-wrap'
  ],
  activate
);
