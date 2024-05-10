import activateLeft from './lib/experimentLeft';
import activateRight from './lib/experimentRight';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.catalog-product-view',
    '.fotorama',
    () => window.jQuery !== 'undefined',
    () => window.jQuery('.fotorama').data('fotorama') !== 'undefined'
  ],
  () => {
    activateLeft();
    activateRight();
  }
);
