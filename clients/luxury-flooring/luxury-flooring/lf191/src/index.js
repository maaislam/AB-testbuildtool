import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '.usps-main.usps-main-new-design + .widget.block',
    () => window.location.pathname === '/'
  ],
  activate
);
