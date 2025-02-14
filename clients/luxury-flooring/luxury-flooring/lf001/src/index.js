import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('/checkout') && !window.location.href.includes('/success')) {
  pollerLite(['.nav-sections-items', '.minicart-wrapper'], activate);
}
