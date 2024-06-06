import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '.product-medias',
    '.product-info-wrapper .product-page--pricing',
    () => document.querySelectorAll('.product-info-wrapper .compare-at-price').length > 0
  ],
  activate
);
