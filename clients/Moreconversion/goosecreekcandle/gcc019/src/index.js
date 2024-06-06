import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    '.mobile-info-container .product-page--pricing',
    '.product-info-wrapper .product-page--pricing'
  ],
  activate
);
