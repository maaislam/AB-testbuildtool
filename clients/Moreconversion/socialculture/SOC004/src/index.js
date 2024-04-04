import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '.product-header1_layout .product-gallery-container #productGallery',
    '.product-header1_layout form[action="/cart/add"]',
    '.hydrated'
  ],
  activate
);

var test = 1;
