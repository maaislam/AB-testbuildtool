import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('/checkou') && !window.location.href.includes('/success')) {
  pollerLite(['.nav-sections-items', '.minicart-wrapper'], activate);
}
