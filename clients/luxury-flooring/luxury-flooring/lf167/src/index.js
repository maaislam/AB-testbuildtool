import activateLeft from './lib/experimentLeft';
import activateRight from './lib/experimentRight';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { VARIATION } = shared;

pollerLite(
  [
    '.fp-calculator',
    'body.catalog-product-view',
    '.fotorama',
    () => window.jQuery !== 'undefined',
    () => window.jQuery('.fotorama').data('fotorama') !== 'undefined'
  ],
  () => {
    if (VARIATION !== '1' && VARIATION !== '2' && VARIATION !== '3') {
      activateLeft();
    }

    activateRight();
  }
);
