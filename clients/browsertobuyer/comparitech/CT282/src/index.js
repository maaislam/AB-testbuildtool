import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    '.entry-content ol',
    '.in_short_container',
    '.in_short_container:not(.fallback) li a[href*="nordvpn"]'
  ],
  activate
);
