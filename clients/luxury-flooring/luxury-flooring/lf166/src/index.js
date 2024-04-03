import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.catalog-product-view',
    '.sample-add-form',
    () => document.querySelector('#product-addtocart-button')
  ],
  activate
);
