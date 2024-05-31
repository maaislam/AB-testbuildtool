import activateLoader from './lib/activateLoader';
import activateLeft from './lib/experimentLeft';
import activateRight from './lib/experimentRight';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID, VARIATION } = shared;

pollerLite(['.gallery-placeholder'], () => {
  activateLoader(ID);
});

pollerLite(
  [
    '.fp-calculator',
    'body.catalog-product-view',
    '.fotorama',
    () => window.jQuery !== 'undefined',
    () => window.jQuery('.fotorama').data('fotorama') !== 'undefined'
  ],
  () => {
    //remove loader if exists
    if (document.querySelector(`.${ID}__loaderWrapper`)) {
      document.querySelector(`.${ID}__loaderWrapper`).remove();
    }

    if (VARIATION !== '1' && VARIATION !== '2' && VARIATION !== '3') {
      activateLeft();
    }

    activateRight();
  }
);
