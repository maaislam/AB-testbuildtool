import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    '[data-handle="color"]',
    () => window.location.pathname === '/products/robyn'
  ],
  activate
);
