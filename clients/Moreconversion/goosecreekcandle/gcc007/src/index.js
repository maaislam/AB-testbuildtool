import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const isPdp = window.location.pathname.includes('/products');

if (isPdp) {
  pollerLite(['.oke-w-reviews-list-item'], () => {
    setTimeout(() => {
      activate();
    }, 2000);
  });
}
