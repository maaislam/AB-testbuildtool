import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/checkout')) {
  pollerLite(['header', '#app'], activate);
}
