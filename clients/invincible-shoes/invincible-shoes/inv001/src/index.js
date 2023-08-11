import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (!window.location.pathname.includes('search')) {
  pollerLite(['.site-header__search-toggle'], activate);
}
