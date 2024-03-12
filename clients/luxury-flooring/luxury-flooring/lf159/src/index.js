import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.catalog-product-view',
    '.fotorama',
    () => window.jQuery !== 'undefined',
    () => window.jQuery('.fotorama').data('fotorama') !== 'undefined'
  ],
  activate
);
