import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const isPdp = window.location.pathname.includes('/products/');

if (isPdp) {
  pollerLite(['body', '.baby__product-price', '#ProductPrice'], activate);
}
