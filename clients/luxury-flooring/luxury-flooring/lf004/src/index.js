import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('/checkout')) {
  pollerLite(
    [() => document.querySelector('#iosc-summary') || document.querySelector('.cart-summary')],
    activate
  );
}
