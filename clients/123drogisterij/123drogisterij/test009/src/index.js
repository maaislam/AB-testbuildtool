import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.catalog-product-view',
    () => document.querySelectorAll('body .custom-child-upsel-checkbox').length > 1
  ],
  activate
);
