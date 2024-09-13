import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    '.shopify-section[id*="custom-product-template"] .ntg-product-main-info',
    '.custom-product-bundle'
  ],
  activate
);
